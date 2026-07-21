(() => {
  "use strict";

  const DATA = window.FOUNDATIONS_DATA;
  const STORE_KEY = "sustainable-aviation-foundations-v2";
  const app = document.querySelector("#app");
  const toast = document.querySelector("#toast");
  const byId = Object.fromEntries(DATA.modules.map((module) => [module.id, module]));

  const defaultProgress = () => ({
    completed: [],
    scenario: {},
    checks: {},
    notes: {},
    finalAnswers: {},
    finalPassed: false
  });

  function loadProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (!parsed || typeof parsed !== "object") return defaultProgress();
      return {
        completed: Array.isArray(parsed.completed) ? parsed.completed.filter((id) => byId[id]) : [],
        scenario: parsed.scenario && typeof parsed.scenario === "object" ? parsed.scenario : {},
        checks: parsed.checks && typeof parsed.checks === "object" ? parsed.checks : {},
        notes: parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {},
        finalAnswers: parsed.finalAnswers && typeof parsed.finalAnswers === "object" ? parsed.finalAnswers : {},
        finalPassed: Boolean(parsed.finalPassed)
      };
    } catch (_error) {
      return defaultProgress();
    }
  }

  let progress = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    } catch (_error) {
      showToast("Progress could not be saved in this browser.");
    }
    updateHeaderProgress();
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function isComplete(id) {
    return progress.completed.includes(id);
  }

  function completionPercent() {
    return Math.round((progress.completed.length / DATA.modules.length) * 100);
  }

  function firstIncomplete() {
    return DATA.modules.find((module) => !isComplete(module.id)) || DATA.modules[0];
  }

  function nextModule(id) {
    const index = DATA.modules.findIndex((module) => module.id === id);
    return index >= 0 ? DATA.modules[index + 1] || null : null;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function updateHeaderProgress() {
    const count = progress.completed.length;
    const percent = completionPercent();
    const value = document.querySelector("#header-progress-value");
    const label = document.querySelector("#header-progress-label");
    const ring = document.querySelector(".progress-ring");
    if (value) value.textContent = count;
    if (label) label.textContent = `${count} of ${DATA.modules.length}`;
    if (ring) {
      ring.style.background = `conic-gradient(var(--teal) ${percent}%, rgba(255,255,255,.16) ${percent}% 100%)`;
      ring.style.borderColor = "transparent";
    }
  }

  function setDocumentTitle(title) {
    document.title = title ? `${title} · ${DATA.meta.title}` : DATA.meta.title;
  }

  function setActiveNav(active) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const selected = link.dataset.nav === active;
      link.classList.toggle("active", selected);
      if (selected) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function moduleCard(module) {
    const complete = isComplete(module.id);
    return `
      <a class="pillar-card" href="#module/${esc(module.id)}" style="--pillar:${esc(module.colour)}">
        <img src="${esc(module.image)}" alt="${esc(module.alt)}">
        <div class="pillar-card-body">
          <span class="pillar-number">${esc(module.number)}</span>
          <h3>${esc(module.title)}</h3>
          <p>${esc(module.strapline)}</p>
          <div class="card-footer">
            <span>${complete ? "Review module" : "Open module"} · ${esc(module.duration)}</span>
            <span class="status-dot ${complete ? "complete" : ""}" aria-label="${complete ? "Complete" : "Not complete"}"></span>
          </div>
        </div>
      </a>`;
  }

  function renderHome() {
    const resume = firstIncomplete();
    const percent = completionPercent();
    const started = progress.completed.length > 0 || Object.keys(progress.scenario).length > 0;
    app.innerHTML = `
      <section class="hero">
        <img class="hero-media" src="assets/hero-a400m-eurofighter.jpg" alt="A generated visual concept showing an A400M and a Eurofighter in a Defence and Space hangar while an engineering team works around a digital design table.">
        <div class="hero-inner">
          <div>
            <div class="eyebrow light">Airbus Defence and Space · introductory course</div>
            <h1>A practical foundation for better sustainability decisions.</h1>
            <p class="hero-lead">Understand the system, question the evidence and make trade-offs visible across operations, lifecycle, digital innovation, people, the value chain, climate and nature.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#module/${esc(resume.id)}">${started ? `Resume with ${esc(resume.number)}` : "Start the course"} <span aria-hidden="true">→</span></a>
              <a class="btn btn-ghost" href="#course">View the six modules</a>
            </div>
            <div class="hero-meta">
              <span class="meta-chip">60–75 minutes</span>
              <span class="meta-chip">6 applied modules</span>
              <span class="meta-chip">18 knowledge questions</span>
              <span class="meta-chip">12-question final check</span>
            </div>
          </div>
          <div class="hero-system-card">
            <div class="system-top">
              <div><strong>Your course progress</strong><p>${progress.completed.length} of 6 modules complete</p></div>
              <span class="pillar-number" style="--pillar:#9debe6">${percent}%</span>
            </div>
            <div class="mini-progress" aria-label="${percent}% complete"><span style="width:${percent}%"></span></div>
            <p>${percent === 100 ? "All modules complete. Take or revisit the final knowledge check." : `Next: ${esc(resume.title)}`}</p>
          </div>
        </div>
      </section>

      <section class="section section-white">
        <div class="shell">
          <div class="section-head">
            <div><div class="eyebrow">Course map</div><h2>Six modules. One decision method.</h2></div>
            <p>Each module combines developed theory, a visual explainer, an aerospace example, a decision scenario, three knowledge questions and a field note.</p>
          </div>
          <div class="pillar-grid">${DATA.modules.map(moduleCard).join("")}</div>
        </div>
      </section>

      <section class="section section-soft">
        <div class="shell">
          <div class="section-head">
            <div><div class="eyebrow amber">What you will be able to do</div><h2>From vocabulary to working decisions.</h2></div>
            <p>The course is designed for employees who need a rigorous overview, not for specialists seeking a substitute for technical or legal procedures.</p>
          </div>
          <div class="practice-grid">
            <article class="practice-card"><div class="practice-index">01</div><h3>Frame the system</h3><p>Define purpose, baseline, boundary and the lifecycle stages that could change the conclusion.</p></article>
            <article class="practice-card"><div class="practice-index">02</div><h3>Challenge the evidence</h3><p>Separate measurement, calculation, estimation and assumption; expose decision-critical uncertainty.</p></article>
            <article class="practice-card"><div class="practice-index">03</div><h3>Act with control</h3><p>Choose a proportionate next step, name ownership and decide what must be monitored.</p></article>
          </div>
        </div>
      </section>

      <section class="section section-dark">
        <div class="shell decision-lens">
          <div class="lens-intro">
            <div class="eyebrow light">The common thread</div>
            <h2>Six questions before a claim becomes a decision.</h2>
            <p>Carry these questions through every module and back into daily work.</p>
            <a class="btn btn-light" href="#course">Open the course</a>
          </div>
          <div class="lens-questions">
            ${[
              ["01 · Purpose", "What operational need and constraints must the option fulfil?"],
              ["02 · Baseline", "Compared with which credible alternative or condition?"],
              ["03 · Boundary", "Which stages, locations and time period are included?"],
              ["04 · Evidence", "What is measured, estimated, assumed or missing?"],
              ["05 · Trade-off", "What improves, worsens or remains uncertain?"],
              ["06 · Control", "Who owns the outcome and how will it be monitored?"]
            ].map(([label, question], index) => `<article class="lens-question" style="--pillar:${esc(DATA.modules[index].colour)}"><span>${label}</span><p>${question}</p></article>`).join("")}
          </div>
        </div>
      </section>`;
    setDocumentTitle("");
    setActiveNav("home");
  }

  function renderCourse() {
    const percent = completionPercent();
    const resume = firstIncomplete();
    app.innerHTML = `
      <section class="page-intro">
        <div class="shell page-intro-grid">
          <div><div class="eyebrow">Course journey</div><h1>Build the foundation in six connected modules.</h1><p>Follow the sequence for the clearest learning path. Your answers, field notes and progress stay in this browser.</p></div>
          <div class="progress-panel">
            <div class="progress-panel-top"><div><strong>${progress.completed.length} / 6</strong><small>modules complete</small></div><a class="btn btn-dark" href="#module/${esc(resume.id)}">${percent === 100 ? "Review course" : "Continue"}</a></div>
            <div class="progress-track" aria-label="${percent}% complete"><span style="width:${percent}%"></span></div>
            <button class="reset-button" type="button" data-action="reset">Reset saved progress</button>
          </div>
        </div>
      </section>
      <section><div class="shell journey-list">
        ${DATA.modules.map((module) => {
          const complete = isComplete(module.id);
          return `
            <article class="journey-card" style="--pillar:${esc(module.colour)}">
              <div class="journey-card-media"><img src="${esc(module.image)}" alt="${esc(module.alt)}"></div>
              <div class="journey-card-body">
                <div class="journey-card-top"><span class="journey-label">${esc(module.number)} · ${esc(module.short)}</span><span class="journey-status ${complete ? "complete" : ""}">${complete ? "Complete" : "Ready"}</span></div>
                <h2>${esc(module.title)}</h2><p>${esc(module.promise)}</p>
                <div class="objective-list">${module.objectives.map((objective) => `<span>${esc(objective)}</span>`).join("")}</div>
                <div class="journey-meta"><span>${esc(module.duration)}</span><span>4 theory chapters</span><span>2 visual examples</span><span>4 applied questions</span></div>
                <div class="button-row"><a class="btn ${complete ? "btn-outline" : "btn-dark"}" href="#module/${esc(module.id)}">${complete ? "Review module" : "Start module"} <span aria-hidden="true">→</span></a></div>
              </div>
            </article>`;
        }).join("")}
      </div></section>
      <section class="section section-soft"><div class="shell final-invite">
        <div><div class="eyebrow">Course completion</div><h2>Finish with a 12-question knowledge check.</h2><p>A score of 10/12 and completion of all six modules marks the learning journey complete.</p></div>
        <a class="btn btn-dark" href="#final-check">Open final check →</a>
      </div></section>`;
    setDocumentTitle("Course");
    setActiveNav("course");
  }

  function answerOptions({ kind, module, question, questionIndex = null }) {
    const isScenario = kind === "scenario";
    const selected = isScenario
      ? progress.scenario[module.id]
      : progress.checks[module.id]?.[questionIndex];
    const answered = Number.isInteger(selected);
    return `
      <div class="option-list" role="group" aria-label="${esc(question.question)}">
        ${question.options.map((rawOption, index) => {
          const option = typeof rawOption === "string" ? { text: rawOption } : rawOption;
          const isSelected = selected === index;
          const stateClass = isSelected ? (index === question.correct ? "correct" : "incorrect") : "";
          return `<button class="option ${isSelected ? "selected" : ""} ${stateClass}" type="button" data-action="answer" data-kind="${kind}" data-id="${esc(module.id)}" ${questionIndex === null ? "" : `data-question="${questionIndex}"`} data-index="${index}" aria-pressed="${isSelected}"><span class="option-index">${String.fromCharCode(65 + index)}</span><span>${esc(option.text)}</span></button>`;
        }).join("")}
      </div>
      ${answered ? (() => {
        const raw = question.options[selected];
        const option = typeof raw === "string" ? null : raw;
        const correct = selected === question.correct;
        const feedback = correct ? (option?.feedback || question.explanation) : (option?.feedback || "Look again and choose the response that makes evidence, boundaries and accountable action most explicit.");
        return `<div class="feedback ${correct ? "" : "try-again"}"><strong>${correct ? "Correct." : "Not yet."}</strong> ${esc(feedback)}</div>`;
      })() : ""}`;
  }

  function sourceLinks(module) {
    return module.sources.map((sourceId) => {
      const source = DATA.sources[sourceId];
      return `<a class="source-link" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer"><span class="source-org">${esc(source.organisation)}</span><span class="source-title">${esc(source.title)}</span><span class="source-arrow" aria-hidden="true">↗</span></a>`;
    }).join("");
  }

  function renderLesson(lesson) {
    return `
      <article class="learning-card theory-card" id="${esc(lesson.label.slice(0, 2).replace(/\D/g, "") ? `lesson-${lesson.label.slice(0, 2)}` : "lesson")}">
        <div class="lesson-label">${esc(lesson.label)}</div>
        <h2>${esc(lesson.title)}</h2>
        <div class="theory-copy">${lesson.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</div>
        <div class="point-grid">${lesson.points.map((point) => `<div class="point">${esc(point)}</div>`).join("")}</div>
        <div class="lesson-callout"><strong>${esc(lesson.callout.label)}</strong><p>${esc(lesson.callout.text)}</p></div>
      </article>`;
  }

  function renderModule(module) {
    const scenarioCorrect = progress.scenario[module.id] === module.scenario.correct;
    const moduleChecks = progress.checks[module.id] || {};
    const correctChecks = module.checks.filter((check, index) => moduleChecks[index] === check.correct).length;
    const ready = scenarioCorrect && correctChecks === module.checks.length;
    const complete = isComplete(module.id);
    const next = nextModule(module.id);
    app.innerHTML = `
      <section class="module-hero" style="--pillar:${esc(module.colour)}">
        <img class="module-hero-media" src="${esc(module.image)}" alt="${esc(module.alt)}">
        <div class="module-hero-inner">
          <div class="crumbs"><a href="#course">Course journey</a><span aria-hidden="true">/</span><span>${esc(module.number)}</span></div>
          <span class="module-tag">${esc(module.number)} · ${esc(module.short)}</span>
          <h1>${esc(module.title)}</h1><p>${esc(module.promise)}</p>
          <div class="module-meta"><span>${esc(module.duration)}</span><span>4 theory chapters</span><span>Applied scenario</span><span>${complete ? "Completed" : "In progress"}</span></div>
        </div>
      </section>
      <section class="module-shell" style="--pillar:${esc(module.colour)}"><div class="shell module-layout">
        <aside class="module-side" aria-label="Module navigation">
          <div class="side-card"><h2>Inside this module</h2><nav class="side-nav">
            ${module.lessons.map((lesson, index) => `<a href="#lesson-${index + 1}">${esc(lesson.label)}</a>`).join("")}
            <a href="#visual-explainer">Visual explainer</a><a href="#applied-example">Applied example</a><a href="#scenario">Decision scenario</a><a href="#knowledge-check">Knowledge check</a><a href="#field-note">Field note</a><a href="#sources-used">Sources used</a>
          </nav></div>
          <div class="side-card"><h2>Core question</h2><p>${esc(module.coreQuestion)}</p></div>
          <a class="btn btn-outline" href="#course">← Back to course</a>
        </aside>
        <div class="module-main">
          <article class="learning-card objectives-card">
            <div class="lesson-label">Learning objectives</div><h2>By the end of this module, you can:</h2>
            <div class="objective-list large">${module.objectives.map((objective) => `<span>${esc(objective)}</span>`).join("")}</div>
          </article>

          ${renderLesson(module.lessons[0]).replace('id="lesson-01"', 'id="lesson-1"')}
          ${renderLesson(module.lessons[1]).replace('id="lesson-02"', 'id="lesson-2"')}

          <figure class="support-figure"><img src="${esc(module.supportImage)}" alt="${esc(module.supportAlt)}"><figcaption><strong>Look across functions.</strong> The strongest sustainability decisions connect technical, operational, environmental and evidence owners.</figcaption></figure>

          ${renderLesson(module.lessons[2]).replace('id="lesson-03"', 'id="lesson-3"')}
          ${renderLesson(module.lessons[3]).replace('id="lesson-04"', 'id="lesson-4"')}

          <article class="learning-card visual-card" id="visual-explainer">
            <div class="lesson-label">Visual explainer</div><h2>${esc(module.visual.title)}</h2><p>${esc(module.visual.intro)}</p>
            <div class="visual-flow">${module.visual.items.map((item) => `<div class="visual-step"><span>${esc(item.code)}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div>`).join("")}</div>
          </article>

          <article class="learning-card case-study" id="applied-example">
            <div class="case-media"><img src="${esc(module.supportImage)}" alt=""></div>
            <div class="case-copy"><div class="lesson-label">${esc(module.caseStudy.eyebrow)}</div><h2>${esc(module.caseStudy.title)}</h2><p>${esc(module.caseStudy.context)}</p><div class="analysis-box"><strong>How to analyse it</strong><p>${esc(module.caseStudy.analysis)}</p></div></div>
          </article>

          <article class="learning-card scenario-card" id="scenario">
            <div class="lesson-label">Decision scenario</div><h2>${esc(module.scenario.title)}</h2><div class="scenario-brief">${esc(module.scenario.brief)}</div><div class="question">${esc(module.scenario.question)}</div>
            ${answerOptions({ kind: "scenario", module, question: module.scenario })}
          </article>

          <article class="learning-card" id="knowledge-check">
            <div class="lesson-label">Knowledge check · ${correctChecks}/3 correct</div><h2>Apply the concepts, not just the vocabulary.</h2>
            <div class="question-stack">${module.checks.map((check, index) => `<section class="mini-question"><div class="question-number">Question ${index + 1} of 3</div><div class="question">${esc(check.question)}</div>${answerOptions({ kind: "check", module, question: check, questionIndex: index })}</section>`).join("")}</div>
          </article>

          <article class="learning-card note-card" id="field-note">
            <div class="lesson-label">Practical output · private field note</div><h2>Bring the module back to your work.</h2><p>${esc(module.reflection)}</p>
            <label class="sr-only" for="note-${esc(module.id)}">Your field note</label><textarea id="note-${esc(module.id)}" data-note-id="${esc(module.id)}" rows="5" placeholder="Write a short working note. It is saved only in this browser.">${esc(progress.notes[module.id] || "")}</textarea>
            <div class="note-actions"><button class="btn btn-outline" type="button" data-action="save-note" data-id="${esc(module.id)}">Save field note</button><span>Private to this browser · not submitted</span></div>
          </article>

          <article class="learning-card takeaway-card"><div class="takeaway-grid"><div class="takeaway-bar"></div><div class="takeaway-copy"><div class="lesson-label">Module takeaway</div><h2>${esc(module.strapline)}</h2><p>${esc(module.takeaway)}</p></div></div></article>

          <article class="learning-card" id="sources-used"><div class="lesson-label">Evidence trail</div><h2>Sources used in this module</h2><p>Public sources were reviewed on ${esc(DATA.meta.reviewed)}. Internal approved documentation remains authoritative for Airbus work.</p><div class="source-list">${sourceLinks(module)}</div></article>

          <section class="completion-card"><div class="completion-top"><div>
            <h2>${complete ? `${esc(module.number)} completed` : ready ? "Ready to complete this module" : "Complete the scenario and three questions"}</h2>
            <p>${complete ? "Your progress is saved in this browser." : ready ? "Your field note can be edited at any time." : `${scenarioCorrect ? "Scenario correct" : "Scenario pending"} · ${correctChecks}/3 knowledge questions correct.`}</p>
          </div>${complete ? (next ? `<a class="btn btn-primary" href="#module/${esc(next.id)}">Continue to ${esc(next.number)} →</a>` : `<a class="btn btn-primary" href="#final-check">Take the final check →</a>`) : `<button class="btn btn-dark" type="button" data-action="complete" data-id="${esc(module.id)}" ${ready ? "" : "disabled"}>Complete ${esc(module.number)}</button>`}</div></section>
        </div>
      </div></section>`;
    setDocumentTitle(module.title);
    setActiveNav("course");
  }

  function finalScore() {
    return DATA.finalAssessment.questions.reduce((score, question, index) => score + (progress.finalAnswers[index] === question.correct ? 1 : 0), 0);
  }

  function renderFinalCheck() {
    const questions = DATA.finalAssessment.questions;
    const answered = Object.keys(progress.finalAnswers).length;
    const score = finalScore();
    const finished = answered === questions.length;
    const passed = finished && score >= 10;
    if (passed && !progress.finalPassed) {
      progress.finalPassed = true;
      saveProgress();
    }
    const courseComplete = progress.completed.length === DATA.modules.length && progress.finalPassed;
    app.innerHTML = `
      <section class="page-intro"><div class="shell page-intro-grid"><div><div class="eyebrow">Final knowledge check</div><h1>Connect the decisions across all six modules.</h1><p>${esc(DATA.finalAssessment.intro)}</p></div>
        <div class="progress-panel"><div class="progress-panel-top"><div><strong>${score} / 12</strong><small>${finished ? (passed ? "passing score reached" : "review and retry") : `${answered} answered`}</small></div><span class="score-badge ${passed ? "passed" : ""}">${finished ? `${Math.round(score / 12 * 100)}%` : "In progress"}</span></div><div class="progress-track"><span style="width:${answered / 12 * 100}%"></span></div><p>${progress.completed.length}/6 modules complete</p></div>
      </div></section>
      <section><div class="shell assessment-shell">
        ${questions.map((question, index) => {
          const selected = progress.finalAnswers[index];
          const hasAnswer = Number.isInteger(selected);
          const correct = selected === question.correct;
          return `<article class="assessment-question"><div class="assessment-label">${esc(question.module)} · Question ${index + 1}</div><h2>${esc(question.question)}</h2><div class="option-list">${question.options.map((option, optionIndex) => {
            const isSelected = selected === optionIndex;
            const cls = isSelected ? (optionIndex === question.correct ? "correct" : "incorrect") : "";
            return `<button class="option ${isSelected ? "selected" : ""} ${cls}" type="button" data-action="final-answer" data-question="${index}" data-index="${optionIndex}" aria-pressed="${isSelected}"><span class="option-index">${String.fromCharCode(65 + optionIndex)}</span><span>${esc(option)}</span></button>`;
          }).join("")}</div>${hasAnswer ? `<div class="feedback ${correct ? "" : "try-again"}"><strong>${correct ? "Correct." : "Review this one."}</strong> ${esc(question.explanation)}</div>` : ""}</article>`;
        }).join("")}
        ${finished ? `<section class="final-result ${passed ? "passed" : "review"}"><div><div class="eyebrow">${passed ? "Knowledge check passed" : "Review recommended"}</div><h2>${score}/12 · ${Math.round(score / 12 * 100)}%</h2><p>${passed ? (progress.completed.length === 6 ? "All course requirements are complete." : `Complete the remaining ${6 - progress.completed.length} module(s) to finish the learning journey.`) : "Revisit the feedback, review the relevant modules and try again. A score of 10/12 is required."}</p></div><div class="result-actions"><button class="btn btn-outline" type="button" data-action="retake-final">Reset final check</button>${passed ? `<button class="btn btn-dark" type="button" data-action="download-notes">Download my field notes</button>` : `<a class="btn btn-dark" href="#course">Review course</a>`}</div></section>` : ""}
        ${courseComplete ? `<div class="course-complete"><span aria-hidden="true">✓</span><div><strong>Learning journey complete</strong><p>Sustainable Aviation Foundations · ${esc(DATA.meta.version)}. This is a learning-status message, not an official qualification or certificate.</p></div></div>` : ""}
      </div></section>`;
    setDocumentTitle("Final knowledge check");
    setActiveNav("final");
  }

  function renderGlossary() {
    app.innerHTML = `
      <section class="page-intro"><div class="shell page-intro-grid"><div><div class="eyebrow">Plain-language glossary</div><h1>Use the terminology with precision.</h1><p>Acronyms are expanded on first use in the course. This glossary is a learning aid, not a legal or technical definition source.</p></div><div class="glossary-search"><label for="glossary-filter">Filter terms</label><input id="glossary-filter" type="search" placeholder="Type LCA, boundary, resilience…" autocomplete="off"></div></div></section>
      <section><div class="shell glossary-grid" id="glossary-grid">${DATA.glossary.map((item) => `<article class="glossary-card" data-term="${esc((item.term + " " + item.definition).toLowerCase())}"><h2>${esc(item.term)}</h2><p>${esc(item.definition)}</p></article>`).join("")}</div></section>`;
    const filter = document.querySelector("#glossary-filter");
    filter.addEventListener("input", () => {
      const query = filter.value.trim().toLowerCase();
      document.querySelectorAll(".glossary-card").forEach((card) => card.hidden = query && !card.dataset.term.includes(query));
    });
    setDocumentTitle("Glossary");
    setActiveNav("glossary");
  }

  function renderSources() {
    const cards = Object.values(DATA.sources).map((source) => `<article class="source-card"><div class="source-org">${esc(source.organisation)}</div><h2>${esc(source.title)}</h2><p>${esc(source.note)}</p><a class="btn btn-outline" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Open official source <span aria-hidden="true">↗</span></a></article>`).join("");
    app.innerHTML = `<section class="page-intro"><div class="shell page-intro-grid"><div><div class="eyebrow">Evidence trail</div><h1>Sources, scope and review date.</h1><p>The course uses public primary and authoritative sources and keeps corporate claims separate from general decision practices.</p></div><div class="notice-box"><strong>Educational-content notice.</strong> This experience does not define policy or replace an official Airbus source. Always follow the current internal owner, process and approved documentation.</div></div></section><section><div class="shell sources-grid">${cards}</div></section>`;
    setDocumentTitle("Sources");
    setActiveNav("sources");
  }

  function renderNotFound() {
    app.innerHTML = `<section class="empty-route"><div><div class="eyebrow">Route not found</div><h1>This course page is not on the map.</h1><a class="btn btn-dark" href="#home">Return home</a></div></section>`;
    setDocumentTitle("Not found");
    setActiveNav("");
  }

  function parseRoute() {
    const route = location.hash.replace(/^#/, "") || "home";
    const [section, id] = route.split("/");
    return { section, id };
  }

  function renderRoute(options = {}) {
    const oldY = window.scrollY;
    const { section, id } = parseRoute();
    if (section === "home") renderHome();
    else if (section === "course") renderCourse();
    else if (section === "final-check") renderFinalCheck();
    else if (section === "glossary") renderGlossary();
    else if (section === "sources") renderSources();
    else if (section === "module" && byId[id]) renderModule(byId[id]);
    else renderNotFound();
    updateHeaderProgress();
    if (options.preserveScroll) window.scrollTo(0, oldY);
    else window.scrollTo(0, 0);
  }

  function downloadNotes() {
    const lines = [
      DATA.meta.title,
      `${DATA.meta.version} · Reviewed ${DATA.meta.reviewed}`,
      "",
      ...DATA.modules.flatMap((module) => [
        `${module.number} · ${module.title}`,
        module.reflection,
        progress.notes[module.id]?.trim() || "No field note saved.",
        ""
      ]),
      "Educational learning notes. They do not replace official Airbus processes or approved documentation."
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sustainable_Aviation_Foundations_Field_Notes.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  document.addEventListener("click", (event) => {
    const control = event.target.closest("[data-action]");
    if (!control) return;
    const action = control.dataset.action;

    if (action === "answer") {
      const { kind, id } = control.dataset;
      const index = Number(control.dataset.index);
      const module = byId[id];
      if (!module || !Number.isInteger(index)) return;
      if (kind === "scenario") progress.scenario[id] = index;
      if (kind === "check") {
        const question = Number(control.dataset.question);
        if (!Number.isInteger(question)) return;
        progress.checks[id] ||= {};
        progress.checks[id][question] = index;
      }
      saveProgress();
      renderRoute({ preserveScroll: true });
    }

    if (action === "save-note") {
      const { id } = control.dataset;
      const textarea = document.querySelector(`[data-note-id="${id}"]`);
      if (!textarea || !byId[id]) return;
      progress.notes[id] = textarea.value;
      saveProgress();
      showToast("Field note saved in this browser.");
    }

    if (action === "complete") {
      const { id } = control.dataset;
      const module = byId[id];
      if (!module) return;
      const ready = progress.scenario[id] === module.scenario.correct && module.checks.every((check, index) => progress.checks[id]?.[index] === check.correct);
      if (!ready) return;
      if (!progress.completed.includes(id)) progress.completed.push(id);
      saveProgress();
      renderRoute({ preserveScroll: true });
      showToast(`${module.number} completed. Progress saved.`);
    }

    if (action === "final-answer") {
      const question = Number(control.dataset.question);
      const index = Number(control.dataset.index);
      if (!Number.isInteger(question) || !Number.isInteger(index) || !DATA.finalAssessment.questions[question]) return;
      progress.finalAnswers[question] = index;
      saveProgress();
      renderRoute({ preserveScroll: true });
    }

    if (action === "retake-final") {
      progress.finalAnswers = {};
      progress.finalPassed = false;
      saveProgress();
      renderRoute();
      showToast("Final check reset.");
    }

    if (action === "download-notes") downloadNotes();

    if (action === "reset") {
      if (!window.confirm("Reset all saved progress and field notes for Sustainable Aviation Foundations?")) return;
      progress = defaultProgress();
      saveProgress();
      renderRoute();
      showToast("Saved progress reset.");
    }
  });

  window.addEventListener("hashchange", () => renderRoute());
  renderRoute();
})();
