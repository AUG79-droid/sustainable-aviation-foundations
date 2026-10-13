(() => {
  "use strict";

  const DATA = window.FOUNDATIONS_DATA;

  const p = (...paragraphs) => paragraphs;
  const lesson = (id, label, title, duration, paragraphs, points, callout, deepDive, workedExample) => ({
    id, label, title, duration, paragraphs, points, callout, deepDive, workedExample
  });

  const expansions = {
    m1: [
      {
        title: "Why optimisation fails when the system is drawn too narrowly",
        paragraphs: p(
          "A sustainability decision is rarely about one environmental variable. A maintenance interval, production route, packaging design or stock policy sits inside an operational system with safety, quality, cost, time, workforce and customer constraints. Improving one measured output can move work to another site, increase failure risk, create additional logistics or shorten component life. Systems thinking therefore begins by drawing relationships, not by choosing a favourite metric.",
          "The practical technique is to distinguish the decision object from the wider system. The object might be a cleaning process; the system includes the surface requirement, chemical preparation, equipment, energy, worker exposure, wastewater, rejected parts, supplier inputs and the next process step. A narrow study may still be useful, but its conclusion must be limited to that boundary. It must not silently become a claim about the complete product or programme.",
          "Trade-offs are not evidence that sustainability is impossible. They are the normal content of responsible decision-making. Teams should identify which constraints are non-negotiable, which effects can be compared, which uncertainties matter and which consequences can be monitored. The goal is not to force every indicator in the same direction. It is to choose an option whose benefits, burdens and limitations are visible and controlled.",
          "In Defence and Space, availability and mission requirements can make the system especially dynamic. A decision that looks efficient under stable demand may behave differently during an urgent repair, a supply disruption or a change in operating tempo. Scenario testing is therefore more informative than relying on a single average condition."
        ),
        workedExample: "A workshop proposes replacing scheduled filter changes with condition-based replacement. The potential gain is lower material use. The system review also checks sensor reliability, contamination risk, inspection workload, energy loss from clogged filters, disposal routes and the consequences of an incorrect prediction."
      },
      {
        title: "Build a defensible reference before calculating an improvement",
        paragraphs: p(
          "A baseline should represent the condition that would reasonably occur without the proposed change. It is not automatically last year, the worst recorded month or the first dataset available. If production volume, weather, product mix, maintenance scope or operating hours changed, a raw comparison may attribute those differences to the project. Normalisation can improve comparability, but the denominator must reflect the service delivered rather than simply making the result look favourable.",
          "The functional unit is the bridge between purpose and measurement. In a lifecycle study it describes the quantified function against which alternatives are compared: for example, treating a defined surface area to a specified technical standard, supplying a required level of availability over a period, or delivering a component function for a defined service life. Comparing kilograms, litres or purchase prices without equivalent function can reward an option that needs more replacements or fails earlier.",
          "Boundaries have several dimensions. The organisational boundary states which entities or facilities are included. The operational boundary states which activities and environmental flows are counted. The lifecycle boundary identifies stages from raw materials to end of life. The time boundary states the period and any future effects. The geographical boundary matters for electricity, water scarcity, transport and nature. Each dimension can change the conclusion.",
          "A credible analysis records exclusions. Excluding a minor office activity may be reasonable; excluding a transferred energy-intensive process may not be. A useful test asks: could the excluded item reverse the ranking, materially change the magnitude or alter the claim? If yes, it requires data, estimation or explicit uncertainty rather than silence."
        ),
        workedExample: "A solvent-reduction project compares litres per production hour, but the new product mix requires a different number of cleaning cycles. The team adds treated surface area and accepted-part output as sensitivity denominators before deciding whether the apparent reduction is real."
      },
      {
        title: "Use an evidence ladder instead of treating all numbers alike",
        paragraphs: p(
          "Evidence quality has more than one dimension. Accuracy asks whether the value is close to reality. Precision asks how repeatable it is. Completeness asks whether important flows are missing. Representativeness asks whether the data fit the technology, place, period and operating condition. Traceability asks whether a reviewer can understand where the value came from and how it was transformed. A precise number can still be poor evidence when it represents the wrong system.",
          "Teams should preserve provenance from source to decision. A meter reading, invoice, supplier declaration, engineering calculation, database factor and expert estimate should not be merged into one spreadsheet without labels. Units, conversion factors, versions, owners and review dates matter. When evidence changes, the team must be able to reproduce the result and explain why the conclusion did or did not change.",
          "Uncertainty can be explored through ranges and sensitivity tests. If a supplier process is unknown, use a transparent low, central and high estimate. If all plausible values leave option B preferable, the missing precision may not block a trial. If a small change reverses the result, data collection becomes a decision priority. This is more useful than either pretending certainty or refusing to act until every number is perfect.",
          "Evidence should be proportionate to consequence and reversibility. A small, bounded experiment can proceed with monitored assumptions. A long-lived capital decision, an external environmental claim or a change with safety and compliance implications requires stronger verification, independent review and documented approval."
        ),
        workedExample: "An energy dashboard combines sub-meter data for one line with allocated building data for another. The values are kept separate, tagged by method and given confidence ranges so that management does not interpret them as equally direct measurements."
      },
      {
        title: "Connect the decision to the management system",
        paragraphs: p(
          "An Environmental Management System (EMS) is not a collection of environmental projects. It is a controlled way to understand context, obligations, significant environmental aspects, risks and opportunities; plan action; provide competence and resources; operate processes; evaluate performance; and improve. ISO 14001:2026 provides an international framework for this logic. The standard does not prescribe one technical solution, and this course does not replace Airbus procedures.",
          "The connection matters because isolated projects can produce attractive pilots without durable control. Before implementation, the team should identify applicable requirements, operational controls, competence needs, emergency implications, documentation, monitoring and change-management steps. It should also define what happens if the improvement produces an adverse effect or fails to deliver the expected result.",
          "Indicators work best as a set. A leading indicator shows whether the planned action is occurring, such as the percentage of operators trained or inspections completed. An outcome indicator shows the environmental result, such as energy per functional unit or hazardous waste avoided. A guardrail indicator watches for unintended effects, such as rework, defects, urgent shipments or exposure. One number rarely tells the complete story.",
          "Management review and corrective action convert local evidence into organisational learning. Results should be compared with the baseline, deviations investigated and lessons reused. Stopping a project after evidence disproves the benefit is not failure; continuing an unsupported claim would be."
        ),
        workedExample: "A reusable transport protection system is approved with an owner, cleaning control, return rate, damage rate, waste outcome and a six-month review. The project can be adapted if return logistics create more burden than expected."
      }
    ],
    m2: [
      {
        title: "Map decisions across a long aerospace life",
        paragraphs: p(
          "Lifecycle thinking follows the consequences of a choice from material extraction and processing through manufacture, logistics, operation, maintenance, upgrades and end of life. Airbus publicly describes a lifecycle approach across operations, the supply chain and product end of life. The distribution of impacts varies by product and use; a learning example must not assume that one stage always dominates.",
          "Long service lives make timing important. A design with higher manufacturing effort may enable repair, lower mass, fewer replacements or improved reliability over decades. Conversely, a lightweight option can be environmentally weak if it is difficult to manufacture, cannot be repaired, contains problematic substances or prevents high-value recovery. The correct comparison uses equivalent technical function and an appropriate service-life scenario.",
          "Lifecycle maps should include enabling activities that disappear from the bill of materials: tooling, process energy, test equipment, consumables, protective packaging, temperature-controlled storage, maintenance travel and rejected production. The purpose is not to count everything at maximum detail. It is to identify plausible hotspots and transfers before the decision becomes expensive to change.",
          "Screening and full assessment are different levels of effort. Screening uses available knowledge to prioritise questions. A Life Cycle Assessment (LCA) uses defined methods and data to quantify potential environmental impacts. Teams should not call a quick carbon comparison an LCA, but they also should not wait for a full LCA before applying basic lifecycle thinking."
        ),
        workedExample: "Two protective coatings meet the same specification. A lifecycle screen compares formulation, application losses, curing energy, worker controls, service interval, stripping, waste classification and qualification effort before selecting topics for detailed testing."
      },
      {
        title: "Understand what an LCA result actually represents",
        paragraphs: p(
          "ISO 14040 structures Life Cycle Assessment around goal and scope definition, inventory analysis, impact assessment and interpretation. Goal and scope determine the question, audience, functional unit, system boundary, allocation rules, data-quality needs and intended comparisons. These choices shape the study before any impact number is calculated.",
          "The Life Cycle Inventory (LCI) records inputs and outputs: materials, fuels, electricity, water, emissions and waste for the processes inside the boundary. Life Cycle Impact Assessment (LCIA) relates those flows to potential impact categories. Results are indicators of potential impact, not direct predictions of all real-world damage. Model choice, geographical context, time horizon and data gaps influence interpretation.",
          "Allocation is required when a process produces several products or shares infrastructure. Mass, economic value, energy content or another physical relationship may be used, depending on the case and method. Different defensible choices can change results. Good practice explains the rule and tests sensitive assumptions instead of hiding allocation inside software defaults.",
          "Comparative claims need special care. Equivalent function, consistent boundaries, consistent methods and transparent limitations are essential. A single climate-change score cannot prove overall environmental superiority because water, toxicity, resource use, land use and other categories may behave differently. Weighting categories into one score introduces value choices that must remain visible."
        ),
        workedExample: "A metal and composite panel are compared for the same load, geometry, reliability and service period—not per kilogram. The study tests repair frequency and production scrap because those assumptions can reverse the result."
      },
      {
        title: "Retain function and value before destroying material structure",
        paragraphs: p(
          "The European waste hierarchy prioritises prevention, preparing for reuse, recycling, other recovery and disposal. Circular design broadens the practical options: rethink the need, reduce material, maintain, repair, refurbish, remanufacture, repurpose and recycle. Higher-value retention is a useful direction, not an automatic verdict. Safety, quality, airworthiness, configuration and compliance remain constraints.",
          "Prevention is often less visible than recycling. Avoiding an oversized blank, improving nesting, reducing rework or extending a validated maintenance interval prevents upstream production and downstream treatment. Recycling statistics can improve while total material demand still rises, so teams should track absolute flows, functional output and retained value rather than celebrating diversion alone.",
          "Reuse and repair require evidence. Identity, condition, loading history, maintenance records, authorised configuration and chain of custody determine whether an item can safely return to use. A component without documentation may retain physical material but lose functional value. Circularity therefore depends on information systems as much as recovery technology.",
          "Recycling quality matters. Closed-loop recovery into an equivalent demanding application is different from downcycling into a lower-grade use. Composite, bonded and multi-material structures can be difficult to separate. The decision should consider processing burden, recovered quality, hazardous constituents, market demand and transport—not simply whether a recycler accepts the waste."
        ),
        workedExample: "A titanium offcut programme first improves nesting and segregates clean grades, then assesses direct reuse for suitable parts before high-quality recycling. Mixed or contaminated scrap is tracked separately because it has different recovery value."
      },
      {
        title: "Treat product information as part of the asset",
        paragraphs: p(
          "Technical traceability allows a future user to know what an item is, what happened to it and what can legally and safely happen next. Relevant information may include material grade, batch, treatments, coatings, substances, manufacturing route, inspections, repairs, operating exposure, configuration and approved uses. The exact record depends on the product and applicable system.",
          "A material or product passport is one way to organise data, but a label alone does not create circularity. Information must remain linked to the physical item, use controlled vocabulary, preserve units and versions, survive organisational and software changes, and be accessible to authorised users. Poor data can create false confidence and transfer risk to maintenance or dismantling teams.",
          "Substance information is particularly important. A legacy component may contain materials that are restricted, difficult to handle or incompatible with a proposed recovery route. Retaining value cannot mean recirculating uncontrolled hazards. Environmental, health and safety, chemical compliance, engineering and waste expertise need a shared decision point.",
          "Digital continuity also has a cost and governance requirement. Records must be maintained for a relevant period, protected from inappropriate access and reviewed when assumptions change. The aim is enough reliable information to enable a future decision—not unlimited data collection without ownership."
        ),
        workedExample: "A reusable fixture is tagged with material, configuration, inspection status, approved loads and repair history. This lets another programme assess reuse without repeating every test or accepting an unknown condition."
      }
    ],
    m3: [
      {
        title: "Design an evidence chain before building a dashboard",
        paragraphs: p(
          "A digital tool is useful when it improves a decision, control or learning loop. Starting with available data often produces dashboards that are visually impressive but disconnected from action. The design should begin with the decision, then identify the required indicators, resolution, latency, ownership and response. Only then should the team select sensors, systems and models.",
          "Data quality is contextual. A monthly invoice may be adequate for a site trend but too coarse to diagnose one process. A high-frequency sensor can detect patterns but drift, lose calibration or measure a proxy rather than the environmental outcome. Completeness, representativeness, timeliness, consistency and provenance should be evaluated against the intended use.",
          "The chain from physical event to management action contains multiple transformations: sensing, transmission, cleaning, aggregation, conversion, modelling, visualisation and interpretation. Each step can introduce error or bias. A lineage record should show source, unit, timestamp, transformation, responsible owner and quality checks so that a surprising result can be investigated.",
          "More data can increase environmental burden and operational complexity. Devices, networks, storage, computation and maintenance consume resources. The answer is not to avoid digitalisation; it is to collect and retain data with a defined purpose, suitable resolution and lifecycle plan."
        ),
        workedExample: "A compressed-air project defines the decisions first: locate persistent leaks, prioritise repairs and verify savings. The architecture combines a main meter, temporary sub-metering and inspection records rather than installing permanent sensors everywhere."
      },
      {
        title: "Separate prediction performance from decision performance",
        paragraphs: p(
          "A model simplifies reality to support a purpose. Its performance depends on training data, variables, assumptions and the conditions in which it is used. A low average error can conceal poor performance during rare but important operating modes. Validation should therefore reflect the decision consequence, not only a convenient statistical score.",
          "Correlation does not establish cause. A model may predict high energy use from outdoor temperature without explaining which intervention will reduce it. Acting on a correlated variable can fail or create harm. Teams should combine domain knowledge, experiments and causal reasoning when moving from prediction to control.",
          "Model drift occurs when equipment, processes, products, behaviour or the environment change. Monitoring should compare new inputs with the model’s validity domain and compare predicted outcomes with observed results. A retraining schedule alone is insufficient; the team needs triggers for review, fallback behaviour and version control.",
          "Decision performance includes false positives, false negatives, delay, workload, opportunity cost and unintended effects. The best threshold is not automatically the one with the highest accuracy. It depends on the consequences of missing a real problem and of acting on a false alarm."
        ),
        workedExample: "A predictive-maintenance model reduces unplanned stoppage estimates but generates many premature interventions. The evaluation adds component consumption, technician time, transport and missed-failure risk before selecting an alert threshold."
      },
      {
        title: "Make human oversight capable of changing the outcome",
        paragraphs: p(
          "Human oversight is meaningful only when the reviewer has time, competence, information and authority to question the system. A person who sees only a recommendation with no assumptions, confidence or alternatives may become a ceremonial approver. Interface design should expose what matters for judgement without overwhelming the user.",
          "Automation bias can cause users to favour a system output even when contradictory evidence exists. The opposite risk is algorithm aversion after one visible error. Training should explain the tool’s purpose, limitations and escalation route. Periodic exercises with edge cases can test whether users understand when to rely on, challenge or stop the system.",
          "Accountability cannot be delegated to an algorithm. Product owner, data owner, model owner, process owner and final decision authority may be different roles. Responsibilities for validation, approval, monitoring, incident handling and retirement should be explicit. The European Union Artificial Intelligence Act uses a risk-based framework; applicability and obligations must be assessed through approved legal and governance processes.",
          "Environmental optimisation can affect people and operational priorities. A scheduling tool may move workload, create unsafe pressure or disadvantage teams whose context is poorly represented. Responsible design includes affected users in testing and monitors distributional effects, not only total efficiency."
        ),
        workedExample: "An optimisation tool proposes delaying a maintenance action to reduce parts use. The interface shows confidence, technical constraints, data age and alternative scenarios; an authorised engineer can reject the proposal and record why."
      },
      {
        title: "Evaluate the footprint and lifetime of the digital solution",
        paragraphs: p(
          "Digital systems require equipment, materials, energy, cooling, networks and replacement. Their footprint depends on architecture, utilisation, electricity context, hardware life and avoided activities. A claim that a digital tool is environmentally beneficial must compare the added burden with measured or credible avoided impacts using an explicit boundary.",
          "Efficiency can trigger rebound. Faster analysis may encourage more simulations; easier monitoring may lead to sensors being installed without a decision use; cheaper computation may increase total demand. Teams should track absolute resource use and define retention, refresh and shutdown rules.",
          "Architecture choices matter. Edge processing can reduce data transfer but increase distributed hardware. Cloud services can share efficient infrastructure but add transmission and limit visibility of allocation methods. Smaller models may deliver adequate performance with less computation. The preferred choice depends on security, latency, reliability, performance and environmental evidence.",
          "Retirement should be designed at the start. A tool needs criteria for continuing value, decommissioning, data retention, hardware recovery and transfer of essential records. Otherwise a pilot can become a permanent layer of unused infrastructure and unmanaged technical debt."
        ),
        workedExample: "A computer-vision waste-sorting pilot records model performance, rejected classifications, server use, camera hardware and actual recovery improvement. Scaling is conditional on net value, not on technical novelty."
      }
    ],
    m4: [
      {
        title: "Translate sustainability into role-specific capability",
        paragraphs: p(
          "Awareness, knowledge, skill and competence are not interchangeable. Awareness means recognising why an issue matters. Knowledge means understanding concepts and requirements. Skill means being able to perform a task. Competence means applying knowledge and skill with appropriate judgement in context. A short general course can create a common language, but it cannot qualify someone for every technical decision.",
          "Capability should be mapped to roles and decisions. A buyer may need to specify evidence and challenge supplier claims. A manufacturing engineer may need hotspot screening and process controls. Maintenance may need substance, waste, component-life and logistics connections. Managers need to set boundaries, resources and review points. Environmental specialists need methods, legal knowledge and assurance.",
          "Training is stronger when it includes practice, feedback and transfer to work. Completion statistics show attendance, not competence. Assessment should ask learners to interpret evidence, recognise a boundary problem, choose a control or create a usable output. Follow-up can examine whether the behaviour appears in real decisions.",
          "Competence has a lifecycle. Procedures, regulations, technology and responsibilities change. Organisations should identify critical capability, maintain it during mobility and retirement, and review needs after incidents or process changes."
        ),
        workedExample: "A substances course uses different pathways: operators practise identification and response; engineers compare substitution trade-offs; buyers review declarations; managers analyse escalation and resourcing."
      },
      {
        title: "Treat weak signals as valuable operational information",
        paragraphs: p(
          "People closest to a process often see leakage, repeated rework, unnecessary movement, unusual odour, damaged packaging or a supplier inconsistency before the indicator changes. These observations are weak signals: incomplete but potentially important. A healthy improvement culture gives them a low-friction route into assessment.",
          "Psychological safety does not mean every idea is accepted. It means people can raise concerns, admit uncertainty and challenge a claim without predictable punishment or humiliation. The receiving process should acknowledge the signal, identify an owner, decide the next step and close the loop. Silence after submission teaches people not to report again.",
          "Signals need framing. The observer should not be expected to produce a business case or full environmental study. A facilitator can help define what was seen, where, when, under which condition, what changed and what consequence is possible. The resulting question may lead to inspection, data review, a safe trial or escalation.",
          "Recognition should reward learning and useful prevention, not only spectacular savings. If incentives favour large claimed benefits, people may exaggerate baselines or hide unsuccessful trials. Honest negative results protect the organisation from repeating weak solutions."
        ),
        workedExample: "An operator reports that a cleaning bath needs more frequent replacement after a product change. The team records the condition, checks contamination, output quality and chemical use, then tests a revised control rather than dismissing the observation as anecdotal."
      },
      {
        title: "Use experiments to reduce uncertainty safely",
        paragraphs: p(
          "A pilot should answer a decision question. It needs a hypothesis, baseline, boundary, success criteria, guardrails, roles, duration and learning plan. ‘Try it and see’ often generates activity without comparable evidence. A good experiment states what result would support scale-up, adaptation or stopping.",
          "The smallest safe test reduces cost and exposure while preserving learning value. It may use one line, one material batch, a temporary meter or a simulation before physical change. The test must still represent the relevant operating condition; an easy demonstration under ideal circumstances can create false confidence.",
          "Guardrails protect non-environmental outcomes and prevent burden shifting. They can include quality, safety, reliability, workload, compliance, delivery and cost thresholds. Data collection should be agreed before the trial so that teams do not select only favourable observations afterwards.",
          "After the test, the team compares results with the hypothesis, investigates deviations and records what remains uncertain. Scaling changes the system: supplier capacity, behaviour, logistics and maintenance may differ from the pilot. The scale-up plan therefore needs its own monitoring."
        ),
        workedExample: "A reusable cover pilot defines expected waste prevention, return rate and cleaning demand, with guardrails for damage and foreign-object risk. It runs across normal and peak workload before a wider decision."
      },
      {
        title: "Create a rhythm that turns learning into standard work",
        paragraphs: p(
          "Improvement becomes durable when it is connected to operating routines. Short visual reviews can examine indicators and exceptions; technical forums can review methods; management reviews can allocate resources and resolve systemic barriers. The cadence should match the speed and consequence of the process rather than create meetings for their own sake.",
          "Ownership is clearer when every action has one accountable lead, supporting roles, a date and a defined output. Shared responsibility without decision rights can mean no responsibility. Escalation criteria help teams know when an issue requires specialist or management attention.",
          "Standardisation should follow evidence. Updating work instructions, training, specifications, maintenance plans or digital rules embeds a proven change. Standardising too early can spread a weak result; failing to standardise leaves benefits dependent on individual memory. Version control and communication are part of the environmental outcome.",
          "Learning should travel. A concise record of context, method, result, limitations and contacts is more reusable than a promotional success story. Communities of practice can compare patterns across sites while preserving local differences and confidentiality."
        ),
        workedExample: "A monthly environmental performance review follows a stable agenda: abnormal condition, leading indicators, outcome, guardrails, open experiments, decisions and transferable lessons."
      }
    ],
    m5: [
      {
        title: "See the value chain as a network of dependencies",
        paragraphs: p(
          "Aerospace value chains contain raw materials, specialised processors, component manufacturers, logistics, service providers and waste or recovery partners. The direct contractual supplier may not perform the environmentally significant process. Mapping therefore starts with product and process knowledge, not only a vendor list.",
          "Dependency and impact are different questions. The organisation may depend on a supplier’s water, energy, skills or critical material, while the activity also creates emissions, pollution, waste or ecosystem pressure. Those conditions can become operational, legal, financial or reputational risk. Understanding the pathway is more useful than assigning one generic supplier score.",
          "Prioritisation should combine severity and decision relevance. Criticality, spend and single-source status matter for resilience, but low-spend upstream activities can have significant environmental or human-rights issues. A risk-based process uses available screening to decide where deeper evidence and engagement are needed.",
          "Visibility will be incomplete. The responsible response is a staged evidence plan: state what is known, identify the tier or process that matters, request proportionate information, use credible proxies where necessary and improve over time. A lack of perfect mapping should not be converted into a claim of no risk."
        ),
        workedExample: "A surface-treated component is mapped beyond the direct machining supplier to the treatment process, chemical source, energy context, transport and waste route because those stages may drive the environmental question."
      },
      {
        title: "Turn questionnaires into evidence, engagement and action",
        paragraphs: p(
          "A supplier questionnaire is a collection method, not due diligence by itself. Answers can be incomplete, interpreted differently or unsupported. Evidence quality improves when questions are specific, definitions are provided and requested documents match the risk. The process needs review, clarification, action and follow-up.",
          "The Organisation for Economic Co-operation and Development (OECD) describes risk-based due diligence as embedding responsible business conduct, identifying and assessing impacts, ceasing or mitigating them, tracking implementation, communicating and providing for remediation where appropriate. This public framework supports learning but does not replace Airbus processes or legal advice.",
          "Engagement should distinguish capability gaps from unwillingness or serious non-conformance. Some suppliers need clearer expectations, training or time-bound improvement. Others may require escalation. A binary pass/fail score can hide both meaningful progress and material unresolved risk.",
          "Verification is proportionate. It may include document review, data checks, technical discussion, audit, site visit, third-party information or outcome monitoring. Certificates can support evidence but should not be treated as proof that every product, site or claim is covered."
        ),
        workedExample: "A supplier reports 100% renewable electricity. Review checks site and period, contractual instrument, consumption coverage, residual supply, verification and whether the claim is about electricity only—not total product impact."
      },
      {
        title: "Assess substances through hazard, exposure, function and lifecycle",
        paragraphs: p(
          "Chemical substitution is not a simple search for a product with a friendlier label. The assessment should define the function, applicable hazard and regulatory concerns, exposure pathways, process conditions, required performance, service life, waste route, qualification effort and supply availability. Reducing one hazard while increasing exposure, failure rate or energy use can transfer rather than solve the problem.",
          "The European Chemicals Agency (ECHA) maintains the Candidate List of substances of very high concern under the Registration, Evaluation, Authorisation and Restriction of Chemicals framework. Applicable obligations and approved responses must be determined through current specialist processes. A training course should teach users to recognise the need for review, not to make compliance decisions from a static list.",
          "Data need to travel with materials and articles. Safety Data Sheets support chemical products but do not answer every question about articles, process by-products or legacy content. Declarations, specifications, composition knowledge and configuration records may all be relevant. Confidential business information requires controlled handling, not absence of evidence.",
          "Substitution programmes often require a portfolio view. A technically demanding alternative may take years to qualify. Interim controls, supplier engagement, research and obsolescence planning should be coordinated so that urgent scarcity does not force a weaker decision later."
        ),
        workedExample: "A proposed cleaning agent has a lower hazard classification but needs twice the process time and more heated rinsing. The trial compares exposure, technical quality, water, energy, waste and supply continuity before qualification."
      },
      {
        title: "Design resilience without hiding environmental transfers",
        paragraphs: p(
          "Resilience is the capacity to anticipate, absorb, recover and adapt. Lean systems can reduce inventory and waste but become vulnerable to disruption. Buffers can protect availability but create obsolescence, storage and tied-up material. Dual sourcing can reduce dependency but require additional qualification and transport. No option is automatically sustainable.",
          "Risk assessment should connect hazard, exposure and consequence. A drought matters when a critical upstream process depends on water in the affected basin and has limited alternatives. A flood matters when supplier or transport nodes are exposed and recovery time exceeds operational tolerance. Mapping critical dependencies makes climate and nature information actionable.",
          "Responses can be layered: reduce demand, improve repair, share or pool stock, increase visibility, improve supplier capability, qualify an alternative process, diversify geography, establish a time-limited buffer or redesign the component. Each measure changes cost, environmental impact and operational risk differently.",
          "Exercises and leading indicators test whether the plan exists beyond a document. Supplier recovery time, alternative capacity, inventory age, urgent transport and unresolved evidence gaps can be monitored. After a disruption, the organisation should update assumptions rather than returning automatically to the previous state."
        ),
        workedExample: "A single-source electronic component faces long lead times. The team compares lifetime buy, redesign, repair, pooled stock and qualified alternatives using availability, obsolescence, material, waste, transport and implementation risk."
      }
    ],
    m6: [
      {
        title: "Keep climate mitigation, adaptation and nature conceptually distinct",
        paragraphs: p(
          "Climate mitigation reduces greenhouse-gas sources or enhances removals. Climate adaptation adjusts systems to actual or expected climate effects. Nature includes living organisms, ecosystems and the physical systems with which they interact. Biodiversity describes variability within species, between species and among ecosystems. These themes interact but cannot be represented by one universal indicator.",
          "A climate mitigation project can affect nature through land, water, minerals or infrastructure. A nature-based intervention can support adaptation while failing to compensate for continuing greenhouse-gas emissions. A local biodiversity action cannot justify a product-wide climate claim. Keeping the concepts distinct prevents one positive action from being used to imply overall environmental superiority.",
          "Risk pathways help connect science to operations. A physical hazard such as heat or intense rainfall affects an exposed asset, supplier or workforce with a particular vulnerability. Adaptation can reduce vulnerability or exposure. Mitigation addresses the emissions that contribute to future climate change. Both require boundaries, time horizons and ownership.",
          "Environmental management benefits from integrated review because the same decision may affect energy, water, pollution, land and resilience. Integration does not mean collapsing indicators. It means seeing interactions while retaining the evidence appropriate to each issue."
        ),
        workedExample: "Installing shade and vegetation around a building may reduce heat exposure and improve habitat, but the design still checks water demand, species suitability, drainage, maintenance and the separate need to reduce energy-related emissions."
      },
      {
        title: "Analyse dependencies and impacts before naming risks and opportunities",
        paragraphs: p(
          "An impact is a change in the state of nature caused or contributed to by an activity: land conversion, water withdrawal, pollution, disturbance or restoration. A dependency is an ecosystem service or condition the activity relies on, such as water supply, flood regulation, soil stability or temperature regulation. Impacts and dependencies create pathways to risks and opportunities.",
          "The Taskforce on Nature-related Financial Disclosures (TNFD) LEAP approach structures assessment as Locate interfaces with nature, Evaluate dependencies and impacts, Assess risks and opportunities, and Prepare to respond and report. It is a public framework, not an Airbus procedure. Its strongest learning contribution is to put location before generic scoring.",
          "The same activity can have different significance in different places. Water use depends on basin condition and competing demand. Noise and light depend on sensitive species and timing. Sealed surface depends on drainage, habitat connectivity and cumulative development. Desktop datasets support screening but do not replace appropriate local evidence and expertise.",
          "Value-chain dependencies also matter. Materials and components may connect to mining, forestry, water-intensive processing or land conversion far from the final site. Prioritisation should identify where the combination of pressure, ecosystem condition and business dependency is most decision-relevant."
        ),
        workedExample: "A supplier’s water consumption is not ranked from volume alone. The review combines process dependence, basin stress, seasonal conditions, discharge quality, local users, contingency plans and alternative technology."
      },
      {
        title: "Use spatial and temporal evidence to understand significance",
        paragraphs: p(
          "Nature-related assessment needs a spatial boundary that follows ecological processes, not only the property line. Drainage, groundwater, species movement, noise, light and air emissions can cross administrative boundaries. The area of influence should be proportionate to the pathway and potential consequence.",
          "Timing changes significance. Construction during breeding season, lighting during migration or water withdrawal during drought can have different effects from the annual average. Baselines should capture relevant seasonal and interannual variability. A single survey can be a starting point, not automatic proof of absence.",
          "Cumulative effects arise when multiple activities, existing pressures and future changes interact. A small additional sealed area may be significant in a heavily altered catchment. Assessment should consider other known projects and background trends where relevant, while stating data limitations.",
          "Indicators should connect pressure, state and response. A response indicator such as trees planted does not show habitat condition. A pressure indicator such as light intensity and a state indicator such as occupancy or vegetation condition can provide a more meaningful picture. Monitoring design should include reference condition, method, frequency, responsibility and adaptive response."
        ),
        workedExample: "A site drainage change is assessed across the catchment, wet and dry periods, downstream sensitivity, existing sealed surfaces and planned development—not only the footprint of the new work."
      },
      {
        title: "Follow the mitigation hierarchy and communicate conservatively",
        paragraphs: p(
          "The mitigation hierarchy gives priority to avoiding impacts, then minimising those that cannot be avoided, restoring affected systems and considering offsets or compensation for residual impacts under appropriate rules. The order matters because restoration is uncertain and cannot always recreate location, function or time lost.",
          "Avoidance begins early: alternative location, layout, timing, technology or need. Minimisation controls remaining pressure. Restoration requires an ecological objective, baseline, method, maintenance and evidence of trajectory. A visually attractive planting scheme is not automatically restoration or biodiversity gain.",
          "Claims such as ‘nature positive’ or ‘net positive’ require defined scope, baseline, methods, time horizon, treatment of residual impacts and credible evidence. A small local action should be described precisely: what was done, where, why, what is monitored and what is not claimed. This protects both credibility and learning.",
          "Adaptive management uses monitoring to adjust action. Thresholds should specify when additional control, expert review or a different approach is required. Publishing only activity counts without ecological outcome can create a success story before the result exists."
        ),
        workedExample: "A pollinator area is communicated as a monitored habitat-management trial, with baseline, species selection, pesticide controls, water plan and seasonal indicators—not as proof that the industrial site is ‘nature positive’."
      }
    ]
  };

  const additionalLessons = {
    m1: [
      lesson(
        "m1-l5", "05 · Aspects, impacts & obligations", "From environmental interaction to controlled significance", "11–13 min",
        p(
          "An environmental aspect is an element of an organisation’s activities, products or services that interacts or can interact with the environment. The environmental impact is the resulting change, adverse or beneficial. Electricity use is an aspect; greenhouse-gas emissions and resource depletion are possible impacts. A chemical storage activity is an aspect; soil or water contamination is a possible impact if containment fails. Keeping the distinction clear improves both risk analysis and controls.",
          "Aspect identification should cover normal operation, abnormal conditions and reasonably foreseeable emergencies. It should consider planned changes, new developments and lifecycle stages the organisation can control or influence. A list copied from another facility will miss site, process and context. The exercise needs people who understand the work, environmental pathways and applicable obligations.",
          "Significance evaluation helps prioritise management. Criteria may include scale, severity, frequency, sensitivity of the receiving environment, legal or stakeholder requirements, degree of control and consequences of abnormal events. The method should be defined and applied consistently. A numerical score can support discussion, but it does not replace judgement or legal compliance; a mandatory requirement does not become optional because a score is low.",
          "Compliance obligations include applicable legal requirements and other commitments the organisation chooses or is required to meet. A register is useful only when requirements are translated into operational meaning: affected activity, required action, evidence, owner, frequency and change-monitoring route. Teams should use approved legal and Airbus systems; this lesson explains the logic, not the current requirement for a specific installation.",
          "Operational control connects significant aspects and obligations to work. Controls can include engineering measures, operating criteria, maintenance, inspection, competence, procurement requirements, emergency arrangements and contractor management. The control should address the environmental pathway and be testable. ‘Raise awareness’ is rarely sufficient for a failure mode that requires physical containment or automatic shutdown.",
          "Change management should revisit aspects, obligations and controls before a modified process starts. New material, increased quantity, different shift pattern, altered drainage or outsourced step can change significance even when the final product is unchanged."
        ),
        ["Distinguish aspect, impact, risk and control.", "Include normal, abnormal and emergency conditions.", "Translate obligations into owned, auditable actions."],
        { label: "Control test", text: "Can the team explain which environmental pathway the control interrupts and what evidence shows that it works?" },
        { title: "A practical significance review", paragraphs: p("Start with the activity and condition. Identify inputs, outputs and possible releases. Describe the receiving environment and stakeholders. Check obligations. Evaluate consequence and likelihood using the approved method. Record existing controls and whether additional action is needed. Review after change or incident.", "Avoid using the significance score as a communication claim. It is a prioritisation method inside a defined management system, not a universal measure of environmental harm.") },
        "A new mobile container increases storage flexibility. The review covers substance hazards, quantity, compatibility, containment, vehicle movement, drainage, emergency response, inspection and waste—not just the fact that the container is temporary."
      ),
      lesson(
        "m1-l6", "06 · Materiality, objectives & indicators", "Choose what matters and measure what the decision can influence", "11–13 min",
        p(
          "Materiality is used in several contexts. Environmental management asks which issues are significant for the organisation and its environmental performance. Sustainability reporting can examine impacts on people and environment and, depending on the framework, financial effects on the organisation. A project team should state which meaning it uses. A matrix with coloured bubbles is not a result unless its inputs, criteria, stakeholders and decisions are understood.",
          "An objective describes the intended result. A target makes the result specific and measurable where practicable. Strong objectives connect to significant aspects, obligations, risks, opportunities and strategic direction. They also have resources, owners, milestones and a method for evaluating progress. Choosing only what is easy to count can leave material issues unmanaged.",
          "Indicators need a causal role. Input indicators measure resources used; activity indicators measure implementation; output indicators measure immediate deliverables; outcome indicators measure environmental change. Leading indicators can warn before harm; lagging indicators show results after the fact. A balanced set helps teams understand both execution and effect.",
          "Intensity indicators divide impact by an output such as production hour, unit or surface treated. They help explain efficiency but can improve while absolute impact rises. Absolute and intensity measures should often be viewed together. The denominator needs stable definition and relevance to function. Otherwise teams can improve the ratio by changing accounting rather than performance.",
          "Targets should include a baseline, boundary, period, calculation method and exclusions. Where data are immature, a staged target can first improve coverage and quality, then performance. This is more credible than publishing a precise ambition based on an unstable inventory.",
          "Review should ask whether the indicator still supports the decision. A metric can lose relevance when the process, product mix or operating context changes. Changing a method may be necessary, but trends must be recalculated or clearly separated so that improvement is not manufactured by a methodological break."
        ),
        ["State which materiality concept is being used.", "Pair outcome indicators with implementation and guardrail measures.", "Report absolute and intensity trends when each tells a different part of the story."],
        { label: "Indicator question", text: "If this number changes, what decision or response should follow? If the answer is ‘none’, reconsider why it is collected." },
        { title: "Indicator anatomy", paragraphs: p("Record the indicator name, purpose, definition, unit, boundary, source, calculation, owner, frequency, quality check, baseline and trigger. A dashboard tile without this metadata invites inconsistent interpretation.", "Targets should be ambitious enough to matter and controlled enough to learn from. Uncertainty should be visible rather than converted into unjustified decimals.") },
        "A waste target is tracked as total tonnes, kilograms per accepted production output, prevention from approved projects and quality escapes. Together they show whether efficiency improves without hiding absolute growth or rework."
      ),
      lesson(
        "m1-l7", "07 · Claims & anti-greenwashing", "Communicate only what the evidence can support", "12–14 min",
        p(
          "Greenwashing occurs when communication makes an organisation, product or action appear environmentally better than the evidence supports. It can involve false information, but more often it uses vague language, selective boundaries, irrelevant truths, unsupported imagery or an accurate detail presented as if it describes the whole. Internal communication also matters because weak claims can shape investment and behaviour before they reach the public.",
          "A credible claim identifies the subject, improvement, baseline, boundary, period and evidence. ‘The revised process used 12% less electricity per accepted unit during a controlled three-month trial’ is more informative than ‘a greener process’. It still needs limitations: whether upstream steps changed, whether the result is verified and whether performance is expected at scale.",
          "Absolute terms such as zero impact, completely sustainable, eco-friendly or nature positive carry a very high burden. They often conceal multiple impact categories and lifecycle stages. Avoiding the word does not fix the claim if images, colour and context create the same overall impression. Communication should be reviewed as a complete message.",
          "Cherry-picking selects the metric, period or baseline that gives the most favourable result. A fair message includes material trade-offs and does not omit a worsening indicator that would change the audience’s understanding. Environmental benefits should not be presented as safety, quality or operational benefits unless those were also evaluated.",
          "Future goals should be distinguished from achieved results. A target is not evidence of impact. Communication should explain the base year, scope, pathway, dependencies and progress method. If performance depends on supplier action, future technology or certificates, those conditions should be visible.",
          "A simple review chain protects credibility: identify the audience and likely interpretation; assemble evidence; test boundary and lifecycle relevance; check wording and visuals; obtain appropriate technical, environmental, legal and communication review; retain the substantiation file; and set a review date. If the evidence changes, the claim must change too."
        ),
        ["Name the subject, baseline, boundary, period and evidence.", "Distinguish a target, activity, output and verified outcome.", "Review visuals and implied meaning as well as literal wording."],
        { label: "Red flag", text: "If a claim becomes less impressive when the boundary is explained, the boundary belongs in the message—not in a hidden footnote." },
        { title: "Claim substantiation file", paragraphs: p("Keep the approved wording, intended use, data source, calculation, assumptions, exclusions, review records, owner and expiry or review date. This creates traceability and prevents an old claim being reused after conditions change.", "Conservative communication is not weak communication. It makes genuine progress believable and creates space to explain trade-offs without promising perfection.") },
        "A team avoids saying a new package is ‘sustainable’. It reports the measured reduction in single-use material for a defined route, the return rate, cleaning demand, damage performance and the remaining trial limitations."
      )
    ],
    m4: [
      lesson(
        "m4-l5", "05 · Human factors & change", "Design improvement for the way work is actually performed", "12–14 min",
        p(
          "Environmental performance is shaped by equipment, procedures, workload, tools, information, supervision and informal adaptation. Explaining a gap as ‘people not caring’ can hide a system that makes the desired behaviour difficult or conflicts with delivery, safety or quality. Human-factors analysis examines the conditions in which decisions are made.",
          "Work-as-imagined is the process described in plans and procedures. Work-as-done includes real constraints, variability and local adjustments. Improvement design should observe and discuss both. A control that requires several extra steps during peak workload may be bypassed unless the workflow, resources or technology also change.",
          "Change creates uncertainty and perceived loss. People may worry about technical risk, workload, competence, status or whether a trial will later be used to judge them. Early involvement improves problem definition and reveals practical barriers. It does not mean that every preference determines the decision; it means affected knowledge enters the design and concerns receive a response.",
          "Communication should answer: why the change is needed, what evidence supports it, what remains uncertain, what exactly changes, what does not change, how people are supported and how feedback will alter the rollout. Repeating a slogan is not engagement. Supervisors need enough understanding to handle questions and contradictions.",
          "Incentives can distort results. If a team is rewarded only for reducing one metric, it may delay necessary work, shift impact or under-report exceptions. Balanced measures and guardrails reduce this risk. Leaders should respond constructively when evidence shows that a target or method needs revision.",
          "Fatigue, time pressure and cognitive load affect monitoring and data entry. Controls should use clear cues, sensible defaults, physical design and error detection. Training alone is weak when the task design continually pushes in the opposite direction."
        ),
        ["Study work-as-done before changing the procedure.", "Include affected people in problem framing and trials.", "Align workload, tools and incentives with the desired control."],
        { label: "Change question", text: "What will make the correct environmental action difficult during the busiest, least predictable operating condition?" },
        { title: "Barrier analysis", paragraphs: p("Classify barriers as knowledge, skill, equipment, time, authority, information, incentive, habit or conflicting requirement. Select action that matches the barrier.", "Measure adoption and outcome separately. People can follow a new step without the environmental result appearing, or a temporary result can appear while the process is not sustainably adopted.") },
        "A segregation error persists after refresher training. Observation shows that containers are distant, labels use internal codes and the correct container is often full. Layout, service frequency and labels are redesigned before more training is prescribed."
      ),
      lesson(
        "m4-l6", "06 · Knowledge transfer", "Keep critical learning available across programmes, sites and careers", "11–13 min",
        p(
          "Knowledge can be explicit—documents, data, methods and records—or tacit—judgement built through experience. Sustainability decisions often depend on both. A procedure can describe a test, while an experienced practitioner recognises when the sample is unrepresentative or the result conflicts with process reality.",
          "Knowledge loss occurs during mobility, retirement, supplier change, project closure and software replacement. Waiting for a handover in the final week is too late. Critical-knowledge mapping identifies decisions with few competent people, long learning curves or high consequence and creates a continuity plan.",
          "Communities of practice connect people who face related decisions. Their value comes from comparing methods, failures, boundaries and evidence—not from collecting promotional stories. A facilitator, rhythm, searchable outputs and links to governance make the community durable.",
          "A reusable case record should capture context, question, baseline, method, data quality, result, trade-offs, decision, monitoring and contacts. It should also state where transfer is unsafe. A solution proven for one process, climate or production mix may require new validation elsewhere.",
          "Mentoring and peer review transfer judgement. Shadowing a site assessment, reviewing a lifecycle screen or jointly designing an indicator creates richer learning than passive reading. Roles should rotate without losing an accountable specialist review where required.",
          "Information architecture affects discoverability. Consistent tags, version control, ownership and review dates prevent teams from relying on an obsolete slide. Confidentiality and security must be preserved; the aim is appropriate reuse, not unrestricted access."
        ),
        ["Identify critical tacit knowledge before a role changes.", "Record limitations and transfer conditions with every case.", "Use communities and peer review to build judgement."],
        { label: "Reuse rule", text: "Transfer the reasoning and evidence, not just the final answer." },
        { title: "One-page learning record", paragraphs: p("Use eight fields: context, decision, baseline, boundary, evidence, trade-off, result and transfer conditions. Link detailed files rather than hiding the reasoning in an uncontrolled presentation.", "Review records on a planned cycle and after major method or regulatory change.") },
        "A successful water-reduction trial is shared with another site together with product mix, cleaning standard, local water context, equipment settings and failure modes. The second site adapts the test instead of copying the percentage."
      ),
      lesson(
        "m4-l7", "07 · Capability assurance", "Measure whether learning changes decisions and controls", "11–13 min",
        p(
          "A capability matrix links roles to required awareness, knowledge, skill, authority and evidence of competence. It should focus on tasks and decisions, not job titles alone. Contractors and temporary roles may perform environmentally significant work and need inclusion.",
          "Learning objectives should use observable verbs: identify, calculate, interpret, challenge, select, perform or escalate. ‘Understand sustainability’ is too vague to design an assessment. Each objective should connect to a work output or behaviour and the consequence of error.",
          "Assessment can include knowledge questions, scenario decisions, observed demonstrations, work samples, supervised practice and review of real outputs. High-consequence tasks require stronger evidence than a self-declaration or attendance record. Passing an online quiz may be one component, not complete authorisation.",
          "Training effectiveness can be evaluated at several levels: participation, learning, behaviour transfer and organisational outcome. A rise in scores without changed work may indicate that the content is memorable but not usable. Outcome change without verified behaviour may be due to production or weather rather than training.",
          "Refresher frequency should respond to risk, change and performance rather than a universal annual cycle. Incident, audit finding, process modification, role change or long period without practice can trigger reassessment. Microlearning supports retention but should not fragment complex judgement into slogans.",
          "Capability gaps need resourcing. If a role lacks time, tools or authority, more training will not solve the system problem. Management should decide whether to develop, recruit, obtain specialist support, simplify the task or change the control."
        ),
        ["Link every requirement to a role and observable task.", "Use assessment proportional to decision consequence.", "Evaluate transfer to work, not only course completion."],
        { label: "Evidence question", text: "What would convince an independent reviewer that this person can perform the environmental task correctly in context?" },
        { title: "Four-level evaluation", paragraphs: p("Level 1: learner experience. Level 2: knowledge or skill gained. Level 3: behaviour used at work. Level 4: outcome and control effectiveness. Each level answers a different question.", "Do not claim that training caused an environmental improvement without considering other changes and a credible comparison.") },
        "Buyers complete a supplier-evidence module, then submit an anonymised evidence review. A specialist checks whether they found boundary and substantiation gaps before the role is marked competent."
      )
    ],
    m5: [
      lesson(
        "m5-l5", "05 · Multi-tier mapping", "Find the processes and locations behind the direct supplier", "12–14 min",
        p(
          "Multi-tier mapping can begin from a product structure, material flow or process route. The objective is not to create a perfect global map immediately. It is to locate the upstream activities, locations and dependencies most likely to matter for a defined decision. Mapping scope should state product family, supplier population, tiers, period and evidence level.",
          "Bills of material identify components but may not show sub-tier processors, consumables, logistics or service providers. Purchase data show commercial relationships but not environmental pathways. Supplier declarations add knowledge but can be incomplete. Combining engineering, procurement, quality, environmental and logistics information creates a more useful view.",
          "Traceability can be physical, documentary, digital or based on chain-of-custody models. Segregated models preserve material identity; mass-balance models track certified inputs within a system without guaranteeing the exact molecules in a product; book-and-claim separates the certificate from physical flow. Each can serve a purpose, but claims must match the model.",
          "Geolocation is important for water, climate hazards, energy context, land use and regulatory conditions. Country-level information can be too coarse. However, exact location data may be commercially sensitive or unavailable. A staged approach can prioritise critical processes and use controlled data access.",
          "Mapping quality should be reported. Coverage by spend alone may look high while missing a low-spend critical material. Useful views include coverage by product mass, risk category, criticality, tier, process and location. Unknown should remain visible as a category.",
          "The map needs maintenance. Supplier, process, ownership and sourcing changes can make it obsolete. Procurement and change workflows should trigger updates for critical nodes rather than relying on an occasional mapping campaign."
        ),
        ["Map decision-relevant processes, not only contracts.", "Match claims to the chain-of-custody model.", "Keep unknown tiers and locations visible."],
        { label: "Mapping purpose", text: "A map is useful when it changes where evidence, engagement or resilience action is directed." },
        { title: "Confidence layers", paragraphs: p("For each node record source, tier, location precision, process knowledge, last review and confidence. Visual layers help distinguish verified relationships from assumptions.", "Do not turn an inferred sub-tier into a factual public claim. Use it to guide verification.") },
        "A component’s direct supplier performs assembly, while energy-intensive forging and surface treatment occur at sub-tiers. The assessment prioritises those processes rather than requesting more office data from the assembler."
      ),
      lesson(
        "m5-l6", "06 · Procurement & total value", "Embed evidence and lifecycle consequences in sourcing decisions", "11–13 min",
        p(
          "Procurement influences sustainability through requirements, evaluation, contracts, supplier development and demand planning. Environmental criteria should be connected to the product or service and stated in a way suppliers can evidence. Vague requests for ‘green solutions’ invite incomparable claims.",
          "A specification can define performance, restricted substances, data, packaging, repair, recovery, energy or waste expectations where relevant. Over-specification can also create material and process burden. Cross-functional review should challenge whether legacy requirements remain necessary and whether alternatives preserve safety, quality and function.",
          "Total cost of ownership extends beyond purchase price to qualification, operation, maintenance, downtime, consumables, logistics, waste, obsolescence and end of life. Environmental impacts are not automatically converted into money, but lifecycle cost and environmental evidence can be reviewed together to avoid a cheap purchase that creates repeated burden.",
          "Evaluation criteria need weights, minimum conditions and evidence rules. Scoring a glossy policy the same as verified product data weakens the result. Teams should distinguish organisational capability, site performance, product evidence and improvement commitment.",
          "Contracts can require data quality, change notification, corrective action, audit rights or improvement plans where proportionate. Requirements should be feasible, legally reviewed and supported by a process to use the information. Collecting supplier data that nobody assesses wastes effort on both sides.",
          "Supplier development can create more value than rapid replacement when capability is improvable and the relationship is critical. The decision should consider severity, urgency, leverage, technical alternatives and whether continued engagement prevents or prolongs impact."
        ),
        ["Write criteria that suppliers can evidence.", "Distinguish organisation, site, process and product-level claims.", "Use the data in a defined evaluation and follow-up workflow."],
        { label: "Specification test", text: "Does the requirement describe the needed environmental evidence or performance without dictating an unjustified solution?" },
        { title: "Evidence-weighted evaluation", paragraphs: p("For each criterion define relevance, evidence accepted, verification, score anchors and deal-breakers. Record uncertainty and avoid false precision when data are not comparable.", "A higher environmental score does not override mandatory technical or compliance conditions. The final rationale should show how trade-offs were resolved.") },
        "Two logistics offers report emissions using different boundaries and load assumptions. Procurement requests a common shipment profile and method before using the figures in scoring."
      ),
      lesson(
        "m5-l7", "07 · Inventory, logistics & disruption", "Balance availability, obsolescence and urgent transport", "12–14 min",
        p(
          "Inventory protects against variability in demand and lead time, but it also contains embodied material, storage demand and obsolescence risk. A universal policy of minimising or maximising stock is weak. The decision should consider criticality, failure distribution, repair cycle, shelf life, commonality, supplier recovery and consequence of non-availability.",
          "Urgent logistics can carry higher cost and environmental burden than planned consolidated movement, but averages can mislead. The relevant comparison includes probability and consequence: a lean policy with frequent emergency shipments may perform worse than a targeted buffer, while excessive stock may never be used.",
          "Repair loops change the equation. Faster diagnosis, access to repair data, pooled repairable assets and reliable return logistics can reduce both stock and urgent transport. Component commonality and modular design can also reduce the number of unique buffers required.",
          "Obsolescence is technical and environmental. Lifetime buys can protect availability but risk unused material if demand or design changes. Redesign consumes engineering and qualification effort but may remove a constrained substance or single source. Scenario analysis should examine plausible programme and failure conditions.",
          "Transport decisions include mode, route, load factor, packaging, temperature control, security, customs and return flows. A mode switch cannot be claimed beneficial without confirming that lead time, damage, additional inventory and rerouting do not reverse the result.",
          "After disruption, emergency measures should have an exit and learning plan. Temporary air freight, extra packaging or buffer stock can become normal without review. Recording cause, response, outcome and prevention options helps the system become more resilient rather than simply heavier."
        ),
        ["Model demand, lead-time variability and consequence—not only average stock.", "Include repair loops and commonality as resilience options.", "Set review and exit conditions for emergency measures."],
        { label: "Policy question", text: "Which differentiated combination of repair, pooling, visibility, buffer and sourcing meets the required service level with the most defensible lifecycle outcome?" },
        { title: "Scenario set", paragraphs: p("Test normal demand, peak demand, supplier outage, transport disruption and design change. Compare availability, stock age, urgent movements, waste and recovery time.", "Use ranges when failure and demand data are uncertain. The aim is a robust policy, not one optimum built on a fragile forecast.") },
        "A critical repairable unit is pooled across programmes with monitored repair turnaround and emergency thresholds, reducing local duplication without assuming that zero stock is possible."
      )
    ],
    m6: [
      lesson(
        "m6-l5", "05 · Greenhouse gases & climate risk", "Connect inventories, reduction decisions and physical resilience", "12–14 min",
        p(
          "A greenhouse-gas inventory organises emissions within defined organisational and operational boundaries. Direct emissions, purchased-energy emissions and value-chain emissions answer different management questions. Methods, factors, consolidation approach and base-year recalculations should be documented. This course explains concepts; current corporate inventories and targets must use approved Airbus methods.",
          "Activity data such as fuel, electricity, refrigerant loss, material or transport are multiplied by factors or modelled using supplier data. Precision should match significance. Market-based contractual information and location-based electricity information describe different attributes and should not be mixed without explanation.",
          "Reduction follows a decision hierarchy: avoid unnecessary demand, improve efficiency, change process or energy source where technically and legally suitable, engage the value chain and address residual emissions according to approved strategy. Certificates or removals do not remove the need to state gross emissions, boundary and underlying action.",
          "A carbon result is not a complete environmental assessment. Electrification can shift emissions upstream and affect peak demand, infrastructure, minerals or resilience. Lower-carbon material can change performance or supply. Lifecycle and guardrail review prevents a climate metric from hiding another material consequence.",
          "Physical climate risk combines hazard, exposure and vulnerability. Heat, heavy rainfall, drought, wind, wildfire or changing water availability can affect sites, people, infrastructure, suppliers and logistics. Historical averages may not represent future design conditions. Scenarios and critical thresholds support adaptation decisions.",
          "Adaptation should avoid maladaptation: action that increases emissions, transfers risk or locks in vulnerability. A cooling response can protect people while sharply increasing energy demand; passive measures, controls, work planning and resilient equipment may form a better package."
        ),
        ["Keep inventory scopes, methods and claims distinct.", "Prioritise gross reduction and explain instruments separately.", "Assess hazard, exposure, vulnerability and maladaptation."],
        { label: "Climate decision", text: "What reduces present emissions, what protects against changing conditions, and where do those actions interact or conflict?" },
        { title: "Base-year integrity", paragraphs: p("Structural change, improved methodology or material error can require recalculation so that the trend remains comparable. The rule should be defined in advance and disclosed.", "Avoid presenting an inventory change caused by boundary or factor update as an operational reduction.") },
        "A heat-resilience project compares additional cooling with shading, insulation, ventilation control, schedule changes and equipment tolerance, tracking both worker protection and energy outcome."
      ),
      lesson(
        "m6-l6", "06 · Water, pollution & cumulative pressure", "Assess connected environmental pathways at the right place and time", "12–14 min",
        p(
          "Water management includes withdrawal, consumption, discharge quality, timing, source and basin context. Withdrawal is water taken; consumption is the portion not returned to the same catchment in a usable timeframe. A volume can be small globally and material locally during scarcity. Site and supplier assessment should connect use to process dependency and location.",
          "Water balance maps inputs, uses, recirculation, evaporation, product, discharge and unexplained loss. Metering and process knowledge reveal leaks and opportunities, but conservation measures must consider concentration of contaminants, energy for treatment and operational quality. Closing a loop can transfer pollution if contaminants accumulate.",
          "Pollution pathways include air, water and soil, as well as noise, vibration, light and heat. A mass release alone does not describe significance; toxicity, persistence, exposure, receiving sensitivity and cumulative pressure matter. Prevention and source reduction are generally stronger than relying only on end-of-pipe treatment.",
          "Sealed surfaces alter infiltration, runoff and heat. Drainage infrastructure can connect an industrial incident quickly to surface water. Spatial assessment should identify receptors, flow paths, containment and abnormal conditions. Emergency exercises test whether controls work during rain, darkness or reduced staffing.",
          "Cumulative pressure can arise from many small sources, neighbouring activities and long-term change. Legal compliance at each point does not automatically mean no cumulative environmental concern. Monitoring trends and participating in relevant catchment or local coordination can improve understanding.",
          "Integrated action looks for co-benefits without assuming them. Process-water reduction may save energy and chemicals; habitat design may support stormwater management; pollution prevention may improve worker exposure. Each claimed benefit still needs its own evidence."
        ),
        ["Distinguish withdrawal, consumption and discharge.", "Map pathways and receptors for normal and abnormal conditions.", "Test co-benefits rather than assuming them."],
        { label: "Place-based question", text: "Which environmental condition at this location makes the same activity more or less significant?" },
        { title: "Water evidence set", paragraphs: p("Record source, basin, seasonal availability, permitted conditions, balance, process dependence, discharge route and contingency. Use recognised contextual datasets with local evidence.", "A reduction claim should state whether it refers to withdrawal, consumption, discharge or all three.") },
        "A rinse-water loop lowers withdrawal but concentrates a substance in the residual stream. The project optimises cycles and treatment while tracking water, energy, quality and hazardous waste."
      ),
      lesson(
        "m6-l7", "07 · Nature targets & credible outcomes", "Move from attractive activity to measurable ecological response", "12–14 min",
        p(
          "A nature objective should respond to a prioritised dependency or impact and a defined location. Activity targets—area planted, surveys completed, suppliers engaged—can support implementation but do not prove ecological outcome. Outcome indicators should relate to pressure reduction, ecosystem condition or species and function relevant to the objective.",
          "The Science Based Targets Network (SBTN) describes a sequence of assessing, prioritising, setting targets, acting and tracking. Its public guidance is demanding and intended for organisational target-setting; it should not be simplified into an unsupported label. A local learning project can use the logic without claiming validation.",
          "Baselines need method, date, spatial boundary and ecological relevance. Reference conditions may be historical, contemporary comparison or desired functional state depending on the question. Natural variability means that monitoring often needs multiple seasons or years. Absence of immediate change is not proof of failure, and a short-term increase is not proof of durable success.",
          "Targets should address additionality and leakage. Additionality asks what occurs beyond the expected baseline or existing obligation. Leakage asks whether pressure moves elsewhere. Permanence and reversibility matter when habitat can be lost after a short project period. These concepts should be used carefully rather than converted into automatic offset claims.",
          "Stakeholders and specialists improve legitimacy and evidence. Ecologists, water experts, facility teams, authorities, neighbours and users may hold different knowledge. Engagement should occur early enough to affect design and should not be presented as consent where it is only consultation.",
          "Communication should match maturity. Report the assessed issue, action, method, early result, uncertainty and next review. Avoid claiming net gain, restoration success or nature-positive status unless the applicable method, boundary, residual impacts, duration and verification support it."
        ),
        ["Link targets to prioritised impacts, dependencies and locations.", "Separate activity, pressure and ecological outcome indicators.", "State additionality, leakage, permanence and uncertainty where relevant."],
        { label: "Outcome discipline", text: "Count actions to manage delivery; measure ecological condition to understand whether the action works." },
        { title: "Adaptive target cycle", paragraphs: p("Baseline → objective → intervention → pressure indicator → state indicator → threshold → review → adapt. The cycle should name ownership and data quality.", "If monitoring cannot influence management, reconsider whether it is designed for learning or only for communication.") },
        "A habitat corridor project tracks light and mowing pressure, vegetation structure, connectivity and selected indicator groups over seasons, with thresholds for adapting management."
      )
    ]
  };

  const explainers = {
    m1: [
      {
        id: "decision-chain", title: "The evidence-to-control chain", kicker: "Interactive model 1 of 2",
        intro: "Advance through the chain to see why a technically plausible idea is not yet a controlled improvement.",
        items: [
          { code: "01", title: "Purpose", text: "Define the operational function and non-negotiable safety, quality and compliance conditions.", detail: "Without equivalent purpose, alternatives are not comparable." },
          { code: "02", title: "Reference", text: "Select a credible baseline and functional unit.", detail: "An unusually poor or unrepresentative baseline inflates the improvement." },
          { code: "03", title: "Boundary", text: "Map affected processes, locations, lifecycle stages and time.", detail: "Transferred work remains part of the changed system even when it leaves the local meter." },
          { code: "04", title: "Evidence", text: "Separate measurement, calculation, proxy and assumption.", detail: "Test which uncertainty could reverse the decision." },
          { code: "05", title: "Trade-off", text: "Show what improves, worsens and stays uncertain.", detail: "A one-metric gain is not a complete sustainability conclusion." },
          { code: "06", title: "Control", text: "Assign owner, indicators, guardrails and review point.", detail: "Implementation evidence determines whether the expected result becomes real." }
        ]
      },
      {
        id: "claim-layers", title: "Six layers of a credible environmental claim", kicker: "Interactive model 2 of 2",
        intro: "A claim becomes stronger as each missing layer is made explicit.",
        items: [
          { code: "S", title: "Subject", text: "Which product, process, site, trial or organisation does the statement describe?", detail: "Do not let evidence for one activity imply performance of a whole product or company." },
          { code: "C", title: "Change", text: "Which environmental variable changed, in which direction and by how much?", detail: "Avoid vague terms that have no measurable meaning." },
          { code: "B", title: "Baseline", text: "Compared with what feasible reference and functional output?", detail: "State material differences in operating conditions." },
          { code: "R", title: "Range", text: "Which boundary, period, locations and lifecycle stages are covered?", detail: "Explain exclusions that could affect interpretation." },
          { code: "E", title: "Evidence", text: "What data, calculation, verification and uncertainty support the number?", detail: "Retain the substantiation file and review date." },
          { code: "L", title: "Limits", text: "Which trade-offs, dependencies and limitations remain?", detail: "Precise limitations make real progress more credible." }
        ]
      }
    ],
    m2: [
      {
        id: "lca-loop", title: "The iterative LCA loop", kicker: "Interactive model 1 of 2",
        intro: "Life Cycle Assessment is not a one-way calculation. Interpretation can send the study back to refine any phase.",
        items: [
          { code: "1", title: "Goal & scope", text: "Question, audience, functional unit, boundary, methods and data needs.", detail: "A weak scope cannot be repaired by more precise calculations later." },
          { code: "2", title: "Inventory", text: "Quantified inputs and outputs for the product system.", detail: "Balances and provenance reveal missing or inconsistent flows." },
          { code: "3", title: "Impact assessment", text: "Relate inventory flows to potential environmental impact categories.", detail: "Results depend on model and are not direct measurements of final damage." },
          { code: "4", title: "Interpretation", text: "Check completeness, consistency, sensitivity, uncertainty and conclusions.", detail: "Interpretation decides what the evidence supports and what requires revision." }
        ]
      },
      {
        id: "value-retention", title: "The safe value-retention ladder", kicker: "Interactive model 2 of 2",
        intro: "Move from avoiding demand to recovering material, while keeping technical authorisation and evidence as guardrails.",
        items: [
          { code: "0", title: "Question the need", text: "Avoid unnecessary material, processing or replacement.", detail: "Prevention also avoids upstream burdens that waste statistics do not show." },
          { code: "1", title: "Reduce & maintain", text: "Use less and preserve performance through care and inspection.", detail: "Do not reduce material below safe and reliable function." },
          { code: "2", title: "Repair & upgrade", text: "Retain the product or component function.", detail: "Requires access, records, approved methods, parts and competence." },
          { code: "3", title: "Reuse & remanufacture", text: "Restore or transfer function with configuration and condition control.", detail: "Unknown history can destroy functional value even when the material remains." },
          { code: "4", title: "Repurpose", text: "Use the product or component for another suitable function.", detail: "Check substances, performance, ownership and legal conditions." },
          { code: "5", title: "Recycle", text: "Recover material quality through an available verified route.", detail: "Report recovered quality and residues, not acceptance alone." }
        ]
      }
    ],
    m3: [
      {
        id: "data-lineage", title: "From physical event to accountable action", kicker: "Interactive model 1 of 2",
        intro: "Every transformation can change meaning. Select each step to expose the control needed there.",
        items: [
          { code: "S", title: "Sense", text: "Meter, sensor, record, image or observation captures a signal.", detail: "Define measurand, installation, range, calibration and failure detection." },
          { code: "Q", title: "Qualify", text: "Validate timestamp, unit, range, completeness and operating context.", detail: "Preserve raw data and quality flags." },
          { code: "T", title: "Transform", text: "Clean, join, allocate, normalise and aggregate.", detail: "Record formula, version and owner so the result is reproducible." },
          { code: "M", title: "Model", text: "Apply rules, statistics or AI inside a defined validity domain.", detail: "Validate by operating condition and consequence, not average error alone." },
          { code: "J", title: "Judge", text: "Review confidence, constraints, alternatives and trade-offs.", detail: "Human oversight needs information, competence, time and authority." },
          { code: "A", title: "Act & learn", text: "Implement, compare outcome with expectation and update the system.", detail: "A prediction creates environmental value only through verified action." }
        ]
      },
      {
        id: "digital-balance", title: "The digital value balance", kicker: "Interactive model 2 of 2",
        intro: "A tool creates net value only when verified avoided burden exceeds its direct and indirect costs.",
        items: [
          { code: "+", title: "Avoided burden", text: "Measured energy, material, waste, travel or failure avoided by changed operation.", detail: "Use a credible counterfactual and confirm adoption." },
          { code: "−", title: "Digital burden", text: "Hardware, computation, storage, networks, cooling and maintenance.", detail: "Use proportionate estimates and design for adequate—not maximum—complexity." },
          { code: "↔", title: "Transfer", text: "Work, impact or risk moved to another site, supplier, team or lifecycle stage.", detail: "Keep the comparison boundary consistent." },
          { code: "↗", title: "Rebound", text: "Efficiency lowers cost or effort and total use then increases.", detail: "Track absolute use and define limits, retention and shutdown rules." },
          { code: "?", title: "Uncertainty", text: "Ranges that may change the sign or scale of net value.", detail: "If uncertainty is decision-critical, improve evidence before scaling." }
        ]
      }
    ],
    m4: [
      {
        id: "competence-ladder", title: "The capability ladder", kicker: "Interactive model 1 of 2",
        intro: "Course completion is one step. Safe application requires several layers of capability.",
        items: [
          { code: "A", title: "Awareness", text: "Recognise the issue, relevance and route for help.", detail: "Suitable for broad populations; not evidence of technical competence." },
          { code: "K", title: "Knowledge", text: "Explain concepts, requirements and methods.", detail: "Assess through interpretation, not recall alone." },
          { code: "S", title: "Skill", text: "Perform a defined task using the correct method and tools.", detail: "Observation or work samples are stronger evidence than attendance." },
          { code: "J", title: "Judgement", text: "Adapt the method to context and recognise uncertainty or limits.", detail: "Built through cases, supervised practice and feedback." },
          { code: "A", title: "Authority", text: "Hold the approved decision right for the consequence.", detail: "Competence does not automatically grant authorisation." }
        ]
      },
      {
        id: "learning-loop", title: "The improvement learning loop", kicker: "Interactive model 2 of 2",
        intro: "A useful idea becomes organisational capability only after controlled testing and transfer.",
        items: [
          { code: "O", title: "Observe", text: "Capture a weak signal, loss or opportunity without exaggerating it.", detail: "Make the reporting route easy and psychologically safe." },
          { code: "F", title: "Frame", text: "Define purpose, baseline, boundary and decision question.", detail: "The observer does not need to produce a complete business case." },
          { code: "T", title: "Test", text: "Run the smallest safe representative experiment.", detail: "Set success criteria and guardrails before data appear." },
          { code: "M", title: "Measure", text: "Compare environmental outcome and unintended effects.", detail: "Investigate deviations rather than selecting favourable observations." },
          { code: "D", title: "Decide", text: "Stop, adapt, repeat, scale or standardise.", detail: "Negative results can be valuable learning." },
          { code: "S", title: "Share", text: "Record reasoning, evidence and transfer conditions.", detail: "Reuse the method, not a context-free percentage." }
        ]
      }
    ],
    m5: [
      {
        id: "due-diligence", title: "A risk-based due-diligence cycle", kicker: "Interactive model 1 of 2",
        intro: "Questionnaires and audits sit inside a wider cycle of identifying, acting, tracking and communicating.",
        items: [
          { code: "1", title: "Embed", text: "Put expectations, roles and decision rights into policy and processes.", detail: "A commitment without procurement and operating integration has limited effect." },
          { code: "2", title: "Identify", text: "Map actual and potential impacts, dependencies and affected contexts.", detail: "Look beyond the direct supplier where the process or material requires it." },
          { code: "3", title: "Prioritise", text: "Use severity, likelihood, leverage and consequence to focus effort.", detail: "Spend alone can miss low-cost high-impact processes." },
          { code: "4", title: "Act", text: "Prevent, mitigate, build capability, change the decision or escalate.", detail: "Match response to the cause and seriousness." },
          { code: "5", title: "Track", text: "Check implementation, evidence quality and outcome.", detail: "A completed action is not automatically an improved condition." },
          { code: "6", title: "Communicate", text: "Keep records and explain action, limits and unresolved issues.", detail: "Communication should not overstate coverage or assurance." }
        ]
      },
      {
        id: "resilience-options", title: "The resilience response portfolio", kicker: "Interactive model 2 of 2",
        intro: "Resilience is usually a package of measures, not one large buffer or one additional supplier.",
        items: [
          { code: "R", title: "Reduce demand", text: "Improve yield, repair, lifetime and commonality.", detail: "Lower dependency can improve both resilience and environmental performance." },
          { code: "V", title: "Increase visibility", text: "Monitor lead time, sub-tier exposure, quality and recovery signals.", detail: "Visibility creates response time but needs data ownership." },
          { code: "C", title: "Build capability", text: "Improve supplier process control, contingency and recovery.", detail: "Engagement can be stronger than replacement when the relationship is critical." },
          { code: "D", title: "Diversify", text: "Qualify alternative process, source, route or geography.", detail: "Include qualification, duplication and logistics effects." },
          { code: "B", title: "Buffer selectively", text: "Use time-limited targeted inventory for defined risks.", detail: "Track age, obsolescence, storage and exit conditions." },
          { code: "X", title: "Redesign", text: "Remove a constrained material, interface or unique dependency.", detail: "Often slow, but can change the risk structurally." }
        ]
      }
    ],
    m6: [
      {
        id: "climate-nature", title: "Climate and nature: connected, not interchangeable", kicker: "Interactive model 1 of 2",
        intro: "Select each lens to see the distinct evidence and decision it requires.",
        items: [
          { code: "M", title: "Mitigation", text: "Reduce greenhouse-gas sources or enhance removals.", detail: "Use an inventory boundary, baseline, method and gross-reduction evidence." },
          { code: "A", title: "Adaptation", text: "Reduce exposure or vulnerability to climate effects.", detail: "Use hazards, scenarios, thresholds and maladaptation checks." },
          { code: "D", title: "Dependency", text: "Ecosystem service or environmental condition the activity relies on.", detail: "Connect the dependency to process, location and alternative." },
          { code: "I", title: "Impact", text: "Change in the state of nature caused or contributed to by activity.", detail: "Map pressure, pathway, receptor, scale, timing and cumulative condition." },
          { code: "R", title: "Risk", text: "Operational, legal, financial or reputational consequence through those pathways.", detail: "Keep the underlying impact or dependency visible." },
          { code: "O", title: "Outcome", text: "Measured environmental or ecological change from the response.", detail: "Activity counts support delivery but do not prove outcome." }
        ]
      },
      {
        id: "mitigation-hierarchy", title: "The mitigation hierarchy with evidence gates", kicker: "Interactive model 2 of 2",
        intro: "Later stages cannot be used to skip earlier opportunities or hide uncertainty.",
        items: [
          { code: "1", title: "Avoid", text: "Change need, location, layout, timing or technology to prevent impact.", detail: "Document alternatives considered and why avoidance was or was not feasible." },
          { code: "2", title: "Minimise", text: "Reduce duration, extent, intensity or likelihood of remaining impact.", detail: "Define controls and verify performance under realistic conditions." },
          { code: "3", title: "Restore", text: "Re-establish ecological condition or function after disturbance.", detail: "Use baseline, objective, method, maintenance, time and success indicators." },
          { code: "4", title: "Address residuals", text: "Consider applicable compensation only for remaining impact under credible rules.", detail: "Equivalence, additionality, leakage, permanence and verification are difficult and context-specific." },
          { code: "5", title: "Adapt", text: "Use monitoring thresholds to revise management.", detail: "Do not declare success from activity completion alone." }
        ]
      }
    ]
  };

  const caseFiles = {
    m1: {
      title: "Case file: the 14% energy reduction that moved outside the gate", subtitle: "A fictional composite learning case",
      stages: [
        { title: "The proposal", text: "A workshop changes a heat-treatment sequence and reports 14% less electricity per accepted part on its local meter. The project team prepares a communication describing an efficiency improvement.", evidence: ["Direct workshop meter", "Accepted-part count", "Three-month trial"] },
        { title: "The boundary challenge", text: "One preparation step is now performed by a supplier. Transport increases and supplier energy is unavailable. Product quality remains acceptable, but the functional boundary changed.", evidence: ["Changed process map", "New logistics route", "Supplier data gap"] },
        { title: "The analysis", text: "The team restates the baseline and functional unit, estimates the transferred step with a range, includes transport and tests whether plausible supplier values reverse the result. It also checks rework, lead time and production variability.", evidence: ["Low/central/high proxy", "Sensitivity test", "Guardrail indicators"] },
        { title: "The decision", text: "The trial continues because the central and high cases remain favourable, but external communication is withheld until supplier evidence is improved. The local 14% figure is retained only as a workshop indicator with its boundary stated.", evidence: ["Conditional approval", "Data owner and date", "Conservative wording"] }
      ],
      prompt: "Which conclusion is supported now, and which stronger conclusion still needs evidence?"
    },
    m2: {
      title: "Case file: lightweight versus repairable panel",
      subtitle: "Fictional quantified design review",
      stages: [{"title":"1. Your task and the functional baseline","text":"You are on a preliminary aerospace design review board. Select the next action for two interchangeable access panels, each providing the same protected area and approved functional performance for a hypothetical 20-year service period. Neither design is yet released for production. Your task is NOT to declare a final winner: decide what evidence is needed before freezing the architecture.","evidence":["Functional unit: one compliant panel over 20 years","Both concepts meet initial performance requirements","Illustrative training figures, not Airbus product data"]},{"title":"2. Comparable assumptions","text":"Concept A weighs 8 kg, uses bonded multi-material construction and currently has no demonstrated approved partial repair. Concept B weighs 8.5 kg and has replaceable sections with a documented candidate repair concept. Manufacture of A is estimated at 120 kg CO₂e per panel versus 135 kg CO₂e for B. The 0.5 kg mass difference has an estimated 12 kg CO₂e use-stage advantage for A over 20 years. These figures are scenario assumptions.","evidence":["A: 120 + 12 use-stage saving (kg CO₂e)","B: 135 kg CO₂e manufacturing","A's 12 kg CO₂e use-stage advantage is relative to B"]},{"title":"3. Repair changes the result","text":"For this training screen, assume two damage scenarios: low damage means no repair over 20 years; representative damage means one repair event. If damaged, A currently requires an entire replacement (120 kg CO₂e manufacturing proxy), whereas B can replace a section (25 kg CO₂e proxy). Ignore common operational emissions and identical end-of-life processes, but explicitly record that both are excluded. Under low damage A has an approximate 27 kg CO₂e advantage (135 − 120 + 12). With one repair, B has an approximate 68 kg CO₂e advantage (A: 120 + 120 − 12 = 228; B: 135 + 25 = 160).","evidence":["No damage: A preferable on this climate screen","One repair: B preferable by about 68 kg CO₂e","Repair frequency and authorised repairability remain unverified"]},{"title":"4. Decision before design freeze","text":"The board should keep both concepts under evaluation, obtain representative repair/damage statistics, verify repair approval and quality requirements, and update the manufacturing and use-stage assumptions. A hybrid approach can also be assessed. A final lifecycle claim cannot be justified from this narrow climate screen alone.","evidence":["Engineering gate: no irreversible architecture lock","Owners: engineering, maintenance and LCA","Expand impact categories and verify assumptions"]}],
      prompt: "Decision required: would you approve A now, approve B now, or defer the design freeze? Explain using the no-damage and one-repair scenarios, and name three items of evidence that would change your decision.",
      decisionGuide: {"heading":"Reference decision and rationale","decision":"Defer the design freeze, keeping both concepts in evaluation. A is favourable only under the assumed no-repair climate scenario; B becomes favourable if one repair is required.","reasons":["A's apparent advantage depends on a lower mass and a lower initial manufacturing estimate, but this is not enough to represent 20 years of service.","With one illustrative damage event, full replacement changes A's estimated total to 228 kg CO₂e versus 160 kg CO₂e for B. These numbers are not a certified LCA.","Before selecting an architecture, verify damage frequency, approved repair methods, supplier manufacturing data, functional equivalence, other environmental categories and end-of-life routes."]}
    },
    m3: {
      title: "Case file: an AI recommendation that saves energy and creates interventions", subtitle: "A fictional composite digital case",
      stages: [
        { title: "The model", text: "A model predicts when a process can enter a low-energy standby mode. Offline validation shows high average accuracy and a potential energy reduction.", evidence: ["Historical data", "Average error", "Simulated energy estimate"] },
        { title: "Operational trial", text: "Operators receive frequent alerts during an unusual product mix. Some alerts are ignored; others cause extra restart checks and delay. The data contain few examples of this condition.", evidence: ["Alert log", "User feedback", "Coverage gap"] },
        { title: "System evaluation", text: "The team assesses false positives, false negatives, energy, workload, delay, restart quality, model computation and actual adoption. Thresholds are compared by consequence.", evidence: ["Decision-cost matrix", "Guardrails", "Outcome meter"] },
        { title: "Governed release", text: "A narrower intended use, confidence display, fallback and drift trigger are approved. The tool is monitored as a decision aid, not an autonomous environmental controller.", evidence: ["Intended-use statement", "Human authority", "Material-change review"] }
      ],
      prompt: "Why can the most accurate threshold still be the wrong operational threshold?"
    },
    m4: {
      title: "Case file: repeated segregation errors after training", subtitle: "A fictional composite improvement case",
      stages: [
        { title: "The symptom", text: "An audit finds repeated mixing of a recoverable material with general waste. The immediate proposal is mandatory refresher training for all shifts.", evidence: ["Audit samples", "Training completion", "Waste contractor feedback"] },
        { title: "Work-as-done", text: "Observation shows that correct containers are distant, fill during peak work and use similar labels. Temporary workers do not have access to the digital guide.", evidence: ["Shift observation", "Layout map", "Worker interviews"] },
        { title: "Matched response", text: "The team changes container location and capacity, uses material photographs, gives temporary staff a brief practical induction and adds a rapid service trigger.", evidence: ["Barrier-action map", "Pilot area", "Leading indicators"] },
        { title: "Assurance", text: "Contamination rate falls across normal and peak workload. The change is standardised and the learning record explains why training alone was insufficient.", evidence: ["Outcome trend", "Peak-period check", "Updated standard work"] }
      ],
      prompt: "Which barrier required knowledge, and which barriers required system redesign?"
    },
    m5: {
      title: "Case file: the critical coating with incomplete upstream evidence", subtitle: "A fictional composite value-chain case",
      stages: [
        { title: "The dependency", text: "A critical component depends on a specialised coating from a single approved chain. The direct supplier provides strong quality data but limited information on sub-tier chemistry and water exposure.", evidence: ["Technical criticality", "Single approved route", "Evidence gap"] },
        { title: "The risk pathway", text: "The treatment occurs in a basin with periodic water restrictions. A substance review also identifies a potential future constraint. Immediate replacement is not technically available.", evidence: ["Location screen", "Substance watch", "Recovery-time estimate"] },
        { title: "Layered response", text: "Procurement and engineering verify the process, request a supplier continuity and water plan, assess interim buffers, launch substitution research and define escalation triggers.", evidence: ["Time-bound supplier action", "Targeted buffer", "Qualification roadmap"] },
        { title: "Review", text: "The buffer is reviewed against age and need, supplier evidence is tracked and substitution compares technical function, exposure, lifecycle and resilience—not hazard alone.", evidence: ["Portfolio indicators", "Exit condition", "Cross-functional governance"] }
      ],
      prompt: "Which action protects short-term availability, and which actions reduce the structural dependency?"
    },
    m6: {
      title: "Case file: a logistics extension beside a wetland corridor", subtitle: "A fictional composite location-based case",
      stages: [
        { title: "The operational need", text: "A site proposes a paved logistics extension to reduce internal movement and delivery delay. Early material describes the project as efficient and compatible with a nearby wetland corridor.", evidence: ["Movement study", "Initial layout", "Desktop habitat screen"] },
        { title: "Locate and evaluate", text: "Assessment expands to drainage, flood storage, light, noise, habitat connectivity, seasonal use, existing sealed area and cumulative planned works. A property-line boundary is insufficient.", evidence: ["Catchment map", "Seasonal survey plan", "Cumulative context"] },
        { title: "Alternatives", text: "The team compares no-build process change, smaller footprint, permeable and drainage options, different access, timing and lighting. Avoidance and minimisation are considered before restoration planting.", evidence: ["Alternatives record", "Hydrology model", "Ecological input"] },
        { title: "Controlled decision", text: "A reduced layout proceeds with drainage and lighting controls, construction timing, state indicators and thresholds. Communication describes the controls and uncertainty without a nature-positive claim.", evidence: ["Monitoring owner", "Adaptive thresholds", "Conservative claim"] }
      ],
      prompt: "Which evidence could make the preferred layout change, and when must it be collected?"
    }
  };

  caseFiles.m1 = { title:"Case file: M1 evidence-based decision", subtitle:"Fictional aerospace learning scenario", stages:[{title:"1. Your role and decision",text:"You are the cross-functional reviewer. Choose an action and justify it using the case evidence. Can the team claim a 14% overall improvement, or only a measured workshop reduction?",evidence:["Select a decision","Explain your reasoning"]},{title:"2. Context and comparable figures",text:"Baseline 100 kWh per accepted part, then 86. A processing step moved to a supplier, using an estimated 8–19 kWh per part; freight adds 3 kWh-equivalent. Volume: 1,000 parts/month.",evidence:["Training scenario, not Airbus operational data"]},{title:"3. Assessment and missing evidence",text:"Compare options using the figures, distinguish assumptions from measured results, respect mandatory safety and legal gates, and identify uncertainty. Obtain supplier and freight measurements; verify emission factors, quality and system boundaries.",evidence:["Compare options","Identify evidence gaps"]},{title:"4. Required response",text:"Write your recommended action, at least two reasons linked to the figures, one uncertainty and the condition that would change your decision. Then open the reference answer.",evidence:["Recommendation","Two evidence-based reasons","One review condition"]}],prompt:"Can the team claim a 14% overall improvement, or only a measured workshop reduction? Explain two reasons and what additional information is needed.",decisionGuide:{heading:"Reference solution and rationale",decision:"Do not claim a 14% overall improvement. Across the expanded boundary the screen gives 97–108 kWh-equivalent versus 100, from 3% better to 8% worse. Only the bounded workshop meter result may be stated.",reasons:["Obtain supplier and freight measurements; verify emission factors, quality and system boundaries.","These are illustrative figures for learning, not certified lifecycle calculations or Airbus performance data."]}};
  caseFiles.m3 = { title:"Case file: M3 evidence-based decision", subtitle:"Fictional aerospace learning scenario", stages:[{title:"1. Your role and decision",text:"You are the cross-functional reviewer. Choose an action and justify it using the case evidence. Deploy autonomously, continue a supervised pilot or cancel?",evidence:["Select a decision","Explain your reasoning"]},{title:"2. Context and comparable figures",text:"Historical model accuracy is 96%, but unusual product mixes are only 2% of training data. Pilot: 400 recommendations, 40 false alerts, 18 investigation hours and 6% energy savings. Autonomous restart has not been approved.",evidence:["Training scenario, not Airbus operational data"]},{title:"3. Assessment and missing evidence",text:"Compare options using the figures, distinguish assumptions from measured results, respect mandatory safety and legal gates, and identify uncertainty. Require safety approval, mode-specific errors, human control, stop conditions and measured outcome monitoring.",evidence:["Compare options","Identify evidence gaps"]},{title:"4. Required response",text:"Write your recommended action, at least two reasons linked to the figures, one uncertainty and the condition that would change your decision. Then open the reference answer.",evidence:["Recommendation","Two evidence-based reasons","One review condition"]}],prompt:"Deploy autonomously, continue a supervised pilot or cancel? Explain two reasons and what additional information is needed.",decisionGuide:{heading:"Reference solution and rationale",decision:"Continue only a supervised, restricted and reversible pilot; do not authorise autonomous restart. A 10% false alert rate imposes workload, and the unusual mode is not adequately validated.",reasons:["Require safety approval, mode-specific errors, human control, stop conditions and measured outcome monitoring.","These are illustrative figures for learning, not certified lifecycle calculations or Airbus performance data."]}};
  caseFiles.m4 = { title:"Case file: M4 evidence-based decision", subtitle:"Fictional aerospace learning scenario", stages:[{title:"1. Your role and decision",text:"You are the cross-functional reviewer. Choose an action and justify it using the case evidence. Repeat training or redesign the collection system? How would you validate it?",evidence:["Select a decision","Explain your reasoning"]},{title:"2. Context and comparable figures",text:"Audit: 24 of 120 bins contaminated (20%); target below 5% for two months. Training completed by 96% of permanent staff; correct bin 70 m away, general waste bin 8 m away, correct bin overflows twice a week.",evidence:["Training scenario, not Airbus operational data"]},{title:"3. Assessment and missing evidence",text:"Compare options using the figures, distinguish assumptions from measured results, respect mandatory safety and legal gates, and identify uncertainty. Sample weekly by shift, include peak periods and verify below 5% contamination for two months without new risks.",evidence:["Compare options","Identify evidence gaps"]},{title:"4. Required response",text:"Write your recommended action, at least two reasons linked to the figures, one uncertainty and the condition that would change your decision. Then open the reference answer.",evidence:["Recommendation","Two evidence-based reasons","One review condition"]}],prompt:"Repeat training or redesign the collection system? How would you validate it? Explain two reasons and what additional information is needed.",decisionGuide:{heading:"Reference solution and rationale",decision:"Redesign location, capacity and labels; provide short induction for temporary staff and run a representative pilot. Repeating training cannot fix distance and overflow.",reasons:["Sample weekly by shift, include peak periods and verify below 5% contamination for two months without new risks.","These are illustrative figures for learning, not certified lifecycle calculations or Airbus performance data."]}};
  caseFiles.m5 = { title:"Case file: M5 evidence-based decision", subtitle:"Fictional aerospace learning scenario", stages:[{title:"1. Your role and decision",text:"You are the cross-functional reviewer. Choose an action and justify it using the case evidence. Terminate immediately, accept a generic supplier policy or agree a conditional action plan?",evidence:["Select a decision","Explain your reasoning"]},{title:"2. Context and comparable figures",text:"A critical coating relies on one qualified route. Alternative qualification takes 18 months. Stock: 10 weeks; replenishment: 7 weeks. Treatment is in a water-restricted basin; sub-tier water and chemical information is missing.",evidence:["Training scenario, not Airbus operational data"]},{title:"3. Assessment and missing evidence",text:"Compare options using the figures, distinguish assumptions from measured results, respect mandatory safety and legal gates, and identify uncertainty. Request site-level water and chemical evidence, owners, contingency, escalation triggers and airworthiness requirements.",evidence:["Compare options","Identify evidence gaps"]},{title:"4. Required response",text:"Write your recommended action, at least two reasons linked to the figures, one uncertainty and the condition that would change your decision. Then open the reference answer.",evidence:["Recommendation","Two evidence-based reasons","One review condition"]}],prompt:"Terminate immediately, accept a generic supplier policy or agree a conditional action plan? Explain two reasons and what additional information is needed.",decisionGuide:{heading:"Reference solution and rationale",decision:"Agree a conditional 30/60/90-day evidence and continuity plan while exploring a qualifiable alternative. Immediate exit threatens availability; unconditional acceptance ignores risk.",reasons:["Request site-level water and chemical evidence, owners, contingency, escalation triggers and airworthiness requirements.","These are illustrative figures for learning, not certified lifecycle calculations or Airbus performance data."]}};
  caseFiles.m6 = { title:"Case file: M6 evidence-based decision", subtitle:"Fictional aerospace learning scenario", stages:[{title:"1. Your role and decision",text:"You are the cross-functional reviewer. Choose an action and justify it using the case evidence. Approve original works, prefer the reduced alternative or stop all work? What data condition approval?",evidence:["Select a decision","Explain your reasoning"]},{title:"2. Context and comparable figures",text:"Original plan: pave 2 ha 80 m from seasonal wetland; predicted logistics time saving 18%. Alternative on degraded land: 0.8 ha and 12% saving, with basic access requirements met. Only one winter ecology visit; runoff model unavailable.",evidence:["Training scenario, not Airbus operational data"]},{title:"3. Assessment and missing evidence",text:"Compare options using the figures, distinguish assumptions from measured results, respect mandatory safety and legal gates, and identify uncertainty. Condition approval on connectivity, breeding, flood risk, controls, responsible owners and monitoring triggers.",evidence:["Compare options","Identify evidence gaps"]},{title:"4. Required response",text:"Write your recommended action, at least two reasons linked to the figures, one uncertainty and the condition that would change your decision. Then open the reference answer.",evidence:["Recommendation","Two evidence-based reasons","One review condition"]}],prompt:"Approve original works, prefer the reduced alternative or stop all work? What data condition approval? Explain two reasons and what additional information is needed.",decisionGuide:{heading:"Reference solution and rationale",decision:"Prefer the reduced option for continued assessment, but do not authorise construction until seasonal ecology, drainage and legal requirements are verified. Avoiding undisturbed ground comes first.",reasons:["Condition approval on connectivity, breeding, flood risk, controls, responsible owners and monitoring triggers.","These are illustrative figures for learning, not certified lifecycle calculations or Airbus performance data."]}};
  const labs = {
    m1: {
      title: "Boundary & claim lab", intro: "Review four statements from a fictional improvement brief. Select the strongest response in each case.",
      questions: [
        { question: "A local meter shows 18% less electricity after a process step is outsourced. Which statement is supportable?", options: ["The product now uses 18% less energy.", "The workshop recorded 18% less electricity; system-level change remains unconfirmed because the boundary changed.", "The project has zero climate impact.", "No measurement can ever be used after outsourcing."], correct: 1, explanation: "The local result is real within its boundary, but it cannot yet describe the complete changed process." },
        { question: "A trial uses a high-production month as its baseline and a low-production month after implementation. What should happen first?", options: ["Publish the absolute reduction.", "Normalise using a relevant functional output and test product-mix and operating differences.", "Average the two months.", "Replace the baseline with the highest historical month."], correct: 1, explanation: "A comparable functional reference is needed before attributing the difference to the project." },
        { question: "Supplier data are missing but all plausible estimates leave option B preferable. What is the proportionate response?", options: ["Hide the estimate.", "Stop the decision permanently.", "Document the range, proceed at an appropriate reversible scale and improve the data.", "Call the option fully verified."], correct: 2, explanation: "Visible uncertainty can support a controlled decision when it does not change the ranking and consequence is managed." },
        { question: "Which proposed message has the lowest greenwashing risk?", options: ["A totally sustainable packaging revolution.", "Eco-friendly packaging for a cleaner future.", "The trial reduced single-use film by 22% per shipped unit on route X; return logistics and cleaning are included, and scale-up performance is not yet verified.", "Zero-waste packaging."], correct: 2, explanation: "It states subject, metric, baseline unit, boundary and limitations." }
      ]
    },
    m2: {
      title: "Lifecycle hotspot lab", intro: "Decide where the next hour of evidence collection creates the most value.",
      questions: [
        { question: "A low-mass coating drives toxicity results but is represented by a rough generic proxy. What should be prioritised?", options: ["Ignore it because mass is low.", "Improve coating composition and process data, then test sensitivity.", "Refine office paper data.", "Report only climate change."], correct: 1, explanation: "Contribution and low confidence make the coating decision-critical despite low mass." },
        { question: "Two materials are compared per kilogram but need different thickness and replacement rates. What is missing?", options: ["A common supplier.", "An equivalent functional unit and service scenario.", "A recycling logo.", "A shorter report."], correct: 1, explanation: "Mass alone does not represent the delivered function." },
        { question: "A component is accepted by a recycler. Which conclusion is valid?", options: ["It is closed-loop recycled.", "It is zero waste.", "A recovery route accepts it; output quality, residues and final destination still need evidence.", "It should not be repaired."], correct: 2, explanation: "Acceptance does not establish the treatment outcome or retained value." },
        { question: "Which design review question most directly supports future repair?", options: ["Does the brochure mention circularity?", "Can the function be accessed, diagnosed and restored with approved methods, records, parts and competence?", "Is the component expensive?", "Can it be painted green?"], correct: 1, explanation: "Repairability is a system of physical access, information, authorisation and capability." }
      ]
    },
    m3: {
      title: "Data and model assurance lab", intro: "Identify the control gap in four digital sustainability situations.",
      questions: [
        { question: "A dashboard silently interpolates a three-day shutdown as normal production. Which control failed?", options: ["Colour selection.", "Missing-data rules and operating-context validation.", "User training only.", "Model size."], correct: 1, explanation: "Imputation must reflect operating state and remain visible." },
        { question: "A model has 96% accuracy but misses most rare high-consequence failures. What should govern release?", options: ["Average accuracy alone.", "Error consequences and performance by relevant operating condition.", "The number of training rows.", "Whether the interface looks modern."], correct: 1, explanation: "Decision risk depends on which cases are wrong, not only the average." },
        { question: "An optimisation recommendation cannot be overridden by the authorised engineer. What is missing?", options: ["Meaningful human oversight and clear decision rights.", "More cloud storage.", "A sustainability icon.", "A yearly retraining date."], correct: 0, explanation: "The accountable decision-maker needs authority and information to challenge the output." },
        { question: "A digital pilot shows no measured operational change but is described as reducing emissions. What is the strongest correction?", options: ["Use a smaller font.", "Distinguish model potential from verified outcome and measure the action pathway.", "Replace emissions with sustainability.", "Exclude server use."], correct: 1, explanation: "Prediction or potential is not an achieved environmental result." }
      ]
    },
    m4: {
      title: "Capability & change lab", intro: "Match the improvement problem to the response that addresses its cause.",
      questions: [
        { question: "Operators know the rule, but the correct container is routinely full. What is the primary response?", options: ["Repeat the rule louder.", "Redesign capacity and service control, then confirm competence for the revised process.", "Remove the indicator.", "Reward low reported waste."], correct: 1, explanation: "The dominant barrier is system capacity, not awareness." },
        { question: "Which evidence best demonstrates competence to review supplier environmental claims?", options: ["Attendance at a webinar.", "A correctly reviewed work sample with boundary and substantiation gaps identified.", "A positive satisfaction survey.", "Years in the company alone."], correct: 1, explanation: "A work sample demonstrates application in context." },
        { question: "A pilot succeeds under low workload only. What should happen before scaling?", options: ["Declare success.", "Test representative peak conditions and predefined guardrails.", "Remove the guardrails.", "Use the percentage at every site."], correct: 1, explanation: "The evidence does not yet represent the conditions that may break the control." },
        { question: "A lesson is shared to another site. What information prevents blind copying?", options: ["Only the final saving.", "Context, baseline, boundary, method, result, limitations and transfer conditions.", "The project logo.", "The presenter’s job title."], correct: 1, explanation: "Transfer requires the reasoning and context that produced the result." }
      ]
    },
    m5: {
      title: "Value-chain evidence lab", intro: "Select the response that combines responsibility, technical control and resilience.",
      questions: [
        { question: "A direct supplier cannot identify the location of a critical sub-tier treatment. What is the strongest next step?", options: ["Assume the country average proves low risk.", "Record the unknown, prioritise the process, request controlled evidence and use a transparent proxy meanwhile.", "Remove the supplier immediately without technical review.", "Report complete traceability."], correct: 1, explanation: "A staged evidence plan makes uncertainty visible and directs verification." },
        { question: "A substitute has lower hazard but doubles process energy and reduces component life. What should govern selection?", options: ["Hazard alone.", "A multi-criteria assessment of function, hazard, exposure, lifecycle, qualification and supply.", "Lowest purchase price.", "The word bio-based."], correct: 1, explanation: "Substitution must avoid transferring risk or burden." },
        { question: "Which evidence supports a supplier renewable-electricity statement?", options: ["A green website.", "Site, period, consumption coverage, instrument, residual supply and verification.", "A corporate target only.", "A certificate with no scope."], correct: 1, explanation: "The claim needs a defined subject, coverage and evidence." },
        { question: "A disruption creates temporary emergency air freight. Which control prevents it becoming permanent?", options: ["No documentation.", "An owner, review date, exit condition and prevention plan.", "A bigger emissions claim.", "Annual spend ranking only."], correct: 1, explanation: "Emergency measures need explicit review and learning." }
      ]
    },
    m6: {
      title: "Location-based nature lab", intro: "Review four actions and choose the response that preserves ecological and communication integrity.",
      questions: [
        { question: "A planting project has no baseline or monitoring. Which claim is supportable?", options: ["The site is nature positive.", "A habitat-management trial has started; ecological outcome is not yet demonstrated.", "Biodiversity loss has been reversed.", "The project offsets all operational impact."], correct: 1, explanation: "The statement distinguishes action from unverified outcome." },
        { question: "A site uses less water annually but increases withdrawal during the basin’s driest month. What is needed?", options: ["Annual volume only.", "Seasonal basin context, process dependency and withdrawal/consumption distinction.", "A global average.", "A recycling target."], correct: 1, explanation: "Water significance is location- and time-dependent." },
        { question: "Which sequence follows the mitigation hierarchy?", options: ["Restore, then consider avoidance.", "Offset immediately.", "Avoid, minimise, restore and address residual impacts under appropriate rules.", "Communicate, plant, measure."], correct: 2, explanation: "Avoidance and minimisation come before restoration and residual measures." },
        { question: "A drainage change is inside the site boundary but affects downstream wetland flow. What boundary is appropriate?", options: ["Property line only.", "The area of influence following the hydrological pathway and relevant cumulative context.", "Country boundary.", "Only the construction footprint."], correct: 1, explanation: "Ecological and water pathways define the assessment boundary." }
      ]
    }
  };

  const tools = {
    m1: { filename: "M1_Sustainability_Decision_Brief.csv", title: "Sustainability decision brief", description: "A structured template for purpose, baseline, boundary, evidence, trade-offs, control and claim review.", headers: ["Field", "Your entry", "Evidence or owner", "Review date"], rows: [["Operational purpose", "", "", ""], ["Non-negotiable constraints", "", "", ""], ["Baseline and functional unit", "", "", ""], ["System and lifecycle boundary", "", "", ""], ["Measured data", "", "", ""], ["Calculated or estimated data", "", "", ""], ["Decision-critical uncertainty", "", "", ""], ["Benefits and adverse trade-offs", "", "", ""], ["Owner, indicators and guardrails", "", "", ""], ["Supportable wording and limitations", "", "", ""]] },
    m2: { filename: "M2_Lifecycle_Hotspot_Screen.csv", title: "Lifecycle hotspot screen", description: "Compare stages, environmental questions, data confidence and design influence.", headers: ["Lifecycle stage", "Process or material", "Potential impact or dependency", "Contribution", "Data confidence A-D", "Design influence", "Next evidence action"], rows: [["Raw material", "", "", "", "", "", ""], ["Manufacture", "", "", "", "", "", ""], ["Supply and logistics", "", "", "", "", "", ""], ["Operation", "", "", "", "", "", ""], ["Maintenance and upgrade", "", "", "", "", "", ""], ["End of life", "", "", "", "", "", ""]] },
    m3: { filename: "M3_Digital_Evidence_Register.csv", title: "Digital evidence register", description: "Document lineage, model validity, human oversight and environmental outcome.", headers: ["Element", "Definition", "Owner", "Quality or validation", "Known limitation", "Trigger for review"], rows: [["Decision and intended use", "", "", "", "", ""], ["Measurand and source", "", "", "", "", ""], ["Transformations", "", "", "", "", ""], ["Model or rule version", "", "", "", "", ""], ["Performance by condition", "", "", "", "", ""], ["Human decision right", "", "", "", "", ""], ["Digital resource use", "", "", "", "", ""], ["Verified environmental outcome", "", "", "", "", ""], ["Fallback and retirement", "", "", "", "", ""]] },
    m4: { filename: "M4_Improvement_Experiment_Canvas.csv", title: "Improvement experiment canvas", description: "Frame a safe, representative test and define learning before implementation.", headers: ["Canvas field", "Your entry", "Owner or evidence"], rows: [["Observed signal", "", ""], ["Decision question", "", ""], ["Hypothesis", "", ""], ["Baseline and boundary", "", ""], ["Smallest safe representative test", "", ""], ["Success criteria", "", ""], ["Safety, quality and operational guardrails", "", ""], ["People affected and barriers", "", ""], ["Data and duration", "", ""], ["Stop, adapt or scale conditions", "", ""], ["Learning record and transfer limits", "", ""]] },
    m5: { filename: "M5_Supplier_Evidence_Action_Plan.csv", title: "Supplier evidence & resilience plan", description: "Prioritise multi-tier evidence, engagement and resilience measures.", headers: ["Supplier/process node", "Critical function", "Impact/dependency pathway", "Location/tier confidence", "Evidence gap", "Short-term response", "Structural response", "Owner/date"], rows: [["Direct supplier", "", "", "", "", "", "", ""], ["Critical sub-tier process", "", "", "", "", "", "", ""], ["Material source", "", "", "", "", "", "", ""], ["Logistics or service", "", "", "", "", "", "", ""], ["Recovery route", "", "", "", "", "", "", ""]] },
    m6: { filename: "M6_Location_Based_Nature_Screen.csv", title: "Location-based climate & nature screen", description: "Organise place, pathways, dependencies, impacts, alternatives and monitoring.", headers: ["Field", "Your entry", "Source/owner", "Uncertainty or next action"], rows: [["Decision and operational need", "", "", ""], ["Location and area of influence", "", "", ""], ["Climate hazards and thresholds", "", "", ""], ["Ecosystem condition and sensitivity", "", "", ""], ["Dependencies", "", "", ""], ["Impact pressures and pathways", "", "", ""], ["Seasonal and cumulative context", "", "", ""], ["Avoidance alternatives", "", "", ""], ["Minimisation and restoration", "", "", ""], ["Pressure and state indicators", "", "", ""], ["Adaptive thresholds and owner", "", "", ""], ["Supportable communication", "", "", ""]] }
  };

  const extraChecks = {
    m1: [
      { question: "Which pair correctly distinguishes an environmental aspect from an impact?", options: ["Wastewater discharge is an aspect; change in receiving-water quality is a potential impact.", "Legal requirement is an aspect; audit is an impact.", "Target is an aspect; dashboard is an impact."], correct: 0, explanation: "The aspect is the interaction; the impact is the environmental change that may result." },
      { question: "Why should an absolute indicator accompany an intensity indicator?", options: ["To make the dashboard longer.", "Because efficiency can improve while total environmental burden rises.", "Because intensity is never useful."], correct: 1, explanation: "The two measures answer different questions about total performance and efficiency." },
      { question: "What is the strongest treatment of an exclusion that could reverse the result?", options: ["Leave it outside the report.", "Include data or a transparent estimate and test sensitivity.", "Describe it as immaterial without analysis."], correct: 1, explanation: "Decision-critical exclusions need evidence or visible uncertainty." },
      { question: "A project objective has a target but no owner, resources or review method. What is missing?", options: ["Implementation control.", "A sustainability icon.", "A longer title."], correct: 0, explanation: "Objectives need responsibility, means and evaluation to become managed action." },
      { question: "Which statement about a future target is correct?", options: ["It proves current environmental improvement.", "It should be distinguished from achieved results and supported by a pathway and scope.", "It does not need a baseline."], correct: 1, explanation: "Ambition and outcome are different forms of information." }
    ],
    m2: [
      { question: "What is the primary purpose of a functional unit?", options: ["To express purchase price.", "To provide an equivalent quantified function for comparison.", "To remove all uncertainty."], correct: 1, explanation: "Alternatives must deliver comparable function before impacts are compared." },
      { question: "Why can a low-mass input remain significant?", options: ["Mass always determines impact.", "Toxicity, scarce materials or energy-intensive processing may make contribution material.", "It cannot."], correct: 1, explanation: "Environmental relevance is not proportional to mass in every category." },
      { question: "Which statement best describes an LCA result?", options: ["A context-free proof of overall sustainability.", "A method-dependent indicator of potential impacts within a defined goal and scope.", "A direct measurement of ecosystem damage."], correct: 1, explanation: "Interpretation must remain tied to goal, scope, data and method." },
      { question: "When is repair a credible circular strategy?", options: ["Whenever a component is expensive.", "When condition, configuration, records, approved method and performance support it.", "Whenever recycling is unavailable."], correct: 1, explanation: "Functional value retention requires technical evidence and authorisation." },
      { question: "What does sensitivity analysis contribute?", options: ["It hides methodological choices.", "It tests whether important assumptions or choices change the conclusion.", "It guarantees data accuracy."], correct: 1, explanation: "Sensitivity helps evaluate robustness and prioritise evidence." }
    ],
    m3: [
      { question: "Which information should remain attached to an estimated data point?", options: ["Only the final value.", "Method, source, unit, period, quality flag and owner.", "The dashboard colour."], correct: 1, explanation: "Provenance makes the value reproducible and reviewable." },
      { question: "What is model drift?", options: ["A change in data or conditions that weakens the model's fit to current operation.", "A planned user break.", "A network cable movement."], correct: 0, explanation: "Processes, equipment and behaviour can move beyond the validation domain." },
      { question: "Why can automation bias undermine oversight?", options: ["Users may accept system output despite conflicting evidence.", "Users always reject algorithms.", "It reduces data storage."], correct: 0, explanation: "Interfaces and training should support active challenge." },
      { question: "What makes an AI environmental benefit a verified outcome?", options: ["High model accuracy.", "Measured changed operation against a credible baseline, including relevant added burden.", "A press release."], correct: 1, explanation: "A model has impact through real action, not technical potential alone." },
      { question: "Which event can constitute a material system change?", options: ["A new data source or use context.", "Correcting a spelling error only.", "Opening the same page twice."], correct: 0, explanation: "Changes that affect behaviour or validity require controlled review." }
    ],
    m4: [
      { question: "Which distinction between knowledge and competence is strongest?", options: ["They are identical.", "Knowledge is conceptual understanding; competence is effective application with judgement in context.", "Competence means attendance."], correct: 1, explanation: "Competence is demonstrated through performance, not information exposure alone." },
      { question: "What should happen after a weak signal is submitted?", options: ["The observer must calculate the full business case.", "An owner frames and assesses it, with feedback to the observer.", "It should remain anonymous and unanswered."], correct: 1, explanation: "Low-friction reporting needs a visible assessment and closure loop." },
      { question: "Why are guardrails set before an experiment?", options: ["To stop teams selecting favourable evidence and to protect important outcomes.", "To guarantee success.", "To replace a hypothesis."], correct: 0, explanation: "Predetermined criteria reduce bias and control unintended effects." },
      { question: "What is the main risk of rewarding only large claimed savings?", options: ["People may exaggerate baselines or hide failed trials.", "Learning becomes easier.", "Data quality always improves."], correct: 0, explanation: "Incentives shape reporting and decision behaviour." },
      { question: "Which trigger can justify capability reassessment?", options: ["Process or role change, incident or long period without practice.", "A new poster.", "The calendar only, regardless of risk."], correct: 0, explanation: "Refresh should respond to risk, change and performance." }
    ],
    m5: [
      { question: "Why can spend-based supplier prioritisation be incomplete?", options: ["Low-spend upstream processes can carry significant impact or criticality.", "Spend is never known.", "High spend always means low risk."], correct: 0, explanation: "Risk pathways and severity do not scale directly with spend." },
      { question: "What does a mass-balance chain-of-custody model normally demonstrate?", options: ["The exact certified molecules in one product.", "Certified inputs are accounted for within a defined system under its rules.", "No physical material enters the system."], correct: 1, explanation: "Claims must match the accounting model and must not imply physical segregation." },
      { question: "What is the best use of a supplier questionnaire?", options: ["A complete substitute for due diligence.", "A structured evidence input followed by review, clarification and action.", "A public performance certificate."], correct: 1, explanation: "Collection alone does not assess or manage risk." },
      { question: "Which response can reduce both dependency and material burden?", options: ["Improved repair and commonality.", "Unlimited buffer stock.", "Permanent urgent transport."], correct: 0, explanation: "Demand reduction and value retention can strengthen resilience structurally." },
      { question: "What should accompany a temporary disruption buffer?", options: ["Age monitoring, review date and exit condition.", "A permanent target to increase stock.", "No ownership."], correct: 0, explanation: "Temporary measures require control so they do not become unmanaged normal practice." }
    ],
    m6: [
      { question: "Which statement distinguishes climate adaptation from mitigation?", options: ["Adaptation reduces vulnerability to climate effects; mitigation reduces greenhouse-gas sources or enhances removals.", "They are identical.", "Adaptation concerns biodiversity only."], correct: 0, explanation: "The objectives and evidence differ even when one action supports both." },
      { question: "Why is a nature assessment location-specific?", options: ["Ecosystem condition, pathways, sensitivity and cumulative pressure vary by place.", "Every industrial site has the same ecology.", "Only legal boundaries matter."], correct: 0, explanation: "The same pressure can have different significance at different locations." },
      { question: "What does a pressure indicator measure?", options: ["The action implemented only.", "A driver such as withdrawal, light, noise or pollutant load that affects environmental state.", "Employee satisfaction."], correct: 1, explanation: "Pressure indicators connect activity to potential environmental change." },
      { question: "Why should avoidance be considered before restoration?", options: ["Restoration is always immediate and certain.", "Preventing impact generally avoids loss, delay and restoration uncertainty.", "Restoration is prohibited."], correct: 1, explanation: "The mitigation hierarchy preserves existing condition before attempting recovery." },
      { question: "Which evidence is needed to interpret annual water reduction?", options: ["Withdrawal/consumption distinction, seasonal timing, source and basin context.", "Only total global rainfall.", "A waste certificate."], correct: 0, explanation: "Water significance depends on pathway, place and time." }
    ]
  };

  Object.assign(DATA.sources, {
    "iso-14001-changes": { organisation: "ISO", title: "ISO 14001:2026 — what changed", url: "https://www.iso.org/climate-change/iso-14001-what-has-changed", note: "Official ISO overview of stronger environmental-context, lifecycle and change-management emphasis in the 2026 edition." },
    "eu-ai-regulation": { organisation: "European Union", title: "Regulation (EU) 2024/1689 — Artificial Intelligence Act", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng", note: "Official legal text. Applicability and obligations require approved specialist assessment." },
    "greencomp-model": { organisation: "European Commission Joint Research Centre", title: "GreenComp conceptual reference model", url: "https://joint-research-centre.ec.europa.eu/greencomp-european-sustainability-competence-framework/greencomp-conceptual-reference-model_en", note: "Twelve sustainability competences organised in four public learning areas." },
    "ipcc-ar6": { organisation: "Intergovernmental Panel on Climate Change", title: "Sixth Assessment Report", url: "https://www.ipcc.ch/assessment-report/ar6/", note: "Authoritative assessment of climate science, impacts, mitigation and adaptation." },
    "eu-nature-restoration": { organisation: "European Union", title: "Regulation (EU) 2024/1991 on nature restoration", url: "https://eur-lex.europa.eu/eli/reg/2024/1991/oj/eng", note: "Official legal text on restoration measures and monitoring in the European Union." },
    "eu-water-framework": { organisation: "European Commission", title: "Water Framework Directive", url: "https://environment.ec.europa.eu/topics/water/water-framework-directive_en", note: "Official overview of the European water-protection framework and river-basin approach." },
    "ghg-protocol": { organisation: "GHG Protocol", title: "Corporate Standard", url: "https://ghgprotocol.org/corporate-standard", note: "Widely used public accounting framework for organisational greenhouse-gas inventories; use approved Airbus methods for corporate reporting." },
    "iso-14044": { organisation: "ISO", title: "ISO 14044 — Life cycle assessment requirements and guidelines", url: "https://www.iso.org/standard/38498.html", note: "Official ISO record for LCA requirements and guidelines." },
    "eu-chemicals": { organisation: "European Commission", title: "Chemicals strategy and REACH", url: "https://environment.ec.europa.eu/topics/chemicals/chemicals-strategy_en", note: "Official European Commission overview of chemicals policy." },
    "airbus-sustainability-reporting": { organisation: "Airbus", title: "Sustainability standards and performance", url: "https://www.airbus.com/en/sustainability/sustainability-standards-and-performance", note: "Public Airbus sustainability reporting and performance-data entry point." }
  });

  const finalExtras = [
    { module: "M1", question: "An intensity target improves while absolute waste rises sharply. What is the strongest interpretation?", options: ["The target proves total impact fell.", "Efficiency improved for the chosen denominator, but absolute performance and drivers still require review.", "Intensity indicators should be deleted."], correct: 1, explanation: "Absolute and intensity measures answer different questions." },
    { module: "M2", question: "A low-mass coating dominates one impact category and uses a weak proxy. What is the next evidence priority?", options: ["Improve coating and process data and test sensitivity.", "Refine the heaviest material only.", "Exclude the impact category."], correct: 0, explanation: "Contribution and confidence together determine evidence priority." },
    { module: "M3", question: "A digital tool predicts savings but operators rarely follow it. What has been demonstrated?", options: ["Verified environmental benefit.", "Technical potential, not a confirmed operational outcome.", "Complete human oversight."], correct: 1, explanation: "Benefit requires changed action and measured outcome." },
    { module: "M4", question: "Which training result best supports role authorisation?", options: ["A satisfaction score.", "Attendance.", "Demonstrated correct performance on a representative task with required judgement."], correct: 2, explanation: "Competence is evidenced through application in context." },
    { module: "M5", question: "What does an unknown critical sub-tier mean in a risk map?", options: ["No risk exists.", "The unknown should remain visible and trigger proportionate evidence work.", "The direct supplier can be reported as fully traced."], correct: 1, explanation: "Unknown is information about confidence and next action." },
    { module: "M6", question: "A site plants native species and reports the number installed. What has it measured?", options: ["An activity/output, not yet an ecological outcome.", "Net biodiversity gain.", "Permanent restoration."], correct: 0, explanation: "Outcome requires evidence of changed ecological condition or function over a suitable period." },
    { module: "Cross-course", question: "Which pattern appears in every strong sustainability decision in this course?", options: ["One universal metric.", "Explicit purpose, boundary, evidence, trade-offs, ownership and monitoring.", "A positive environmental adjective."], correct: 1, explanation: "The shared method makes the decision and its limitations reviewable." },
    { module: "Cross-course", question: "When is stopping a pilot a positive learning outcome?", options: ["When evidence shows benefits do not outweigh burdens or controls cannot be sustained, and the result is recorded.", "Never.", "Only when communication has already claimed success."], correct: 0, explanation: "Controlled stopping prevents scale-up of a weak solution and preserves evidence." }
  ];

  DATA.glossary.push(
    { term: "Adaptation", definition: "Adjustment that reduces exposure or vulnerability to actual or expected climate effects." },
    { term: "Additionality", definition: "The extent to which an outcome occurs beyond the expected baseline or existing obligation." },
    { term: "Allocation", definition: "Method used to distribute inputs and outputs among co-products or shared processes in a lifecycle model." },
    { term: "Data lineage", definition: "The traceable path from source through transformations, models and outputs." },
    { term: "Functional equivalence", definition: "Delivery of comparable required function, performance and service conditions by alternatives." },
    { term: "Guardrail indicator", definition: "A measure used to detect an important unintended adverse effect while an improvement is implemented." },
    { term: "Hotspot", definition: "A lifecycle stage, process, material or assumption that materially contributes to an impact or drives a comparison." },
    { term: "Maladaptation", definition: "Adaptation action that increases emissions, transfers risk or creates greater vulnerability over time or elsewhere." },
    { term: "Measurand", definition: "The specific physical quantity intended to be measured." },
    { term: "Model drift", definition: "Loss of model fit when data, processes, equipment or user behaviour move beyond validated conditions." },
    { term: "Rebound effect", definition: "A situation in which efficiency lowers cost or effort and total use then increases, offsetting part of the gain." },
    { term: "Work-as-done", definition: "How work is actually performed under real conditions, including variability and adaptation." }
  );

  const moduleSourceAdds = {
    m1: ["iso-14001-changes", "airbus-sustainability-reporting"],
    m2: ["iso-14044"],
    m3: ["eu-ai-regulation"],
    m4: ["greencomp-model"],
    m5: ["eu-chemicals"],
    m6: ["ipcc-ar6", "eu-nature-restoration", "eu-water-framework", "ghg-protocol"]
  };

  DATA.meta.duration = "7–9 hours";
  DATA.meta.version = "Master course v3.0";
  DATA.meta.reviewed = "21 July 2026";
  DATA.meta.notice = "Exploratory educational content for Airbus Defence and Space. It does not replace official policies, procedures, legal advice, technical authorisation, targets or corporate positions.";

  DATA.modules.forEach((module) => {
    module.duration = "70–85 min";
    module.lessons = module.lessons.map((baseLesson, index) => ({
      ...baseLesson,
      id: `${module.id}-l${index + 1}`,
      duration: index === 3 ? "10–12 min" : "11–13 min",
      deepDive: expansions[module.id][index],
      workedExample: expansions[module.id][index].workedExample
    })).concat(additionalLessons[module.id] || []);
    module.explainers = explainers[module.id];
    module.caseFile = caseFiles[module.id];
    module.lab = labs[module.id];
    module.tool = tools[module.id];
    module.assessmentQuestions = module.checks.concat(extraChecks[module.id]);
    module.sources = [...new Set(module.sources.concat(moduleSourceAdds[module.id]))];
  });

  DATA.finalAssessment.questions = DATA.finalAssessment.questions.concat(finalExtras);
  DATA.finalAssessment.title = "Final applied assessment";
  DATA.finalAssessment.intro = "Twenty questions test whether you can interpret evidence and choose defensible action across all six modules. A score of 16/20 (80%) completes the course.";
  DATA.courseArchitecture = {
    modules: 6,
    lessons: DATA.modules.reduce((sum, module) => sum + module.lessons.length, 0),
    interactiveExplainers: DATA.modules.reduce((sum, module) => sum + module.explainers.length, 0),
    caseFiles: DATA.modules.length,
    appliedLabs: DATA.modules.length,
    moduleQuestions: DATA.modules.reduce((sum, module) => sum + module.assessmentQuestions.length, 0),
    finalQuestions: DATA.finalAssessment.questions.length,
    downloadableTools: DATA.modules.length
  };
})();

(() => {
  "use strict";
  const DATA = window.FOUNDATIONS_DATA;
  const briefings = {
    m1: {
      title: "Why this module comes first",
      paragraphs: [
        "Sustainability vocabulary is abundant, but working decisions require structure. Teams regularly encounter proposals that sound positive—less energy, more recycling, digital optimisation, local biodiversity action—yet the strength of the decision depends on purpose, baseline, boundary, evidence, trade-offs and control. This module establishes that common method before the course enters specialist themes.",
        "The method is intentionally cross-functional. Environmental specialists may understand impact pathways and requirements; engineers define technical function and constraints; operations understand variability; procurement sees supplier and logistics conditions; data teams understand measurement and models; managers allocate resources and accept residual risk. A defensible decision connects those perspectives without pretending that every participant holds the same authority.",
        "The module also separates management-system language from communication language. Environmental aspects, obligations, objectives and operational controls organise internal management. Public or internal environmental claims translate evidence for an audience. A strong control does not automatically justify a broad claim, and an attractive claim does not demonstrate a controlled process.",
        "Throughout the lessons, look for four recurring failure modes: comparing unlike functions, moving a burden outside the chosen boundary, treating an estimate as a measurement and reporting an activity as an outcome. Each can produce a plausible number while weakening the conclusion. The course uses them repeatedly because they appear across energy, materials, suppliers, digital tools and nature.",
        "Completion should leave you able to write a short decision brief that another function can challenge. The goal is not to make every employee an environmental specialist. It is to improve the quality of the question, the visibility of uncertainty and the route to the right specialist or authority."
      ]
    },
    m2: {
      title: "Why aerospace needs lifecycle depth",
      paragraphs: [
        "Aerospace products and support systems combine demanding performance, specialised materials, regulated processes, long service lives and complex maintenance. Those features make lifecycle thinking particularly valuable and particularly easy to oversimplify. A mass reduction, recycled content claim or new material cannot be judged from one stage or attribute alone.",
        "Early design choices determine material combinations, joining, inspection, repair, upgrade and separation. Later teams inherit those choices and may have little freedom to change them. Lifecycle screening therefore creates value before detailed data are perfect: it identifies irreversible decisions, missing functions and the evidence that must arrive at future gates.",
        "Life Cycle Assessment provides a formal quantitative framework, but not every decision needs a full study. The module distinguishes screening, footprinting and comparative LCA so that the method name matches the work performed. It also explains why functional equivalence, allocation, data quality and sensitivity can matter more than the number of decimal places in the result.",
        "Circularity is treated as safe value retention rather than a recycling slogan. Prevention, maintenance, repair, reuse and remanufacture can retain more function, yet each depends on condition, configuration, documentation, authorised use and viable operations. End-of-life routes must be real enough to verify, not only technically imaginable.",
        "Completion should leave you able to map a lifecycle, identify hotspots and confidence gaps, ask for equivalent function and challenge a circularity claim without assuming that the newest material or highest recycling rate is automatically preferable."
      ]
    },
    m3: {
      title: "Digital evidence is a system, not a dashboard",
      paragraphs: [
        "Environmental decisions increasingly depend on meters, enterprise systems, analytics, simulations and Artificial Intelligence. These tools can reveal patterns and support control, but they can also make weak assumptions look authoritative. Visual polish is not evidence quality. The physical event, data lineage, model and human decision remain distinct layers.",
        "This module begins with the intended decision and works backwards to the measurement architecture. That order prevents teams from collecting large volumes of data with no response pathway. It also clarifies the resolution, latency and uncertainty that the decision actually needs; not every question requires permanent sensors or a complex model.",
        "Model assessment goes beyond average accuracy. Rare operating modes, asymmetric error consequences, drift and user behaviour can determine whether a technically strong model is safe and useful. Meaningful human oversight requires authority and context, while governance preserves intended use, version, incident response and retirement.",
        "The environmental footprint of digital systems is included without resorting to simplistic claims. Hardware, computation, storage and networks add burden, but the comparison also needs the operational impact they credibly avoid. Net value depends on adoption, rebound, transferred work and the time over which the tool remains useful.",
        "Completion should leave you able to trace a number from source to action, recognise when a model is outside its validity domain and demand outcome evidence before calling a digital project an environmental improvement."
      ]
    },
    m4: {
      title: "Performance changes when the work system changes",
      paragraphs: [
        "Environmental programmes often assume that information produces behaviour: issue a procedure, deliver training and expect consistent performance. Real work is influenced by equipment, layout, workload, competing requirements, incentives, informal knowledge and decision authority. Capability and culture therefore need system design as well as communication.",
        "The module distinguishes awareness, knowledge, skill, judgement and authorisation. A broad foundation course builds common language and decision habits; it does not qualify learners for legal interpretation, technical approval or specialist assessment. Role-specific pathways and supervised practice provide the additional depth where consequence requires it.",
        "Improvement culture is framed as a controlled learning system. People closest to work can contribute weak signals without having to prove the complete solution. Owners then frame, test and close the loop. Predefined success criteria and guardrails protect against enthusiasm turning a pilot into an unsupported claim.",
        "Change management examines work-as-done and the barriers that make correct action difficult. Training is appropriate for knowledge and skill gaps. It is not the primary remedy for missing equipment, inaccessible information, inadequate capacity or conflicting incentives. Matching action to cause is more respectful and more effective.",
        "Completion should leave you able to design a representative experiment, distinguish course completion from competence, analyse adoption barriers and write a learning record that another site can use without copying the result blindly."
      ]
    },
    m5: {
      title: "Responsibility and resilience meet upstream",
      paragraphs: [
        "A product’s environmental and operational dependencies extend beyond the direct supplier. Specialised processing, material extraction, chemicals, logistics and recovery may sit several tiers away. Direct spend or contract ownership alone cannot reveal those pathways, so mapping combines commercial and technical knowledge.",
        "Due diligence is presented as a continuous risk-based cycle rather than a questionnaire campaign. Evidence is identified, challenged and linked to action; implementation and outcomes are tracked. Unknown locations or processes remain visible so that decision-makers can see confidence and prioritise further work.",
        "Substance substitution illustrates why single-attribute choices fail. Hazard is essential, but exposure, technical function, service life, process demand, qualification and supply continuity also affect the result. Short-term controls and long-term redesign may need to proceed together.",
        "Resilience options include demand reduction, repair, visibility, supplier capability, diversification, selective buffer and redesign. Each changes environmental burden, cost, recovery time and technical risk. Scenario analysis is more robust than choosing one policy from average demand and lead time.",
        "Completion should leave you able to ask where a critical process occurs, distinguish evidence from declaration, compare substitution trade-offs and build a layered resilience response with review and exit conditions."
      ]
    },
    m6: {
      title: "Climate and nature decisions need place, time and pathways",
      paragraphs: [
        "Climate mitigation, climate adaptation, nature dependencies, nature impacts and biodiversity outcomes are connected but different. One favourable indicator cannot represent them all. This module keeps the concepts distinct so that co-benefits can be tested and conflicts can be managed instead of hidden.",
        "Location is central. Water availability, ecosystem sensitivity, drainage, heat, flood exposure, species movement and cumulative pressure vary across places and seasons. A property line may not match the hydrological or ecological area of influence. Public screening data support prioritisation, while local evidence and appropriate specialists support the decision.",
        "The mitigation hierarchy places avoidance and minimisation before restoration and treatment of residual impact. This ordering protects against using a visible planting or restoration activity to justify preventable harm. Ecological outcomes require a baseline, relevant indicators, time and adaptive thresholds.",
        "Climate-risk assessment connects hazard with exposed people, assets, suppliers and vulnerabilities. Adaptation can create maladaptation when it raises emissions, shifts risk or locks in a weak solution. Integrated review keeps the climate and nature pathways visible while using the appropriate evidence for each.",
        "Completion should leave you able to distinguish activity from outcome, map a dependency and an impact, define an area of influence and communicate a local environmental action without extending the claim beyond its evidence."
      ]
    }
  };
  const misconceptions = {
    m1: [
      { myth: "A measured reduction is automatically a system improvement.", correction: "Measurement can be accurate inside a boundary that is too narrow for the claim. First confirm equivalent function, unchanged or explicitly revised boundary, relevant transferred work and the operating conditions represented. A local result can remain useful without being promoted to a product- or organisation-level conclusion." },
      { myth: "Uncertainty makes a decision invalid.", correction: "Uncertainty changes the strength and reversibility of the decision. Use ranges, sensitivity and consequence to decide whether to collect more data, run a controlled trial or stop. Hiding uncertainty is weak; demanding impossible certainty for every low-consequence action is also weak." },
      { myth: "An environmental target proves environmental leadership.", correction: "A target expresses intended direction. Leadership is demonstrated through a credible baseline and scope, resources, action, transparent progress, response to underperformance and willingness to revise unsupported assumptions. Ambition must not be communicated as an achieved outcome." }
    ],
    m2: [
      { myth: "The lightest material always has the lowest lifecycle impact.", correction: "Mass matters, especially where it affects operation, but manufacturing yield, energy, substances, durability, repair, replacement and end-of-life route can change the result. Compare equivalent function over a representative service scenario and show which assumptions drive the ranking." },
      { myth: "Recyclable means circular.", correction: "Technical recyclability is only one condition. Collection, segregation, scale, authorised treatment, recovered quality, demand and residues determine the real route. Prevention, maintenance, repair and reuse may retain more value where safe and technically authorised." },
      { myth: "A full LCA is required before any lifecycle decision.", correction: "Lifecycle screening can expose stages, transfers and irreversible design choices early. A full Life Cycle Assessment is appropriate when the decision and claim require quantitative depth. The method should be proportionate and named accurately rather than overstated." }
    ],
    m3: [
      { myth: "More data always improve the decision.", correction: "Data create value when they are relevant, representative, traceable and connected to action. Excess collection adds hardware, storage, maintenance and interpretation burden. Begin with the decision and collect the resolution and history needed to support it." },
      { myth: "High average accuracy makes a model safe to deploy.", correction: "Average performance can hide rare high-consequence errors and weak performance under particular operating modes. Validate by condition, examine false-positive and false-negative consequences, define human authority and monitor drift and outcome." },
      { myth: "A digital estimate of savings is an achieved saving.", correction: "The tool must change authorised operation and the outcome must be measured against a credible reference. Added digital burden, rebound, displaced work and non-adoption belong in the system evaluation before an environmental benefit is claimed." }
    ],
    m4: [
      { myth: "If people know the rule, non-conformance is a motivation problem.", correction: "Knowledge is only one condition. Equipment, layout, capacity, workload, information access, incentives and conflicting requirements can make correct action difficult. Observe work-as-done and match the response to the barrier before prescribing more awareness." },
      { myth: "Course completion demonstrates competence.", correction: "Completion shows exposure to content and perhaps knowledge at one point in time. Competence requires correct performance with judgement in context, appropriate authority and evidence proportionate to consequence. Work samples, observation and supervised practice may be required." },
      { myth: "A successful pilot should be scaled quickly.", correction: "A pilot represents defined conditions. Scaling can change behaviour, supplier capacity, logistics, workload and control. Confirm representative testing, guardrails, ownership, standard work and monitoring, then treat scale-up as another controlled stage." }
    ],
    m5: [
      { myth: "A returned questionnaire means the supplier risk is managed.", correction: "A questionnaire supplies information. Risk management requires review, verification where proportionate, action, tracking and response to unresolved issues. Evidence should match the product, site, process and period relevant to the decision." },
      { myth: "The supplier with the lowest environmental score should always be replaced.", correction: "Scores can conceal data quality and critical context. Response depends on severity, leverage, technical alternatives, urgency, supplier willingness and whether engagement can prevent impact. Mandatory conditions and serious unresolved issues still require escalation." },
      { myth: "More inventory always creates resilience.", correction: "Inventory can absorb disruption but also creates obsolescence, storage and material burden. Repair, pooling, commonality, visibility, supplier capability, diversification and redesign may address dependency more structurally. Buffers should be targeted and reviewed." }
    ],
    m6: [
      { myth: "A carbon reduction proves an option is environmentally preferable.", correction: "Climate-change performance is one environmental lens. Nature, water, pollution, materials and local effects may move differently. Report the carbon result accurately, then review material trade-offs before drawing a broader conclusion." },
      { myth: "Native planting demonstrates biodiversity gain.", correction: "Species selection can support a sound intervention, but outcome also depends on baseline, habitat structure, connectivity, pressure reduction, maintenance, time and monitoring. The number planted is an activity indicator, not proof of ecological gain." },
      { myth: "Only protected areas require nature assessment.", correction: "Dependencies, impacts and sensitive pathways occur inside and outside formal protection. Location, ecosystem condition, water, connectivity and cumulative pressure determine significance. Legal status is important, but it is not the only ecological evidence." }
    ]
  };
  DATA.modules.forEach((module) => {
    module.briefing = briefings[module.id];
    module.misconceptions = misconceptions[module.id];
  });
  const secondaryImages = {
    m4: ["assets/theory-m4-people-learning.jpg", "A mixed defence-aerospace team observes a controlled maintenance task and records evidence together."],
    m5: ["assets/m5-evidence-review.jpg", "A cross-functional team reviews environmental evidence and documentation in a professional meeting."],
    m6: ["assets/m6-landscape-assessment.jpg", "A technical team examines landscape and location data on large digital displays."]
  };
  const theoryImages = {
    m1: {
      src: "assets/theory-m1-systems.jpg",
      alt: "A cross-functional team connects operational need, materials, logistics, evidence and uncertainty around an A400M mission-system decision.",
      caption: "The apparent improvement sits inside a wider system: purpose, transferred effects, uncertainty and follow-up must remain visible.",
    },
    m2: {
      src: "assets/theory-m2-lifecycle.jpg",
      alt: "The same military-aircraft access panel moves through material preparation, manufacture, inspection, authorised repair, disassembly and recovery.",
      caption: "Lifecycle thinking follows one technical function through manufacture, service, repair and recovery instead of judging a material in isolation.",
    },
    m3: {
      src: "assets/theory-m3-digital-evidence.jpg",
      alt: "Measurements from an A400M maintenance task pass through documented data analysis, a digital model, human review and operational feedback.",
      caption: "A trustworthy digital recommendation preserves the chain from physical signal to model, human judgement, action and measured outcome.",
    },
    m4: {
      src: "assets/theory-m4-people-learning.jpg",
      alt: "A diverse defence-aerospace team observes a maintenance demonstration, checks technical guardrails and records learning.",
      caption: "Participation becomes useful when practical knowledge, technical guardrails, observed evidence and learning are brought into the same controlled trial.",
    },
    m5: {
      src: "assets/theory-m5-value-chain.jpg",
      alt: "A cross-functional team traces an aerospace component through supplier tiers, material evidence, transport routes and an unresolved lower-tier dependency.",
      caption: "Responsible sourcing requires evidence beyond the direct supplier: material identity, lower-tier visibility, alternative routes and unresolved dependencies all affect the decision.",
    },
    m6: {
      src: "assets/theory-m6-climate-nature.jpg",
      alt: "A technical team assesses flood, drainage, heat, noise, lighting and habitat pathways around a military installation with no aircraft present.",
      caption: "Location changes the evidence: operational resilience, water pathways, climate exposure and ecological pressures must be assessed together without turning one result into a broad environmental claim.",
    }
  };
  DATA.modules.forEach((module) => {
    const secondary = secondaryImages[module.id] || [module.image, module.alt];
    module.secondaryImage = secondary[0];
    module.secondaryAlt = secondary[1];
    const theory = theoryImages[module.id];
    if (theory) {
      module.theoryImage = theory.src;
      module.theoryAlt = theory.alt;
      module.theoryCaption = theory.caption;
    }
  });
  DATA.capstone = {
    title: "Capstone: build one defensible sustainability decision",
    intro: [
      "The capstone is a synthesis activity rather than another knowledge quiz. Choose a real but non-confidential improvement question from operations, engineering, maintenance, procurement, digital work or site management. Do not choose a project whose technical or legal details cannot be recorded in the approved environment. The purpose is to practise the reasoning pattern, not to create an authorised Airbus decision through this course.",
      "Use the six stages below and the downloadable module tools. A strong output can be reviewed by another function without a verbal explanation. It shows the operational purpose, where evidence comes from, which trade-offs remain and what approval or specialist review is still required."
    ],
    stages: [
      { code: "01", title: "Frame the need", text: "Describe the operational function, affected users and non-negotiable safety, quality, security, legal and mission constraints. State the decision to be made and the feasible alternatives, including the option of not changing the system. Avoid environmental adjectives at this stage; define the problem in observable terms." },
      { code: "02", title: "Set the comparison", text: "Define the baseline, functional output, organisational and operational boundary, lifecycle stages, locations and time horizon. Record material exclusions and explain why they are not expected to change the conclusion. If work moves to a supplier or another team, keep it visible in the changed system." },
      { code: "03", title: "Map evidence", text: "List measured, calculated, supplier-specific, secondary and assumed values. Preserve unit, period, source, owner, transformation and confidence. Identify the uncertainty most likely to change the ranking or the scale of benefit, then decide whether a range, trial or new measurement is proportionate." },
      { code: "04", title: "Test interactions", text: "Review climate, energy, water, materials, waste, substances, nature, people, supplier and resilience pathways that could materially change. Use relevant modules rather than forcing every topic into equal depth. Record benefits, adverse trade-offs, rebound and transferred effects, with technical guardrails." },
      { code: "05", title: "Choose controlled action", text: "Select stop, investigate, trial, implement or scale. Name the accountable owner, specialist and approval routes, leading and outcome indicators, guardrails, review date and response thresholds. A reversible pilot can proceed with more uncertainty than a long-lived or externally communicated decision." },
      { code: "06", title: "Write the supportable message", text: "State only what the current evidence establishes. Name subject, change, baseline, boundary, period and limitations. Separate expected benefit from verified outcome and target from achievement. Add an owner and review date so the wording cannot survive after the evidence or context changes." }
    ],
    review: "Ask a colleague to challenge three points: whether the alternatives deliver equivalent function, whether any important burden left the boundary and whether the proposed indicators would reveal an unintended effect. Revise the brief before treating it as complete learning evidence."
  };
  DATA.learningGuide = {
    title: "How to use the course",
    paragraphs: [
      "Plan the course as six focused sessions rather than one long sitting. Each module contains seven lessons, two interactive visual explanations, a progressive case, an applied laboratory, an eight-question assessment and a downloadable work tool. The estimated duration assumes active reading, note-taking and completion of activities; a learner already familiar with a topic may move faster, while a learner applying the templates to a real question may take longer.",
      "The route is sequential inside each module, but the course is not a substitute for specialist qualification. When a lesson touches legal requirements, airworthiness, product safety, security, export control, chemical compliance or approved corporate accounting, use the concept to recognise the issue and then follow current Airbus processes and authorised expertise. Public sources are linked for learning and review; they do not override controlled internal information.",
      "Use the field-note prompt at the end of every lesson to translate the concept into a non-confidential observation from work. The note stays in the browser and can be exported. Avoid entering sensitive operational, personal, supplier or programme information into a device or environment that is not approved for it. A generic description is enough to practise the reasoning method.",
      "Assessment feedback explains why an option is strong or weak. If an answer is incorrect, revisit the relevant lesson and try again; the aim is not to guess the answer but to make the logic reusable. Module completion requires all lessons, the case, laboratory and a passing assessment. The final assessment and capstone then test whether the method transfers across themes.",
      "When the course challenges a familiar sustainability phrase, treat that as an invitation to improve precision rather than to avoid action. Good environmental communication can be positive and engaging while still naming evidence, limitations and next steps. Honest uncertainty supports learning; vague certainty creates risk."
      ,"A suggested rhythm is one module per week: preview the objectives, complete the lessons in two short blocks, then return for the case, laboratory and assessment. Before starting the next module, use the downloadable template on one small example. This spacing improves retention and produces a practical portfolio of six decision tools instead of a single completion event. Keep a short list of questions that require specialist clarification, and review those questions through the appropriate internal route before applying any conclusion at work."
    ]
  };
})();





(() => {
  "use strict";
  const DATA = window.FOUNDATIONS_DATA;
  const p = (...paragraphs) => paragraphs;
  const lesson = (id, label, title, duration, paragraphs, points, callout, deepDive, workedExample) => ({
    id, label, title, duration, paragraphs, points, callout, deepDive, workedExample
  });
  const lateLessons = {
    m2: [
      lesson(
        "m2-l5", "05 · Hotspots & data quality", "Focus effort where data and design can change the conclusion", "11–13 min",
        p(
          "A hotspot is a lifecycle stage, process, material or assumption that contributes materially to an impact category or drives the comparison. Hotspot screening prevents teams from spending months refining negligible flows while a dominant process remains represented by a poor proxy. It can use engineering knowledge, mass and energy balances, supplier information and recognised databases before a full model exists.",
          "Cut-off rules define which flows are excluded. Small mass does not always mean small impact: coatings, electronics, precious metals or hazardous substances can be significant despite low weight. Cut-offs should consider environmental relevance, not mass alone, and exclusions should be tested during interpretation.",
          "Primary data describe the actual process or supplier; secondary data use representative databases or literature. Primary data are not automatically better if they are incomplete, unverified or measured in an unusual period. Secondary data are useful when their geography, technology and age fit the decision. A data-quality matrix makes those dimensions visible.",
          "Proxy choice is a judgement. The team should explain why a dataset is representative, what important differences remain and how uncertainty affects the result. Conservative proxies can support screening, but they should not be described as precise supplier performance. Updating the most decision-critical proxies creates more value than replacing every generic dataset.",
          "Mass and energy balances help detect missing flows. Inputs should plausibly reconcile with product, emissions, wastewater, waste and inventory change. Large unexplained differences may indicate data gaps or unit errors. Automated LCA software does not protect against an inconsistent physical model.",
          "Sensitivity analysis changes one assumption or methodological choice at a time; scenario analysis changes a coherent set of future conditions. Both help show whether the conclusion is robust. Results should identify the assumptions that control the ranking and the data improvement needed before the next decision gate."
        ),
        ["Screen hotspots before pursuing exhaustive detail.", "Evaluate data by geography, technology, time, completeness and reliability.", "Use sensitivity to direct the next evidence investment."],
        { label: "Data priority", text: "Improve the data most likely to change the decision—not simply the data that are easiest to obtain." },
        { title: "Four confidence bands", paragraphs: p("A practical screen can label data: A, direct verified and representative; B, direct or supplier-specific with limited verification; C, representative secondary data; D, rough proxy or assumption. The label does not replace quantitative uncertainty, but it helps reviewers see where confidence is concentrated.", "Confidence should be considered alongside contribution. A low-quality value with tiny contribution may be less urgent than a medium-quality value that drives the conclusion.") },
        "A material comparison is dominated by electricity in one heat-treatment step represented by a continental average. Supplier-specific energy and location data become the first improvement priority."
      ),
      lesson(
        "m2-l6", "06 · Design for long service", "Make durability, maintenance, repair and upgrade part of environmental design", "12–14 min",
        p(
          "Durability can reduce replacement and manufacturing demand, but maximum life is not always optimal. A durable component that locks in high operating burden or prevents upgrade can perform worse across the system. Design should consider required life, degradation, maintenance, repair, adaptability and the timing of technology change.",
          "Reliability, maintainability and environmental performance interact. Easy inspection can detect damage earlier. Modular access can replace a failed subassembly rather than a complete unit. Standard fasteners can support disassembly, while permanent bonding may reduce mass but complicate repair and separation. The trade-off needs evidence within technical constraints.",
          "Repairability is designed through access, tolerances, material behaviour, approved methods, tooling, skills, spares, documentation and inspection. Declaring a product repairable is meaningless if the repair cannot be performed in the actual service network or if missing records make it impossible to approve.",
          "Upgradeability can extend useful life by allowing electronics, software, sensors or functional modules to evolve without replacing the complete platform. It can also create interface, cybersecurity, configuration and obsolescence challenges. A modular architecture requires long-term governance, not only physical connectors.",
          "Maintenance strategies influence materials, energy, travel, waste and availability. Scheduled replacement is predictable but may discard remaining life. Condition-based maintenance can retain value but adds sensing and decision risk. Run-to-failure may be appropriate for a non-critical, easily replaceable item but unacceptable elsewhere. The environmental comparison must use the authorised technical strategy.",
          "Design reviews should bring downstream knowledge forward. Maintenance, manufacturing, supply, environment, substances, quality and recovery specialists can identify constraints that a design team cannot see from performance requirements alone. Early questions are cheaper than late redesign."
        ),
        ["Design access, documentation and approved repair together.", "Compare maintenance strategies within safety and mission constraints.", "Use downstream expertise before architecture is locked."],
        { label: "Design prompt", text: "What information, access, skill and approved process will someone need to retain this function ten or twenty years from now?" },
        { title: "Lifecycle design review", paragraphs: p("For each concept, review material intensity, manufacturing yield, process substances, durability, inspection, repair, upgrade, disassembly, data continuity and plausible end-of-life routes. Record where evidence is mature and where a future gate must revisit the assumption.", "Not every criterion can be maximised. The value of the review is to expose irreversible choices and make the trade-off deliberate.") },
        "A lightweight bonded enclosure saves mass but prevents replacement of one frequently failing internal part. A redesigned access feature adds small mass while avoiding repeated complete-unit replacement."
      ),
      lesson(
        "m2-l7", "07 · End of life & advanced materials", "Plan realistic recovery routes before materials become waste", "12–14 min",
        p(
          "End of life is a chain of decisions: continued use, resale or transfer, harvesting, repair, repurposing, dismantling, material recovery, energy recovery and disposal. The technically possible route may not be available at the location, scale or time when the item leaves service. Design claims should distinguish laboratory potential from an established controlled route.",
          "Metals can retain high material quality when grades remain segregated and contamination is controlled. Coatings, fasteners, mixed alloys and process residues can reduce value. Closed-loop recovery requires specifications, volumes, logistics, quality assurance and demand for the recovered material. Acceptance by a recycler is not evidence that the material returns to an equivalent aerospace application.",
          "Fibre-reinforced composites combine valuable reinforcement with a polymer matrix but are difficult to separate. Mechanical, thermal and chemical routes can recover different forms of material with different energy demand and performance. Design for fewer material combinations, accessible joints and documented composition can improve future options, subject to technical requirements.",
          "Electronics contain critical and precious materials alongside substances requiring controlled treatment. Component harvesting can retain more function than shredding, but obsolescence, data security, configuration, condition and export controls may constrain it. Specialist authorised routes are essential.",
          "Hazardous residues must not be diluted into a circular story. Surface contamination, oils, fuels, batteries, pyrotechnic devices or regulated substances may require decontamination and specific handling before recovery. Worker and downstream safety are part of the lifecycle boundary.",
          "A decommissioning plan should identify configuration and ownership, hazardous content, information security, approved dismantling, evidence requirements, destination verification and outcome records. Plans need review because regulation, technology and markets change during long service lives."
        ),
        ["Separate technical recyclability from an available verified route.", "Preserve material segregation and composition information.", "Include decontamination, security and downstream safety."],
        { label: "Reality check", text: "Who will recover this material, with which process, under which specification, and what verified product will it become?" },
        { title: "End-of-life evidence", paragraphs: p("A robust record follows the item or batch to the authorised destination and documents treatment and output. Generic diversion rates can hide storage, export, downcycling or residue disposal.", "Future technology can be explored as a scenario, but current claims should rely on routes that exist and can be evidenced.") },
        "A composite panel is labelled ‘recyclable’ because a pilot technology exists. The project revises the wording to describe a research pathway until logistics, scale, recovered quality and verified destination are demonstrated."
      )
    ],
    m3: [
      lesson(
        "m3-l5", "05 · Measurement architecture", "Build reliable information from sensor to decision", "11–13 min",
        p(
          "Measurement begins with a measurand: the quantity intended to be measured. Teams should define it, unit, location, time resolution, operating condition and required uncertainty. ‘Energy use of the process’ is ambiguous if the boundary excludes shared cooling, standby or upstream compressed air. A metering plan makes the physical boundary explicit.",
          "Sensors have range, accuracy, resolution, drift and environmental limits. Installation location and sampling frequency can matter as much as specification. Calibration establishes the relationship with a reference under defined conditions; verification checks continued performance. Maintenance and failure detection belong in the data architecture.",
          "Context data make environmental measurements interpretable. Product type, accepted output, operating hours, weather, shift, maintenance state and control settings may explain variation. Joining datasets requires consistent timestamps, identifiers and definitions. Otherwise a sophisticated model may learn alignment errors.",
          "Missing data need rules. Automatic interpolation can be reasonable for short stable gaps and misleading during shutdown or abnormal operation. The system should flag imputation, preserve raw data and show coverage. Users need to know when a trend relies heavily on estimated values.",
          "Data validation combines automated and human checks: range, rate of change, balance, duplication, timestamp, unit, known operating event and comparison with an independent source. Exceptions should create a workflow with ownership, not disappear into a technical log.",
          "A measurement architecture should be proportionate. Temporary campaigns can answer diagnostic questions. Permanent metering is justified when the decision recurs, value is material and maintenance is funded. Every point needs an owner and retirement rule."
        ),
        ["Define the measurand and physical boundary.", "Preserve raw data, quality flags and provenance.", "Fund calibration, maintenance and exception handling."],
        { label: "Architecture rule", text: "No permanent sensor without a named decision, data owner, maintenance plan and response to abnormal values." },
        { title: "From raw to trusted", paragraphs: p("Document source, installation, calibration, acquisition, unit conversion, quality flags, aggregation, storage and visualisation. Assign an owner at each transition where meaning can change.", "Use reconciliation with invoices or balances as a check, while recognising that different boundaries and periods may prevent exact agreement.") },
        "A water meter shows constant overnight consumption. Before declaring a leak, the team checks timestamp, meter resolution, cleaning schedule, tank refill and data transmission behaviour."
      ),
      lesson(
        "m3-l6", "06 · AI lifecycle & resource use", "Evaluate Artificial Intelligence as a complete sociotechnical system", "12–14 min",
        p(
          "An Artificial Intelligence (AI) system has a lifecycle: problem definition, data collection, development, validation, deployment, monitoring, change and retirement. Environmental review should occur at each stage. The central question is whether AI is necessary and proportionate to the decision; a simpler rule, statistical model or process change may perform adequately with less complexity.",
          "Training data encode historical conditions and decisions. Sampling gaps, label quality, class imbalance and proxy variables can produce systematic error. In industrial contexts, rare abnormal states may be exactly the states with high consequence. Validation datasets should represent intended operation and known edge conditions.",
          "Resource use includes development experiments, training, inference, storage, network and hardware. Public cloud carbon estimates can vary by allocation, location and time. Teams should use available provider and internal evidence conservatively, record assumptions and focus on design choices: model size, reuse, frequency, retention and hardware lifetime.",
          "Environmental benefit must be measured at the system level. A model that predicts energy demand is not itself an energy saving. Savings occur only when an authorised action changes operation and the outcome is verified against a credible baseline. Rebound, additional maintenance and displaced work belong in the comparison.",
          "Monitoring should cover technical performance, data drift, user behaviour, incidents, resource use and environmental outcome. Retraining can improve accuracy but also introduce new behaviour and computation. Material changes need review and version control.",
          "Retirement criteria protect against permanent pilots. If the process changes, evidence weakens, use declines or benefit no longer exceeds burden, the system should be adapted or decommissioned. Essential records and decisions must remain accessible after shutdown."
        ),
        ["Ask whether AI is necessary and proportionate.", "Measure the operational outcome, not only model accuracy.", "Define monitoring, material-change review and retirement."],
        { label: "Benefit equation", text: "Verified avoided burden − added digital burden − rebound and transferred effects, assessed within an explicit boundary." },
        { title: "Minimum AI evidence pack", paragraphs: p("Include intended use, prohibited use, data description, validation by operating condition, error consequences, human oversight, security, resource estimate, outcome baseline, monitoring and change history.", "The pack should be understandable to the process owner, not only the development team.") },
        "An AI scheduling tool claims a 6% energy reduction. Verification separates weather and workload, checks delayed tasks and overtime, measures server use and confirms that operators actually followed the recommendations."
      ),
      lesson(
        "m3-l7", "07 · Governance & decision rights", "Give digital sustainability tools accountable owners and safe boundaries", "11–13 min",
        p(
          "Governance defines who may decide, approve, operate, challenge and stop a system. A sustainability tool can affect production, maintenance, people, suppliers and reporting, so ownership rarely sits with one function. Roles need to cover business purpose, data, model or rules, technical platform, process, environmental method, security and final decision authority.",
          "The intended-use statement sets the boundary. It identifies users, decisions, operating conditions, inputs, outputs, known limitations and prohibited uses. Reusing a model or dashboard for a different site or decision without review can invalidate evidence even when the interface still works.",
          "Access control, cybersecurity and information protection are necessary for reliable environmental decisions. Manipulated, stale or inappropriately shared data can create operational and legal consequences. Defence and Space information may carry additional security or export-control requirements; employees must follow approved systems and specialist advice. This course does not define those controls.",
          "Change control distinguishes routine maintenance from a material change. New data source, threshold, algorithm, user group or operating context may require revalidation and approval. A version history should link the change to tests and release decision so that historical outputs remain interpretable.",
          "Incident management should include wrong recommendations, data-quality failures, unavailable systems, inappropriate use and unexpected environmental or operational outcomes. Users need a visible route to report and a safe fallback. Post-incident learning should update design, monitoring and training.",
          "Assurance is layered. Development testing checks technical behaviour; independent review challenges method and evidence; process owners validate usability; audits examine controls and records. The level should match consequence. Governance should enable useful innovation while preventing unsupported automation."
        ),
        ["Publish intended and prohibited uses.", "Link material changes to revalidation and approval.", "Provide incident, fallback and stop routes."],
        { label: "Decision right", text: "The person accountable for the operational decision must be able to understand and override the digital recommendation within defined authority." },
        { title: "RACI is only the start", paragraphs: p("A Responsible, Accountable, Consulted and Informed map helps clarify participation, but governance also needs competence, evidence, escalation and time to act.", "Review the map after organisational change. A named owner who has left the role is not a control.") },
        "A dashboard calculation changes from measured to estimated data after a system migration. The release is labelled, trend interpretation is reviewed and users are warned rather than silently presenting one continuous series."
      )
    ]
  };
  Object.entries(lateLessons).forEach(([moduleId, lessons]) => {
    const module = DATA.modules.find((item) => item.id === moduleId);
    module.lessons = module.lessons.concat(lessons);
  });
  DATA.courseArchitecture.lessons = DATA.modules.reduce((sum, module) => sum + module.lessons.length, 0);
})();
