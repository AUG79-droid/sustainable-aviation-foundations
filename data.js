window.FOUNDATIONS_DATA = {
  meta: {
    title: "Sustainable Aviation Foundations",
    ecosystem: "Sustainable Aviation Learning Lab",
    signature: "From knowledge to better decisions",
    version: "English master · v1.1",
    reviewed: "20 July 2026",
    duration: "About 60 minutes",
    notice: "Educational and exploratory content. It does not replace official policies, processes, targets or corporate positions."
  },
  pillars: [
    {
      id: "p1",
      number: "P1",
      short: "Operations",
      title: "Sustainable Operations & Performance",
      strapline: "Optimise the mission without losing sight of the system.",
      duration: "8–10 min",
      colour: "#2186c4",
      image: "assets/p1-operations.jpg",
      alt: "An aviation team compares operational routes, weather, supply, energy and aircraft-availability information in a decision room.",
      promise: "Learn to frame performance across safety, mission, energy, emissions, noise and resilience rather than around one isolated metric.",
      connection: "Connects most directly with P3 data quality, P5 value-chain resilience and P6 climate risk.",
      lessons: [
        {
          label: "01 · System view",
          title: "Performance is more than one number",
          text: "A decision can improve one indicator and shift pressure somewhere else. A shorter process may use fewer resources, but it can also create congestion, quality risk or additional work downstream. Sustainable performance begins by defining the whole decision boundary.",
          points: [
            "Start with safety, quality and mission requirements.",
            "Name the operational, environmental and human variables that may move.",
            "Check where impacts are transferred across time, sites or suppliers."
          ]
        },
        {
          label: "02 · Operational envelope",
          title: "Optimise within constraints",
          text: "Aviation already works with envelopes, margins and trade-offs. Sustainability adds variables such as energy, materials, noise, climate exposure and resource availability. The goal is not a perfect option; it is a defensible option with known assumptions and monitored consequences.",
          points: [
            "Compare feasible alternatives against the same baseline.",
            "Keep uncertainty visible instead of hiding it in a single score.",
            "Assign an owner to the indicators that matter after the decision."
          ]
        },
        {
          label: "03 · Decision habit",
          title: "Baseline. Boundary. Trade-off.",
          text: "Before calling an improvement sustainable, state the baseline, define what is inside the analysis, and record the trade-offs. This short discipline makes a claim easier to challenge, improve and verify.",
          points: [
            "Baseline: compared with what?",
            "Boundary: which lifecycle stages, teams and locations are included?",
            "Trade-off: what becomes better, worse or uncertain?"
          ]
        }
      ],
      scenario: {
        title: "A high-pressure operational decision",
        brief: "A team must choose between three feasible operating plans. One minimises elapsed time, one minimises energy use, and one preserves more resilience if weather or supply conditions change.",
        question: "What is the strongest first move?",
        options: [
          "Choose the fastest plan because schedule performance is the clearest business metric.",
          "Wait until one option has no impact at all.",
          "Compare the plans against safety, mission, energy, emissions, noise and resilience, then document assumptions and the chosen trade-off."
        ],
        correct: 2,
        feedback: "A system comparison does not guarantee a perfect answer. It creates a transparent, reviewable basis for action and makes monitoring possible."
      },
      check: {
        question: "When is a claimed operational improvement most credible?",
        options: [
          "When it uses the word efficient.",
          "When the baseline, boundary, trade-offs and evidence are explicit.",
          "When it improves one indicator, regardless of downstream effects."
        ],
        correct: 1,
        explanation: "Credibility comes from a clear comparison, an appropriate system boundary and evidence that reveals rather than conceals trade-offs."
      },
      takeaway: "Sustainable performance is the ability to make a good decision now without creating an unmanaged problem elsewhere.",
      sources: ["airbus-decarbonisation", "icao-sustainability"]
    },
    {
      id: "p2",
      number: "P2",
      short: "Circularity",
      title: "Circularity & Materials",
      strapline: "Keep value in the system for as long as safety allows.",
      duration: "8–10 min",
      colour: "#00a89d",
      image: "assets/p2-circularity.jpg",
      alt: "Two aerospace engineers prototype and inspect a lightweight aircraft structure using advanced materials and digital simulation.",
      promise: "Move beyond recycling and examine design, maintenance, repair, reuse, traceability and end of life as one lifecycle.",
      connection: "Connects most directly with P1 performance, P3 digital traceability and P5 supplier capability.",
      lessons: [
        {
          label: "01 · Lifecycle",
          title: "Design decisions travel for decades",
          text: "Aerospace products are built for long service lives. Material choices therefore shape manufacturing, maintenance, repair, upgrades and eventual recovery. Circular thinking starts before a component exists, not when it becomes waste.",
          points: [
            "Consider durability, repairability and disassembly during design.",
            "Include manufacturing scrap and maintenance flows in the lifecycle.",
            "Protect safety, quality and certification evidence at every stage."
          ]
        },
        {
          label: "02 · Value hierarchy",
          title: "Recycling is important — and late",
          text: "The greatest value is often retained by avoiding unnecessary material, extending useful life, repairing or reusing safely. Recycling recovers material value after more of the original product value has already been lost.",
          points: [
            "First: refuse, reduce and rethink where technically appropriate.",
            "Then: maintain, repair, refurbish, repurpose or remanufacture safely.",
            "Finally: recycle or recover when higher-value routes are not viable."
          ]
        },
        {
          label: "03 · Evidence",
          title: "Circularity needs traceability",
          text: "A recovered material or component is useful only when its identity, condition and permitted use are understood. Digital records, material passports and controlled processes can help teams retain value without compromising technical requirements.",
          points: [
            "Know the material composition and origin.",
            "Preserve condition, maintenance and compliance information.",
            "Measure retained value, not only waste diverted."
          ]
        }
      ],
      scenario: {
        title: "A damaged aerospace-grade fixture",
        brief: "A titanium manufacturing fixture shows wear. A replacement is available, recycling is possible, and engineering believes a controlled repair may extend its useful life.",
        question: "Which response best reflects circularity?",
        options: [
          "Scrap it and buy new because new material is easier to specify.",
          "Send it directly to recycling because recycling is always the most circular option.",
          "Assess safe repair and continued use first; retain its records, and recover the material only if extension is not technically viable."
        ],
        correct: 2,
        feedback: "Circularity follows a value hierarchy. Safe life extension can retain more value than immediate recycling, provided technical and compliance requirements are met."
      },
      check: {
        question: "What is the best definition of aerospace circularity?",
        options: [
          "Recycling every material at end of life.",
          "Keeping products, components and materials at their highest safe value across the lifecycle.",
          "Replacing metals with bio-based materials in every application."
        ],
        correct: 1,
        explanation: "Circularity is broader than recycling and cannot override safety or technical suitability. It aims to preserve value across the lifecycle."
      },
      takeaway: "The circular question is not only ‘Can we recycle it?’ but ‘How can we safely retain the greatest value?’",
      sources: ["airbus-lifecycle", "icao-circularity", "airbus-metals"]
    },
    {
      id: "p3",
      number: "P3",
      short: "Digital",
      title: "Responsible Innovation & Digital",
      strapline: "Use technology to reveal the system — not to obscure it.",
      duration: "8–10 min",
      colour: "#7857a5",
      image: "assets/p3-digital.jpg",
      alt: "A professional in a mission-control environment views Earth-observation information, a satellite and aviation systems.",
      promise: "Recognise how data, models, AI and Earth observation can improve sustainability decisions when uncertainty and human accountability remain visible.",
      connection: "Connects every pillar by turning observations into evidence, scenarios and monitored decisions.",
      lessons: [
        {
          label: "01 · Model and reality",
          title: "A model is a lens, not the world",
          text: "Digital twins, optimisation models and dashboards can expose relationships that are difficult to see. Their output still depends on data coverage, assumptions and the question they were designed to answer.",
          points: [
            "Check provenance, completeness and update frequency.",
            "Show uncertainty and known blind spots.",
            "Test whether the model boundary matches the decision boundary."
          ]
        },
        {
          label: "02 · Responsible AI",
          title: "Human oversight stays in the loop",
          text: "Responsible digital innovation combines technical performance with safety, human agency, accountability, transparency, fairness, privacy and robust governance. A recommendation can support a decision; it does not remove human responsibility for that decision.",
          points: [
            "Make the intended use and limits understandable.",
            "Enable meaningful human review and override.",
            "Monitor outcomes, drift and unintended effects."
          ]
        },
        {
          label: "03 · Sense and learn",
          title: "Digital capability closes the learning loop",
          text: "Earth observation, connected industrial systems and operational data can help teams observe change, test scenarios and verify outcomes. The real value appears when evidence changes a decision or triggers corrective action.",
          points: [
            "Observe a relevant system indicator.",
            "Compare scenarios before acting.",
            "Monitor what happened and update the model."
          ]
        }
      ],
      scenario: {
        title: "A persuasive optimisation result",
        brief: "An AI tool recommends a change that appears to reduce energy use. Supplier data is incomplete, the confidence interval is wide, and the operational team cannot explain one of the model's assumptions.",
        question: "What should happen next?",
        options: [
          "Implement immediately because AI can detect patterns people miss.",
          "Reject the tool permanently because uncertainty makes digital analysis unreliable.",
          "Validate the data and assumptions, expose uncertainty, require human review and monitor the outcome if a controlled trial proceeds."
        ],
        correct: 2,
        feedback: "Responsible innovation uses the tool without surrendering accountability. A controlled, monitored decision can create learning while managing risk."
      },
      check: {
        question: "Which feature is essential for a trustworthy sustainability model?",
        options: [
          "A single definitive score with no uncertainty.",
          "Transparent assumptions, suitable data and meaningful human oversight.",
          "The newest available technology."
        ],
        correct: 1,
        explanation: "Trust depends on fitness for purpose, transparent limitations, appropriate governance and accountable human use — not novelty alone."
      },
      takeaway: "Better data supports better decisions only when teams understand what the data can and cannot say.",
      sources: ["airbus-responsible-ai", "airbus-strategy", "airbus-nature-tech"]
    },
    {
      id: "p4",
      number: "P4",
      short: "People",
      title: "People, Skills & Culture",
      strapline: "Make sustainability part of how work is discussed and improved.",
      duration: "8–10 min",
      colour: "#d58b22",
      image: "assets/p4-people.jpg",
      alt: "A diverse aviation team evaluates components, tools, material samples and energy information at an interactive learning station.",
      promise: "Translate sustainability from an expert topic into repeatable team habits: ask, challenge, test, learn and share.",
      connection: "Enables every other pillar because systems change only when people can use evidence and act together.",
      lessons: [
        {
          label: "01 · Capability",
          title: "Awareness is the start, not the outcome",
          text: "People need enough shared language to recognise sustainability in daily work, but knowledge alone rarely changes a system. Capability grows when teams practise decisions, receive feedback and can connect their role with system outcomes.",
          points: [
            "Use a common decision language across functions.",
            "Practise with realistic constraints and trade-offs.",
            "Make the next action clear at the end of learning."
          ]
        },
        {
          label: "02 · Culture",
          title: "Make weak signals discussable",
          text: "A technician, buyer, engineer or operator may see an inefficiency or risk before it appears in a dashboard. Teams need safe, practical channels to raise observations and involve the right expertise without creating ambiguity about ownership.",
          points: [
            "Invite evidence and respectful challenge.",
            "Separate exploratory ideas from approved decisions.",
            "Name who can decide, who must review and who will implement."
          ]
        },
        {
          label: "03 · Learning loop",
          title: "Small experiments can build credible change",
          text: "A bounded experiment can test an idea without presenting it as a finished solution. Define a baseline, protect safety and quality, measure the result, capture unintended effects and decide whether to adapt, scale or stop.",
          points: [
            "Start with a specific problem and owner.",
            "Define success and stop conditions before the trial.",
            "Share what failed as well as what worked."
          ]
        }
      ],
      scenario: {
        title: "A useful observation under schedule pressure",
        brief: "A technician notices repeated energy and material waste during a process. The team is under schedule pressure, and the observation is not yet supported by a full analysis.",
        question: "What is the most constructive response?",
        options: [
          "Ignore it until the annual sustainability campaign.",
          "Announce the observation as a proven solution so it receives attention.",
          "Raise it through the appropriate channel, involve process and safety owners, and define a small measurable test if the idea is viable."
        ],
        correct: 2,
        feedback: "A healthy culture makes observations actionable without overstating evidence. Ownership and a bounded test turn a weak signal into learning."
      },
      check: {
        question: "What most helps sustainability become part of daily work?",
        options: [
          "A once-a-year awareness event.",
          "Shared decision habits, clear ownership, safe challenge and feedback loops.",
          "Leaving the subject exclusively to sustainability specialists."
        ],
        correct: 1,
        explanation: "Specialist expertise remains essential, but durable change requires repeatable practices that teams can apply and improve together."
      },
      takeaway: "Culture turns sustainability from a message into a way of noticing, deciding and learning.",
      sources: ["airbus-sustainability", "airbus-community"]
    },
    {
      id: "p5",
      number: "P5",
      short: "Value chain",
      title: "Resilient Value Chain",
      strapline: "Build visibility, capability and resilience beyond the site boundary.",
      duration: "8–10 min",
      colour: "#627587",
      image: "assets/p5-value-chain.jpg",
      alt: "A team connects aircraft components, materials, supply routes and environmental information during an aviation mission challenge.",
      promise: "See suppliers, materials, regulated substances, logistics, human rights and continuity as interconnected parts of product performance.",
      connection: "Connects P2 material choices with P1 delivery performance and P6 climate-and-nature exposure.",
      lessons: [
        {
          label: "01 · Extended system",
          title: "The product boundary extends through suppliers",
          text: "Environmental and social impacts can occur far from the final assembly line. So can operational dependencies. Visibility across tiers helps teams identify where evidence is strong, where capability is limited and where a disruption could propagate.",
          points: [
            "Map critical materials, processes and single points of dependency.",
            "Distinguish direct supplier evidence from estimates or assumptions.",
            "Prioritise the gaps that could change a decision."
          ]
        },
        {
          label: "02 · Requirements",
          title: "Expectations must become operational",
          text: "Codes and commitments matter when they are translated into specifications, supplier selection, contractual requirements, data requests, corrective actions and capability building.",
          points: [
            "Use requirements that can be understood and evidenced.",
            "Align programme, technical, quality and sustainability signals.",
            "Support improvement while preserving accountability."
          ]
        },
        {
          label: "03 · Resilience",
          title: "Efficiency and resilience are not identical",
          text: "A highly optimised chain may still be vulnerable to climate events, scarce materials, regulatory change, capacity constraints or geopolitical disruption. Resilience considers alternatives, recovery time, supplier capability and the consequences of failure.",
          points: [
            "Identify dependencies before they become shortages.",
            "Compare diversification, substitution, inventory and collaboration options.",
            "Avoid shifting hidden environmental or social risks to a new source."
          ]
        }
      ],
      scenario: {
        title: "A promising component with incomplete evidence",
        brief: "A supplier offers a lighter component with potential operational benefits. Origin, regulated-substance and lower-tier process information are incomplete, and an alternative supplier would delay the programme.",
        question: "What is the strongest response?",
        options: [
          "Accept immediately because lower weight guarantees the most sustainable outcome.",
          "Reject the supplier without further discussion because missing data always means unacceptable performance.",
          "Run cross-functional due diligence, identify decision-critical data gaps, agree evidence and improvement actions, and compare resilience and lifecycle trade-offs before approval."
        ],
        correct: 2,
        feedback: "A responsible value-chain decision combines technical benefit, evidence quality, compliance, supplier capability and resilience."
      },
      check: {
        question: "Why is supplier visibility important for sustainability?",
        options: [
          "Because all impacts and dependencies occur at the final assembly site.",
          "Because evidence, impacts and disruption risks can exist across multiple tiers and influence product decisions.",
          "Because estimates should never be used under any circumstances."
        ],
        correct: 1,
        explanation: "Visibility helps teams understand uncertainty and prioritise better evidence. Estimates may be necessary, but they should be labelled and improved."
      },
      takeaway: "A resilient value chain makes critical dependencies visible and turns expectations into evidence and capability.",
      sources: ["airbus-supply-chain", "airbus-lifecycle"]
    },
    {
      id: "p6",
      number: "P6",
      short: "Climate & nature",
      title: "Climate, Nature & Biodiversity",
      strapline: "Treat industrial sites and value chains as part of a living system.",
      duration: "8–10 min",
      colour: "#5f8f3d",
      image: "assets/p6-nature.jpg",
      alt: "An aerospace site, runway, wetlands, water channels and woodland corridors viewed together under a changing sky.",
      promise: "Understand climate and nature as connected but distinct systems, and recognise dependencies, impacts, risks and opportunities in decisions.",
      connection: "Completes the system by linking physical climate exposure, water, land, ecosystems and biodiversity with operations and suppliers.",
      lessons: [
        {
          label: "01 · Two connected lenses",
          title: "Climate and nature are not interchangeable",
          text: "Climate change affects living systems, while ecosystem condition can influence carbon, water and resilience. Yet a carbon indicator cannot describe habitat condition, water stress or species impact. Teams need both lenses where the decision is material.",
          points: [
            "Use climate indicators for emissions, transition and physical risk.",
            "Use nature indicators for land, water, ecosystem condition and biodiversity.",
            "Look for interactions instead of collapsing everything into one score."
          ]
        },
        {
          label: "02 · Relationship",
          title: "Dependency, impact, risk and opportunity",
          text: "An activity can depend on water, stable soils or flood regulation; it can also change those systems. Dependencies and impacts can become operational, financial, legal or reputational risks, while better information and design can create opportunities for resilience.",
          points: [
            "Locate the activity and the affected system.",
            "Identify dependencies and impacts before scoring risk.",
            "Engage relevant environmental, operational and local expertise."
          ]
        },
        {
          label: "03 · Action hierarchy",
          title: "Avoid first, then minimise and restore",
          text: "Early design choices usually create the greatest room to avoid impact. Where avoidance is not possible, teams can examine minimisation, restoration and monitoring measures. The appropriate route depends on location, evidence, regulation and specialist review.",
          points: [
            "Compare location and design alternatives early.",
            "Establish a credible baseline before intervention.",
            "Monitor outcomes and adapt if the system responds differently than expected."
          ]
        }
      ],
      scenario: {
        title: "A site change beside a wetland corridor",
        brief: "A proposed drainage and logistics change could improve industrial flow. The site is connected to a wetland corridor, baseline ecological data is incomplete, and heavier rainfall is becoming a planning concern.",
        question: "What is the strongest next step?",
        options: [
          "Proceed because biodiversity is separate from operational performance.",
          "Cancel every site change near nature regardless of evidence or alternatives.",
          "Compare alternatives, establish the environmental and climate baseline, involve the right experts, apply the avoid–minimise–restore hierarchy and define monitoring."
        ],
        correct: 2,
        feedback: "The decision should integrate operational need, physical climate risk and the living system. Early alternatives and a baseline create better options."
      },
      check: {
        question: "When can nature be material to an aviation decision?",
        options: [
          "Only when a protected species is already documented on the site.",
          "When dependencies, impacts or ecosystem change could affect operations, compliance, people or long-term resilience.",
          "Only after every carbon-reduction option has been completed."
        ],
        correct: 1,
        explanation: "Nature can be material through dependencies and impacts even before a complete species inventory exists. The evidence gap itself may need management."
      },
      takeaway: "Aviation infrastructure does not sit outside nature; it operates within territories, water systems, climates and value chains.",
      sources: ["airbus-sustainability", "airbus-nature-tech", "sbtn-manual"]
    }
  ],
  sources: {
    "airbus-sustainability": {
      organisation: "Airbus",
      title: "Sustainability at Airbus",
      url: "https://www.airbus.com/en/sustainability",
      note: "Overview of Airbus' current sustainability positioning, including environment, people, communities, security and long-term value."
    },
    "airbus-decarbonisation": {
      organisation: "Airbus",
      title: "Decarbonisation",
      url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/decarbonisation",
      note: "Airbus' multi-lever approach covering aircraft efficiency, energy, fuels, operations and wider ecosystem measures."
    },
    "airbus-lifecycle": {
      organisation: "Airbus",
      title: "Adopting a lifecycle approach",
      url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/adopting-a-lifecycle-approach",
      note: "Lifecycle framing from design and manufacturing through operations, supply chain and end of life."
    },
    "airbus-metals": {
      organisation: "Airbus",
      title: "Increasing titanium and aluminium circularity",
      url: "https://www.airbus.com/en/newsroom/stories/2025-07-waste-not-want-not-increasing-titanium-and-aluminium-circularity",
      note: "Airbus example of lifecycle value retention and collaboration around aerospace-grade metals."
    },
    "icao-circularity": {
      organisation: "ICAO",
      title: "Circular Economy",
      url: "https://www.icao.int/environmental-protection/circular-economy",
      note: "ICAO introduction to circular-economy principles and applications across aircraft, flights and aerodromes."
    },
    "airbus-responsible-ai": {
      organisation: "Airbus",
      title: "Human rights — Airbus approach to Artificial Intelligence",
      url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/human-rights",
      note: "Airbus principles for trustworthy AI, including safety, human oversight, accountability, transparency, fairness and data governance."
    },
    "airbus-strategy": {
      organisation: "Airbus",
      title: "Our strategy",
      url: "https://www.airbus.com/en/about-us/our-strategy",
      note: "Airbus strategy framing resilience, innovation, sustainability, focus and scale."
    },
    "airbus-community": {
      organisation: "Airbus",
      title: "Community impact",
      url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/community-impact",
      note: "Airbus approach to resilient communities, local ownership, future skills and employee participation."
    },
    "airbus-supply-chain": {
      organisation: "Airbus",
      title: "Responsible supply chain",
      url: "https://www.airbus.com/en/sustainability/our-approach-to-sustainability/responsible-supply-chain",
      note: "Airbus overview of responsible-supply-chain expectations, regulated substances and supplier standards."
    },
    "airbus-nature-tech": {
      organisation: "Airbus Foundation",
      title: "Airbus Foundation and Solar Impulse Foundation partnership",
      url: "https://www.airbus.com/en/newsroom/press-releases/2025-03-airbus-foundation-joins-forces-with-the-solar-impulse-foundation-to",
      note: "Example connecting aerospace capabilities, Earth observation, nature-based solutions and climate resilience."
    },
    "sbtn-manual": {
      organisation: "Science Based Targets Network",
      title: "Corporate Manual for science-based targets for nature",
      url: "https://sciencebasedtargetsnetwork.org/companies/take-action/corporate-manual/",
      note: "Introductory corporate guidance for understanding and preparing science-based action for nature."
    },
    "icao-sustainability": {
      organisation: "ICAO",
      title: "Aviation is Environmentally Sustainable",
      url: "https://www.icao.int/strategic-goals/aviation-environmentally-sustainable",
      note: "ICAO strategic framing for mitigation, cleaner energy and adaptation of aviation operations and infrastructure."
    }
  }
};
