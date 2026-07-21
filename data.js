window.FOUNDATIONS_DATA = {
  meta: {
    title: "Sustainable Aviation Foundations",
    ecosystem: "Sustainable Aviation & Performance",
    signature: "Understand the system. Question the evidence. Improve the decision.",
    version: "Enriched English master · v2.0",
    reviewed: "21 July 2026",
    duration: "60–75 minutes",
    audience: "Airbus Defence and Space employees · introductory level",
    notice: "Educational and exploratory content for Airbus Defence and Space. It does not replace official policies, processes, targets, technical instructions or corporate positions."
  },
  modules: [
    {
      id: "m1",
      number: "M1",
      short: "Systems",
      title: "Sustainability as a Decision System",
      strapline: "Move from isolated indicators to evidence-based trade-offs.",
      duration: "10–12 min",
      colour: "#2186c4",
      image: "assets/p1-operations.jpg",
      alt: "A Defence and Space team comparing operational, energy, supply and environmental information in a decision room.",
      supportImage: "assets/m1-decision-room.jpg",
      supportAlt: "A multidisciplinary team reviewing several data layers on a large decision wall.",
      promise: "Build the reasoning pattern used throughout the course: baseline, boundary, evidence, trade-off, owner and follow-up.",
      coreQuestion: "How do we know that an improvement is real rather than a problem moved somewhere else?",
      objectives: [
        "Distinguish an environmental indicator from a complete decision.",
        "Define a baseline and system boundary before comparing options.",
        "Make uncertainty, trade-offs and ownership visible."
      ],
      lessons: [
        {
          label: "01 · The system view",
          title: "Sustainability is a property of a decision, not a label",
          paragraphs: [
            "Aerospace decisions rarely optimise a single variable. Safety, quality, mission readiness, cost, schedule, energy, materials, emissions, water, waste and human workload may all change together. Calling an option ‘more sustainable’ because one number improves is therefore incomplete. The first task is to understand the system that produces the result.",
            "Consider a maintenance intervention that is brought forward to protect aircraft availability. It may reduce the risk of an unplanned failure, but it could also increase component replacement, urgent logistics or overtime. The point is not that the intervention is right or wrong. The point is that the environmental result cannot be separated from the operational purpose, the alternatives and the consequences across the system.",
            "A good sustainability analysis makes those relationships discussable. It does not promise a perfect answer. It helps the team choose a defensible option and state what still needs to be monitored."
          ],
          points: [
            "Begin with the operational need and non-negotiable safety and quality constraints.",
            "Identify the environmental variables that could materially change between options.",
            "Check whether an apparent gain creates work, risk or impact elsewhere."
          ],
          callout: { label: "Decision habit", text: "Replace ‘Is this sustainable?’ with ‘Compared with what, within which boundary, using which evidence, and with what trade-offs?’" }
        },
        {
          label: "02 · Baseline and boundary",
          title: "A comparison is only as credible as its starting point",
          paragraphs: [
            "The baseline is the reference used to judge change. It might be the current process, a previous design, a representative operating year or another feasible option. A baseline must be relevant and comparable. Selecting an unusually poor year or ignoring a major operational difference can make an improvement look larger than it is.",
            "The system boundary defines what is included. A site-only boundary can show electricity or waste at one facility, but it may miss supplier processes, transport, use, maintenance or end of life. A lifecycle boundary is broader, but it also requires more data and assumptions. The correct boundary depends on the decision; what matters is that it is explicit and consistent across the options.",
            "Time matters too. A short-term reduction can create a later burden, while an option with a higher initial impact may deliver value over a long service life. In long-life aerospace programmes, the time horizon can change the conclusion."
          ],
          points: [
            "Use the same functional purpose when comparing alternatives.",
            "Record exclusions and explain why they are not expected to change the conclusion.",
            "Test whether a different time horizon would reverse the preferred option."
          ],
          callout: { label: "Greenwashing guardrail", text: "Never present a percentage improvement without naming the baseline, scope, period and evidence behind it." }
        },
        {
          label: "03 · Evidence and uncertainty",
          title: "Good evidence includes what is not known",
          paragraphs: [
            "Evidence can come from direct measurement, engineering calculations, supplier data, recognised databases, monitored trials or expert judgement. These sources are not equally strong for every purpose. A direct meter reading may be precise but too narrow; a lifecycle database may be broader but based on averages; expert judgement may be necessary when a concept is still immature.",
            "Uncertainty is not a reason to stop every decision. It is information about how strongly the team should rely on a result. A useful analysis separates measured facts, calculated estimates and assumptions. It also asks which uncertainty could change the decision. That question directs effort towards decision-critical data instead of demanding impossible completeness.",
            "Evidence quality should be proportionate to the consequence. A small reversible trial can proceed with explicit assumptions and monitoring. A high-cost, long-lived or safety-relevant choice requires stronger verification, review and governance."
          ],
          points: [
            "Label data as measured, calculated, estimated or assumed.",
            "Check completeness, age, representativeness and ownership.",
            "Identify the uncertainty that could change the ranking of options."
          ],
          callout: { label: "Useful phrase", text: "‘Based on the available evidence, option B performs better for X; Y remains uncertain and will be checked during the trial.’" }
        },
        {
          label: "04 · From decision to control",
          title: "A decision is not complete until someone monitors the result",
          paragraphs: [
            "A convincing analysis can still fail during implementation. Operational conditions change, suppliers differ from assumptions, rebound effects appear and people adapt processes in unexpected ways. The decision therefore needs an owner, indicators, a review point and a response if results fall outside expectations.",
            "This is the logic of an Environmental Management System (EMS): understand context, identify significant issues, plan controls, implement, measure, review and improve. ISO 14001 provides a systematic framework for managing environmental responsibilities and continual improvement. The course uses that logic as a practical decision loop; it does not replace the Airbus EMS or its current procedures.",
            "A monitored decision produces organisational learning. Even when a trial does not deliver the expected benefit, transparent results can prevent repetition and improve the next design or process."
          ],
          points: [
            "Name the person or function that owns the result after approval.",
            "Define a leading indicator, an outcome indicator and a review date.",
            "Set a stop, adapt or escalate condition before implementation."
          ],
          callout: { label: "Management loop", text: "Plan → act → measure → learn → improve. Without the last three steps, an aspiration is not a controlled improvement." }
        }
      ],
      visual: {
        title: "The six-question decision chain",
        intro: "Use the chain before accepting any option described as an environmental improvement.",
        items: [
          { code: "1", title: "Purpose", text: "What operational need must the option fulfil?" },
          { code: "2", title: "Baseline", text: "What credible alternative are we comparing it with?" },
          { code: "3", title: "Boundary", text: "Which lifecycle stages, locations and periods are included?" },
          { code: "4", title: "Evidence", text: "What is measured, estimated, assumed or missing?" },
          { code: "5", title: "Trade-off", text: "What improves, worsens or remains uncertain?" },
          { code: "6", title: "Control", text: "Who owns the outcome and what will be monitored?" }
        ]
      },
      caseStudy: {
        eyebrow: "Applied example · mission readiness",
        title: "When speed, stock and environmental performance pull in different directions",
        context: "A programme is reviewing how to respond to unpredictable demand for a critical spare. Larger local stock could reduce urgent transport and downtime, but it may tie up material, create obsolescence and increase storage. A leaner stock policy could reduce inventory but increase the probability of expedited shipments.",
        analysis: "A credible comparison would use the same required service level, examine demand variability, failure rate, repair lead time, transport modes, obsolescence and the consequence of non-availability. It would not claim that either ‘more stock’ or ‘less stock’ is automatically sustainable. A differentiated policy may be strongest: repairable components, criticality classes, pooled stock, supplier agreements and monitored emergency logistics."
      },
      scenario: {
        title: "Choose the strongest analysis plan",
        brief: "A proposed process change reduces electricity recorded by one workshop by 14%, but a heat-treatment step moves to a supplier. No supplier energy data is yet available and transport increases.",
        question: "What should the team do before presenting the change as an environmental improvement?",
        options: [
          { text: "Use the 14% figure because the workshop meter is direct and therefore sufficient.", feedback: "Direct measurement is useful, but the boundary changed. The figure describes the workshop, not the whole changed process." },
          { text: "Reject the change because missing supplier data makes any comparison impossible.", feedback: "Uncertainty should be managed, not automatically converted into paralysis. Estimates and a data-improvement plan may support a controlled decision." },
          { text: "Restate the baseline and boundary, estimate the transferred step and transport, test whether uncertainty could change the conclusion, and define follow-up data.", feedback: "This protects the credibility of the comparison while allowing proportionate progress." },
          { text: "Describe the change as efficient without using the percentage.", feedback: "Removing the number does not solve the boundary problem; the vague claim would be even harder to verify." }
        ],
        correct: 2
      },
      checks: [
        { question: "Which statement best describes a system boundary?", options: ["The target value chosen by management.", "The processes, lifecycle stages, locations and time period included in an analysis.", "The maximum uncertainty permitted in a calculation."], correct: 1, explanation: "A boundary defines what the comparison includes and excludes." },
        { question: "What is the best response to decision-critical uncertainty?", options: ["Hide it until the project is approved.", "Treat all estimates as invalid.", "Show it, test its influence and improve the evidence proportionately."], correct: 2, explanation: "Visible uncertainty improves judgement and directs further data collection." },
        { question: "When is an improvement under control?", options: ["When it has an attractive target.", "When an owner, indicators, review point and response conditions are defined.", "When one metric is better than last year."], correct: 1, explanation: "Control connects the decision to monitored implementation and learning." }
      ],
      reflection: "Choose one improvement discussed in your area. Write its baseline, boundary and the uncertainty most likely to change the conclusion.",
      takeaway: "A credible sustainability decision makes purpose, comparison, evidence, trade-offs and follow-up visible.",
      sources: ["iso-14001", "airbus-sustainability", "airbus-a400m-mro"]
    },
    {
      id: "m2",
      number: "M2",
      short: "Lifecycle",
      title: "Lifecycle, Circularity & Materials",
      strapline: "Retain value safely across decades of design, production and service.",
      duration: "11–13 min",
      colour: "#00a89d",
      image: "assets/p2-circularity.jpg",
      alt: "Aerospace engineers inspecting a lightweight structure, advanced materials and manufacturing data.",
      supportImage: "assets/m2-material-review.jpg",
      supportAlt: "A multidisciplinary aerospace team comparing components, material samples and evidence.",
      promise: "Understand lifecycle thinking, Life Cycle Assessment, the circular value hierarchy and the role of technical traceability.",
      coreQuestion: "How can aerospace retain more product and material value without compromising safety or compliance?",
      objectives: [
        "Map environmental questions across a complete aerospace lifecycle.",
        "Explain what Life Cycle Assessment can and cannot prove.",
        "Apply a safe value-retention hierarchy before recycling."
      ],
      lessons: [
        {
          label: "01 · Lifecycle thinking",
          title: "Design decisions travel through the entire service life",
          paragraphs: [
            "Aerospace products combine long service lives, strict technical requirements, complex supply chains and repeated maintenance. A material selected during design affects extraction, processing, manufacturing scrap, joining methods, inspection, repair, upgrades, disassembly and end-of-life routes. Lifecycle thinking asks teams to consider those connected stages before optimising one of them in isolation.",
            "Airbus publicly describes a lifecycle approach spanning design, production and manufacturing, the supply chain, operations and end of life. For Defence and Space, the exact balance between stages will differ by product and mission. The useful principle is stable: an apparent reduction at one stage may increase impacts or constrain value retention at another.",
            "Lifecycle thinking is not the same as completing a full numerical assessment for every decision. It is a screening habit: identify where important impacts and dependencies may occur, then decide what level of analysis is proportionate."
          ],
          points: [
            "Map raw materials, production, transport, service, maintenance and end of life.",
            "Look for design choices that lock in later waste or prevent repair.",
            "Include supporting equipment, packaging and process consumables where material."
          ],
          callout: { label: "Early leverage", text: "The earlier a requirement is questioned, the more options usually remain for material reduction, repairability and safe recovery." }
        },
        {
          label: "02 · Life Cycle Assessment",
          title: "LCA compares systems, not just products",
          paragraphs: [
            "Life Cycle Assessment (LCA) is a structured method for evaluating environmental aspects and potential impacts across a lifecycle. ISO 14040 describes four connected phases: goal and scope definition, inventory analysis, impact assessment and interpretation. The goal states why the study exists and who will use it. The scope defines the functional unit, system boundary, data requirements and assumptions.",
            "The Life Cycle Inventory (LCI) quantifies relevant inputs and outputs such as energy, materials, emissions and waste. Life Cycle Impact Assessment (LCIA) translates inventory flows into potential impact categories. Interpretation checks consistency, sensitivity, limitations and what the evidence supports. Results depend on methodological choices; LCA is not a machine that produces one context-free truth.",
            "Fair comparison requires equivalent function. Comparing one kilogram of two materials can mislead if different quantities, durability or maintenance are required to deliver the same performance. In aerospace, certification, reliability and service-life requirements are part of the function, not inconvenient details to remove from the analysis."
          ],
          points: [
            "Define the functional unit before collecting large amounts of data.",
            "Keep allocation choices and data quality visible.",
            "Use sensitivity analysis to test assumptions that drive the result."
          ],
          callout: { label: "Acronym", text: "LCA means Life Cycle Assessment. LCI and LCIA are the inventory and impact-assessment phases within an LCA." }
        },
        {
          label: "03 · Circular value",
          title: "Recycling matters, but it comes after higher-value options",
          paragraphs: [
            "Circularity aims to reduce virgin resource demand and keep products, components and materials at their highest safe value for as long as appropriate. The European waste hierarchy gives priority to prevention, followed by preparing for reuse, recycling, other recovery and disposal. In product systems, teams can broaden the question to rethink, reduce, maintain, repair, refurbish, remanufacture, repurpose and recycle.",
            "These options are not interchangeable. Repair can retain more value than recycling because the component’s manufacturing effort and function remain, but only when technical condition, configuration, documentation and approved use support it. Reuse without traceability can create unacceptable risk. Recycling may be the correct route where life extension is unsafe, prohibited or environmentally worse after necessary processing.",
            "The strongest circular decision therefore combines a value hierarchy with engineering, airworthiness, quality, substances and environmental evidence. ‘Recycled’ is not automatically the same as ‘lowest impact’, and ‘bio-based’ is not automatically suitable or preferable."
          ],
          points: [
            "Prevent unnecessary material and scrap before optimising waste treatment.",
            "Assess safe life extension, repair and reuse before destroying product value.",
            "Compare recovery quality, processing burden and permitted future use."
          ],
          callout: { label: "Circularity question", text: "What is the highest-value safe route available for this product, component or material — and what evidence makes that route credible?" }
        },
        {
          label: "04 · Traceability",
          title: "Material value is inseparable from information",
          paragraphs: [
            "A high-performance alloy, composite or electronic assembly cannot be safely retained if its identity and condition are unknown. Technical records, batch information, composition, treatments, maintenance history and chain of custody determine whether an item can be repaired, reused, remanufactured or recycled into a demanding application.",
            "A material passport is one possible way of organising that information, but the principle is broader than any tool. Data must remain linked to the physical item, understandable to the next user and governed throughout the relevant life. Digital traceability can enable circularity only when records are accurate, interoperable and maintained.",
            "For regulated substances, traceability also supports compliance and safe end-of-life treatment. A circular route that loses substance information can transfer risk to dismantlers, recyclers or future users."
          ],
          points: [
            "Preserve identity, composition, condition and authorised-use information.",
            "Design records for the people who will need them years later.",
            "Treat data continuity as part of product and material value."
          ],
          callout: { label: "Key idea", text: "Circularity is a physical loop and an information loop. Break either one and high-value recovery becomes harder." }
        }
      ],
      visual: {
        title: "Four phases of a Life Cycle Assessment",
        intro: "The phases are iterative: findings can send the team back to refine scope, data or assumptions.",
        items: [
          { code: "1", title: "Goal & scope", text: "Purpose, audience, functional unit, boundary and method." },
          { code: "2", title: "Inventory", text: "Inputs and outputs across the defined product system." },
          { code: "3", title: "Impact assessment", text: "Translate flows into potential environmental impacts." },
          { code: "4", title: "Interpretation", text: "Check completeness, sensitivity, limitations and conclusions." }
        ]
      },
      caseStudy: {
        eyebrow: "Applied example · aerospace-grade metal",
        title: "A kilogram of scrap can contain very different amounts of retained value",
        context: "Machining offcuts that are clean, identified and segregated may be suitable for higher-quality recovery than mixed or contaminated metal. A worn tool or fixture may retain even more value if a controlled repair safely extends its use. Weight diverted from disposal does not by itself show how much product or material value was retained.",
        analysis: "A stronger measurement set separates waste prevention, product life extension, component reuse, closed-loop or quality-preserving material recovery, downcycling and disposal. It also records contamination, transport and processing. This reveals whether the system is merely moving tonnes or actually retaining value."
      },
      scenario: {
        title: "A fixture reaches its planned replacement point",
        brief: "A titanium assembly fixture shows local wear. Engineering believes repair may extend its life; purchasing can source a replacement; the recycler can accept the alloy. Records are complete, but the repair route has not yet been qualified.",
        question: "Which is the strongest circular next step?",
        options: [
          { text: "Recycle it immediately because metal recycling closes the loop.", feedback: "Recycling recovers material but destroys the fixture’s product value before safe life extension has been assessed." },
          { text: "Continue using it without review because extension avoids waste.", feedback: "Circularity cannot override technical condition, qualification or safety controls." },
          { text: "Assess and, if viable, qualify the repair route; retain traceability; compare life extension with replacement; recycle only when higher-value safe routes are not suitable.", feedback: "This follows the value hierarchy while preserving engineering and compliance requirements." },
          { text: "Buy new and keep the worn fixture indefinitely as contingency stock.", feedback: "Unused inventory is not automatically retained value; it can create storage, control and obsolescence burdens." }
        ],
        correct: 2
      },
      checks: [
        { question: "What makes two options comparable in an LCA?", options: ["They have the same mass.", "They deliver the same defined function under equivalent conditions.", "They use the same supplier."], correct: 1, explanation: "The functional unit anchors a fair comparison." },
        { question: "Which route normally retains the most value?", options: ["The highest safe and technically viable option in the hierarchy.", "Recycling in every situation.", "Disposal with energy recovery."], correct: 0, explanation: "Value retention is context-specific and subject to safety, quality and compliance." },
        { question: "Why is traceability important for circularity?", options: ["It makes every item reusable.", "It connects identity, condition and permitted use to the physical item.", "It eliminates the need for technical review."], correct: 1, explanation: "Information enables informed and controlled recovery decisions; it does not replace approval." }
      ],
      reflection: "Identify one material, component or consumable in your area. What higher-value safe route could be assessed before recycling or disposal, and which record would be essential?",
      takeaway: "Circular aerospace retains the greatest safe value by combining lifecycle evidence, engineering judgement and traceability.",
      sources: ["airbus-lifecycle", "iso-14040", "eu-waste"]
    },
    {
      id: "m3",
      number: "M3",
      short: "Digital",
      title: "Digital Innovation & Environmental Evidence",
      strapline: "Use data and models to improve judgement — without hiding their limits.",
      duration: "10–12 min",
      colour: "#7857a5",
      image: "assets/p3-digital.jpg",
      alt: "A specialist using Earth-observation and industrial data in a Defence and Space mission-control environment.",
      supportImage: "assets/m3-digital-design.jpg",
      supportAlt: "Engineers using digital models and physical components together in an aerospace workshop.",
      promise: "Evaluate data provenance, model fitness, Artificial Intelligence oversight and the environmental footprint of digital choices.",
      coreQuestion: "When does a digital result improve a sustainability decision, and when does it create false confidence?",
      objectives: [
        "Assess whether environmental data are fit for the decision.",
        "Distinguish a model prediction from observed reality.",
        "Apply proportionate human oversight to AI-supported recommendations."
      ],
      lessons: [
        {
          label: "01 · Data fitness",
          title: "More data are not the same as better evidence",
          paragraphs: [
            "A dashboard can make weak data look authoritative. Before using an environmental figure, ask where it came from, what it represents, how it was transformed and who owns it. Data provenance is the documented chain from source to result. It helps a reviewer understand whether a number is measured, calculated, estimated or imported from another context.",
            "Fitness for purpose matters more than abstract perfection. Monthly site electricity may support a broad trend, but not a comparison between two short production trials. A supplier average may support screening, but not a product-specific public claim. Spatial data at regional resolution may not describe the habitat condition of a specific parcel.",
            "Quality dimensions include completeness, accuracy, timeliness, consistency, representativeness and traceability. The relevant dimensions depend on the decision. A useful data plan therefore starts with the question, not with the available dashboard."
          ],
          points: [
            "Trace the number back to its source and transformation rules.",
            "Match spatial, temporal and technical resolution to the decision.",
            "Separate missing data from a genuine value of zero."
          ],
          callout: { label: "Red flag", text: "A precise-looking number with no source, boundary, owner or update date is not strong evidence." }
        },
        {
          label: "02 · Models and digital twins",
          title: "A model is a purposeful simplification",
          paragraphs: [
            "Models help teams explore relationships, compare scenarios and test conditions that are expensive or impossible to observe directly. A digital twin may combine geometry, engineering rules, sensor data and operating assumptions. Its value depends on how closely the model’s intended use matches the decision being made.",
            "Every model has a boundary and validity domain. It may perform well for normal operations but poorly under unusual loads, changing climate conditions or a new supplier process. Calibration checks a model against observations; validation tests whether it is sufficiently accurate for its intended use. Neither turns a model into reality.",
            "Sustainability models can amplify uncertainty because results combine multiple datasets and assumptions. Teams should inspect drivers, run sensitivity tests and compare predictions with monitored outcomes. A single score can be convenient, but it can also conceal important trade-offs."
          ],
          points: [
            "State the intended use and conditions under which the model is valid.",
            "Show the variables that drive the result.",
            "Close the loop with observed outcomes and model updates."
          ],
          callout: { label: "Model discipline", text: "Useful models support a decision and expose uncertainty; they do not remove the need for accountable judgement." }
        },
        {
          label: "03 · Artificial Intelligence",
          title: "Human oversight must be meaningful, not ceremonial",
          paragraphs: [
            "Artificial Intelligence (AI) can identify patterns, forecast demand, optimise sequences or classify imagery. Its output reflects training data, model design, objectives and deployment conditions. A high-performing model can still be unsuitable if the data exclude relevant situations, the optimisation objective is too narrow or users cannot recognise when the recommendation is outside its valid context.",
            "The European Union’s AI framework emphasises elements such as data governance, documentation, transparency, human oversight, robustness and safety for relevant systems. In practice, human oversight means that a competent person can understand the intended use, question the output, detect anomalies, override or stop the system and remain accountable for the decision.",
            "The level of control should reflect consequence. An AI tool suggesting where to investigate energy loss can be handled differently from a tool influencing safety-relevant maintenance. Environmental benefit does not excuse weak governance, and technical novelty does not prove value."
          ],
          points: [
            "Define the decision the AI may support and the decisions it may not make.",
            "Give reviewers enough information to challenge a recommendation.",
            "Monitor drift, unexpected outcomes and changes in operating context."
          ],
          callout: { label: "Human in control", text: "Oversight is meaningful only when the reviewer has competence, time, authority and information to intervene." }
        },
        {
          label: "04 · The footprint of digital",
          title: "Digital tools also consume resources",
          paragraphs: [
            "Sensors, networks, storage, computing and devices require energy, materials and infrastructure. A digital solution should therefore be evaluated for both its enabled benefit and its own burden. The relevant question is not whether digitalisation is good or bad, but whether the selected architecture is proportionate to the problem and delivers monitored value.",
            "A high-frequency sensor network may reveal losses that could not otherwise be managed, yet collecting and retaining every possible variable indefinitely may add cost and resource use without improving decisions. The team can examine data minimisation, sampling frequency, retention, model size, reuse of existing infrastructure and the avoided operational burden.",
            "A credible digital project defines a baseline, intended outcome and review point. If the tool does not change decisions or performance, the organisation may be collecting data rather than creating capability."
          ],
          points: [
            "Collect the data needed for a clear use case.",
            "Compare enabled benefit with computing, storage and hardware burden.",
            "Retire or redesign tools that do not improve decisions."
          ],
          callout: { label: "Test of value", text: "What decision will this digital capability change, and how will we know that the change delivered a net benefit?" }
        }
      ],
      visual: {
        title: "From signal to accountable action",
        intro: "Each transition can introduce error, bias or lost context. Review the complete chain, not only the dashboard.",
        items: [
          { code: "S", title: "Sense", text: "Meter, sensor, record, image or human observation." },
          { code: "D", title: "Data", text: "Clean, join, label and retain with provenance." },
          { code: "M", title: "Model", text: "Apply rules or algorithms within a validity domain." },
          { code: "J", title: "Judge", text: "Review uncertainty, trade-offs and operational context." },
          { code: "A", title: "Act", text: "Implement with ownership and controlled conditions." },
          { code: "L", title: "Learn", text: "Compare outcome with prediction and update the system." }
        ]
      },
      caseStudy: {
        eyebrow: "Applied example · predictive maintenance",
        title: "A useful prediction is not automatically the right intervention",
        context: "A model identifies an increased probability of component degradation. Acting immediately may prevent an unscheduled event, but it may also replace a serviceable part and trigger logistics, material and maintenance impacts. Waiting may preserve useful life but increase operational risk.",
        analysis: "The decision requires model confidence, consequence of failure, inspection alternatives, remaining useful life, maintenance opportunity, part availability and monitoring capability. A controlled inspection or revised threshold may be stronger than either automatic replacement or automatic deferral. The model informs the choice; it does not own it."
      },
      scenario: {
        title: "An optimisation result looks impressive",
        brief: "An AI tool predicts a 9% energy reduction from a new production sequence. Training data exclude winter conditions, one supplier step is represented by an old average and operators cannot explain the main driver.",
        question: "What is the strongest next step?",
        options: [
          { text: "Deploy immediately because 9% is larger than the improvement target.", feedback: "The size of the predicted benefit does not resolve model-validity and data-quality gaps." },
          { text: "Ban the tool because AI cannot be used for environmental decisions.", feedback: "A proportionate controlled trial may generate useful evidence. The issue is governance and fitness, not the technology label." },
          { text: "Validate the driver and supplier data, test winter sensitivity, define human review and run a monitored trial with stop conditions.", feedback: "This uses the model as a learning tool while keeping accountability and uncertainty visible." },
          { text: "Publish the result as a potential reduction without changing the model.", feedback: "The qualifier ‘potential’ does not compensate for unresolved limitations if the claim is used to imply performance." }
        ],
        correct: 2
      },
      checks: [
        { question: "What does data provenance describe?", options: ["The visual design of a dashboard.", "The chain from data source through transformations to the reported result.", "The maximum amount of data a system can store."], correct: 1, explanation: "Provenance makes data origin, transformation and ownership reviewable." },
        { question: "What makes human oversight meaningful?", options: ["A person clicks approve after the model runs.", "A competent reviewer has information, time and authority to question or intervene.", "The model has high accuracy in training."], correct: 1, explanation: "Oversight must be capable of changing the outcome, not just witnessing it." },
        { question: "How should the environmental value of a digital tool be tested?", options: ["By the volume of data collected.", "By its novelty.", "By comparing enabled benefit with its resource burden and monitored decision outcomes."], correct: 2, explanation: "Net value depends on actual use and outcomes, not data volume or novelty." }
      ],
      reflection: "Name one dashboard, model or AI-supported result used in your work. Which provenance, validity or oversight question should be asked before relying on it?",
      takeaway: "Digital capability creates value when fit-for-purpose evidence supports an accountable, monitored decision.",
      sources: ["eu-ai-act", "airbus-human-rights", "iso-50001"]
    },
    {
      id: "m4",
      number: "M4",
      short: "People",
      title: "People, Skills & Improvement Culture",
      strapline: "Turn awareness into the ability to notice, challenge, test and learn.",
      duration: "9–11 min",
      colour: "#d58b22",
      image: "assets/m4-people-hero.jpg",
      alt: "A diverse aerospace team discussing components, process information and improvement opportunities.",
      supportImage: "assets/m4-team-learning.jpg",
      supportAlt: "A multidisciplinary team holding a practical sustainability discussion in an aerospace workplace.",
      promise: "Learn why role-specific competence, psychological safety, clear ownership and structured experiments determine whether change lasts.",
      coreQuestion: "What enables people to convert sustainability knowledge into safe, credible improvement?",
      objectives: [
        "Separate awareness, competence and authority.",
        "Recognise weak signals without overstating them as solutions.",
        "Design a bounded experiment that creates reliable learning."
      ],
      lessons: [
        {
          label: "01 · From awareness to competence",
          title: "Knowing a concept is not the same as being able to use it",
          paragraphs: [
            "Awareness helps a person recognise that an environmental issue exists. Competence means being able to apply relevant knowledge and skills in a role. Authority defines which decisions that person may make. Confusing the three creates frustration: employees may be encouraged to act without the information or mandate required, while specialists may be expected to own every local improvement.",
            "Role-specific learning is more useful than a catalogue of slogans. A buyer may need to identify evidence gaps and supplier requirements. A maintenance team may need to connect consumables, hazardous substances, component life and logistics. An engineer may need lifecycle screening and design trade-offs. A manager may need to set boundaries, resources and review points.",
            "A strong course therefore does not end with ‘be more sustainable’. It gives learners a repeatable decision habit and a realistic next action."
          ],
          points: [
            "Define what each role should notice, decide, escalate and record.",
            "Practise with real constraints rather than idealised examples.",
            "Give access to the owner, procedure or tool needed for the next step."
          ],
          callout: { label: "Learning test", text: "After training, what can the learner do differently on the next working day?" }
        },
        {
          label: "02 · Speaking up",
          title: "Weak signals need a safe route into the system",
          paragraphs: [
            "Operators, technicians, engineers, buyers and facility teams often see emerging inefficiencies before they appear in a formal indicator. A recurring leak, unnecessary purge, packaging failure, difficult repair or supplier-data gap may begin as an observation rather than a complete business case.",
            "A healthy improvement culture allows people to raise those signals without demanding that the observer solve the entire system. It also protects rigour: an interesting observation is not announced as a proven environmental benefit. The team records the issue, involves the correct technical and process owners, checks constraints and decides whether further analysis is justified.",
            "Psychological safety does not mean that every proposal is accepted. It means that respectful challenge can be heard and assessed. Clear decision rights prevent participation from becoming ambiguity."
          ],
          points: [
            "Describe what was observed, where, when and how often.",
            "Separate the problem signal from the proposed solution.",
            "Route the issue to people with technical, operational and environmental authority."
          ],
          callout: { label: "Useful structure", text: "Observation → possible consequence → evidence available → evidence missing → owner to involve." }
        },
        {
          label: "03 · Experiments",
          title: "Small tests are valuable when they are designed to learn",
          paragraphs: [
            "A pilot can reduce uncertainty before a larger commitment, but only if it has a defined question. ‘Try the new process and see’ produces anecdotes. A bounded experiment states the baseline, the change, expected mechanism, measures, protected constraints, duration and decision rule.",
            "Safety, quality, security, airworthiness and compliance remain non-negotiable. Within those constraints, the experiment can compare energy, time, material, rework, workload or another relevant outcome. It should also look for unintended effects, including work transferred to another team or period.",
            "Negative results are part of learning. If a trial is quietly forgotten when it fails, the organisation may repeat the same assumption. Recording why the expected mechanism did not occur can be as valuable as a successful result."
          ],
          points: [
            "Write the hypothesis and success criteria before the trial.",
            "Protect non-negotiable requirements and define stop conditions.",
            "Capture unintended effects and share the learning decision."
          ],
          callout: { label: "Pilot ≠ proof", text: "A successful local test supports a next decision. It does not automatically prove that the result will scale across sites, products or conditions." }
        },
        {
          label: "04 · Ownership and learning",
          title: "Improvement needs an operating rhythm",
          paragraphs: [
            "Ideas often stall between functions because nobody owns the complete path. The environmental team may identify an issue but not control the process; the process owner may control implementation but need specialist evidence; finance, procurement, quality or information management may hold critical decisions.",
            "A simple responsibility map clarifies who decides, who contributes evidence, who implements and who must be informed. The owner also chooses the review rhythm: daily control for an unstable process, a weekly pilot review or a periodic management-system check. Learning becomes part of work when it has a cadence and a destination.",
            "Recognition should reward the quality of problem-solving, not only large claimed savings. Teams should be able to say ‘the hypothesis was wrong’ without turning the experiment into a personal failure."
          ],
          points: [
            "Name one accountable decision owner.",
            "Match review frequency to process variability and consequence.",
            "Store evidence and lessons where future teams can find them."
          ],
          callout: { label: "Culture in practice", text: "A mature team can challenge a claim, stop a weak idea and still keep people willing to propose the next improvement." }
        }
      ],
      visual: {
        title: "The improvement learning loop",
        intro: "The loop turns a weak signal into controlled organisational learning.",
        items: [
          { code: "O", title: "Observe", text: "Capture the signal without exaggerating it." },
          { code: "F", title: "Frame", text: "Define the problem, purpose and boundary." },
          { code: "T", title: "Test", text: "Run a safe, bounded experiment." },
          { code: "M", title: "Measure", text: "Compare outcomes and unintended effects." },
          { code: "D", title: "Decide", text: "Adapt, scale, standardise or stop." },
          { code: "S", title: "Share", text: "Make evidence and lessons reusable." }
        ]
      },
      caseStudy: {
        eyebrow: "Applied example · process observation",
        title: "A technician sees repeated material and energy loss",
        context: "The pattern is visible during a particular maintenance task, but production pressure is high and no dedicated meter separates the step. The technician proposes changing the sequence, while the process owner is concerned about quality and repeatability.",
        analysis: "The observation should be logged with frequency and conditions, then separated from the proposed solution. The team can review quality constraints, use a temporary measurement method and compare a limited number of controlled cycles. A short test plan preserves the signal without presenting an unverified solution as fact."
      },
      scenario: {
        title: "An improvement idea arrives without complete evidence",
        brief: "An operator reports that a recurring purge appears longer than necessary. The estimated annual saving is large, but the estimate is based on memory and the purge protects process quality.",
        question: "What is the strongest management response?",
        options: [
          { text: "Reject the idea because the operator cannot prove the saving.", feedback: "The weak signal may be valuable even though the business case is not yet complete." },
          { text: "Announce the saving and ask the team to deliver it.", feedback: "This converts an unverified estimate into a claim and may create pressure to weaken a protected control." },
          { text: "Record the observation, involve quality and process owners, measure the actual purge profile and design a bounded test if a safe alternative exists.", feedback: "This keeps the idea alive while protecting quality and evidence." },
          { text: "Shorten the purge informally for one shift to see what happens.", feedback: "An uncontrolled change is not an acceptable experiment when quality requirements are involved." }
        ],
        correct: 2
      },
      checks: [
        { question: "What is the difference between awareness and competence?", options: ["There is no difference.", "Awareness recognises an issue; competence enables role-relevant application.", "Competence means having authority over every decision."], correct: 1, explanation: "Competence combines relevant knowledge and skills; authority remains a separate question." },
        { question: "What makes a pilot credible?", options: ["A positive result.", "A clear hypothesis, baseline, controls, measures and decision rule.", "A large number of participants."], correct: 1, explanation: "Design quality determines whether the pilot creates reliable learning." },
        { question: "How should an early observation be communicated?", options: ["As a guaranteed saving.", "As a problem signal with available and missing evidence.", "Only after a full solution is developed."], correct: 1, explanation: "This preserves both participation and rigour." }
      ],
      reflection: "Write one weak environmental signal people may notice in your area. Who should own its assessment, and what is the smallest safe test that could reduce uncertainty?",
      takeaway: "Improvement culture combines permission to speak with the discipline to test, measure and learn.",
      sources: ["iso-14001", "greencomp", "airbus-sustainability"]
    },
    {
      id: "m5",
      number: "M5",
      short: "Value chain",
      title: "Responsible & Resilient Value Chain",
      strapline: "Make upstream evidence, substances and dependencies visible.",
      duration: "11–13 min",
      colour: "#627587",
      image: "assets/p5-value-chain.jpg",
      alt: "An aerospace team connecting materials, components, suppliers and logistics information.",
      supportImage: "assets/m5-value-chain-review.jpg",
      supportAlt: "A cross-functional team reviewing a component, logistics map and environmental evidence beside an aircraft structure.",
      promise: "Understand due diligence, supplier evidence, regulated-substance traceability and the difference between efficiency and resilience.",
      coreQuestion: "How can a programme manage impacts and continuity when critical evidence sits beyond the direct site boundary?",
      objectives: [
        "Map environmental impacts and operational dependencies across tiers.",
        "Use risk-based due diligence instead of simple questionnaires.",
        "Integrate substance, logistics and resilience evidence into sourcing decisions."
      ],
      lessons: [
        {
          label: "01 · Extended responsibility",
          title: "The product system extends beyond direct suppliers",
          paragraphs: [
            "Aerospace value chains include raw-material extraction, processors, component manufacturers, logistics providers, service partners and waste or recovery operators. Environmental and social impacts may occur several tiers away from final assembly. Operational dependency can be equally distant: a specialised treatment, scarce material or single approved source can constrain the entire programme.",
            "Visibility does not mean collecting every possible data point from every tier at once. The team starts by mapping critical products, processes, geographies and dependencies. It distinguishes direct evidence from supplier declarations, industry averages and assumptions. The aim is to identify where missing information could change a sourcing, design, compliance or continuity decision.",
            "Airbus publicly describes responsible supply-chain expectations and a supplier code of conduct. Within any specific Airbus process, employees must use the current approved requirements and owners; this course explains the decision logic behind effective due diligence."
          ],
          points: [
            "Map critical materials, processes, locations and single points of dependency.",
            "Identify which tier actually controls the impact or evidence.",
            "Prioritise gaps by consequence and influence, not by convenience."
          ],
          callout: { label: "Boundary check", text: "A low site footprint does not describe a low-impact product if energy, substances or waste have simply moved upstream." }
        },
        {
          label: "02 · Due diligence",
          title: "A questionnaire is evidence collection, not due diligence",
          paragraphs: [
            "Due diligence is a risk-based process for identifying, preventing, mitigating and accounting for adverse impacts. The Organisation for Economic Co-operation and Development (OECD) guidance frames it as an ongoing cycle embedded in policies and management systems, not a one-time supplier score.",
            "A useful process identifies actual and potential impacts, prioritises the most significant, takes action, tracks results, communicates and provides for remediation where appropriate. Leverage matters: the response may include requirements, technical collaboration, improvement plans, purchasing decisions, escalation or, in some situations, disengagement through the relevant governance.",
            "Risk-based does not mean ignoring smaller suppliers. It means focusing depth where severity, likelihood, dependency or lack of control is greatest. A supplier’s missing data are not proof of poor performance, but they are a limitation that must be managed."
          ],
          points: [
            "Translate expectations into specifications, contracts and review criteria.",
            "Verify decision-critical claims with proportionate evidence.",
            "Track whether corrective actions change outcomes, not only whether forms are closed."
          ],
          callout: { label: "Acronym", text: "OECD means Organisation for Economic Co-operation and Development. Its due-diligence guidance is a general responsible-business framework." }
        },
        {
          label: "03 · Substances and information",
          title: "Material performance and chemical compliance travel together",
          paragraphs: [
            "Aerospace materials and processes can depend on substances with specific hazard, restriction, authorisation or information requirements. The European Union’s Registration, Evaluation, Authorisation and Restriction of Chemicals regulation is known as REACH. Substances of Very High Concern are commonly abbreviated as SVHCs.",
            "The exact obligations depend on the substance, concentration, use, role in the supply chain and current legal status. Employees must follow approved Airbus compliance processes and current legal advice. The general sustainability lesson is that substitution, repair, reuse and recycling decisions need accurate composition and use information.",
            "A substitute can reduce one hazard but affect technical performance, service life, process energy, worker exposure or supply resilience. A structured substitution assessment compares function, hazard, exposure, lifecycle implications, qualification effort and availability rather than selecting an alternative from one attribute."
          ],
          points: [
            "Maintain composition and use information across supplier and product changes.",
            "Escalate unclear or changing substance status through the approved process.",
            "Assess regrettable substitution and lifecycle trade-offs."
          ],
          callout: { label: "Compliance guardrail", text: "This course does not determine whether a substance or use is permitted. Always use the current Airbus process, safety data and legal requirements." }
        },
        {
          label: "04 · Resilience",
          title: "The most efficient chain can still be fragile",
          paragraphs: [
            "Efficiency reduces unused capacity, time, inventory or cost. Resilience is the ability to anticipate, absorb, adapt to and recover from disruption. The two can reinforce each other, but extreme optimisation may remove buffers and alternatives that protect mission or production continuity.",
            "Environmental change can create supply risk through water scarcity, flooding, heat, energy constraints, ecosystem degradation or transport disruption. Regulatory change, scarce materials, geopolitical events and capacity limitations can interact with those pressures. A resilient analysis examines exposure, time to recover, substitutability, supplier capability and the consequence of failure.",
            "Possible responses include design substitution, repair capability, dual sourcing, pooled inventory, local or regional supply, supplier development and contingency logistics. Each response has trade-offs; moving to a second source is not an improvement if it introduces hidden environmental, social or quality risks."
          ],
          points: [
            "Differentiate criticality from purchase value.",
            "Compare time to recover with the programme’s tolerance for disruption.",
            "Evaluate the impacts and evidence of resilience alternatives."
          ],
          callout: { label: "Resilience question", text: "Which dependency could stop the mission or process, how quickly would it be visible, and which options exist before failure?" }
        }
      ],
      visual: {
        title: "The due-diligence cycle",
        intro: "The cycle is continuous. New evidence, incidents and supplier changes can reopen earlier stages.",
        items: [
          { code: "1", title: "Embed", text: "Put expectations into governance and decisions." },
          { code: "2", title: "Identify", text: "Map actual and potential impacts and dependencies." },
          { code: "3", title: "Prioritise", text: "Focus on severity, likelihood and decision consequence." },
          { code: "4", title: "Act", text: "Prevent, mitigate, build capability or escalate." },
          { code: "5", title: "Track", text: "Check evidence and whether outcomes improve." },
          { code: "6", title: "Communicate", text: "Keep records and explain actions and limitations." }
        ]
      },
      caseStudy: {
        eyebrow: "Applied example · lower-mass component",
        title: "A technical advantage arrives with incomplete upstream evidence",
        context: "A supplier proposes a lighter component that could deliver operational benefit. Lower-tier process data, substance composition and recovery routes are incomplete. A current supplier has stronger records but limited capacity and a longer delivery time.",
        analysis: "A cross-functional review should separate the technical benefit from unresolved evidence. It can identify decision-critical substance and process data, compare qualification and lifecycle implications, assess capacity and recovery time, and agree an improvement plan with gates. Neither immediate acceptance nor automatic rejection manages the full system."
      },
      scenario: {
        title: "A critical supplier reports a water-risk disruption",
        brief: "A specialised processor in a water-stressed region faces new abstraction limits. Switching quickly could threaten qualification and introduce unknown substance controls; maintaining the source could create continuity risk.",
        question: "What is the strongest response?",
        options: [
          { text: "Increase orders immediately to build stock without further analysis.", feedback: "Stock may buy time but can amplify demand, cost, obsolescence and local pressure. It is one option, not a complete strategy." },
          { text: "Switch to the first available supplier because geographic diversification is always more resilient.", feedback: "A new source needs technical, substance, environmental and capacity due diligence." },
          { text: "Map criticality and recovery time, verify the supplier plan, assess temporary buffers, alternative processes or sources, and compare the risks of each pathway.", feedback: "This creates a staged resilience response with evidence and technical control." },
          { text: "Wait until production is interrupted because forecasts are uncertain.", feedback: "Uncertainty is precisely why options and triggers should be prepared before disruption." }
        ],
        correct: 2
      },
      checks: [
        { question: "What makes due diligence different from a supplier questionnaire?", options: ["It is shorter.", "It is an ongoing risk-based cycle that includes action and tracking.", "It removes the need for supplier engagement."], correct: 1, explanation: "Information collection is only one part of due diligence." },
        { question: "What should a substitution assessment compare?", options: ["Hazard only.", "Price only.", "Function, hazard, exposure, lifecycle, qualification and supply implications."], correct: 2, explanation: "A multi-criteria assessment reduces the risk of transferring problems." },
        { question: "How does resilience differ from efficiency?", options: ["Resilience considers the ability to absorb and recover from disruption.", "Resilience always requires more inventory.", "There is no difference."], correct: 0, explanation: "Resilience can involve several design, supply, capability and buffer strategies." }
      ],
      reflection: "Identify one critical material, supplier process or substance dependency in your area. Which missing evidence or recovery-time question would most affect resilience?",
      takeaway: "A responsible value chain turns expectations into traceable evidence, improvement action and prepared alternatives.",
      sources: ["airbus-supply-chain", "oecd-due", "echa-candidate", "airbus-lifecycle"]
    },
    {
      id: "m6",
      number: "M6",
      short: "Climate & nature",
      title: "Climate, Nature & Biodiversity",
      strapline: "Understand sites and value chains as part of changing physical and living systems.",
      duration: "11–13 min",
      colour: "#5f8f3d",
      image: "assets/m6-nature-hero.jpg",
      alt: "An industrial aerospace landscape shown together with wetlands, water channels and woodland corridors.",
      supportImage: "assets/m6-site-wetland.jpg",
      supportAlt: "An industrial facility beside a restored wetland and river corridor.",
      promise: "Connect climate mitigation, adaptation, nature dependencies, biodiversity impacts, location and the mitigation hierarchy.",
      coreQuestion: "How can industrial decisions account for both climate change and the living systems on which operations depend?",
      objectives: [
        "Distinguish climate mitigation, adaptation and nature-related assessment.",
        "Map dependencies, impacts, risks and opportunities by location.",
        "Apply avoid–minimise–restore logic before claiming a nature benefit."
      ],
      lessons: [
        {
          label: "01 · Two connected lenses",
          title: "Climate and nature interact, but they are not interchangeable",
          paragraphs: [
            "Climate mitigation addresses greenhouse-gas sources and removals. Climate adaptation manages actual or expected climate effects such as heat, intense rainfall, drought, wildfire or changing water availability. Nature includes living organisms, ecosystems and the physical systems with which they interact. Biodiversity describes variability within species, between species and among ecosystems.",
            "Climate change is a major pressure on nature, and ecosystem condition can influence carbon storage, water regulation, cooling and resilience. Yet a carbon figure cannot describe habitat fragmentation, ecological condition, water stress or species disturbance. A project can reduce emissions and still damage nature; a nature-based intervention can fail if future climate conditions are ignored.",
            "The decision should use both lenses when material and make trade-offs explicit. This prevents carbon from becoming a universal proxy for environmental performance."
          ],
          points: [
            "Use mitigation evidence for greenhouse-gas change.",
            "Use adaptation evidence for exposure, vulnerability and resilience.",
            "Use nature evidence for location, ecosystem condition, dependencies and impacts."
          ],
          callout: { label: "Do not collapse", text: "‘Lower carbon’ does not mean ‘better for biodiversity’, and ‘green space’ does not by itself prove ecological value." }
        },
        {
          label: "02 · Dependencies and impacts",
          title: "Operations depend on nature while also changing it",
          paragraphs: [
            "Industrial sites and value chains depend on water availability, flood regulation, stable soils, temperature regulation, raw materials and other ecosystem services. They can affect nature through land occupation, water withdrawal, pollution, noise, light, disturbance, invasive species pathways or changes in habitat connectivity.",
            "A dependency is something the activity needs from nature. An impact is a change the activity causes or contributes to. Either can create operational, legal, financial or reputational risk. For example, a site may depend on drainage and flood regulation while its hard surfaces and water management alter the same system.",
            "The distinction matters because actions differ. Reducing an impact does not automatically remove a dependency, and protecting a dependency does not guarantee that external impacts are acceptable."
          ],
          points: [
            "Map what the activity receives from the physical and living system.",
            "Map what the activity changes in that system.",
            "Translate material dependencies and impacts into operational risk pathways."
          ],
          callout: { label: "Four-part language", text: "Dependency → impact → risk → response. Keeping the sequence clear improves both analysis and communication." }
        },
        {
          label: "03 · Location",
          title: "Nature-related significance is spatial",
          paragraphs: [
            "One cubic metre of water or one hectare of land does not have the same significance everywhere. Catchment condition, scarcity, protected status, ecosystem integrity, connectivity, species sensitivity and cumulative pressure affect materiality. Supplier operations can therefore carry different nature-related risks even when process quantities appear similar.",
            "The Taskforce on Nature-related Financial Disclosures (TNFD) offers a LEAP approach: Locate interfaces with nature, Evaluate dependencies and impacts, Assess risks and opportunities, and Prepare to respond and report. The framework is not an Airbus procedure, but it provides useful public logic for organising a location-based assessment.",
            "Remote sensing and geographic information can support screening, but local surveys, operational knowledge and specialist review may be needed. Absence of data is not evidence of absence."
          ],
          points: [
            "Locate sites and relevant value-chain activities before scoring risk.",
            "Use catchment, habitat and landscape context rather than site boundary alone.",
            "Combine spatial data with local evidence and field verification."
          ],
          callout: { label: "Acronym", text: "TNFD means Taskforce on Nature-related Financial Disclosures. LEAP means Locate, Evaluate, Assess and Prepare." }
        },
        {
          label: "04 · Action hierarchy",
          title: "Avoidance comes before restoration stories",
          paragraphs: [
            "The mitigation hierarchy gives priority to avoiding impacts, then minimising those that cannot be avoided, restoring affected systems and addressing residual impacts through the applicable approved framework. Early location and design decisions usually offer the greatest opportunity for avoidance.",
            "Restoration is not guaranteed by planting vegetation or building a pond. A credible intervention starts from a baseline, defines the ecological condition or function sought, uses appropriate expertise, sets indicators and monitors long enough to detect whether the system responds. Maintenance, invasive-species control, water regime and surrounding connectivity can determine success.",
            "Claims must reflect evidence. ‘Nature positive’, ‘biodiversity gain’ or similar language can imply a measured net outcome across an appropriate boundary. Without a method, baseline, timeframe and monitoring, such language risks greenwashing."
          ],
          points: [
            "Compare location and design alternatives while they remain open.",
            "Define ecological outcome, baseline, timeframe and responsibility.",
            "Communicate actions and limitations without claiming an unmeasured net result."
          ],
          callout: { label: "Greenwashing guardrail", text: "Describe the action actually taken and the monitored result. Do not convert a local activity into a broad biodiversity claim." }
        }
      ],
      visual: {
        title: "A location-based nature assessment",
        intro: "This simplified sequence adapts public LEAP logic for learning; it is not a replacement for Airbus or regulatory assessment procedures.",
        items: [
          { code: "L", title: "Locate", text: "Where does the activity interface with nature?" },
          { code: "E", title: "Evaluate", text: "What dependencies and impacts occur there?" },
          { code: "A", title: "Assess", text: "Which risks and opportunities are material?" },
          { code: "P", title: "Prepare", text: "What response, owner, target and monitoring are needed?" }
        ]
      },
      caseStudy: {
        eyebrow: "Applied example · site drainage",
        title: "A logistics improvement changes the relationship with a wetland corridor",
        context: "A proposed paved area and drainage change could reduce internal transport delays. The receiving water system connects to a wetland corridor, baseline ecological data are incomplete and intense rainfall is becoming a greater planning concern.",
        analysis: "The assessment should compare layout and surface alternatives, understand drainage and flood behaviour, establish a proportionate ecological and water baseline, and involve relevant experts. Avoidance and minimisation should be considered before designing restoration. Operational benefit, climate resilience and nature impact belong in one decision, not three separate approvals with incompatible boundaries."
      },
      scenario: {
        title: "A local biodiversity action is proposed",
        brief: "A team proposes a pollinator garden beside an industrial building and wants to describe the site as ‘nature positive’. The planting plan is attractive, but no baseline, pesticide review, water plan, connectivity assessment or monitoring exists.",
        question: "What is the strongest response?",
        options: [
          { text: "Approve the claim because planting flowers is visibly positive for nature.", feedback: "The activity may be useful, but the broad net-outcome claim is not supported by the available evidence." },
          { text: "Cancel the garden because small actions cannot contribute to biodiversity.", feedback: "A well-designed local action can create habitat or learning value even if it does not justify a broad claim." },
          { text: "Define the local objective, baseline and maintenance plan, check ecological suitability and risks, monitor agreed indicators, and describe the action without an unsupported net claim.", feedback: "This protects ecological quality and communication credibility." },
          { text: "Plant first and create the baseline afterwards using photographs.", feedback: "A post-intervention baseline cannot reliably describe the condition before the change." }
        ],
        correct: 2
      },
      checks: [
        { question: "What is a nature dependency?", options: ["A change an activity causes in an ecosystem.", "A contribution from nature that an activity relies on.", "A biodiversity communication claim."], correct: 1, explanation: "Dependencies describe what the activity needs from nature; impacts describe changes it causes or contributes to." },
        { question: "Why does location matter?", options: ["Because environmental significance depends on local ecosystem condition, sensitivity and cumulative pressure.", "Because all sites in one country have the same context.", "Only protected areas need assessment."], correct: 0, explanation: "Nature-related significance is spatial and extends beyond formal protection status." },
        { question: "What comes first in the mitigation hierarchy?", options: ["Restoration.", "Offsetting.", "Avoidance."], correct: 2, explanation: "Early avoidance generally prevents damage before later measures are considered." }
      ],
      reflection: "Choose one site or supplier activity. Write one dependency, one impact, the location evidence needed and the earliest opportunity to avoid or minimise harm.",
      takeaway: "Credible climate-and-nature decisions combine location, dependencies, impacts, future conditions, hierarchy and monitored outcomes.",
      sources: ["tnfd-leap", "sbtn-manual", "airbus-sustainability", "iso-14001"]
    }
  ],
  finalAssessment: {
    title: "Final knowledge check",
    intro: "Twelve questions test whether you can apply the course logic across functions. A score of 10/12 (80%) completes the course.",
    questions: [
      { module: "M1", question: "A site indicator improves after work moves to a supplier. What must be reviewed first?", options: ["The graphic design of the indicator.", "The baseline and system boundary.", "Whether the supplier is closer."], correct: 1, explanation: "A changed boundary can transfer rather than reduce impact." },
      { module: "M1", question: "Which sentence communicates uncertainty credibly?", options: ["The solution is fully sustainable.", "Option B is better for measured energy; supplier data remain estimated and will be verified during the trial.", "No conclusion is possible until every data point is exact."], correct: 1, explanation: "It separates evidence, limitation and follow-up." },
      { module: "M2", question: "What anchors a fair lifecycle comparison?", options: ["Same mass.", "Same functional unit.", "Same colour coding."], correct: 1, explanation: "Alternatives must deliver an equivalent defined function." },
      { module: "M2", question: "Which option normally comes before recycling?", options: ["Safe prevention, life extension or reuse where viable.", "Disposal.", "Purchasing a replacement."], correct: 0, explanation: "Higher-value safe routes should be assessed first." },
      { module: "M3", question: "A model has high accuracy but is used outside its validated conditions. What is the main issue?", options: ["It may not be fit for the new decision context.", "It needs a different colour palette.", "Accuracy always makes it reliable."], correct: 0, explanation: "Validity is tied to intended use and conditions." },
      { module: "M3", question: "What closes the digital learning loop?", options: ["Collecting more data indefinitely.", "Comparing monitored outcomes with predictions and updating the system.", "Removing human review."], correct: 1, explanation: "Observed outcomes test the model and the decision." },
      { module: "M4", question: "What should happen to a useful observation with incomplete evidence?", options: ["Present it as a proven saving.", "Ignore it.", "Record it, involve the right owners and test it proportionately."], correct: 2, explanation: "This preserves participation and rigour." },
      { module: "M4", question: "A pilot succeeds in one workshop. What can be claimed?", options: ["It proves the result across all sites.", "It supports a next decision within the tested conditions and identified limitations.", "It replaces the need for monitoring."], correct: 1, explanation: "Local evidence must not be over-generalised." },
      { module: "M5", question: "What is the strongest indicator of effective due diligence?", options: ["All questionnaires were returned.", "Risk-based actions were tracked and outcomes improved.", "Every supplier received the same request."], correct: 1, explanation: "Due diligence includes action and outcome tracking." },
      { module: "M5", question: "Why can an efficient supply chain be fragile?", options: ["Efficiency always reduces quality.", "Optimisation may remove buffers, alternatives or recovery capacity.", "Resilience only depends on inventory."], correct: 1, explanation: "Efficiency and resilience are related but distinct design properties." },
      { module: "M6", question: "A project reduces carbon but fragments habitat. What is the correct interpretation?", options: ["The carbon result proves overall environmental benefit.", "Climate and nature outcomes must be assessed separately and together.", "Habitat is irrelevant if emissions fall."], correct: 1, explanation: "One environmental lens cannot stand in for all others." },
      { module: "M6", question: "What is required before a broad biodiversity-gain claim?", options: ["An attractive photograph.", "A baseline, defined boundary and method, timeframe and monitored outcome.", "A planting event."], correct: 1, explanation: "A net-outcome claim requires evidence proportionate to its scope." }
    ]
  },
  glossary: [
    { term: "Baseline", definition: "The reference condition or option against which change is assessed." },
    { term: "Biodiversity", definition: "Variability among living organisms, including diversity within species, between species and of ecosystems." },
    { term: "Circularity", definition: "Keeping products, components and materials at their highest safe value while reducing virgin resource demand and waste." },
    { term: "Data provenance", definition: "The documented origin, ownership and transformation history of data used in a result." },
    { term: "Dependency", definition: "A contribution or condition from nature, infrastructure or another actor that an activity relies on." },
    { term: "Due diligence", definition: "An ongoing risk-based process to identify, prevent, mitigate, track and account for adverse impacts." },
    { term: "EMS", definition: "Environmental Management System: the structured system used to manage environmental responsibilities and improve performance." },
    { term: "Functional unit", definition: "The quantified function used as the reference for comparing product systems in an LCA." },
    { term: "Impact", definition: "A change to the environment or people caused or contributed to by an activity." },
    { term: "LCA", definition: "Life Cycle Assessment: a structured evaluation of environmental aspects and potential impacts across a product system." },
    { term: "LCI", definition: "Life Cycle Inventory: the phase that quantifies relevant inputs and outputs." },
    { term: "LCIA", definition: "Life Cycle Impact Assessment: the phase that relates inventory flows to potential environmental impacts." },
    { term: "Mitigation hierarchy", definition: "A sequence that prioritises avoidance, then minimisation, restoration and treatment of residual impacts under the applicable framework." },
    { term: "REACH", definition: "European Union regulation on the Registration, Evaluation, Authorisation and Restriction of Chemicals." },
    { term: "Resilience", definition: "The ability to anticipate, absorb, adapt to and recover from disruption." },
    { term: "System boundary", definition: "The processes, lifecycle stages, locations and time period included in an analysis." },
    { term: "SVHC", definition: "Substance of Very High Concern under REACH. Current status and obligations must be checked through approved processes." },
    { term: "Trade-off", definition: "A situation in which improving one outcome may worsen or constrain another." }
  ],
  sources: {
    "airbus-sustainability": { organisation: "Airbus", title: "Our approach to sustainability", url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability", note: "Public overview of Airbus lifecycle, operational and social-responsibility themes." },
    "airbus-lifecycle": { organisation: "Airbus", title: "Adopting a lifecycle approach", url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/adopting-a-lifecycle-approach", note: "Public lifecycle framing from design and manufacturing through supply chain, use and end of life." },
    "airbus-supply-chain": { organisation: "Airbus", title: "Responsible supply chain", url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/responsible-supply-chain", note: "Public overview of Airbus supplier expectations and responsible-supply-chain approach." },
    "airbus-human-rights": { organisation: "Airbus", title: "Human rights — approach to Artificial Intelligence", url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/human-rights", note: "Public Airbus page describing human-rights and responsible-AI principles." },
    "airbus-a400m-mro": { organisation: "Airbus Defence and Space", title: "A400M MRO and Retrofit Maintenance at Getafe", url: "https://www.airbus.com/en/newsroom/stories/2024-05-meet-maria-a400m-mro-and-retrofit-maintenance-manager-airbus-defence-and", note: "Public Defence and Space context on scheduled maintenance, troubleshooting and retrofit work at Getafe." },
    "iso-14001": { organisation: "ISO", title: "ISO 14001:2026 — Environmental management systems", url: "https://www.iso.org/standard/14001", note: "Official public overview of the 2026 environmental-management-system standard and continual-improvement framework." },
    "iso-50001": { organisation: "ISO", title: "ISO 50001 — Energy management", url: "https://www.iso.org/iso-50001-energy-management.html", note: "Official overview of data-based energy management and continual improvement." },
    "iso-14040": { organisation: "ISO", title: "ISO 14040 — Life cycle assessment principles and framework", url: "https://www.iso.org/standard/37456.html", note: "Official description of LCA goal and scope, inventory, impact assessment and interpretation." },
    "eu-waste": { organisation: "European Commission", title: "Waste Framework Directive and waste hierarchy", url: "https://environment.ec.europa.eu/topics/waste-and-recycling/waste-framework-directive_en", note: "Official EU overview of waste concepts and the order of preference in the waste hierarchy." },
    "eu-ai-act": { organisation: "European Union", title: "Rules for trustworthy Artificial Intelligence in the EU", url: "https://eur-lex.europa.eu/EN/legal-content/summary/rules-for-trustworthy-artificial-intelligence-in-the-eu.html", note: "Official summary of Regulation (EU) 2024/1689 and its risk-based AI framework." },
    "greencomp": { organisation: "European Commission Joint Research Centre", title: "GreenComp — European sustainability competence framework", url: "https://joint-research-centre.ec.europa.eu/greencomp-european-sustainability-competence-framework_en", note: "Public competence framework supporting systems thinking, critical thinking and action for sustainability." },
    "oecd-due": { organisation: "OECD", title: "Due diligence for responsible business conduct", url: "https://www.oecd.org/en/topics/due-diligence-for-responsible-business-conduct.html", note: "Official OECD guidance and resources for risk-based responsible-business due diligence." },
    "echa-candidate": { organisation: "European Chemicals Agency", title: "Candidate List of substances of very high concern", url: "https://echa.europa.eu/candidate-list-table", note: "Official current Candidate List reference. Always use approved Airbus processes to determine applicable obligations." },
    "tnfd-leap": { organisation: "TNFD", title: "Guidance on nature-related issues: the LEAP approach", url: "https://tnfd.global/publication/additional-guidance-on-assessment-of-nature-related-issues-the-leap-approach/", note: "Public Locate, Evaluate, Assess and Prepare assessment logic, updated June 2026." },
    "sbtn-manual": { organisation: "Science Based Targets Network", title: "Corporate Manual for science-based targets for nature", url: "https://sciencebasedtargetsnetwork.org/companies/take-action/corporate-manual/", note: "Public guidance for understanding and preparing corporate action for nature." }
  }
};
