(() => {
  "use strict";

  const DATA = window.FOUNDATIONS_DATA;
  const STORE_KEY = "sustainable-aviation-foundations-v1";
  const app = document.querySelector("#app");
  const toast = document.querySelector("#toast");
  const byId = Object.fromEntries(DATA.pillars.map((pillar) => [pillar.id, pillar]));

  const defaultProgress = () => ({ completed: [], scenario: {}, check: {} });

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultProgress();
      const parsed = JSON.parse(raw);
      return {
        completed: Array.isArray(parsed.completed) ? parsed.completed.filter((id) => byId[id]) : [],
        scenario: parsed.scenario && typeof parsed.scenario === "object" ? parsed.scenario : {},
        check: parsed.check && typeof parsed.check === "object" ? parsed.check : {}
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
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function isComplete(id) {
    return progress.completed.includes(id);
  }

  function completionPercent() {
    return Math.round((progress.completed.length / DATA.pillars.length) * 100);
  }

  function firstIncomplete() {
    return DATA.pillars.find((pillar) => !isComplete(pillar.id)) || DATA.pillars[0];
  }

  function nextPillar(id) {
    const index = DATA.pillars.findIndex((pillar) => pillar.id === id);
    return index >= 0 ? DATA.pillars[index + 1] || null : null;
  }

  function updateHeaderProgress() {
    const count = progress.completed.length;
    const percent = completionPercent();
    const value = document.querySelector("#header-progress-value");
    const label = document.querySelector("#header-progress-label");
    const ring = document.querySelector(".progress-ring");
    if (value) value.textContent = count;
    if (label) label.textContent = `${count} of ${DATA.pillars.length}`;
    if (ring) {
      ring.style.background = `conic-gradient(var(--teal) ${percent}%, rgba(255,255,255,.16) ${percent}% 100%)`;
      ring.style.borderColor = "transparent";
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function setDocumentTitle(title) {
    document.title = title ? `${title} · Sustainable Aviation Foundations` : "Sustainable Aviation Foundations";
  }

  function setActiveNav(active) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const selected = link.dataset.nav === active;
      link.classList.toggle("active", selected);
      if (selected) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function moduleCard(pillar) {
    const complete = isComplete(pillar.id);
    return `
      <a class="pillar-card" href="#module/${esc(pillar.id)}" style="--pillar:${esc(pillar.colour)}">
        <img src="${esc(pillar.image)}" alt="${esc(pillar.alt)}">
        <div class="pillar-card-body">
          <span class="pillar-number">${esc(pillar.number)}</span>
          <h3>${esc(pillar.title)}</h3>
          <p>${esc(pillar.strapline)}</p>
          <div class="card-footer">
            <span>${complete ? "Review pillar" : "Open pillar"} · ${esc(pillar.duration)}</span>
            <span class="status-dot ${complete ? "complete" : ""}" aria-label="${complete ? "Complete" : "Not complete"}"></span>
          </div>
        </div>
      </a>`;
  }

  function renderHome() {
    const resume = firstIncomplete();
    const percent = completionPercent();
    const started = progress.completed.length > 0 || Object.keys(progress.scenario).length > 0 || Object.keys(progress.check).length > 0;
    app.innerHTML = `
      <section class="hero">
        <img class="hero-media" src="assets/hero-a350-a400m.jpg" alt="A generated visual concept showing an A350 commercial widebody and an A400M military transport aircraft in a golden-hour hangar while an engineering team works around a digital design table.">
        <div class="hero-inner">
          <div>
            <div class="eyebrow light">Commercial Aircraft × Defence and Space</div>
            <h1>Six pillars.<br>One connected system.</h1>
            <p class="hero-lead">Build a practical foundation for aviation sustainability — across operations, materials, digital innovation, people, the value chain, climate and nature.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#module/${esc(resume.id)}">${started ? `Resume with ${esc(resume.number)}` : "Start the journey"} <span aria-hidden="true">→</span></a>
              <a class="btn btn-ghost" href="#journey">Explore the six pillars</a>
            </div>
            <div class="hero-meta">
              <span class="meta-chip">About 60 minutes</span>
              <span class="meta-chip">6 decision scenarios</span>
              <span class="meta-chip">Progress saved locally</span>
              <span class="meta-chip">English master</span>
            </div>
          </div>
          <div class="hero-system-card">
            <div class="system-top">
              <div><strong>Your system journey</strong><p>${progress.completed.length} of 6 pillars complete</p></div>
              <span class="pillar-number" style="--pillar:#9debe6">${percent}%</span>
            </div>
            <div class="mini-progress" aria-label="${percent}% complete"><span style="width:${percent}%"></span></div>
            <p>${percent === 100 ? "Journey complete. Revisit any pillar to refresh the decision habits." : `Next: ${esc(resume.title)}`}</p>
          </div>
        </div>
      </section>

      <section class="section section-white">
        <div class="shell">
          <div class="section-head">
            <div>
              <div class="eyebrow">The foundation map</div>
              <h2>Every decision touches a larger system.</h2>
            </div>
            <p>Enter through any pillar. Each module takes less than ten minutes and finishes with a realistic decision.</p>
          </div>
          <div class="pillar-grid">${DATA.pillars.map(moduleCard).join("")}</div>
        </div>
      </section>

      <section class="section section-soft">
        <div class="shell">
          <div class="section-head">
            <div>
              <div class="eyebrow amber">What you will practise</div>
              <h2>Learn less. Notice more. Decide better.</h2>
            </div>
            <p>This is not a catalogue of sustainability terminology. It is a short practice ground for making assumptions, evidence and trade-offs visible.</p>
          </div>
          <div class="practice-grid">
            <article class="practice-card"><div class="practice-index">01</div><h3>See connections</h3><p>Recognise when an operational choice also affects materials, people, suppliers, climate or nature.</p></article>
            <article class="practice-card"><div class="practice-index">02</div><h3>Challenge evidence</h3><p>Ask what the baseline is, where the boundary sits, and which uncertainty could change the decision.</p></article>
            <article class="practice-card"><div class="practice-index">03</div><h3>Act with ownership</h3><p>Choose a defensible next step, name the owner and decide what must be monitored after action.</p></article>
          </div>
        </div>
      </section>

      <section class="section section-dark">
        <div class="shell decision-lens">
          <div class="lens-intro">
            <div class="eyebrow light">Decision lens</div>
            <h2>Six questions before “go”.</h2>
            <p>Use these prompts whenever a decision is presented as a sustainability improvement.</p>
            <a class="btn btn-light" href="#journey">Open the learning journey</a>
          </div>
          <div class="lens-questions">
            ${DATA.pillars.map((pillar, index) => {
              const questions = [
                "Does performance improve without moving the impact elsewhere?",
                "Can we retain more value safely across the lifecycle?",
                "Are the data, assumptions and human oversight fit for purpose?",
                "Can people raise, test and learn from this decision?",
                "What evidence and dependency sit beyond our immediate boundary?",
                "How could climate and living systems change — or change us?"
              ];
              return `<article class="lens-question" style="--pillar:${esc(pillar.colour)}"><span>${esc(pillar.number)} · ${esc(pillar.short)}</span><p>${esc(questions[index])}</p></article>`;
            }).join("")}
          </div>
        </div>
      </section>`;
    setDocumentTitle("");
    setActiveNav("home");
  }

  function renderJourney() {
    const percent = completionPercent();
    const resume = firstIncomplete();
    app.innerHTML = `
      <section class="page-intro">
        <div class="shell page-intro-grid">
          <div>
            <div class="eyebrow">Six-pillar journey</div>
            <h1>Choose your next mission.</h1>
            <p>Follow the sequence or enter through the pillar closest to your work. Progress stays in this browser.</p>
          </div>
          <div class="progress-panel">
            <div class="progress-panel-top">
              <div><strong>${progress.completed.length} / 6</strong><small>pillars complete</small></div>
              <a class="btn btn-dark" href="#module/${esc(resume.id)}">${percent === 100 ? "Review journey" : "Continue"}</a>
            </div>
            <div class="progress-track" aria-label="${percent}% complete"><span style="width:${percent}%"></span></div>
            <button class="reset-button" type="button" data-action="reset">Reset saved progress</button>
          </div>
        </div>
      </section>
      <section>
        <div class="shell journey-list">
          ${DATA.pillars.map((pillar) => {
            const complete = isComplete(pillar.id);
            return `
              <article class="journey-card" style="--pillar:${esc(pillar.colour)}">
                <div class="journey-card-media"><img src="${esc(pillar.image)}" alt="${esc(pillar.alt)}"></div>
                <div class="journey-card-body">
                  <div class="journey-card-top"><span class="journey-label">${esc(pillar.number)} · ${esc(pillar.short)}</span><span class="journey-status ${complete ? "complete" : ""}">${complete ? "Complete" : "Ready"}</span></div>
                  <h2>${esc(pillar.title)}</h2>
                  <p>${esc(pillar.promise)}</p>
                  <div class="journey-meta"><span>${esc(pillar.duration)}</span><span>3 concepts</span><span>1 decision scenario</span><span>1 knowledge check</span></div>
                  <div class="button-row"><a class="btn ${complete ? "btn-outline" : "btn-dark"}" href="#module/${esc(pillar.id)}">${complete ? "Review pillar" : "Start pillar"} <span aria-hidden="true">→</span></a></div>
                </div>
              </article>`;
          }).join("")}
        </div>
      </section>`;
    setDocumentTitle("Six-pillar journey");
    setActiveNav("journey");
  }

  function optionsHtml(kind, pillar, block) {
    const selected = progress[kind][pillar.id];
    const answered = Number.isInteger(selected);
    const correct = selected === block.correct;
    return `
      <div class="option-list" role="group" aria-label="${esc(block.question)}">
        ${block.options.map((option, index) => {
          const isSelected = selected === index;
          const stateClass = isSelected ? (index === block.correct ? "correct" : "incorrect") : "";
          return `<button class="option ${isSelected ? "selected" : ""} ${stateClass}" type="button" data-action="answer" data-kind="${kind}" data-id="${esc(pillar.id)}" data-index="${index}" aria-pressed="${isSelected}"><span class="option-index">${String.fromCharCode(65 + index)}</span><span>${esc(option)}</span></button>`;
        }).join("")}
      </div>
      ${answered ? `<div class="feedback ${correct ? "" : "try-again"}"><strong>${correct ? "Strong choice." : "Look again."}</strong> ${correct ? esc(block.feedback || block.explanation) : "Choose the option that makes evidence, boundaries and accountable action most explicit."}</div>` : ""}`;
  }

  function sourceLinks(pillar) {
    return pillar.sources.map((sourceId) => {
      const source = DATA.sources[sourceId];
      return `
        <a class="source-link" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">
          <span class="source-org">${esc(source.organisation)}</span>
          <span class="source-title">${esc(source.title)}</span>
          <span class="source-arrow" aria-hidden="true">↗</span>
        </a>`;
    }).join("");
  }

  function renderModule(pillar) {
    const scenarioCorrect = progress.scenario[pillar.id] === pillar.scenario.correct;
    const checkCorrect = progress.check[pillar.id] === pillar.check.correct;
    const ready = scenarioCorrect && checkCorrect;
    const complete = isComplete(pillar.id);
    const next = nextPillar(pillar.id);
    app.innerHTML = `
      <section class="module-hero" style="--pillar:${esc(pillar.colour)}">
        <img class="module-hero-media" src="${esc(pillar.image)}" alt="${esc(pillar.alt)}">
        <div class="module-hero-inner">
          <div class="crumbs"><a href="#journey">Six-pillar journey</a><span aria-hidden="true">/</span><span>${esc(pillar.number)}</span></div>
          <span class="module-tag">${esc(pillar.number)} · ${esc(pillar.short)}</span>
          <h1>${esc(pillar.title)}</h1>
          <p>${esc(pillar.promise)}</p>
          <div class="module-meta"><span>${esc(pillar.duration)}</span><span>3 concepts</span><span>Decision scenario</span><span>${complete ? "Completed" : "In progress"}</span></div>
        </div>
      </section>
      <section class="module-shell" style="--pillar:${esc(pillar.colour)}">
        <div class="shell module-layout">
          <aside class="module-side" aria-label="Module navigation">
            <div class="side-card">
              <h2>Inside this pillar</h2>
              <nav class="side-nav">
                ${pillar.lessons.map((lesson, index) => `<a href="#lesson-${index + 1}">${esc(lesson.label)}</a>`).join("")}
                <a href="#scenario">Decision scenario</a>
                <a href="#knowledge-check">Knowledge check</a>
                <a href="#sources-used">Sources used</a>
              </nav>
            </div>
            <div class="side-card">
              <h2>System connection</h2>
              <p>${esc(pillar.connection)}</p>
            </div>
            <a class="btn btn-outline" href="#journey">← Back to journey</a>
          </aside>
          <div class="module-main">
            ${pillar.lessons.map((lesson, index) => `
              <article class="learning-card" id="lesson-${index + 1}">
                <div class="lesson-label">${esc(lesson.label)}</div>
                <h2>${esc(lesson.title)}</h2>
                <p>${esc(lesson.text)}</p>
                <div class="point-grid">${lesson.points.map((point) => `<div class="point">${esc(point)}</div>`).join("")}</div>
              </article>`).join("")}

            <article class="learning-card scenario-card" id="scenario">
              <div class="lesson-label">Decision scenario</div>
              <h2>${esc(pillar.scenario.title)}</h2>
              <div class="scenario-brief">${esc(pillar.scenario.brief)}</div>
              <div class="question">${esc(pillar.scenario.question)}</div>
              ${optionsHtml("scenario", pillar, pillar.scenario)}
            </article>

            <article class="learning-card" id="knowledge-check">
              <div class="lesson-label">Knowledge check</div>
              <h2>Test the decision habit.</h2>
              <div class="question">${esc(pillar.check.question)}</div>
              ${optionsHtml("check", pillar, pillar.check)}
            </article>

            <article class="learning-card takeaway-card">
              <div class="takeaway-grid"><div class="takeaway-bar"></div><div class="takeaway-copy"><div class="lesson-label">Pillar takeaway</div><h2>${esc(pillar.strapline)}</h2><p>${esc(pillar.takeaway)}</p></div></div>
            </article>

            <article class="learning-card" id="sources-used">
              <div class="lesson-label">Evidence trail</div>
              <h2>Sources used in this pillar</h2>
              <p>Use these official sources for further reading. Content was reviewed on ${esc(DATA.meta.reviewed)}.</p>
              <div class="source-list">${sourceLinks(pillar)}</div>
            </article>

            <section class="completion-card">
              <div class="completion-top">
                <div>
                  <h2>${complete ? `${esc(pillar.number)} completed` : ready ? "Ready to complete this pillar" : "Complete both decision checks"}</h2>
                  <p>${complete ? "Your progress is saved in this browser." : ready ? "You can revisit this pillar at any time." : "Select the strongest response in the scenario and knowledge check."}</p>
                </div>
                ${complete
                  ? next
                    ? `<a class="btn btn-primary" href="#module/${esc(next.id)}">Continue to ${esc(next.number)} →</a>`
                    : `<a class="btn btn-primary" href="#journey">View completed journey →</a>`
                  : `<button class="btn btn-dark" type="button" data-action="complete" data-id="${esc(pillar.id)}" ${ready ? "" : "disabled"}>Complete ${esc(pillar.number)}</button>`}
              </div>
            </section>
          </div>
        </div>
      </section>`;
    setDocumentTitle(pillar.title);
    setActiveNav("journey");
  }

  function renderSources() {
    const cards = Object.values(DATA.sources).map((source) => `
      <article class="source-card">
        <div class="source-org">${esc(source.organisation)}</div>
        <h2>${esc(source.title)}</h2>
        <p>${esc(source.note)}</p>
        <a class="btn btn-outline" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Open official source <span aria-hidden="true">↗</span></a>
      </article>`).join("");
    app.innerHTML = `
      <section class="page-intro">
        <div class="shell page-intro-grid">
          <div>
            <div class="eyebrow">Evidence trail</div>
            <h1>Sources, scope and review date.</h1>
            <p>The experience uses public official sources and keeps corporate claims separate from general decision practices.</p>
          </div>
          <div class="notice-box"><strong>Educational-content notice.</strong> This learning experience does not define policy or replace an official Airbus source. Always follow the current internal owner, process and approved documentation.</div>
        </div>
      </section>
      <section><div class="shell sources-grid">${cards}</div></section>`;
    setDocumentTitle("Sources");
    setActiveNav("sources");
  }

  function renderNotFound() {
    app.innerHTML = `<section class="empty-route"><div><div class="eyebrow">Route not found</div><h1>This mission is not on the map.</h1><a class="btn btn-dark" href="#home">Return home</a></div></section>`;
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
    else if (section === "journey") renderJourney();
    else if (section === "sources") renderSources();
    else if (section === "module" && byId[id]) renderModule(byId[id]);
    else renderNotFound();
    updateHeaderProgress();
    if (options.preserveScroll) window.scrollTo(0, oldY);
    else window.scrollTo(0, 0);
  }

  document.addEventListener("click", (event) => {
    const control = event.target.closest("[data-action]");
    if (!control) return;
    const action = control.dataset.action;

    if (action === "answer") {
      const { kind, id } = control.dataset;
      const index = Number(control.dataset.index);
      if (!byId[id] || !["scenario", "check"].includes(kind) || !Number.isInteger(index)) return;
      progress[kind][id] = index;
      saveProgress();
      renderRoute({ preserveScroll: true });
      const block = byId[id][kind];
      if (index === block.correct) showToast(kind === "scenario" ? "Decision scenario complete." : "Knowledge check complete.");
    }

    if (action === "complete") {
      const { id } = control.dataset;
      const pillar = byId[id];
      if (!pillar) return;
      const ready = progress.scenario[id] === pillar.scenario.correct && progress.check[id] === pillar.check.correct;
      if (!ready) return;
      if (!progress.completed.includes(id)) progress.completed.push(id);
      saveProgress();
      renderRoute({ preserveScroll: true });
      showToast(`${pillar.number} completed. Progress saved.`);
    }

    if (action === "reset") {
      const confirmed = window.confirm("Reset all saved progress for Sustainable Aviation Foundations?");
      if (!confirmed) return;
      progress = defaultProgress();
      saveProgress();
      renderRoute();
      showToast("Saved progress reset.");
    }
  });

  window.addEventListener("hashchange", () => renderRoute());
  renderRoute();
})();
