window.FOUNDATIONS_ES_PATCHES = window.FOUNDATIONS_ES_PATCHES || {};
window.FOUNDATIONS_ES_PATCHES.m2 = {
  short: "Ciclo de vida",
  title: "Ciclo de vida, circularidad y materiales",
  strapline: "Conservar valor de forma segura durante décadas de diseño, producción y servicio.",
  alt: "Ingenieros aeroespaciales inspeccionan una estructura ligera, materiales avanzados y datos de fabricación.",
  supportAlt: "Un equipo aeroespacial multidisciplinar compara componentes, muestras de materiales y evidencias.",
  secondaryAlt: "Ingenieros aeroespaciales inspeccionan una estructura ligera, materiales avanzados y datos de fabricación.",
  theoryAlt: "El mismo panel de acceso de una aeronave militar recorre la preparación del material, la fabricación, la inspección, la reparación autorizada, el desmontaje y la recuperación.",
  theoryCaption: "El pensamiento de ciclo de vida sigue una misma función técnica durante fabricación, servicio, reparación y recuperación, en lugar de juzgar un material de forma aislada.",
  promise: "Comprender el pensamiento de ciclo de vida, el Análisis de Ciclo de Vida, la jerarquía de valor circular y el papel de la trazabilidad técnica.",
  coreQuestion: "¿Cómo puede la industria aeroespacial conservar más valor de productos y materiales sin comprometer seguridad ni cumplimiento?",
  objectives: [
    "Mapear cuestiones ambientales a lo largo de un ciclo de vida aeroespacial completo.",
    "Explicar qué puede y qué no puede demostrar un Análisis de Ciclo de Vida.",
    "Aplicar una jerarquía segura de conservación de valor antes del reciclaje."
  ],
  lessons: [
    {
      label: "01 · Pensamiento de ciclo de vida",
      title: "Las decisiones de diseño recorren toda la vida en servicio",
      paragraphs: [
        "Los productos aeroespaciales combinan largas vidas útiles, requisitos técnicos estrictos, cadenas de suministro complejas y mantenimiento repetido. Un material seleccionado durante el diseño afecta a extracción, procesado, recortes de fabricación, métodos de unión, inspección, reparación, mejoras, desmontaje y vías de final de vida. El pensamiento de ciclo de vida pide considerar esas etapas conectadas antes de optimizar una de ellas de forma aislada.",
        "Airbus describe públicamente un enfoque de ciclo de vida que abarca diseño, producción y fabricación, cadena de suministro, operaciones y final de vida. En Defence and Space, el equilibrio exacto entre etapas variará según producto y misión. El principio útil se mantiene: una aparente reducción en una etapa puede aumentar impactos o limitar la conservación de valor en otra.",
        "Pensar en ciclo de vida no equivale a realizar una evaluación numérica completa para cada decisión. Es un hábito de análisis inicial: identificar dónde pueden producirse impactos y dependencias importantes y, después, decidir qué nivel de análisis es proporcionado."
      ],
      points: [
        "Mapea materias primas, producción, transporte, servicio, mantenimiento y final de vida.",
        "Busca decisiones de diseño que bloqueen residuos futuros o impidan la reparación.",
        "Incluye equipos auxiliares, embalajes y consumibles de proceso cuando sean materiales."
      ],
      callout: { label: "Capacidad de influencia temprana", text: "Cuanto antes se cuestione un requisito, más opciones suelen quedar para reducir materiales, facilitar reparaciones y recuperar valor de forma segura." },
      deepDive: {
        title: "Mapea las decisiones a lo largo de una larga vida aeroespacial",
        paragraphs: [
          "El pensamiento de ciclo de vida sigue las consecuencias de una elección desde la extracción y el procesado de materiales hasta fabricación, logística, operación, mantenimiento, modernizaciones y final de vida. Airbus describe públicamente un enfoque de ciclo de vida que abarca operaciones, cadena de suministro y final de vida de productos. La distribución de impactos varía según producto y uso; un ejemplo didáctico no debe suponer que una etapa domina siempre.",
          "Las largas vidas útiles hacen que el tiempo sea importante. Un diseño con mayor esfuerzo de fabricación puede permitir reparación, menor masa, menos sustituciones o mayor fiabilidad durante décadas. A la inversa, una opción ligera puede ser ambientalmente débil si es difícil de fabricar, no puede repararse, contiene sustancias problemáticas o impide una recuperación de alto valor. La comparación correcta utiliza una función técnica equivalente y un escenario adecuado de vida en servicio.",
          "Los mapas de ciclo de vida deberían incluir actividades habilitadoras que desaparecen de la lista de materiales: utillaje, energía de proceso, equipos de ensayo, consumibles, embalajes protectores, almacenamiento a temperatura controlada, viajes de mantenimiento y producción rechazada. El objetivo no es contabilizar todo con el máximo detalle, sino identificar puntos críticos y transferencias plausibles antes de que la decisión sea costosa de cambiar.",
          "El análisis inicial y la evaluación completa son niveles distintos de esfuerzo. El análisis inicial utiliza el conocimiento disponible para priorizar preguntas. Un Análisis de Ciclo de Vida (ACV) utiliza métodos y datos definidos para cuantificar impactos ambientales potenciales. Los equipos no deberían llamar ACV a una comparación rápida de carbono, pero tampoco deberían esperar a un ACV completo para aplicar pensamiento básico de ciclo de vida."
        ],
        workedExample: "Dos recubrimientos protectores cumplen la misma especificación. Un análisis de ciclo de vida compara formulación, pérdidas de aplicación, energía de curado, controles para trabajadores, intervalo de servicio, decapado, clasificación de residuos y esfuerzo de cualificación antes de seleccionar los temas que requieren ensayos detallados."
      },
      workedExample: "Dos recubrimientos protectores cumplen la misma especificación. Un análisis de ciclo de vida compara formulación, pérdidas de aplicación, energía de curado, controles para trabajadores, intervalo de servicio, decapado, clasificación de residuos y esfuerzo de cualificación antes de seleccionar los temas que requieren ensayos detallados."
    },
    {
      label: "02 · Análisis de Ciclo de Vida",
      title: "El ACV compara sistemas, no solo productos",
      paragraphs: [
        "El Análisis de Ciclo de Vida (ACV) es un método estructurado para evaluar aspectos ambientales e impactos potenciales a lo largo de un ciclo de vida. ISO 14040 describe cuatro fases conectadas: definición de objetivo y alcance, análisis de inventario, evaluación de impactos e interpretación. El objetivo indica por qué existe el estudio y quién lo utilizará. El alcance define unidad funcional, límite del sistema, requisitos de datos y supuestos.",
        "El Inventario de Ciclo de Vida (ICV) cuantifica entradas y salidas relevantes como energía, materiales, emisiones y residuos. La Evaluación de Impactos de Ciclo de Vida traduce los flujos del inventario a categorías de impacto potencial. La interpretación comprueba coherencia, sensibilidad, limitaciones y qué puede respaldar la evidencia. Los resultados dependen de elecciones metodológicas; el ACV no es una máquina que produzca una verdad única y sin contexto.",
        "Una comparación justa requiere una función equivalente. Comparar un kilogramo de dos materiales puede inducir a error si se necesitan cantidades, durabilidades o mantenimientos diferentes para ofrecer el mismo rendimiento. En el ámbito aeroespacial, certificación, fiabilidad y requisitos de vida en servicio forman parte de la función, no son detalles incómodos que deban eliminarse del análisis."
      ],
      points: [
        "Define la unidad funcional antes de recopilar grandes cantidades de datos.",
        "Mantén visibles las decisiones de asignación y la calidad de los datos.",
        "Utiliza análisis de sensibilidad para probar los supuestos que impulsan el resultado."
      ],
      callout: { label: "Siglas", text: "ACV significa Análisis de Ciclo de Vida. El inventario y la evaluación de impactos son fases dentro de un ACV." },
      deepDive: {
        title: "Comprende qué representa realmente un resultado de ACV",
        paragraphs: [
          "ISO 14040 estructura el Análisis de Ciclo de Vida en definición de objetivo y alcance, análisis de inventario, evaluación de impactos e interpretación. El objetivo y alcance determinan la pregunta, audiencia, unidad funcional, límite del sistema, reglas de asignación, necesidades de calidad de datos y comparaciones previstas. Estas elecciones configuran el estudio antes de calcular cualquier indicador de impacto.",
          "El Inventario de Ciclo de Vida registra entradas y salidas: materiales, combustibles, electricidad, agua, emisiones y residuos de los procesos dentro del límite. La Evaluación de Impactos relaciona esos flujos con categorías de impacto ambiental potencial. Los resultados son indicadores de impacto potencial, no predicciones directas de todo el daño real. La elección del modelo, el contexto geográfico, el horizonte temporal y las lagunas de datos influyen en la interpretación.",
          "La asignación es necesaria cuando un proceso produce varios productos o comparte infraestructura. Puede utilizarse masa, valor económico, contenido energético u otra relación física, según el caso y el método. Distintas elecciones defendibles pueden cambiar los resultados. Una buena práctica explica la regla y prueba los supuestos sensibles en lugar de ocultar la asignación dentro de valores predeterminados del programa informático.",
          "Las afirmaciones comparativas requieren especial cuidado. Son esenciales la función equivalente, límites coherentes, métodos coherentes y limitaciones transparentes. Una única puntuación de cambio climático no puede demostrar superioridad ambiental global porque agua, toxicidad, uso de recursos, uso del suelo y otras categorías pueden comportarse de forma diferente. Ponderar categorías en una sola puntuación introduce juicios de valor que deben seguir visibles."
        ],
        workedExample: "Un panel metálico y uno de material compuesto se comparan para la misma carga, geometría, fiabilidad y periodo de servicio, no por kilogramo. El estudio prueba la frecuencia de reparación y los recortes de producción porque esos supuestos pueden invertir el resultado."
      },
      workedExample: "Un panel metálico y uno de material compuesto se comparan para la misma carga, geometría, fiabilidad y periodo de servicio, no por kilogramo. El estudio prueba la frecuencia de reparación y los recortes de producción porque esos supuestos pueden invertir el resultado."
    },
    {
      label: "03 · Valor circular",
      title: "El reciclaje importa, pero llega después de las opciones de mayor valor",
      paragraphs: [
        "La circularidad busca reducir la demanda de recursos vírgenes y mantener productos, componentes y materiales en su mayor valor seguro durante el tiempo apropiado. La jerarquía europea de residuos prioriza prevención, seguida de preparación para la reutilización, reciclaje, otras formas de valorización y eliminación. En sistemas de producto, los equipos pueden ampliar la pregunta a repensar, reducir, mantener, reparar, reacondicionar, remanufacturar, reutilizar con otra finalidad y reciclar.",
        "Estas opciones no son intercambiables. La reparación puede conservar más valor que el reciclaje porque se mantienen el esfuerzo de fabricación y la función del componente, pero solo cuando el estado técnico, la configuración, la documentación y el uso aprobado lo permiten. La reutilización sin trazabilidad puede crear un riesgo inaceptable. El reciclaje puede ser la vía correcta cuando prolongar la vida sea inseguro, esté prohibido o resulte ambientalmente peor después del procesado necesario.",
        "Por tanto, la decisión circular más sólida combina una jerarquía de valor con evidencia de ingeniería, aeronavegabilidad, calidad, sustancias y medio ambiente. «Reciclado» no equivale automáticamente a «menor impacto», y «de origen biológico» no implica automáticamente que sea adecuado o preferible."
      ],
      points: [
        "Evita material y recortes innecesarios antes de optimizar el tratamiento de residuos.",
        "Evalúa extensión segura de vida, reparación y reutilización antes de destruir valor de producto.",
        "Compara calidad de recuperación, carga de procesado y futuro uso permitido."
      ],
      callout: { label: "Pregunta de circularidad", text: "¿Cuál es la vía segura de mayor valor disponible para este producto, componente o material, y qué evidencia hace creíble esa vía?" },
      deepDive: {
        title: "Conserva función y valor antes de destruir la estructura material",
        paragraphs: [
          "La jerarquía europea de residuos prioriza prevención, preparación para la reutilización, reciclaje, otras formas de valorización y eliminación. El diseño circular amplía las opciones prácticas: cuestionar la necesidad, reducir material, mantener, reparar, reacondicionar, remanufacturar, reutilizar con otra finalidad y reciclar. Conservar más valor es una orientación útil, no un veredicto automático. Seguridad, calidad, aeronavegabilidad, configuración y cumplimiento siguen siendo restricciones.",
          "La prevención suele ser menos visible que el reciclaje. Evitar una pieza bruta sobredimensionada, mejorar el aprovechamiento del material, reducir retrabajo o ampliar un intervalo de mantenimiento validado evita producción aguas arriba y tratamiento posterior. Las estadísticas de reciclaje pueden mejorar mientras sigue creciendo la demanda total de material, por lo que conviene seguir flujos absolutos, producción funcional y valor conservado, no celebrar únicamente la desviación de residuos.",
          "Reutilización y reparación requieren evidencia. Identidad, estado, historial de cargas, registros de mantenimiento, configuración autorizada y cadena de custodia determinan si un elemento puede volver al servicio con seguridad. Un componente sin documentación puede conservar material físico pero perder valor funcional. La circularidad depende tanto de los sistemas de información como de la tecnología de recuperación.",
          "La calidad del reciclaje importa. Recuperar en circuito cerrado para una aplicación exigente equivalente es distinto de degradar el material a un uso de menor calidad. Las estructuras compuestas, unidas y multimaterial pueden ser difíciles de separar. La decisión debería considerar carga de procesado, calidad recuperada, componentes peligrosos, demanda del mercado y transporte, no solo si un gestor acepta el residuo."
        ],
        workedExample: "Un programa de recortes de titanio mejora primero el aprovechamiento y segrega calidades limpias; después evalúa reutilización directa para piezas adecuadas antes del reciclaje de alta calidad. Los recortes mezclados o contaminados se siguen por separado porque tienen distinto valor de recuperación."
      },
      workedExample: "Un programa de recortes de titanio mejora primero el aprovechamiento y segrega calidades limpias; después evalúa reutilización directa para piezas adecuadas antes del reciclaje de alta calidad. Los recortes mezclados o contaminados se siguen por separado porque tienen distinto valor de recuperación."
    },
    {
      label: "04 · Trazabilidad",
      title: "El valor material es inseparable de la información",
      paragraphs: [
        "Una aleación de altas prestaciones, un material compuesto o un conjunto electrónico no pueden conservarse de forma segura si se desconocen su identidad y estado. Los registros técnicos, información de lote, composición, tratamientos, historial de mantenimiento y cadena de custodia determinan si un elemento puede repararse, reutilizarse, remanufacturarse o reciclarse para una aplicación exigente.",
        "Un pasaporte de materiales es una posible forma de organizar esa información, pero el principio es más amplio que cualquier herramienta. Los datos deben permanecer vinculados al elemento físico, ser comprensibles para el siguiente usuario y estar gobernados durante la vida pertinente. La trazabilidad digital solo puede facilitar circularidad si los registros son exactos, interoperables y se mantienen.",
        "Para sustancias reguladas, la trazabilidad también respalda cumplimiento y tratamiento seguro al final de la vida. Una vía circular que pierde información sobre sustancias puede transferir riesgo a personal de desmontaje, recicladores o futuros usuarios."
      ],
      points: [
        "Conserva información de identidad, composición, estado y uso autorizado.",
        "Diseña los registros para las personas que los necesitarán años después.",
        "Trata la continuidad de los datos como parte del valor del producto y del material."
      ],
      callout: { label: "Idea clave", text: "La circularidad es un ciclo físico y un ciclo de información. Romper cualquiera de los dos dificulta la recuperación de alto valor." },
      deepDive: {
        title: "Trata la información del producto como parte del activo",
        paragraphs: [
          "La trazabilidad técnica permite que un futuro usuario sepa qué es un elemento, qué le ha ocurrido y qué puede ocurrir después de forma legal y segura. La información relevante puede incluir calidad del material, lote, tratamientos, recubrimientos, sustancias, ruta de fabricación, inspecciones, reparaciones, exposición operativa, configuración y usos aprobados. El registro exacto depende del producto y del sistema aplicable.",
          "Un pasaporte de material o producto es una forma de organizar datos, pero una etiqueta por sí sola no crea circularidad. La información debe seguir vinculada al elemento físico, utilizar vocabulario controlado, conservar unidades y versiones, sobrevivir a cambios organizativos y de programas informáticos y ser accesible para usuarios autorizados. Datos deficientes pueden crear falsa confianza y trasladar riesgo a equipos de mantenimiento o desmontaje.",
          "La información sobre sustancias es especialmente importante. Un componente heredado puede contener materiales restringidos, difíciles de manipular o incompatibles con una vía de recuperación propuesta. Conservar valor no puede significar recircular peligros sin control. Especialistas ambientales, de salud y seguridad, cumplimiento químico, ingeniería y residuos necesitan un punto común de decisión.",
          "La continuidad digital también tiene un coste y una necesidad de gobernanza. Los registros deben mantenerse durante un periodo relevante, protegerse frente a accesos inadecuados y revisarse cuando cambien los supuestos. El objetivo es disponer de información fiable suficiente para permitir una decisión futura, no recopilar datos ilimitados sin responsable."
        ],
        workedExample: "Un útil reutilizable se etiqueta con material, configuración, estado de inspección, cargas aprobadas e historial de reparaciones. Esto permite que otro programa evalúe su reutilización sin repetir cada ensayo ni aceptar un estado desconocido."
      },
      workedExample: "Un útil reutilizable se etiqueta con material, configuración, estado de inspección, cargas aprobadas e historial de reparaciones. Esto permite que otro programa evalúe su reutilización sin repetir cada ensayo ni aceptar un estado desconocido."
    },
    {
      label: "05 · Puntos críticos y calidad de datos",
      title: "Centra el esfuerzo donde datos y diseño pueden cambiar la conclusión",
      paragraphs: [
        "Un punto crítico es una etapa del ciclo de vida, proceso, material o supuesto que contribuye de forma material a una categoría de impacto o impulsa la comparación. El análisis de puntos críticos evita dedicar meses a refinar flujos insignificantes mientras un proceso dominante sigue representado por un dato indirecto deficiente. Puede utilizar conocimiento de ingeniería, balances de masa y energía, información de proveedores y bases de datos reconocidas antes de que exista un modelo completo.",
        "Las reglas de corte definen qué flujos se excluyen. Una masa pequeña no implica siempre un impacto pequeño: recubrimientos, electrónica, metales preciosos o sustancias peligrosas pueden ser significativos pese a su bajo peso. Los cortes deben considerar relevancia ambiental, no solo masa, y las exclusiones deben probarse durante la interpretación.",
        "Los datos primarios describen el proceso o proveedor real; los secundarios utilizan bases de datos o bibliografía representativas. Los datos primarios no son automáticamente mejores si están incompletos, no verificados o medidos en un periodo atípico. Los datos secundarios son útiles cuando su geografía, tecnología y antigüedad encajan con la decisión. Una matriz de calidad de datos hace visibles esas dimensiones.",
        "Elegir un dato indirecto es un juicio. El equipo debería explicar por qué un conjunto de datos es representativo, qué diferencias importantes quedan y cómo afecta la incertidumbre al resultado. Los datos indirectos conservadores pueden respaldar un análisis inicial, pero no deberían describirse como rendimiento preciso del proveedor. Actualizar los datos indirectos más críticos para la decisión crea más valor que sustituir todos los conjuntos genéricos.",
        "Los balances de masa y energía ayudan a detectar flujos ausentes. Las entradas deberían conciliar de manera plausible con producto, emisiones, aguas residuales, residuos y cambio de inventario. Grandes diferencias sin explicar pueden indicar lagunas de datos o errores de unidades. Un programa automatizado de ACV no protege frente a un modelo físico incoherente.",
        "El análisis de sensibilidad cambia un supuesto o una decisión metodológica cada vez; el análisis de escenarios cambia un conjunto coherente de condiciones futuras. Ambos ayudan a mostrar si la conclusión es robusta. Los resultados deberían identificar los supuestos que controlan la clasificación y la mejora de datos necesaria antes de la siguiente puerta de decisión."
      ],
      points: [
        "Analiza puntos críticos antes de perseguir un detalle exhaustivo.",
        "Evalúa los datos por geografía, tecnología, tiempo, exhaustividad y fiabilidad.",
        "Utiliza sensibilidad para orientar la siguiente inversión en evidencia."
      ],
      callout: { label: "Prioridad de datos", text: "Mejora los datos con mayor probabilidad de cambiar la decisión, no simplemente los más fáciles de obtener." },
      deepDive: {
        title: "Cuatro bandas de confianza",
        paragraphs: [
          "Un análisis práctico puede etiquetar los datos así: A, directos, verificados y representativos; B, directos o específicos del proveedor con verificación limitada; C, datos secundarios representativos; D, dato indirecto aproximado o supuesto. La etiqueta no sustituye la incertidumbre cuantitativa, pero ayuda a ver dónde se concentra la confianza.",
          "La confianza debe considerarse junto con la contribución. Un valor de baja calidad con contribución mínima puede ser menos urgente que un valor de calidad media que determina la conclusión."
        ]
      },
      workedExample: "Una comparación de materiales está dominada por la electricidad de una etapa de tratamiento térmico representada por un promedio continental. Los datos de energía y ubicación específicos del proveedor pasan a ser la primera prioridad de mejora."
    },
    {
      label: "06 · Diseño para larga vida en servicio",
      title: "Haz que durabilidad, mantenimiento, reparación y actualización formen parte del diseño ambiental",
      paragraphs: [
        "La durabilidad puede reducir sustituciones y demanda de fabricación, pero la vida máxima no siempre es óptima. Un componente duradero que bloquea una elevada carga operativa o impide una mejora puede rendir peor en el sistema. El diseño debería considerar vida requerida, degradación, mantenimiento, reparación, adaptabilidad y momento del cambio tecnológico.",
        "Fiabilidad, mantenibilidad y desempeño ambiental interactúan. Una inspección sencilla puede detectar antes los daños. Un acceso modular puede sustituir un subconjunto averiado en lugar de una unidad completa. Los elementos de fijación estándar pueden facilitar desmontaje, mientras que una unión permanente puede reducir masa pero complicar reparación y separación. La compensación necesita evidencia dentro de las restricciones técnicas.",
        "La reparabilidad se diseña mediante acceso, tolerancias, comportamiento del material, métodos aprobados, utillaje, capacidades, repuestos, documentación e inspección. Declarar un producto reparable carece de sentido si la reparación no puede realizarse en la red real de servicio o si faltan registros para aprobarla.",
        "La capacidad de actualización puede prolongar la vida útil al permitir que electrónica, programas, sensores o módulos funcionales evolucionen sin sustituir la plataforma completa. También puede generar retos de interfaces, ciberseguridad, configuración y obsolescencia. Una arquitectura modular requiere gobernanza a largo plazo, no solo conectores físicos.",
        "Las estrategias de mantenimiento influyen en materiales, energía, desplazamientos, residuos y disponibilidad. La sustitución programada es predecible, pero puede descartar vida remanente. El mantenimiento basado en condición puede conservar valor, pero añade sensorización y riesgo de decisión. Funcionar hasta el fallo puede ser adecuado para un elemento no crítico y fácilmente sustituible, pero inaceptable en otros casos. La comparación ambiental debe utilizar la estrategia técnica autorizada.",
        "Las revisiones de diseño deberían anticipar el conocimiento posterior. Mantenimiento, fabricación, suministro, medio ambiente, sustancias, calidad y especialistas en recuperación pueden identificar restricciones que un equipo de diseño no ve únicamente desde los requisitos de rendimiento. Las preguntas tempranas son más baratas que un rediseño tardío."
      ],
      points: [
        "Diseña conjuntamente acceso, documentación y reparación aprobada.",
        "Compara estrategias de mantenimiento dentro de las restricciones de seguridad y misión.",
        "Utiliza experiencia de fases posteriores antes de bloquear la arquitectura."
      ],
      callout: { label: "Pregunta de diseño", text: "¿Qué información, acceso, capacidades y proceso aprobado necesitará alguien para conservar esta función dentro de diez o veinte años?" },
      deepDive: {
        title: "Revisión de diseño de ciclo de vida",
        paragraphs: [
          "Para cada concepto, revisa intensidad de materiales, rendimiento de fabricación, sustancias de proceso, durabilidad, inspección, reparación, actualización, desmontaje, continuidad de datos y vías plausibles de final de vida. Registra dónde la evidencia es madura y dónde una puerta futura debe volver a revisar el supuesto.",
          "No todos los criterios pueden maximizarse. El valor de la revisión es exponer elecciones irreversibles y hacer deliberada la compensación."
        ]
      },
      workedExample: "Un cerramiento ligero unido mediante adhesivo ahorra masa, pero impide sustituir una pieza interna que falla con frecuencia. Una característica de acceso rediseñada añade una pequeña masa y evita sustituir repetidamente la unidad completa."
    },
    {
      label: "07 · Final de vida y materiales avanzados",
      title: "Planifica vías realistas de recuperación antes de que los materiales se conviertan en residuos",
      paragraphs: [
        "El final de vida es una cadena de decisiones: continuidad de uso, venta o transferencia, recuperación de piezas, reparación, reutilización con otra finalidad, desmontaje, recuperación de materiales, valorización energética y eliminación. La vía técnicamente posible puede no estar disponible en el lugar, escala o momento en que el elemento salga de servicio. Las afirmaciones de diseño deben distinguir potencial de laboratorio de una vía controlada y establecida.",
        "Los metales pueden conservar alta calidad material cuando las calidades permanecen segregadas y se controla la contaminación. Recubrimientos, elementos de fijación, aleaciones mezcladas y residuos de proceso pueden reducir el valor. La recuperación en circuito cerrado exige especificaciones, volúmenes, logística, aseguramiento de calidad y demanda del material recuperado. Que un gestor acepte el residuo no demuestra que el material vuelva a una aplicación aeroespacial equivalente.",
        "Los materiales compuestos reforzados con fibras combinan refuerzos valiosos con una matriz polimérica, pero son difíciles de separar. Las vías mecánicas, térmicas y químicas pueden recuperar distintas formas de material con diferente consumo energético y rendimiento. Diseñar con menos combinaciones de materiales, uniones accesibles y composición documentada puede mejorar opciones futuras, sujeto a requisitos técnicos.",
        "La electrónica contiene materiales críticos y preciosos junto con sustancias que requieren tratamiento controlado. Recuperar componentes puede conservar más función que triturarlos, pero obsolescencia, seguridad de datos, configuración, estado y controles de exportación pueden limitarlo. Son esenciales vías especializadas y autorizadas.",
        "Los residuos peligrosos no deben diluirse dentro de una historia circular. Contaminación superficial, aceites, combustibles, baterías, dispositivos pirotécnicos o sustancias reguladas pueden requerir descontaminación y manipulación específica antes de la recuperación. La seguridad de trabajadores y de fases posteriores forma parte del límite del ciclo de vida.",
        "Un plan de retirada de servicio debería identificar configuración y propiedad, contenido peligroso, seguridad de la información, desmontaje autorizado, requisitos de evidencia, verificación del destino y registros de resultados. Los planes necesitan revisión porque regulación, tecnología y mercados cambian durante largas vidas en servicio."
      ],
      points: [
        "Distingue reciclabilidad técnica de una vía disponible y verificada.",
        "Conserva segregación de materiales e información de composición.",
        "Incluye descontaminación, seguridad y protección de fases posteriores."
      ],
      callout: { label: "Comprobación de realidad", text: "¿Quién recuperará este material, con qué proceso, bajo qué especificación y en qué producto verificado se convertirá?" },
      deepDive: {
        title: "Evidencia de final de vida",
        paragraphs: [
          "Un registro robusto sigue el elemento o lote hasta el destino autorizado y documenta tratamiento y salida. Las tasas genéricas de desvío pueden ocultar almacenamiento, exportación, degradación de calidad o eliminación de residuos.",
          "La tecnología futura puede explorarse como escenario, pero las afirmaciones actuales deberían basarse en vías existentes que puedan demostrarse."
        ]
      },
      workedExample: "Un panel de material compuesto se etiqueta como «reciclable» porque existe una tecnología piloto. El proyecto revisa la redacción y la presenta como una vía de investigación hasta demostrar logística, escala, calidad recuperada y destino verificado."
    }
  ],
  visual: {
    title: "Cuatro fases de un Análisis de Ciclo de Vida",
    intro: "Las fases son iterativas: los resultados pueden llevar al equipo a volver atrás para ajustar alcance, datos o supuestos.",
    items: [
      { title: "Objetivo y alcance", text: "Finalidad, audiencia, unidad funcional, límite y método." },
      { title: "Inventario", text: "Entradas y salidas en todo el sistema de producto definido." },
      { title: "Evaluación de impactos", text: "Traduce los flujos en impactos ambientales potenciales." },
      { title: "Interpretación", text: "Comprueba exhaustividad, sensibilidad, limitaciones y conclusiones." }
    ]
  },
  caseStudy: {
    eyebrow: "Ejemplo aplicado · metal de calidad aeroespacial",
    title: "Un kilogramo de recortes puede contener cantidades muy diferentes de valor conservado",
    context: "Los recortes de mecanizado limpios, identificados y segregados pueden ser aptos para una recuperación de mayor calidad que el metal mezclado o contaminado. Una herramienta o útil desgastado puede conservar todavía más valor si una reparación controlada prolonga su uso de forma segura. El peso desviado de eliminación no muestra por sí solo cuánto valor de producto o material se ha conservado.",
    analysis: "Una medición más sólida separa prevención de residuos, prolongación de vida de producto, reutilización de componentes, recuperación de material en circuito cerrado o que conserva calidad, degradación de calidad y eliminación. También registra contaminación, transporte y procesado. Así se ve si el sistema simplemente mueve toneladas o realmente conserva valor."
  },
  scenario: {
    title: "Un útil alcanza su punto de sustitución planificado",
    brief: "Un útil de montaje de titanio presenta desgaste localizado. Ingeniería considera que una reparación podría prolongar su vida; compras puede adquirir uno nuevo; el gestor puede aceptar la aleación. Los registros están completos, pero la vía de reparación aún no está cualificada.",
    question: "¿Cuál es el siguiente paso circular más sólido?",
    options: [
      { text: "Reciclarlo inmediatamente porque reciclar metal cierra el ciclo.", feedback: "El reciclaje recupera material, pero destruye el valor de producto del útil antes de evaluar una prolongación segura de vida." },
      { text: "Seguir utilizándolo sin revisión porque prolongar la vida evita residuos.", feedback: "La circularidad no puede prevalecer sobre el estado técnico, la cualificación o los controles de seguridad." },
      { text: "Evaluar y, si es viable, cualificar la vía de reparación; conservar trazabilidad; comparar la prolongación de vida con la sustitución; reciclar solo cuando las vías seguras de mayor valor no sean adecuadas.", feedback: "Esto sigue la jerarquía de valor conservando requisitos de ingeniería y cumplimiento." },
      { text: "Comprar uno nuevo y conservar indefinidamente el útil desgastado como stock de contingencia.", feedback: "El inventario sin uso no es automáticamente valor conservado; puede generar cargas de almacenamiento, control y obsolescencia." }
    ]
  },
  checks: [
    { question: "¿Qué hace comparables dos opciones en un ACV?", options: ["Que tengan la misma masa.", "Que proporcionen la misma función definida en condiciones equivalentes.", "Que utilicen el mismo proveedor."], explanation: "La unidad funcional ancla una comparación justa." },
    { question: "¿Qué vía conserva normalmente más valor?", options: ["La opción segura y técnicamente viable más alta de la jerarquía.", "El reciclaje en todas las situaciones.", "La eliminación con valorización energética."], explanation: "La conservación de valor depende del contexto y está sujeta a seguridad, calidad y cumplimiento." },
    { question: "¿Por qué es importante la trazabilidad para la circularidad?", options: ["Hace reutilizable cualquier elemento.", "Conecta identidad, estado y uso permitido con el elemento físico.", "Elimina la necesidad de revisión técnica."], explanation: "La información permite decisiones de recuperación informadas y controladas; no sustituye la aprobación." }
  ],
  reflection: "Identifica un material, componente o consumible de tu área. ¿Qué vía segura de mayor valor podría evaluarse antes del reciclaje o la eliminación y qué registro sería esencial?",
  takeaway: "La circularidad aeroespacial conserva el mayor valor seguro combinando evidencia de ciclo de vida, juicio de ingeniería y trazabilidad.",
  explainers: [
    {
      title: "El ciclo iterativo del ACV",
      kicker: "Modelo interactivo 1 de 2",
      intro: "El Análisis de Ciclo de Vida no es un cálculo lineal. La interpretación puede llevar a revisar cualquiera de las fases.",
      items: [
        { title: "Objetivo y alcance", text: "Pregunta, audiencia, unidad funcional, límite, métodos y necesidades de datos.", detail: "Un alcance débil no se corrige más tarde con cálculos más precisos." },
        { title: "Inventario", text: "Entradas y salidas cuantificadas del sistema de producto.", detail: "Los balances y la procedencia revelan flujos ausentes o incoherentes." },
        { title: "Evaluación de impactos", text: "Relaciona los flujos del inventario con categorías de impacto ambiental potencial.", detail: "Los resultados dependen del modelo y no son mediciones directas del daño final." },
        { title: "Interpretación", text: "Comprueba exhaustividad, coherencia, sensibilidad, incertidumbre y conclusiones.", detail: "La interpretación determina qué respalda la evidencia y qué requiere revisión." }
      ]
    },
    {
      title: "La escala segura de conservación de valor",
      kicker: "Modelo interactivo 2 de 2",
      intro: "Avanza desde evitar la demanda hasta recuperar material, manteniendo como barreras la autorización técnica y la evidencia.",
      items: [
        { title: "Cuestionar la necesidad", text: "Evita material, procesado o sustitución innecesarios.", detail: "La prevención también evita cargas aguas arriba que las estadísticas de residuos no muestran." },
        { title: "Reducir y mantener", text: "Utiliza menos y conserva el rendimiento mediante cuidado e inspección.", detail: "No reduzcas material por debajo de una función segura y fiable." },
        { title: "Reparar y actualizar", text: "Conserva la función del producto o componente.", detail: "Requiere acceso, registros, métodos aprobados, piezas y competencia." },
        { title: "Reutilizar y remanufacturar", text: "Restaura o transfiere función con control de configuración y estado.", detail: "Un historial desconocido puede destruir valor funcional aunque permanezca el material." },
        { title: "Reutilizar con otra finalidad", text: "Utiliza el producto o componente para otra función adecuada.", detail: "Comprueba sustancias, rendimiento, propiedad y condiciones legales." },
        { title: "Reciclar", text: "Recupera calidad material mediante una vía disponible y verificada.", detail: "Comunica calidad recuperada y residuos, no solo aceptación." }
      ]
    }
  ],
  caseFile: {
      title: "Caso: ¿panel ligero o reparable?",
      subtitle: "Revisión ficticia de diseño con datos comparables",
      stages: [{"title":"1. Tu encargo y la comparación funcional","text":"Formas parte de una revisión preliminar de diseño aeronáutico. Debes recomendar la siguiente acción para dos paneles de acceso intercambiables que protegen la misma superficie y cumplen inicialmente la misma función durante una vida hipotética de 20 años. Ninguno está todavía liberado para producción. No tienes que elegir de forma definitiva el mejor panel: debes determinar qué evidencias hacen falta antes de congelar la arquitectura.","evidence":["Unidad funcional: un panel conforme durante 20 años","Ambos conceptos cumplen los requisitos iniciales","Cifras didácticas ficticias, no datos de productos Airbus"]},{"title":"2. Datos comparables y supuestos","text":"El concepto A pesa 8 kg, emplea una unión multimaterial y todavía no tiene demostrada una reparación parcial aprobada. El B pesa 8,5 kg y permite sustituir secciones, con un procedimiento de reparación aún pendiente de validar. Se estiman 120 kg CO₂e de fabricación para A y 135 kg CO₂e para B. Los 0,5 kg de diferencia de masa se traducen, por hipótesis, en una ventaja de 12 kg CO₂e para A durante 20 años de uso. Son valores supuestos del ejercicio.","evidence":["A: 8 kg y 120 kg CO₂e de fabricación","B: 8,5 kg y 135 kg CO₂e de fabricación","Ventaja estimada de A en uso: 12 kg CO₂e respecto a B"]},{"title":"3. Cómo cambia el resultado con una reparación","text":"Considera dos escenarios: sin daños en 20 años, y con una reparación. En el segundo, A requiere sustituir todo el panel (otros 120 kg CO₂e de fabricación estimados), mientras que B permite cambiar una sección (25 kg CO₂e estimados). Se excluyen por simplificación las emisiones operativas comunes y el final de vida idéntico; esta exclusión debe quedar registrada. Sin daños, A aventaja aproximadamente en 27 kg CO₂e a B (135 − 120 + 12). Con una reparación, B aventaja aproximadamente en 68 kg CO₂e a A (A: 120 + 120 − 12 = 228; B: 135 + 25 = 160).","evidence":["Sin daños: A obtiene mejor resultado climático estimado","Una reparación: B mejora unos 68 kg CO₂e respecto a A","Frecuencia de daño y reparación aprobada: aún sin verificar"]},{"title":"4. Decisión antes de congelar el diseño","text":"La recomendación defendible es mantener ambos diseños en evaluación, obtener datos representativos de daños y mantenimiento, comprobar la reparación autorizada y revisar los datos de fabricación y uso. También cabe investigar un diseño híbrido. No se puede hacer una afirmación global de sostenibilidad con este análisis climático parcial.","evidence":["Puerta de diseño: no bloquear una solución prematuramente","Responsables: ingeniería, mantenimiento y análisis de ciclo de vida","Verificar supuestos y otras categorías de efectos"]}],
      prompt: "Decisión que debes tomar: ¿aprobarías ahora A, aprobarías B o aplazarías la congelación del diseño? Justifica tu respuesta para los escenarios sin daños y con una reparación, e identifica tres evidencias necesarias para decidir.",
      decisionGuide: {"heading":"Solución de referencia y razonamiento","decision":"Aplazar la congelación del diseño y mantener ambas opciones abiertas. A solo es favorable en el escenario climático supuesto sin reparaciones; B pasa a ser favorable cuando hace falta una reparación.","reasons":["La ventaja inicial de A depende de la menor masa y del cálculo de fabricación, pero no representa por sí sola veinte años de servicio.","Con un daño hipotético, la sustitución completa lleva a A a 228 kg CO₂e estimados, frente a los 160 kg CO₂e de B. Estos valores no constituyen un ACV verificado.","Antes de elegir hay que validar la frecuencia real de daños, las reparaciones autorizadas, los datos de proveedores, la equivalencia funcional, otras categorías ambientales y el tratamiento al final de vida."]}
    },
  lab: {
    title: "Laboratorio de puntos críticos de ciclo de vida",
    intro: "Decide dónde crea más valor la siguiente hora dedicada a recopilar evidencia.",
    questions: [
      { question: "Un recubrimiento de baja masa domina los resultados de toxicidad, pero está representado por un dato indirecto genérico aproximado. ¿Qué debería priorizarse?", options: ["Ignorarlo porque su masa es baja.", "Mejorar los datos de composición y proceso del recubrimiento y después probar la sensibilidad.", "Refinar los datos de papel de oficina.", "Comunicar solo cambio climático."], explanation: "La contribución y la baja confianza hacen que el recubrimiento sea crítico para la decisión pese a su baja masa." },
      { question: "Dos materiales se comparan por kilogramo, pero requieren distinto espesor y distintas tasas de sustitución. ¿Qué falta?", options: ["Un proveedor común.", "Una unidad funcional equivalente y un escenario de servicio.", "Un logotipo de reciclaje.", "Un informe más corto."], explanation: "La masa por sí sola no representa la función prestada." },
      { question: "Un componente es aceptado por un gestor de reciclaje. ¿Qué conclusión es válida?", options: ["Se recicla en circuito cerrado.", "Es residuo cero.", "Existe una vía de recuperación que lo acepta; todavía hacen falta evidencias sobre calidad de salida, residuos y destino final.", "No debería repararse."], explanation: "La aceptación no demuestra el resultado del tratamiento ni el valor conservado." },
      { question: "¿Qué pregunta de revisión de diseño apoya más directamente una reparación futura?", options: ["¿El folleto menciona circularidad?", "¿Puede accederse a la función, diagnosticarla y restaurarla con métodos aprobados, registros, piezas y competencia?", "¿Es caro el componente?", "¿Puede pintarse de verde?"], explanation: "La reparabilidad es un sistema de acceso físico, información, autorización y capacidad." }
    ]
  },
  tool: {
    title: "Análisis de puntos críticos de ciclo de vida",
    description: "Compara etapas, cuestiones ambientales, confianza de datos e influencia del diseño.",
    headers: ["Etapa del ciclo de vida", "Proceso o material", "Impacto o dependencia potencial", "Contribución", "Confianza de datos A-D", "Influencia del diseño", "Siguiente acción de evidencia"],
    rows: [
      ["Materia prima", "", "", "", "", "", ""],
      ["Fabricación", "", "", "", "", "", ""],
      ["Suministro y logística", "", "", "", "", "", ""],
      ["Operación", "", "", "", "", "", ""],
      ["Mantenimiento y actualización", "", "", "", "", "", ""],
      ["Final de vida", "", "", "", "", "", ""]
    ]
  },
  assessmentQuestions: [
    { question: "¿Qué hace comparables dos opciones en un ACV?", options: ["Que tengan la misma masa.", "Que proporcionen la misma función definida en condiciones equivalentes.", "Que utilicen el mismo proveedor."], explanation: "La unidad funcional ancla una comparación justa." },
    { question: "¿Qué vía conserva normalmente más valor?", options: ["La opción segura y técnicamente viable más alta de la jerarquía.", "El reciclaje en todas las situaciones.", "La eliminación con valorización energética."], explanation: "La conservación de valor depende del contexto y está sujeta a seguridad, calidad y cumplimiento." },
    { question: "¿Por qué es importante la trazabilidad para la circularidad?", options: ["Hace reutilizable cualquier elemento.", "Conecta identidad, estado y uso permitido con el elemento físico.", "Elimina la necesidad de revisión técnica."], explanation: "La información permite decisiones de recuperación informadas y controladas; no sustituye la aprobación." },
    { question: "¿Cuál es la finalidad principal de una unidad funcional?", options: ["Expresar el precio de compra.", "Proporcionar una función cuantificada equivalente para la comparación.", "Eliminar toda incertidumbre."], explanation: "Las alternativas deben prestar una función comparable antes de comparar impactos." },
    { question: "¿Por qué una entrada de baja masa puede seguir siendo significativa?", options: ["La masa siempre determina el impacto.", "La toxicidad, los materiales escasos o un procesado intensivo en energía pueden hacer material su contribución.", "No puede serlo."], explanation: "La relevancia ambiental no es proporcional a la masa en todas las categorías." },
    { question: "¿Qué describe mejor un resultado de ACV?", options: ["Una prueba sin contexto de sostenibilidad global.", "Un indicador dependiente del método sobre impactos potenciales dentro de un objetivo y alcance definidos.", "Una medición directa del daño al ecosistema."], explanation: "La interpretación debe seguir vinculada al objetivo, alcance, datos y método." },
    { question: "¿Cuándo es la reparación una estrategia circular creíble?", options: ["Siempre que un componente sea caro.", "Cuando estado, configuración, registros, método aprobado y rendimiento la respaldan.", "Siempre que el reciclaje no esté disponible."], explanation: "Conservar valor funcional exige evidencia técnica y autorización." },
    { question: "¿Qué aporta el análisis de sensibilidad?", options: ["Oculta las decisiones metodológicas.", "Comprueba si supuestos o decisiones importantes cambian la conclusión.", "Garantiza exactitud de los datos."], explanation: "La sensibilidad ayuda a evaluar robustez y priorizar evidencia." }
  ],
  briefing: {
    title: "Por qué la industria aeroespacial necesita profundidad de ciclo de vida",
    paragraphs: [
      "Los productos y sistemas de apoyo aeroespaciales combinan prestaciones exigentes, materiales especializados, procesos regulados, largas vidas en servicio y mantenimiento complejo. Estas características hacen especialmente valioso el pensamiento de ciclo de vida y especialmente fácil simplificarlo en exceso. Una reducción de masa, una afirmación de contenido reciclado o un material nuevo no pueden juzgarse desde una única etapa o atributo.",
      "Las primeras decisiones de diseño determinan combinaciones de materiales, uniones, inspección, reparación, actualización y separación. Los equipos posteriores heredan esas decisiones y pueden tener poca libertad para cambiarlas. Por ello, el análisis inicial de ciclo de vida crea valor antes de que los datos detallados sean perfectos: identifica decisiones irreversibles, funciones ausentes y la evidencia que debe llegar a futuras puertas.",
      "El Análisis de Ciclo de Vida aporta un marco cuantitativo formal, pero no toda decisión necesita un estudio completo. El módulo distingue análisis inicial, huella y ACV comparativo para que el nombre del método corresponda al trabajo realizado. También explica por qué equivalencia funcional, asignación, calidad de datos y sensibilidad pueden importar más que el número de decimales del resultado.",
      "La circularidad se trata como conservación segura de valor, no como eslogan de reciclaje. Prevención, mantenimiento, reparación, reutilización y remanufactura pueden conservar más función, pero cada opción depende de estado, configuración, documentación, uso autorizado y operaciones viables. Las vías de final de vida deben ser suficientemente reales para poder verificarse, no solo técnicamente imaginables.",
      "Al completar el módulo deberías poder mapear un ciclo de vida, identificar puntos críticos y lagunas de confianza, exigir función equivalente y cuestionar una afirmación de circularidad sin suponer que el material más nuevo o la mayor tasa de reciclaje sean automáticamente preferibles."
    ]
  },
  misconceptions: [
    { myth: "El material más ligero siempre tiene el menor impacto de ciclo de vida.", correction: "La masa importa, especialmente cuando afecta a la operación, pero rendimiento de fabricación, energía, sustancias, durabilidad, reparación, sustitución y vía de final de vida pueden cambiar el resultado. Compara una función equivalente en un escenario representativo de servicio y muestra qué supuestos impulsan la clasificación." },
    { myth: "Reciclable significa circular.", correction: "La reciclabilidad técnica es solo una condición. Recogida, segregación, escala, tratamiento autorizado, calidad recuperada, demanda y residuos determinan la vía real. Prevención, mantenimiento, reparación y reutilización pueden conservar más valor cuando son seguras y están técnicamente autorizadas." },
    { myth: "Se necesita un ACV completo antes de cualquier decisión de ciclo de vida.", correction: "El análisis inicial de ciclo de vida puede exponer pronto etapas, transferencias y decisiones irreversibles de diseño. Un ACV completo es adecuado cuando la decisión y la afirmación requieren profundidad cuantitativa. El método debe ser proporcionado y denominarse con precisión, sin exagerarlo." }
  ]
};
