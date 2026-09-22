(() => {
  "use strict";

  const DATA = window.FOUNDATIONS_ACTIVE_DATA || window.FOUNDATIONS_DATA;\n  const T = window.FOUNDATIONS_TRANSLATE || ((text) => text);
  const STORE_KEY = "sustainable-aviation-foundations-v3";
  const app = document.querySelector("#app");
  const toast = document.querySelector("#toast");
  const modulesById = Object.fromEntries(DATA.modules.map((module) => [module.id, module]));

  const emptyProgress = () => ({
    lessonVisits: {},
    visualVisits: [],
    caseVisits: [],
    labAnswers: {},
    labPassed: [],
    assessmentAnswers: {},
    assessmentPassed: [],
    completed: [],
    notes: {},
    finalAnswers: {},
    finalPassed: false
  });

  function loadProgress() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      return raw && typeof raw === "object" ? { ...emptyProgress(), ...raw } : emptyProgress();
    } catch (_error) {
      return emptyProgress();
    }
  }

  let progress = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    } catch (_error) {
      showToast(T("Progress could not be saved in this browser."));
    }
    updateHeaderProgress();
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function csvEsc(value) {
    const text = String(value ?? "");
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  }

  function showToast(message) {
    toast.textContent = T(message);
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 3000);
  }

  function moduleIndex(moduleId) {
    return DATA.modules.findIndex((module) => module.id === moduleId);
  }

  function visitedLessons(module) {
    return new Set(progress.lessonVisits[module.id] || []);
  }

  function isModuleComplete(moduleId) {
    return progress.completed.includes(moduleId);
  }

  function syncModuleCompletion(module) {
    const lessonReady = visitedLessons(module).size === module.lessons.length;
    const supportingReady = progress.visualVisits.includes(module.id) && progress.caseVisits.includes(module.id);
    const appliedReady = progress.labPassed.includes(module.id) && progress.assessmentPassed.includes(module.id);
    const ready = lessonReady && supportingReady && appliedReady;
    const has = progress.completed.includes(module.id);
    if (ready && !has) progress.completed.push(module.id);
    if (!ready && has) progress.completed = progress.completed.filter((id) => id !== module.id);
    return ready;
  }

  function moduleTaskState(module) {
    const lessons = visitedLessons(module).size;
    const visuals = progress.visualVisits.includes(module.id) ? 1 : 0;
    const caseFile = progress.caseVisits.includes(module.id) ? 1 : 0;
    const lab = progress.labPassed.includes(module.id) ? 1 : 0;
    const assessment = progress.assessmentPassed.includes(module.id) ? 1 : 0;
    const done = lessons + visuals + caseFile + lab + assessment;
    const total = module.lessons.length + 4;
    return { lessons, visuals, caseFile, lab, assessment, done, total, percent: Math.round((done / total) * 100) };
  }

  function coursePercent() {
    const done = DATA.modules.reduce((sum, module) => sum + moduleTaskState(module).done, 0);
    const total = DATA.modules.reduce((sum, module) => sum + moduleTaskState(module).total, 0);
    return Math.round((done / total) * 100);
  }

  function updateHeaderProgress() {
    const percent = coursePercent();
    const value = document.querySelector("#header-progress-value");
    const label = document.querySelector("#header-progress-label");
    const ring = document.querySelector(".progress-ring");
    if (value) value.textContent = percent;
    if (label) label.textContent = T(`${progress.completed.length} of 6`);
    if (ring) ring.style.background = `conic-gradient(var(--teal) ${percent}%, rgba(255,255,255,.15) ${percent}% 100%)`;
  }

  function setPage(title, nav = "course") {
    document.title = title ? `${T(title)} · ${DATA.meta.title}` : DATA.meta.title;
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const active = link.dataset.nav === nav;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    updateHeaderProgress();
    window.FOUNDATIONS_LOCALIZE?.(document);
  }

  function firstNextRoute() {
    for (const module of DATA.modules) {
      const visited = visitedLessons(module);
      const lessonIdx = module.lessons.findIndex((lesson) => !visited.has(lesson.id));
      if (lessonIdx >= 0) return `#lesson/${module.id}/${lessonIdx}`;
      if (!progress.visualVisits.includes(module.id)) return `#visuals/${module.id}`;
      if (!progress.caseVisits.includes(module.id)) return `#case/${module.id}`;
      if (!progress.labPassed.includes(module.id)) return `#lab/${module.id}`;
      if (!progress.assessmentPassed.includes(module.id)) return `#assessment/${module.id}`;
    }
    return "#final-check";
  }

  function moduleCard(module) {
    const task = moduleTaskState(module);
    return `<a class="module-card" href="#module/${esc(module.id)}" style="--module:${esc(module.colour)}">
      <div class="module-card-media"><img src="${esc(module.image)}" alt="${esc(module.alt)}"><span>${esc(module.number)}</span></div>
      <div class="module-card-body">
        <div class="card-kicker">${isModuleComplete(module.id) ? "Complete" : `${task.percent}% complete`} · ${esc(module.duration)}</div>
        <h3>${esc(module.title)}</h3><p>${esc(module.strapline)}</p>
        <div class="thin-progress" aria-label="${task.percent}% complete"><span style="width:${task.percent}%"></span></div>
        <div class="card-link">${task.done ? "Continue module" : "Start module"} <span aria-hidden="true">→</span></div>
      </div>
    </a>`;
  }

  function renderHome() {
    const arch = DATA.courseArchitecture;
    const percent = coursePercent();
    app.innerHTML = `
      <section class="master-hero">
        <img class="master-hero-media" src="assets/hero-a400m-eurofighter.jpg" alt="A generated learning visual showing an A400M and Eurofighter in a Defence and Space hangar with an engineering team.">
        <div class="master-hero-shade"></div>
        <div class="shell master-hero-inner">
          <div class="hero-copy">
            <div class="eyebrow light">Airbus Defence and Space · in-depth learning course</div>
            <h1>Understand sustainability deeply enough to improve a real decision.</h1>
            <p>Build evidence, expose trade-offs and connect environmental performance with engineering, operations, people, digital systems, the value chain, climate and nature.</p>
            <div class="button-row"><a class="btn btn-primary" href="${firstNextRoute()}">${percent ? "Resume the course" : "Start the course"} →</a><a class="btn btn-ghost" href="#course">Explore the curriculum</a></div>
            <div class="hero-chips"><span>7–9 hours</span><span>${arch.lessons} lessons</span><span>${arch.interactiveExplainers} interactive explainers</span><span>${arch.moduleQuestions + arch.finalQuestions} assessed questions</span></div>
          </div>
          <div class="hero-progress-card">
            <span class="hero-progress-number">${percent}%</span><strong>Your learning progress</strong>
            <div class="thin-progress light" aria-label="${percent}% complete"><span style="width:${percent}%"></span></div>
            <p>${progress.completed.length} of 6 modules complete. Progress, answers and field notes stay in this browser.</p>
          </div>
        </div>
      </section>
      <section class="section section-white"><div class="shell">
        <div class="section-head"><div><div class="eyebrow">Complete curriculum</div><h2>Six modules, built as real learning journeys.</h2></div><p>Each module contains seven lessons, two interactive visual models, a progressive aerospace case, an applied lab, an assessment and a downloadable tool.</p></div>
        <div class="module-grid">${DATA.modules.map(moduleCard).join("")}</div>
      </div></section>
      <section class="section section-ink"><div class="shell architecture-grid">
        <div><div class="eyebrow light">Course architecture</div><h2>Dense theory, broken into usable pieces.</h2><p>The course contains more than 35,000 words of structured learning content. It is designed for spaced study, not a one-hour scroll.</p></div>
        <div class="metric-grid">
          <div><strong>${arch.lessons}</strong><span>theory lessons</span></div><div><strong>${arch.interactiveExplainers}</strong><span>visual explainers</span></div>
          <div><strong>${arch.caseFiles}</strong><span>progressive cases</span></div><div><strong>${arch.appliedLabs}</strong><span>applied labs</span></div>
          <div><strong>${arch.downloadableTools}</strong><span>work templates</span></div><div><strong>${arch.finalQuestions}</strong><span>final questions</span></div>
        </div>
      </div></section>
      <section class="section section-soft"><div class="shell learning-guide">
        <div class="section-head compact"><div><div class="eyebrow amber">Study guide</div><h2>${esc(DATA.learningGuide.title)}</h2></div></div>
        <div class="prose-columns">${DATA.learningGuide.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("")}</div>
      </div></section>
      <section class="section section-white"><div class="shell notice-panel"><div><div class="eyebrow">Educational boundary</div><h2>Rigorous learning without pretending to be policy.</h2></div><p>${esc(DATA.meta.notice)}</p></div></section>`;
    setPage("", "home");
  }

  function renderCourse() {
    const percent = coursePercent();
    app.innerHTML = `
      <section class="page-hero"><div class="shell page-hero-grid"><div><div class="eyebrow">Curriculum</div><h1>A 7–9 hour learning journey.</h1><p>Work through the modules in sequence for the clearest progression, or reopen any completed item for review.</p></div><div class="course-progress-box"><strong>${percent}%</strong><span>overall learning progress</span><div class="thin-progress"><span style="width:${percent}%"></span></div><a class="btn btn-dark" href="${firstNextRoute()}">Continue →</a></div></div></section>
      <section class="section section-white"><div class="shell journey-stack">
        ${DATA.modules.map((module, index) => {
          const task = moduleTaskState(module);
          return `<article class="journey-row" style="--module:${esc(module.colour)}">
            <div class="journey-number">${String(index + 1).padStart(2, "0")}</div>
            <div class="journey-image"><img src="${esc(module.image)}" alt="${esc(module.alt)}"></div>
            <div class="journey-copy"><div class="card-kicker">${esc(module.duration)} · ${module.lessons.length} lessons · ${task.percent}% complete</div><h2>${esc(module.title)}</h2><p>${esc(module.promise)}</p>
              <div class="journey-pills"><span>2 visual explainers</span><span>1 case file</span><span>1 applied lab</span><span>8-question assessment</span><span>Downloadable tool</span></div>
              <div class="thin-progress"><span style="width:${task.percent}%"></span></div><a class="btn btn-outline" href="#module/${esc(module.id)}">Open module →</a>
            </div>
          </article>`;
        }).join("")}
      </div></section>
      <section class="section section-soft"><div class="shell final-banner"><div><div class="eyebrow">Course synthesis</div><h2>Capstone + 20-question final assessment.</h2><p>Complete all modules, build one defensible decision and test transfer across the whole curriculum.</p></div><div class="button-row"><a class="btn btn-outline" href="#capstone">Open capstone</a><a class="btn btn-dark" href="#final-check">Final assessment →</a></div></div></section>`;
    setPage("Course", "course");
  }

  function moduleChecklist(module) {
    const visited = visitedLessons(module);
    return `<div class="module-checklist">
      ${module.lessons.map((lesson, index) => `<a href="#lesson/${esc(module.id)}/${index}" class="check-item ${visited.has(lesson.id) ? "done" : ""}"><span>${visited.has(lesson.id) ? "✓" : String(index + 1).padStart(2, "0")}</span><div><strong>${esc(lesson.title)}</strong><small>${esc(lesson.duration)}</small></div></a>`).join("")}
      <a href="#visuals/${esc(module.id)}" class="check-item ${progress.visualVisits.includes(module.id) ? "done" : ""}"><span>${progress.visualVisits.includes(module.id) ? "✓" : "V"}</span><div><strong>Interactive visual explainers</strong><small>2 guided models</small></div></a>
      <a href="#case/${esc(module.id)}" class="check-item ${progress.caseVisits.includes(module.id) ? "done" : ""}"><span>${progress.caseVisits.includes(module.id) ? "✓" : "C"}</span><div><strong>Progressive case file</strong><small>Applied aerospace analysis</small></div></a>
      <a href="#lab/${esc(module.id)}" class="check-item ${progress.labPassed.includes(module.id) ? "done" : ""}"><span>${progress.labPassed.includes(module.id) ? "✓" : "L"}</span><div><strong>Applied laboratory</strong><small>4 decisions · all correct</small></div></a>
      <a href="#assessment/${esc(module.id)}" class="check-item ${progress.assessmentPassed.includes(module.id) ? "done" : ""}"><span>${progress.assessmentPassed.includes(module.id) ? "✓" : "A"}</span><div><strong>Module assessment</strong><small>8 questions · 75% pass</small></div></a>
    </div>`;
  }

  function renderModule(module) {
    const task = moduleTaskState(module);
    const startIdx = module.lessons.findIndex((lesson) => !visitedLessons(module).has(lesson.id));
    app.innerHTML = `
      <section class="module-banner" style="--module:${esc(module.colour)}"><img src="${esc(module.image)}" alt="${esc(module.alt)}"><div class="module-banner-shade"></div><div class="shell module-banner-inner"><div class="crumbs"><a href="#course">Course</a><span>/</span><span>${esc(module.number)}</span></div><div class="module-tag">${esc(module.number)} · ${esc(module.duration)}</div><h1>${esc(module.title)}</h1><p>${esc(module.promise)}</p><div class="module-progress-line"><div class="thin-progress light"><span style="width:${task.percent}%"></span></div><strong>${task.percent}% complete</strong></div></div></section>
      <section class="section section-white"><div class="shell module-overview-grid">
        <div class="module-overview-main">
          <article class="briefing-card"><div class="eyebrow">Module briefing</div><h2>${esc(module.briefing.title)}</h2>${module.briefing.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("")}</article>
          <article class="objective-panel"><div><div class="eyebrow">Learning objectives</div><h2>By the end of this module, you can:</h2></div><div class="objective-list large">${module.objectives.map((objective) => `<span>${esc(objective)}</span>`).join("")}</div></article>
          <article class="misconception-panel"><div class="eyebrow amber">Common traps</div><h2>Three ideas to challenge before you begin.</h2><div class="myth-grid">${module.misconceptions.map((item) => `<div><strong>“${esc(item.myth)}”</strong><p>${esc(item.correction)}</p></div>`).join("")}</div></article>
          <article class="tool-panel"><div><div class="eyebrow light">Module work tool</div><h2>${esc(module.tool.title)}</h2><p>${esc(module.tool.description)}</p></div><button class="btn btn-light" type="button" data-action="download-tool" data-module="${esc(module.id)}">Download CSV template ↓</button></article>
        </div>
        <aside class="module-roadmap"><div class="roadmap-sticky"><div class="roadmap-head"><span>${task.done}/${task.total}</span><div><strong>Module roadmap</strong><small>Complete every item</small></div></div>${moduleChecklist(module)}<a class="btn btn-dark full" href="#lesson/${esc(module.id)}/${startIdx >= 0 ? startIdx : 0}">${task.done ? "Continue module" : "Start lesson 1"} →</a></div></aside>
      </div></section>`;
    setPage(module.title, "course");
  }

  function lessonNav(module, index) {
    const prev = index > 0 ? `#lesson/${module.id}/${index - 1}` : `#module/${module.id}`;
    const next = index < module.lessons.length - 1 ? `#lesson/${module.id}/${index + 1}` : `#visuals/${module.id}`;
    return `<div class="lesson-pagination"><a class="btn btn-outline" href="${prev}">← ${index > 0 ? "Previous lesson" : "Module overview"}</a><a class="btn btn-dark" href="${next}">${index < module.lessons.length - 1 ? "Next lesson" : "Open visual explainers"} →</a></div>`;
  }

  function renderLesson(module, index) {
    const lesson = module.lessons[index];
    if (!lesson) return renderNotFound();
    const visits = new Set(progress.lessonVisits[module.id] || []);
    visits.add(lesson.id);
    progress.lessonVisits[module.id] = [...visits];
    syncModuleCompletion(module);
    saveProgress();
    const deep = lesson.deepDive || { title: "Go deeper", paragraphs: [] };
    const figureImage = index === 1 ? module.supportImage : module.secondaryImage;
    const figureAlt = index === 1 ? module.supportAlt : module.secondaryAlt;
    app.innerHTML = `
      <section class="lesson-header" style="--module:${esc(module.colour)}"><div class="shell"><div class="crumbs"><a href="#course">Course</a><span>/</span><a href="#module/${esc(module.id)}">${esc(module.number)}</a><span>/</span><span>Lesson ${index + 1}</span></div><div class="lesson-progress-label">Lesson ${index + 1} of ${module.lessons.length} · ${esc(lesson.duration)}</div><h1>${esc(lesson.title)}</h1><div class="lesson-track"><span style="width:${Math.round(((index + 1) / module.lessons.length) * 100)}%"></span></div></div></section>
      <section class="lesson-layout shell">
        <aside class="lesson-side"><div class="lesson-side-sticky"><div class="eyebrow">In this module</div>${module.lessons.map((item, idx) => `<a href="#lesson/${esc(module.id)}/${idx}" class="${idx === index ? "active" : ""} ${visitedLessons(module).has(item.id) ? "visited" : ""}"><span>${visitedLessons(module).has(item.id) ? "✓" : idx + 1}</span>${esc(item.title)}</a>`).join("")}<a href="#module/${esc(module.id)}" class="back-link">← Module roadmap</a></div></aside>
        <article class="lesson-content">
          <div class="lesson-opening"><div class="lesson-label">${esc(lesson.label)}</div><h2>${esc(lesson.title)}</h2>${lesson.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("")}</div>
          ${index === 1 || index === 5 ? `<figure class="lesson-figure"><img src="${esc(figureImage)}" alt="${esc(figureAlt)}"><figcaption>Visual context · Technical, operational and environmental evidence must be reviewed together.</figcaption></figure>` : ""}
          <section class="deep-dive"><div class="eyebrow">Deep dive</div><h2>${esc(deep.title)}</h2>${(deep.paragraphs || []).map((text) => `<p>${esc(text)}</p>`).join("")}</section>
          <section class="key-points"><div class="eyebrow">Decision essentials</div><div class="point-grid">${lesson.points.map((point) => `<div><span>✓</span><p>${esc(point)}</p></div>`).join("")}</div></section>
          <section class="worked-example"><div class="eyebrow light">Worked example</div><h2>Translate the concept into an aerospace decision.</h2><p>${esc(lesson.workedExample || "Use the concept on a non-confidential decision from your area and identify what evidence would change the preferred option.")}</p></section>
          <section class="callout-card"><strong>${esc(lesson.callout.label)}</strong><p>${esc(lesson.callout.text)}</p></section>
          <section class="field-note"><div><div class="eyebrow">Field note</div><h2>Make the learning usable.</h2><p>${esc(module.reflection)}</p><small>Do not enter confidential, personal, supplier-sensitive or controlled programme information.</small></div><textarea data-note="${esc(lesson.id)}" placeholder="Write a generic, non-confidential note…">${esc(progress.notes[lesson.id] || "")}</textarea></section>
          ${lessonNav(module, index)}
        </article>
      </section>`;
    setPage(lesson.title, "course");
  }

  function renderVisuals(module) {
    if (!progress.visualVisits.includes(module.id)) progress.visualVisits.push(module.id);
    syncModuleCompletion(module); saveProgress();
    app.innerHTML = `<section class="page-hero compact"><div class="shell"><div class="crumbs"><a href="#module/${esc(module.id)}">${esc(module.number)} overview</a><span>/</span><span>Visual explainers</span></div><div class="eyebrow">Interactive visual lesson</div><h1>See the system, step by step.</h1><p>Use the controls inside each model to expose the reasoning behind the sequence.</p></div></section>
      <section class="section section-white"><div class="shell visual-stack">${module.explainers.map((visual, vIndex) => `<article class="interactive-visual" style="--module:${esc(module.colour)}" data-visual="${vIndex}"><div class="visual-copy"><div class="eyebrow">${esc(visual.kicker)}</div><h2>${esc(visual.title)}</h2><p>${esc(visual.intro)}</p><div class="visual-tabs">${visual.items.map((item, idx) => `<button type="button" data-action="visual-step" data-module="${esc(module.id)}" data-visual="${vIndex}" data-step="${idx}" class="${idx === 0 ? "active" : ""}"><span>${esc(item.code)}</span>${esc(item.title)}</button>`).join("")}</div></div><div class="visual-stage"><div class="visual-orbit">${visual.items.map((item, idx) => `<span style="--i:${idx};--n:${visual.items.length}" class="${idx === 0 ? "active" : ""}">${esc(item.code)}</span>`).join("")}</div><div class="visual-detail"><span>${esc(visual.items[0].code)}</span><h3>${esc(visual.items[0].title)}</h3><p>${esc(visual.items[0].text)}</p><small>${esc(visual.items[0].detail)}</small></div></div></article>`).join("")}
        <div class="lesson-pagination"><a class="btn btn-outline" href="#module/${esc(module.id)}">← Module overview</a><a class="btn btn-dark" href="#case/${esc(module.id)}">Open case file →</a></div>
      </div></section>`;
    setPage(`${module.number} visual explainers`, "course");
  }

  function renderCase(module) {
    if (!progress.caseVisits.includes(module.id)) progress.caseVisits.push(module.id);
    syncModuleCompletion(module); saveProgress();
    const item = module.caseFile;
    app.innerHTML = `<section class="case-hero" style="--module:${esc(module.colour)}"><img src="${esc(module.supportImage)}" alt="${esc(module.supportAlt)}"><div class="case-hero-shade"></div><div class="shell"><div class="crumbs"><a href="#module/${esc(module.id)}">${esc(module.number)} overview</a><span>/</span><span>Case file</span></div><div class="eyebrow light">${esc(item.subtitle)}</div><h1>${esc(item.title)}</h1><p>Reveal how the decision changes as new evidence enters the system.</p></div></section>
      <section class="section section-white"><div class="shell case-timeline">${item.stages.map((stage, idx) => `<article><div class="case-stage-number">${String(idx + 1).padStart(2, "0")}</div><div class="case-stage-copy"><h2>${esc(stage.title)}</h2><p>${esc(stage.text)}</p><div class="evidence-chips">${stage.evidence.map((evidence) => `<span>${esc(evidence)}</span>`).join("")}</div></div></article>`).join("")}
        <div class="case-question"><div class="eyebrow light">Decision prompt</div><h2>${esc(item.prompt)}</h2><textarea data-note="case-${esc(module.id)}" placeholder="Write a non-confidential response…">${esc(progress.notes[`case-${module.id}`] || "")}</textarea></div>
        <div class="lesson-pagination"><a class="btn btn-outline" href="#visuals/${esc(module.id)}">← Visual explainers</a><a class="btn btn-dark" href="#lab/${esc(module.id)}">Open applied lab →</a></div>
      </div></section>`;
    setPage(`${module.number} case file`, "course");
  }

  function questionOptions(question, selected, attrs) {
    const answered = Number.isInteger(selected);
    return `<div class="answer-list">${question.options.map((option, idx) => `<button type="button" ${attrs} data-index="${idx}" class="answer-option ${selected === idx ? (idx === question.correct ? "correct" : "incorrect") : ""}"><span>${String.fromCharCode(65 + idx)}</span><p>${esc(option)}</p></button>`).join("")}</div>${answered ? `<div class="answer-feedback ${selected === question.correct ? "correct" : "incorrect"}"><strong>${selected === question.correct ? "Correct." : "Not yet."}</strong> ${esc(question.explanation)}</div>` : ""}`;
  }

  function renderLab(module) {
    const answers = progress.labAnswers[module.id] || {};
    const correct = module.lab.questions.filter((question, idx) => answers[idx] === question.correct).length;
    const passed = correct === module.lab.questions.length;
    if (passed && !progress.labPassed.includes(module.id)) progress.labPassed.push(module.id);
    if (!passed) progress.labPassed = progress.labPassed.filter((id) => id !== module.id);
    syncModuleCompletion(module); saveProgress();
    app.innerHTML = `<section class="page-hero compact"><div class="shell"><div class="crumbs"><a href="#module/${esc(module.id)}">${esc(module.number)} overview</a><span>/</span><span>Applied lab</span></div><div class="eyebrow">Applied laboratory</div><h1>${esc(module.lab.title)}</h1><p>${esc(module.lab.intro)}</p><div class="score-chip ${passed ? "passed" : ""}">${correct}/${module.lab.questions.length} correct</div></div></section>
      <section class="section section-soft"><div class="shell question-stack">${module.lab.questions.map((question, idx) => `<article class="question-card"><div class="question-count">Decision ${idx + 1} of ${module.lab.questions.length}</div><h2>${esc(question.question)}</h2>${questionOptions(question, answers[idx], `data-action="lab-answer" data-module="${esc(module.id)}" data-question="${idx}"`)}</article>`).join("")}
        ${passed ? `<div class="pass-banner"><strong>Laboratory complete.</strong><p>You have made all four decisions using the module logic.</p></div>` : ""}
        <div class="lesson-pagination"><a class="btn btn-outline" href="#case/${esc(module.id)}">← Case file</a><a class="btn btn-dark ${passed ? "" : "disabled"}" href="${passed ? `#assessment/${esc(module.id)}` : `#lab/${esc(module.id)}`}" ${passed ? "" : 'aria-disabled="true"'}>Open module assessment →</a></div>
      </div></section>`;
    setPage(`${module.number} applied lab`, "course");
  }

  function renderAssessment(module) {
    const answers = progress.assessmentAnswers[module.id] || {};
    const answered = Object.keys(answers).length;
    const correct = module.assessmentQuestions.filter((question, idx) => answers[idx] === question.correct).length;
    const passed = answered === module.assessmentQuestions.length && correct >= 6;
    if (passed && !progress.assessmentPassed.includes(module.id)) progress.assessmentPassed.push(module.id);
    if (!passed) progress.assessmentPassed = progress.assessmentPassed.filter((id) => id !== module.id);
    syncModuleCompletion(module); saveProgress();
    const nextModule = DATA.modules[moduleIndex(module.id) + 1];
    app.innerHTML = `<section class="page-hero compact"><div class="shell"><div class="crumbs"><a href="#module/${esc(module.id)}">${esc(module.number)} overview</a><span>/</span><span>Assessment</span></div><div class="eyebrow">Module assessment</div><h1>Apply the concepts, not just the vocabulary.</h1><p>Answer all eight questions. A score of 6/8 is required; you can revise every answer.</p><div class="score-chip ${passed ? "passed" : ""}">${answered < 8 ? `${answered}/8 answered` : `${correct}/8 correct`}</div></div></section>
      <section class="section section-white"><div class="shell question-stack">${module.assessmentQuestions.map((question, idx) => `<article class="question-card"><div class="question-count">Question ${idx + 1} of 8</div><h2>${esc(question.question)}</h2>${questionOptions(question, answers[idx], `data-action="assessment-answer" data-module="${esc(module.id)}" data-question="${idx}"`)}</article>`).join("")}
        ${answered === 8 ? `<div class="result-banner ${passed ? "passed" : "retry"}"><strong>${passed ? "Module assessment passed." : "Review and try again."}</strong><p>${passed ? `You scored ${correct}/8. ${syncModuleCompletion(module) ? "The complete module is now finished." : "Return to the roadmap to complete any remaining item."}` : `You scored ${correct}/8. Six correct answers are required.`}</p></div>` : ""}
        <div class="lesson-pagination"><a class="btn btn-outline" href="#module/${esc(module.id)}">← Module roadmap</a>${passed ? `<a class="btn btn-dark" href="${nextModule ? `#module/${esc(nextModule.id)}` : "#capstone"}">${nextModule ? `Open ${esc(nextModule.number)}` : "Open capstone"} →</a>` : `<a class="btn btn-dark" href="#lesson/${esc(module.id)}/0">Review lessons →</a>`}</div>
      </div></section>`;
    setPage(`${module.number} assessment`, "course");
  }

  function renderCapstone() {
    const item = DATA.capstone;
    app.innerHTML = `<section class="page-hero"><div class="shell"><div class="eyebrow">Course synthesis</div><h1>${esc(item.title)}</h1>${item.intro.map((text) => `<p>${esc(text)}</p>`).join("")}</div></section>
      <section class="section section-white"><div class="shell capstone-grid">${item.stages.map((stage) => `<article><span>${esc(stage.code)}</span><h2>${esc(stage.title)}</h2><p>${esc(stage.text)}</p><textarea data-note="capstone-${esc(stage.code)}" placeholder="Draft a non-confidential response…">${esc(progress.notes[`capstone-${stage.code}`] || "")}</textarea></article>`).join("")}</div><div class="capstone-review"><strong>Peer review prompt</strong><p>${esc(item.review)}</p><div class="button-row"><button type="button" class="btn btn-outline" data-action="export-notes">Export all field notes ↓</button><a class="btn btn-dark" href="#final-check">Open final assessment →</a></div></div></section>`;
    setPage("Capstone", "course");
  }

  function renderFinal() {
    const answers = progress.finalAnswers || {};
    const questions = DATA.finalAssessment.questions;
    const answered = Object.keys(answers).length;
    const correct = questions.filter((question, idx) => answers[idx] === question.correct).length;
    const modulesReady = progress.completed.length === DATA.modules.length;
    const passed = answered === questions.length && correct >= 16 && modulesReady;
    progress.finalPassed = passed; saveProgress();
    app.innerHTML = `<section class="page-hero compact"><div class="shell"><div class="eyebrow">Final applied assessment</div><h1>Transfer the method across all six modules.</h1><p>${esc(DATA.finalAssessment.intro)}</p><div class="score-chip ${passed ? "passed" : ""}">${answered < questions.length ? `${answered}/${questions.length} answered` : `${correct}/${questions.length} correct`}</div>${!modulesReady ? `<p class="assessment-warning">The assessment can be reviewed now, but completion also requires all six modules. Current modules complete: ${progress.completed.length}/6.</p>` : ""}</div></section>
      <section class="section section-soft"><div class="shell question-stack">${questions.map((question, idx) => `<article class="question-card"><div class="question-count">${esc(question.module)} · Question ${idx + 1} of ${questions.length}</div><h2>${esc(question.question)}</h2>${questionOptions(question, answers[idx], `data-action="final-answer" data-question="${idx}"`)}</article>`).join("")}
        ${answered === questions.length ? `<div class="result-banner ${passed ? "passed" : "retry"}"><strong>${passed ? "Course assessment passed." : "Completion is not yet unlocked."}</strong><p>${passed ? `You scored ${correct}/20 and completed all six modules.` : `Score: ${correct}/20. You need at least 16 correct answers and all six modules complete.`}</p></div>` : ""}
        <div class="lesson-pagination"><a class="btn btn-outline" href="#capstone">← Capstone</a><a class="btn btn-dark" href="#course">Review course →</a></div>
      </div></section>`;
    setPage("Final assessment", "final");
  }

  function renderGlossary() {
    app.innerHTML = `<section class="page-hero compact"><div class="shell"><div class="eyebrow">Reference</div><h1>Course glossary.</h1><p>Thirty terms used across the complete curriculum.</p><label class="search-box"><span>Search terms</span><input type="search" data-action="filter-glossary" placeholder="Try: baseline, LCA, model drift…"></label></div></section><section class="section section-white"><div class="shell glossary-grid">${DATA.glossary.sort((a,b) => a.term.localeCompare(b.term)).map((item) => `<article class="glossary-card" data-search="${esc(`${item.term} ${item.definition}`.toLowerCase())}"><h2>${esc(item.term)}</h2><p>${esc(item.definition)}</p></article>`).join("")}</div></section>`;
    setPage("Glossary", "glossary");
  }

  function renderSources() {
    const sources = Object.values(DATA.sources).sort((a,b) => a.organisation.localeCompare(b.organisation) || a.title.localeCompare(b.title));
    app.innerHTML = `<section class="page-hero compact"><div class="shell"><div class="eyebrow">Evidence base</div><h1>Official and primary learning sources.</h1><p>Twenty-five public references support the course. Links are for learning and review; current controlled Airbus information and approved specialist processes take precedence.</p></div></section><section class="section section-white"><div class="shell sources-grid">${sources.map((source) => `<article class="source-card"><div class="source-org">${esc(source.organisation)}</div><h2>${esc(source.title)}</h2><p>${esc(source.note)}</p><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Open official source ↗</a></article>`).join("")}</div></section>`;
    setPage("Sources", "sources");
  }

  function renderNotFound() {
    app.innerHTML = `<section class="section section-white"><div class="shell empty-state"><div class="eyebrow">Page not found</div><h1>This course route does not exist.</h1><a class="btn btn-dark" href="#home">Return home</a></div></section>`;
    setPage("Not found", "home");
  }

  function download(filename, content, type = "text/plain;charset=utf-8") {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = filename; link.click();
    URL.revokeObjectURL(url);
  }

  function route() {
    const hash = (location.hash || "#home").slice(1);
    const [view, moduleId, rawIndex] = hash.split("/");
    const module = modulesById[moduleId];
    if (view === "home" || view === "") renderHome();
    else if (view === "course") renderCourse();
    else if (view === "module" && module) renderModule(module);
    else if (view === "lesson" && module) renderLesson(module, Number(rawIndex));
    else if (view === "visuals" && module) renderVisuals(module);
    else if (view === "case" && module) renderCase(module);
    else if (view === "lab" && module) renderLab(module);
    else if (view === "assessment" && module) renderAssessment(module);
    else if (view === "capstone") renderCapstone();
    else if (view === "final-check") renderFinal();
    else if (view === "glossary") renderGlossary();
    else if (view === "sources") renderSources();
    else renderNotFound();
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "visual-step") {
      const module = modulesById[button.dataset.module];
      const visualIndex = Number(button.dataset.visual);
      const stepIndex = Number(button.dataset.step);
      const visual = module.explainers[visualIndex];
      const container = button.closest(".interactive-visual");
      container.querySelectorAll(".visual-tabs button").forEach((item, idx) => item.classList.toggle("active", idx === stepIndex));
      container.querySelectorAll(".visual-orbit span").forEach((item, idx) => item.classList.toggle("active", idx === stepIndex));
      const detail = container.querySelector(".visual-detail");
      const item = visual.items[stepIndex];
      detail.innerHTML = `<span>${esc(item.code)}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><small>${esc(item.detail)}</small>`;
    }
    if (action === "lab-answer") {
      const moduleId = button.dataset.module;
      progress.labAnswers[moduleId] ||= {};
      progress.labAnswers[moduleId][button.dataset.question] = Number(button.dataset.index);
      saveProgress(); renderLab(modulesById[moduleId]);
    }
    if (action === "assessment-answer") {
      const moduleId = button.dataset.module;
      progress.assessmentAnswers[moduleId] ||= {};
      progress.assessmentAnswers[moduleId][button.dataset.question] = Number(button.dataset.index);
      saveProgress(); renderAssessment(modulesById[moduleId]);
    }
    if (action === "final-answer") {
      progress.finalAnswers[button.dataset.question] = Number(button.dataset.index);
      saveProgress(); renderFinal();
    }
    if (action === "download-tool") {
      const module = modulesById[button.dataset.module];
      const rows = [module.tool.headers, ...module.tool.rows];
      download(module.tool.filename, `\uFEFF${rows.map((row) => row.map(csvEsc).join(",")).join("\n")}`, "text/csv;charset=utf-8");
      showToast(T(`${module.tool.title} downloaded.`));
    }
    if (action === "export-notes") {
      const lines = [DATA.meta.title, `Exported ${new Date().toISOString()}`, "", ...Object.entries(progress.notes).flatMap(([key, value]) => value ? [`## ${key}`, value, ""] : [])];
      download(window.FOUNDATIONS_LANG === "es" ? "Fundamentos_Aviacion_Sostenible_Notas_Campo.txt" : "Sustainable_Aviation_Foundations_Field_Notes.txt", lines.join("\n"));
      showToast(T("Field notes exported."));
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-note]")) {
      progress.notes[event.target.dataset.note] = event.target.value;
      saveProgress();
    }
    if (event.target.matches('[data-action="filter-glossary"]')) {
      const query = event.target.value.trim().toLowerCase();
      document.querySelectorAll(".glossary-card").forEach((card) => { card.hidden = !card.dataset.search.includes(query); });
    }
  });

  window.addEventListener("hashchange", route);
  route();
})();
