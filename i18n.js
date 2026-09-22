(() => {
  "use strict";

  const LANG_KEY = "sustainable-aviation-foundations-lang";
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("hubLang");
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (_error) {}
  const lang = requested === "es" || requested === "en" ? requested : saved === "es" ? "es" : "en";
  try { localStorage.setItem(LANG_KEY, lang); } catch (_error) {}

  const clone = (value) => value == null ? value : JSON.parse(JSON.stringify(value));
  const merge = (base, patch) => {
    if (patch === undefined) return clone(base);
    if (Array.isArray(patch)) {
      const out = Array.isArray(base) ? base.map(clone) : [];
      patch.forEach((value, index) => { out[index] = merge(out[index], value); });
      return out;
    }
    if (patch && typeof patch === "object") {
      const out = base && typeof base === "object" && !Array.isArray(base) ? clone(base) : {};
      Object.entries(patch).forEach(([key, value]) => { out[key] = merge(out[key], value); });
      return out;
    }
    return patch;
  };

  let active = clone(window.FOUNDATIONS_DATA);
  if (lang === "es") {
    const patches = window.FOUNDATIONS_ES_PATCHES || {};
    active.modules = active.modules.map((module) => patches[module.id] ? merge(module, patches[module.id]) : module);
    active = merge(active, window.FOUNDATIONS_ES_GLOBAL || {});
    const filenames = {
      m1: "M1_Ficha_Decision_Sostenibilidad.csv",
      m2: "M2_Analisis_Puntos_Criticos_Ciclo_Vida.csv",
      m3: "M3_Registro_Evidencia_Digital.csv",
      m4: "M4_Lienzo_Experimento_Mejora.csv",
      m5: "M5_Plan_Evidencia_Resiliencia_Proveedores.csv",
      m6: "M6_Analisis_Clima_Naturaleza_Ubicacion.csv"
    };
    active.modules.forEach((module) => {
      if (module.tool && filenames[module.id]) module.tool.filename = filenames[module.id];
    });
  }

  const ES = {
    "Skip to content": "Saltar al contenido",
    "Sustainable Aviation": "Aviación Sostenible",
    "Foundations": "Fundamentos",
    "Primary navigation": "Navegación principal",
    "Home": "Inicio",
    "Course": "Curso",
    "Final check": "Evaluación final",
    "Glossary": "Glosario",
    "Sources": "Fuentes",
    "Open course progress": "Abrir progreso del curso",
    "modules complete": "módulos completados",
    "Sustainable Aviation & Performance": "Aviación Sostenible y Rendimiento",
    "Understand the system. Question the evidence. Improve the decision.": "Comprende el sistema. Cuestiona la evidencia. Mejora la decisión.",
    "Educational notice": "Aviso educativo",
    "Exploratory learning content. It does not replace official policies, processes, targets or corporate positions.": "Contenido educativo exploratorio. No sustituye políticas, procesos, objetivos ni posiciones corporativas oficiales.",
    "English master": "Edición bilingüe",
    "Master course v3.0 · Reviewed 21 July 2026": "Curso maestro v3.0 · Revisado el 21 de julio de 2026",
    "This learning experience requires JavaScript to display its interactive modules and save progress.": "Esta experiencia de aprendizaje necesita JavaScript para mostrar sus módulos interactivos y guardar el progreso.",
    "Progress could not be saved in this browser.": "No se ha podido guardar el progreso en este navegador.",
    "Complete": "Completado",
    "Continue module": "Continuar módulo",
    "Start module": "Empezar módulo",
    "Airbus Defence and Space · in-depth learning course": "Airbus Defence and Space · curso de aprendizaje en profundidad",
    "Understand sustainability deeply enough to improve a real decision.": "Comprende la sostenibilidad con suficiente profundidad para mejorar una decisión real.",
    "Build evidence, expose trade-offs and connect environmental performance with engineering, operations, people, digital systems, the value chain, climate and nature.": "Construye evidencia, haz visibles las compensaciones y conecta el desempeño ambiental con ingeniería, operaciones, personas, sistemas digitales, cadena de valor, clima y naturaleza.",
    "Resume the course": "Continuar el curso",
    "Start the course": "Empezar el curso",
    "Explore the curriculum": "Explorar el programa",
    "Your learning progress": "Tu progreso de aprendizaje",
    "Complete curriculum": "Programa completo",
    "Six modules, built as real learning journeys.": "Seis módulos construidos como itinerarios de aprendizaje reales.",
    "Each module contains seven lessons, two interactive visual models, a progressive aerospace case, an applied lab, an assessment and a downloadable tool.": "Cada módulo contiene siete lecciones, dos modelos visuales interactivos, un caso aeroespacial progresivo, un laboratorio aplicado, una evaluación y una herramienta descargable.",
    "Course architecture": "Arquitectura del curso",
    "Dense theory, broken into usable pieces.": "Teoría profunda dividida en piezas utilizables.",
    "The course contains more than 35,000 words of structured learning content. It is designed for spaced study, not a one-hour scroll.": "El curso contiene más de 35.000 palabras de contenido de aprendizaje estructurado. Está diseñado para estudiar por etapas, no para recorrerlo en una hora.",
    "theory lessons": "lecciones teóricas",
    "visual explainers": "explicaciones visuales",
    "progressive cases": "casos progresivos",
    "applied labs": "laboratorios aplicados",
    "work templates": "plantillas de trabajo",
    "final questions": "preguntas finales",
    "Study guide": "Guía de estudio",
    "Educational boundary": "Límite educativo",
    "Rigorous learning without pretending to be policy.": "Aprendizaje riguroso sin presentarlo como política corporativa.",
    "Curriculum": "Programa",
    "A 7–9 hour learning journey.": "Un itinerario de aprendizaje de 7–9 horas.",
    "Work through the modules in sequence for the clearest progression, or reopen any completed item for review.": "Recorre los módulos en orden para una progresión más clara o vuelve a abrir cualquier elemento completado para revisarlo.",
    "overall learning progress": "progreso global de aprendizaje",
    "Continue": "Continuar",
    "2 visual explainers": "2 explicaciones visuales",
    "1 case file": "1 caso",
    "1 applied lab": "1 laboratorio aplicado",
    "8-question assessment": "evaluación de 8 preguntas",
    "Downloadable tool": "herramienta descargable",
    "Open module": "Abrir módulo",
    "Course synthesis": "Síntesis del curso",
    "Capstone + 20-question final assessment.": "Actividad final + evaluación final de 20 preguntas.",
    "Complete all modules, build one defensible decision and test transfer across the whole curriculum.": "Completa todos los módulos, construye una decisión defendible y comprueba la transferencia del método a todo el programa.",
    "Open capstone": "Abrir actividad final",
    "Final assessment": "Evaluación final",
    "Interactive visual explainers": "Explicaciones visuales interactivas",
    "2 guided models": "2 modelos guiados",
    "Progressive case file": "Caso progresivo",
    "Applied aerospace analysis": "Análisis aeroespacial aplicado",
    "Applied laboratory": "Laboratorio aplicado",
    "4 decisions · all correct": "4 decisiones · todas correctas",
    "Module assessment": "Evaluación del módulo",
    "8 questions · 75% pass": "8 preguntas · 75 % para aprobar",
    "Module briefing": "Introducción del módulo",
    "Learning objectives": "Objetivos de aprendizaje",
    "By the end of this module, you can:": "Al terminar este módulo, podrás:",
    "Common traps": "Errores frecuentes",
    "Three ideas to challenge before you begin.": "Tres ideas que conviene cuestionar antes de empezar.",
    "Module work tool": "Herramienta de trabajo del módulo",
    "Download CSV template ↓": "Descargar plantilla CSV ↓",
    "Module roadmap": "Hoja de ruta del módulo",
    "Complete every item": "Completa todos los elementos",
    "Start lesson 1": "Empezar lección 1",
    "Previous lesson": "Lección anterior",
    "Module overview": "Resumen del módulo",
    "Next lesson": "Siguiente lección",
    "Open visual explainers": "Abrir explicaciones visuales",
    "Go deeper": "Profundizar",
    "In this module": "En este módulo",
    "Module roadmap": "Hoja de ruta del módulo",
    "Visual context · Technical, operational and environmental evidence must be reviewed together.": "Contexto visual · La evidencia técnica, operativa y ambiental debe revisarse de forma conjunta.",
    "Deep dive": "Profundización",
    "Decision essentials": "Elementos esenciales para decidir",
    "Worked example": "Ejemplo aplicado",
    "Translate the concept into an aerospace decision.": "Traslada el concepto a una decisión aeroespacial.",
    "Use the concept on a non-confidential decision from your area and identify what evidence would change the preferred option.": "Aplica el concepto a una decisión no confidencial de tu área e identifica qué evidencia cambiaría la opción preferida.",
    "Field note": "Nota de campo",
    "Make the learning usable.": "Haz utilizable el aprendizaje.",
    "Do not enter confidential, personal, supplier-sensitive or controlled programme information.": "No introduzcas información confidencial, personal, sensible de proveedores ni información controlada de programas.",
    "Write a generic, non-confidential note…": "Escribe una nota genérica y no confidencial…",
    "Visual explainers": "Explicaciones visuales",
    "Interactive visual lesson": "Lección visual interactiva",
    "See the system, step by step.": "Observa el sistema paso a paso.",
    "Use the controls inside each model to expose the reasoning behind the sequence.": "Utiliza los controles de cada modelo para hacer visible el razonamiento que hay detrás de la secuencia.",
    "Open case file": "Abrir caso",
    "Case file": "Caso",
    "Reveal how the decision changes as new evidence enters the system.": "Observa cómo cambia la decisión a medida que aparece nueva evidencia.",
    "Decision prompt": "Pregunta de decisión",
    "Write a non-confidential response…": "Escribe una respuesta no confidencial…",
    "Applied lab": "Laboratorio aplicado",
    "correct": "correctas",
    "Correct.": "Correcto.",
    "Not yet.": "Todavía no.",
    "Laboratory complete.": "Laboratorio completado.",
    "You have made all four decisions using the module logic.": "Has resuelto las cuatro decisiones utilizando la lógica del módulo.",
    "Open module assessment": "Abrir evaluación del módulo",
    "Assessment": "Evaluación",
    "Apply the concepts, not just the vocabulary.": "Aplica los conceptos, no solo el vocabulario.",
    "Answer all eight questions. A score of 6/8 is required; you can revise every answer.": "Responde las ocho preguntas. Necesitas 6/8 para aprobar y puedes revisar todas las respuestas.",
    "Module assessment passed.": "Evaluación del módulo superada.",
    "Review and try again.": "Revisa e inténtalo de nuevo.",
    "The complete module is now finished.": "El módulo completo está terminado.",
    "Return to the roadmap to complete any remaining item.": "Vuelve a la hoja de ruta para completar los elementos pendientes.",
    "Six correct answers are required.": "Se necesitan seis respuestas correctas.",
    "Review lessons": "Revisar lecciones",
    "Peer review prompt": "Pregunta para revisión entre pares",
    "Export all field notes ↓": "Exportar todas las notas de campo ↓",
    "Open final assessment": "Abrir evaluación final",
    "Transfer the method across all six modules.": "Transfiere el método a los seis módulos.",
    "The assessment can be reviewed now, but completion also requires all six modules.": "La evaluación puede revisarse ahora, pero para completar el curso también se necesitan los seis módulos.",
    "Course assessment passed.": "Evaluación del curso superada.",
    "Completion is not yet unlocked.": "La finalización todavía no está desbloqueada.",
    "Review course": "Revisar curso",
    "Reference": "Referencia",
    "Course glossary.": "Glosario del curso.",
    "Thirty terms used across the complete curriculum.": "Treinta términos utilizados en todo el programa.",
    "Search terms": "Buscar términos",
    "Try: baseline, LCA, model drift…": "Prueba: línea de base, ACV, deriva del modelo…",
    "Evidence base": "Base de evidencia",
    "Official and primary learning sources.": "Fuentes oficiales y primarias de aprendizaje.",
    "Twenty-five public references support the course. Links are for learning and review; current controlled Airbus information and approved specialist processes take precedence.": "Veinticinco referencias públicas respaldan el curso. Los enlaces son para aprendizaje y revisión; prevalecen la información controlada vigente de Airbus y los procesos especializados aprobados.",
    "Open official source ↗": "Abrir fuente oficial ↗",
    "Page not found": "Página no encontrada",
    "This course route does not exist.": "Esta ruta del curso no existe.",
    "Return home": "Volver al inicio",
    "Field notes exported.": "Notas de campo exportadas."
  };

  function translate(text) {
    if (lang !== "es" || typeof text !== "string") return text;
    if (ES[text]) return ES[text];

    let m;
    if ((m = text.match(/^(\d+) of 6$/))) return `${m[1]} de 6`;
    if ((m = text.match(/^(\d+)% complete$/))) return `${m[1]} % completado`;
    if ((m = text.match(/^Complete · (.+)$/))) return `Completado · ${m[1]}`;
    if ((m = text.match(/^(\d+) lessons$/))) return `${m[1]} lecciones`;
    if ((m = text.match(/^(\d+) interactive explainers$/))) return `${m[1]} explicaciones interactivas`;
    if ((m = text.match(/^(\d+) assessed questions$/))) return `${m[1]} preguntas evaluadas`;
    if ((m = text.match(/^(\d+) of 6 modules complete\. Progress, answers and field notes stay in this browser\.$/))) return `${m[1]} de 6 módulos completados. El progreso, las respuestas y las notas de campo permanecen en este navegador.`;
    if ((m = text.match(/^(.+) · (\d+) lessons · (\d+)% complete$/))) return `${m[1]} · ${m[2]} lecciones · ${m[3]} % completado`;
    if ((m = text.match(/^Lesson (\d+)$/))) return `Lección ${m[1]}`;
    if ((m = text.match(/^Lesson (\d+) of (\d+) · (.+)$/))) return `Lección ${m[1]} de ${m[2]} · ${m[3]}`;
    if ((m = text.match(/^(.+) overview$/))) return `Resumen de ${m[1]}`;
    if ((m = text.match(/^Decision (\d+) of (\d+)$/))) return `Decisión ${m[1]} de ${m[2]}`;
    if ((m = text.match(/^(\d+)\/(\d+) correct$/))) return `${m[1]}/${m[2]} correctas`;
    if ((m = text.match(/^(\d+)\/8 answered$/))) return `${m[1]}/8 respondidas`;
    if ((m = text.match(/^Question (\d+) of (\d+)$/))) return `Pregunta ${m[1]} de ${m[2]}`;
    if ((m = text.match(/^You scored (\d+)\/8\.$/))) return `Has obtenido ${m[1]}/8.`;
    if ((m = text.match(/^You scored (\d+)\/8\. (.+)$/))) return `Has obtenido ${m[1]}/8. ${translate(m[2])}`;
    if ((m = text.match(/^Open (M\d+)$/))) return `Abrir ${m[1]}`;
    if ((m = text.match(/^(\d+)\/(\d+) answered$/))) return `${m[1]}/${m[2]} respondidas`;
    if ((m = text.match(/^Current modules complete: (\d+)\/6\.$/))) return `Módulos completados actualmente: ${m[1]}/6.`;
    if ((m = text.match(/^(M\d+|Cross-course) · Question (\d+) of (\d+)$/))) return `${m[1] === "Cross-course" ? "Todo el curso" : m[1]} · Pregunta ${m[2]} de ${m[3]}`;
    if ((m = text.match(/^You scored (\d+)\/20 and completed all six modules\.$/))) return `Has obtenido ${m[1]}/20 y completado los seis módulos.`;
    if ((m = text.match(/^Score: (\d+)\/20\. You need at least 16 correct answers and all six modules complete\.$/))) return `Puntuación: ${m[1]}/20. Necesitas al menos 16 respuestas correctas y completar los seis módulos.`;
    if ((m = text.match(/^(.+) downloaded\.$/))) return `${m[1]} descargada.`;
    return text;
  }

  function localize(root = document) {
    if (lang !== "es") {
      document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
      return;
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return;
      const raw = node.nodeValue || "";
      const trimmed = raw.trim();
      if (!trimmed) return;
      const next = translate(trimmed);
      if (next !== trimmed) node.nodeValue = raw.replace(trimmed, next);
    });
    root.querySelectorAll?.("[aria-label], [placeholder], [title]").forEach((el) => {
      ["aria-label", "placeholder", "title"].forEach((attr) => {
        const value = el.getAttribute(attr);
        if (value) el.setAttribute(attr, translate(value));
      });
    });
    document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
  }

  function setLanguage(next) {
    if (next !== "es" && next !== "en") return;
    try { localStorage.setItem(LANG_KEY, next); } catch (_error) {}
    const nextParams = new URLSearchParams(window.location.search);
    nextParams.set("hubLang", next);
    const query = nextParams.toString();
    window.location.href = `${window.location.pathname}${query ? "?" + query : ""}${window.location.hash || "#home"}`;
  }

  window.FOUNDATIONS_LANG = lang;
  window.FOUNDATIONS_ACTIVE_DATA = active;
  window.FOUNDATIONS_TRANSLATE = translate;
  window.FOUNDATIONS_LOCALIZE = localize;
  window.FOUNDATIONS_SET_LANG = setLanguage;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  localize(document);
})();