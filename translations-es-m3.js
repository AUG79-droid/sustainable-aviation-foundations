window.FOUNDATIONS_ES_PATCHES = window.FOUNDATIONS_ES_PATCHES || {};
window.FOUNDATIONS_ES_PATCHES.m3 = {
  short: "Digital",
  title: "Innovación digital y evidencia ambiental",
  strapline: "Utiliza datos y modelos para mejorar el juicio, sin ocultar sus límites.",
  alt: "Una persona especialista utiliza observación de la Tierra y datos industriales en un entorno de control de misión de Defence and Space.",
  supportAlt: "Ingenieros utilizan conjuntamente modelos digitales y componentes físicos en un taller aeroespacial.",
  secondaryAlt: "Una persona especialista utiliza observación de la Tierra y datos industriales en un entorno de control de misión de Defence and Space.",
  promise: "Evaluar la procedencia de los datos, la adecuación de los modelos, la supervisión de la Inteligencia Artificial y la huella ambiental de las decisiones digitales.",
  coreQuestion: "¿Cuándo mejora un resultado digital una decisión de sostenibilidad y cuándo genera falsa confianza?",
  objectives: [
    "Evaluar si los datos ambientales son adecuados para la decisión.",
    "Distinguir una predicción de modelo de la realidad observada.",
    "Aplicar supervisión humana proporcionada a recomendaciones apoyadas por IA."
  ],
  lessons: [
    {
      label: "01 · Adecuación de los datos",
      title: "Más datos no equivalen a mejor evidencia",
      paragraphs: [
        "Un cuadro de mando puede hacer que datos débiles parezcan autoritativos. Antes de utilizar una cifra ambiental, pregunta de dónde procede, qué representa, cómo se ha transformado y quién es responsable. La procedencia de datos es la cadena documentada desde la fuente hasta el resultado. Ayuda a comprender si una cifra está medida, calculada, estimada o importada de otro contexto.",
        "La adecuación a la finalidad importa más que una perfección abstracta. La electricidad mensual de un emplazamiento puede servir para una tendencia general, pero no para comparar dos ensayos cortos de producción. Un promedio de proveedor puede servir para un análisis inicial, pero no para una afirmación pública específica de producto. Datos espaciales a escala regional pueden no describir el estado del hábitat de una parcela concreta.",
        "Las dimensiones de calidad incluyen exhaustividad, exactitud, actualidad, coherencia, representatividad y trazabilidad. Las dimensiones relevantes dependen de la decisión. Por eso, un plan de datos útil empieza por la pregunta, no por el cuadro de mando disponible."
      ],
      points: [
        "Rastrea la cifra hasta su fuente y sus reglas de transformación.",
        "Ajusta la resolución espacial, temporal y técnica a la decisión.",
        "Distingue datos ausentes de un valor real igual a cero."
      ],
      callout: { label: "Señal de alerta", text: "Una cifra de apariencia precisa sin fuente, límite, responsable ni fecha de actualización no es evidencia sólida." },
      deepDive: {
        title: "Diseña una cadena de evidencia antes de construir un cuadro de mando",
        paragraphs: [
          "Una herramienta digital es útil cuando mejora una decisión, un control o un ciclo de aprendizaje. Empezar por los datos disponibles suele producir cuadros de mando visualmente atractivos pero desconectados de la acción. El diseño debe comenzar por la decisión y después identificar indicadores, resolución, latencia, responsabilidad y respuesta necesarios. Solo entonces debería el equipo seleccionar sensores, sistemas y modelos.",
          "La calidad de los datos depende del contexto. Una factura mensual puede ser suficiente para una tendencia del emplazamiento, pero demasiado gruesa para diagnosticar un proceso. Un sensor de alta frecuencia puede detectar patrones, pero puede derivar, perder calibración o medir un indicador indirecto en lugar del resultado ambiental. Exhaustividad, representatividad, actualidad, coherencia y procedencia deben evaluarse frente al uso previsto.",
          "La cadena desde el suceso físico hasta la acción de gestión contiene múltiples transformaciones: detección, transmisión, limpieza, agregación, conversión, modelización, visualización e interpretación. Cada paso puede introducir error o sesgo. Un registro de linaje debería mostrar fuente, unidad, sello temporal, transformación, responsable y controles de calidad para poder investigar un resultado inesperado.",
          "Más datos pueden aumentar la carga ambiental y la complejidad operativa. Dispositivos, redes, almacenamiento, cálculo y mantenimiento consumen recursos. La respuesta no es evitar la digitalización, sino recopilar y conservar datos con una finalidad definida, resolución adecuada y plan de ciclo de vida."
        ],
        workedExample: "Un proyecto de aire comprimido define primero las decisiones: localizar fugas persistentes, priorizar reparaciones y verificar ahorros. La arquitectura combina un contador principal, submedición temporal y registros de inspección en lugar de instalar sensores permanentes en todas partes."
      },
      workedExample: "Un proyecto de aire comprimido define primero las decisiones: localizar fugas persistentes, priorizar reparaciones y verificar ahorros. La arquitectura combina un contador principal, submedición temporal y registros de inspección en lugar de instalar sensores permanentes en todas partes."
    },
    {
      label: "02 · Modelos y gemelos digitales",
      title: "Un modelo es una simplificación con una finalidad",
      paragraphs: [
        "Los modelos ayudan a explorar relaciones, comparar escenarios y probar condiciones costosas o imposibles de observar directamente. Un gemelo digital puede combinar geometría, reglas de ingeniería, datos de sensores y supuestos operativos. Su valor depende de hasta qué punto el uso previsto del modelo coincide con la decisión que se toma.",
        "Todo modelo tiene un límite y un dominio de validez. Puede funcionar bien en operación normal y mal ante cargas inusuales, condiciones climáticas cambiantes o un nuevo proceso de proveedor. La calibración compara el modelo con observaciones; la validación comprueba si es suficientemente exacto para el uso previsto. Ninguna de las dos convierte el modelo en realidad.",
        "Los modelos de sostenibilidad pueden amplificar la incertidumbre porque sus resultados combinan múltiples conjuntos de datos y supuestos. Los equipos deberían inspeccionar los factores que impulsan el resultado, ejecutar pruebas de sensibilidad y comparar predicciones con resultados supervisados. Una puntuación única puede ser cómoda, pero también ocultar compensaciones importantes."
      ],
      points: [
        "Declara el uso previsto y las condiciones en las que el modelo es válido.",
        "Muestra las variables que impulsan el resultado.",
        "Cierra el ciclo con resultados observados y actualizaciones del modelo."
      ],
      callout: { label: "Disciplina del modelo", text: "Los modelos útiles apoyan una decisión y muestran la incertidumbre; no eliminan la necesidad de juicio responsable." },
      deepDive: {
        title: "Separa el rendimiento predictivo del rendimiento de la decisión",
        paragraphs: [
          "Un modelo simplifica la realidad para una finalidad. Su rendimiento depende de datos de entrenamiento, variables, supuestos y condiciones de uso. Un error medio bajo puede ocultar un rendimiento deficiente en modos operativos poco frecuentes pero importantes. Por ello, la validación debe reflejar la consecuencia de la decisión, no solo una métrica estadística cómoda.",
          "La correlación no demuestra causalidad. Un modelo puede predecir un alto consumo energético a partir de la temperatura exterior sin explicar qué intervención lo reducirá. Actuar sobre una variable correlacionada puede fallar o causar efectos adversos. Al pasar de predicción a control, los equipos deberían combinar conocimiento de dominio, experimentos y razonamiento causal.",
          "La deriva del modelo se produce cuando cambian equipos, procesos, productos, comportamientos o el entorno. El seguimiento debería comparar las nuevas entradas con el dominio de validez del modelo y las predicciones con los resultados observados. Un calendario de reentrenamiento no basta; se necesitan desencadenantes de revisión, comportamiento de respaldo y control de versiones.",
          "El rendimiento de la decisión incluye falsos positivos, falsos negativos, retraso, carga de trabajo, coste de oportunidad y efectos no deseados. El mejor umbral no es automáticamente el de mayor exactitud. Depende de las consecuencias de no detectar un problema real y de actuar ante una falsa alarma."
        ],
        workedExample: "Un modelo de mantenimiento predictivo reduce las estimaciones de paradas no planificadas, pero genera muchas intervenciones prematuras. La evaluación añade consumo de componentes, tiempo de técnicos, transporte y riesgo de fallo no detectado antes de seleccionar un umbral de alerta."
      },
      workedExample: "Un modelo de mantenimiento predictivo reduce las estimaciones de paradas no planificadas, pero genera muchas intervenciones prematuras. La evaluación añade consumo de componentes, tiempo de técnicos, transporte y riesgo de fallo no detectado antes de seleccionar un umbral de alerta."
    },
    {
      label: "03 · Inteligencia Artificial",
      title: "La supervisión humana debe ser real, no ceremonial",
      paragraphs: [
        "La Inteligencia Artificial (IA) puede identificar patrones, prever demanda, optimizar secuencias o clasificar imágenes. Su resultado refleja datos de entrenamiento, diseño del modelo, objetivos y condiciones de implantación. Un modelo de alto rendimiento puede seguir siendo inadecuado si los datos excluyen situaciones relevantes, el objetivo de optimización es demasiado estrecho o los usuarios no pueden reconocer cuándo la recomendación queda fuera de su contexto válido.",
        "El marco de Inteligencia Artificial de la Unión Europea destaca elementos como gobernanza de datos, documentación, transparencia, supervisión humana, robustez y seguridad para los sistemas pertinentes. En la práctica, supervisión humana significa que una persona competente puede comprender el uso previsto, cuestionar el resultado, detectar anomalías, anular o detener el sistema y seguir siendo responsable de la decisión.",
        "El nivel de control debe reflejar la consecuencia. Una herramienta de IA que sugiera dónde investigar pérdidas energéticas puede gestionarse de forma distinta a otra que influya en mantenimiento relevante para la seguridad. El beneficio ambiental no justifica una gobernanza débil y la novedad técnica no demuestra valor."
      ],
      points: [
        "Define qué decisión puede apoyar la IA y qué decisiones no puede tomar.",
        "Proporciona a las personas revisoras información suficiente para cuestionar una recomendación.",
        "Supervisa deriva, resultados inesperados y cambios del contexto operativo."
      ],
      callout: { label: "Humano con control real", text: "La supervisión solo es significativa cuando la persona revisora dispone de competencia, tiempo, autoridad e información para intervenir." },
      deepDive: {
        title: "Haz que la supervisión humana pueda cambiar el resultado",
        paragraphs: [
          "La supervisión humana solo es significativa cuando la persona revisora dispone de tiempo, competencia, información y autoridad para cuestionar el sistema. Una persona que solo ve una recomendación sin supuestos, confianza ni alternativas puede convertirse en un aprobador ceremonial. El diseño de la interfaz debe mostrar lo relevante para el juicio sin saturar al usuario.",
          "El sesgo de automatización puede llevar a favorecer la salida del sistema incluso cuando existe evidencia contradictoria. El riesgo opuesto es el rechazo al algoritmo después de un error visible. La formación debe explicar finalidad, limitaciones y vía de escalado. Ejercicios periódicos con casos límite pueden comprobar si los usuarios saben cuándo confiar, cuestionar o detener el sistema.",
          "La responsabilidad no puede delegarse en un algoritmo. Responsable de producto, responsable de datos, responsable de modelo, responsable de proceso y autoridad final de decisión pueden ser funciones distintas. Las responsabilidades de validación, aprobación, seguimiento, gestión de incidentes y retirada deben quedar explícitas. El Reglamento de Inteligencia Artificial de la Unión Europea utiliza un marco basado en riesgo; la aplicabilidad y las obligaciones deben evaluarse mediante los procesos legales y de gobernanza aprobados.",
          "La optimización ambiental puede afectar a personas y prioridades operativas. Una herramienta de planificación puede desplazar carga de trabajo, crear presión insegura o perjudicar a equipos cuyo contexto esté mal representado. Un diseño responsable incluye a usuarios afectados en las pruebas y supervisa efectos distributivos, no solo la eficiencia total."
        ],
        workedExample: "Una herramienta de optimización propone retrasar una acción de mantenimiento para reducir consumo de piezas. La interfaz muestra confianza, restricciones técnicas, antigüedad de los datos y escenarios alternativos; un ingeniero autorizado puede rechazar la propuesta y registrar el motivo."
      },
      workedExample: "Una herramienta de optimización propone retrasar una acción de mantenimiento para reducir consumo de piezas. La interfaz muestra confianza, restricciones técnicas, antigüedad de los datos y escenarios alternativos; un ingeniero autorizado puede rechazar la propuesta y registrar el motivo."
    },
    {
      label: "04 · La huella de lo digital",
      title: "Las herramientas digitales también consumen recursos",
      paragraphs: [
        "Sensores, redes, almacenamiento, cálculo y dispositivos requieren energía, materiales e infraestructura. Por tanto, una solución digital debe evaluarse tanto por el beneficio que permite como por su propia carga. La pregunta relevante no es si la digitalización es buena o mala, sino si la arquitectura seleccionada es proporcionada al problema y ofrece un valor supervisado.",
        "Una red de sensores de alta frecuencia puede revelar pérdidas que de otro modo no podrían gestionarse, pero recopilar y conservar indefinidamente todas las variables posibles puede añadir coste y consumo de recursos sin mejorar decisiones. El equipo puede analizar minimización de datos, frecuencia de muestreo, conservación, tamaño del modelo, reutilización de infraestructura existente y carga operativa evitada.",
        "Un proyecto digital creíble define línea de base, resultado pretendido y punto de revisión. Si la herramienta no cambia decisiones o rendimiento, la organización puede estar recopilando datos en lugar de crear capacidad."
      ],
      points: [
        "Recopila los datos necesarios para un caso de uso claro.",
        "Compara el beneficio permitido con la carga de cálculo, almacenamiento y equipos.",
        "Retira o rediseña las herramientas que no mejoren las decisiones."
      ],
      callout: { label: "Prueba de valor", text: "¿Qué decisión cambiará esta capacidad digital y cómo sabremos que el cambio produjo un beneficio neto?" },
      deepDive: {
        title: "Evalúa la huella y la vida útil de la solución digital",
        paragraphs: [
          "Los sistemas digitales requieren equipos, materiales, energía, refrigeración, redes y sustituciones. Su huella depende de arquitectura, utilización, contexto eléctrico, vida del equipo y actividades evitadas. Una afirmación de beneficio ambiental de una herramienta digital debe comparar la carga añadida con impactos evitados medidos o creíbles dentro de un límite explícito.",
          "La eficiencia puede provocar rebote. Un análisis más rápido puede fomentar más simulaciones; una supervisión más sencilla puede llevar a instalar sensores sin un uso de decisión; un cálculo más barato puede aumentar la demanda total. Los equipos deberían seguir el consumo absoluto y definir reglas de conservación, renovación y apagado.",
          "Las decisiones de arquitectura importan. El procesamiento en el extremo puede reducir transferencia de datos, pero aumentar hardware distribuido. Los servicios en la nube pueden compartir infraestructura eficiente, pero añadir transmisión y reducir la visibilidad sobre métodos de asignación. Modelos más pequeños pueden proporcionar rendimiento suficiente con menos cálculo. La elección preferida depende de seguridad, latencia, fiabilidad, rendimiento y evidencia ambiental.",
          "La retirada debería diseñarse desde el principio. Una herramienta necesita criterios de continuidad de valor, desmantelamiento, conservación de datos, recuperación de equipos y transferencia de registros esenciales. De lo contrario, un piloto puede convertirse en una capa permanente de infraestructura no utilizada y deuda técnica sin gestionar."
        ],
        workedExample: "Un piloto de clasificación de residuos mediante visión artificial registra rendimiento del modelo, clasificaciones rechazadas, uso de servidor, equipos de cámara y mejora real de recuperación. La ampliación queda condicionada al valor neto, no a la novedad técnica."
      },
      workedExample: "Un piloto de clasificación de residuos mediante visión artificial registra rendimiento del modelo, clasificaciones rechazadas, uso de servidor, equipos de cámara y mejora real de recuperación. La ampliación queda condicionada al valor neto, no a la novedad técnica."
    },
    {
      label: "05 · Arquitectura de medición",
      title: "Construye información fiable desde el sensor hasta la decisión",
      paragraphs: [
        "La medición empieza con un mensurando: la magnitud que se pretende medir. Los equipos deberían definir magnitud, unidad, ubicación, resolución temporal, condición operativa e incertidumbre requerida. «Consumo energético del proceso» es ambiguo si el límite excluye refrigeración compartida, espera o aire comprimido aguas arriba. Un plan de medida hace explícito el límite físico.",
        "Los sensores tienen rango, exactitud, resolución, deriva y límites ambientales. La ubicación de instalación y la frecuencia de muestreo pueden importar tanto como la especificación. La calibración establece la relación con una referencia en condiciones definidas; la verificación comprueba el rendimiento continuado. Mantenimiento y detección de fallos pertenecen a la arquitectura de datos.",
        "Los datos de contexto hacen interpretables las mediciones ambientales. Tipo de producto, producción aceptada, horas de operación, meteorología, turno, estado de mantenimiento y ajustes de control pueden explicar la variación. Unir conjuntos de datos exige marcas temporales, identificadores y definiciones coherentes. De lo contrario, un modelo sofisticado puede aprender errores de alineación.",
        "Los datos ausentes necesitan reglas. La interpolación automática puede ser razonable para lagunas cortas y estables y engañosa durante una parada o condición anormal. El sistema debería marcar la imputación, conservar datos originales y mostrar cobertura. Los usuarios deben saber cuándo una tendencia depende en gran medida de valores estimados.",
        "La validación de datos combina comprobaciones automáticas y humanas: rango, velocidad de cambio, balance, duplicación, fecha y hora, unidad, suceso operativo conocido y comparación con una fuente independiente. Las excepciones deberían crear un flujo de trabajo con responsable, no desaparecer en un registro técnico.",
        "Una arquitectura de medición debe ser proporcionada. Las campañas temporales pueden responder preguntas diagnósticas. La medición permanente se justifica cuando la decisión se repite, el valor es material y existe financiación para mantenimiento. Cada punto necesita responsable y regla de retirada."
      ],
      points: [
        "Define el mensurando y el límite físico.",
        "Conserva datos originales, indicadores de calidad y procedencia.",
        "Financia calibración, mantenimiento y gestión de excepciones."
      ],
      callout: { label: "Regla de arquitectura", text: "Ningún sensor permanente sin una decisión nombrada, responsable de datos, plan de mantenimiento y respuesta ante valores anómalos." },
      deepDive: {
        title: "De datos brutos a datos fiables",
        paragraphs: [
          "Documenta fuente, instalación, calibración, adquisición, conversión de unidades, indicadores de calidad, agregación, almacenamiento y visualización. Asigna responsable en cada transición en la que pueda cambiar el significado.",
          "Utiliza conciliación con facturas o balances como comprobación, reconociendo que distintos límites y periodos pueden impedir una coincidencia exacta."
        ]
      },
      workedExample: "Un contador de agua muestra consumo constante durante la noche. Antes de declarar una fuga, el equipo comprueba sello temporal, resolución del contador, programa de limpieza, llenado de depósitos y comportamiento de transmisión de datos."
    },
    {
      label: "06 · Ciclo de vida y uso de recursos de la IA",
      title: "Evalúa la Inteligencia Artificial como un sistema sociotécnico completo",
      paragraphs: [
        "Un sistema de Inteligencia Artificial tiene un ciclo de vida: definición del problema, recopilación de datos, desarrollo, validación, implantación, seguimiento, cambio y retirada. La revisión ambiental debería producirse en cada etapa. La pregunta central es si la IA es necesaria y proporcionada para la decisión; una regla, un modelo estadístico o un cambio de proceso más sencillos pueden ofrecer rendimiento suficiente con menor complejidad.",
        "Los datos de entrenamiento incorporan condiciones y decisiones históricas. Lagunas de muestreo, calidad de etiquetas, desequilibrio de clases y variables indirectas pueden producir errores sistemáticos. En contextos industriales, estados anormales poco frecuentes pueden ser precisamente los de mayor consecuencia. Los conjuntos de validación deberían representar la operación prevista y condiciones límite conocidas.",
        "El uso de recursos incluye experimentos de desarrollo, entrenamiento, inferencia, almacenamiento, red y hardware. Las estimaciones públicas de carbono de la nube pueden variar por asignación, ubicación y tiempo. Los equipos deberían utilizar de forma prudente la evidencia disponible de proveedores e interna, registrar supuestos y centrarse en decisiones de diseño: tamaño del modelo, reutilización, frecuencia, conservación y vida del hardware.",
        "El beneficio ambiental debe medirse a nivel del sistema. Un modelo que predice demanda energética no es por sí mismo un ahorro energético. El ahorro se produce únicamente cuando una acción autorizada cambia la operación y el resultado se verifica frente a una línea de base creíble. Rebote, mantenimiento adicional y trabajo desplazado forman parte de la comparación.",
        "El seguimiento debería cubrir rendimiento técnico, deriva de datos, comportamiento de usuarios, incidentes, uso de recursos y resultado ambiental. Reentrenar puede mejorar exactitud, pero también introducir nuevo comportamiento y más cálculo. Los cambios materiales necesitan revisión y control de versiones.",
        "Los criterios de retirada protegen frente a pilotos permanentes. Si cambia el proceso, se debilita la evidencia, disminuye el uso o el beneficio deja de superar la carga, el sistema debería adaptarse o retirarse. Los registros y decisiones esenciales deben seguir accesibles después de la desconexión."
      ],
      points: [
        "Pregunta si la IA es necesaria y proporcionada.",
        "Mide el resultado operativo, no solo la exactitud del modelo.",
        "Define seguimiento, revisión de cambios materiales y retirada."
      ],
      callout: { label: "Ecuación de beneficio", text: "Carga evitada verificada − carga digital añadida − rebote y efectos transferidos, evaluados dentro de un límite explícito." },
      deepDive: {
        title: "Paquete mínimo de evidencia de IA",
        paragraphs: [
          "Incluye uso previsto, uso prohibido, descripción de datos, validación por condición operativa, consecuencias de error, supervisión humana, seguridad, estimación de recursos, línea de base de resultado, seguimiento e historial de cambios.",
          "El paquete debería ser comprensible para el responsable del proceso, no solo para el equipo de desarrollo."
        ]
      },
      workedExample: "Una herramienta de IA para planificación afirma reducir un 6 % la energía. La verificación separa meteorología y carga de trabajo, comprueba tareas retrasadas y horas extraordinarias, mide uso de servidor y confirma que los operadores siguieron realmente las recomendaciones."
    },
    {
      label: "07 · Gobernanza y derechos de decisión",
      title: "Asigna responsables y límites seguros a las herramientas digitales de sostenibilidad",
      paragraphs: [
        "La gobernanza define quién puede decidir, aprobar, operar, cuestionar y detener un sistema. Una herramienta de sostenibilidad puede afectar a producción, mantenimiento, personas, proveedores y reporte, por lo que la responsabilidad rara vez pertenece a una sola función. Los roles deben cubrir finalidad de negocio, datos, modelo o reglas, plataforma técnica, proceso, método ambiental, seguridad y autoridad final de decisión.",
        "La declaración de uso previsto fija el límite. Identifica usuarios, decisiones, condiciones operativas, entradas, salidas, limitaciones conocidas y usos prohibidos. Reutilizar un modelo o cuadro de mando para otro emplazamiento o decisión sin revisión puede invalidar la evidencia aunque la interfaz siga funcionando.",
        "El control de acceso, la ciberseguridad y la protección de la información son necesarios para decisiones ambientales fiables. Datos manipulados, obsoletos o compartidos indebidamente pueden generar consecuencias operativas y legales. La información de Defence and Space puede tener requisitos adicionales de seguridad o control de exportaciones; los empleados deben seguir los sistemas aprobados y el asesoramiento especializado. Este curso no define esos controles.",
        "El control de cambios distingue mantenimiento rutinario de un cambio material. Una nueva fuente de datos, umbral, algoritmo, grupo de usuarios o contexto operativo puede requerir revalidación y aprobación. Un historial de versiones debería conectar el cambio con las pruebas y la decisión de lanzamiento para que los resultados históricos sigan siendo interpretables.",
        "La gestión de incidentes debería incluir recomendaciones incorrectas, fallos de calidad de datos, sistemas no disponibles, uso inadecuado y resultados ambientales u operativos inesperados. Los usuarios necesitan una vía visible de comunicación y un modo seguro de respaldo. El aprendizaje posterior al incidente debería actualizar diseño, seguimiento y formación.",
        "El aseguramiento tiene capas. Las pruebas de desarrollo comprueban comportamiento técnico; la revisión independiente cuestiona método y evidencia; los responsables de proceso validan usabilidad; las auditorías examinan controles y registros. El nivel debe corresponder a la consecuencia. La gobernanza debería facilitar innovación útil evitando automatización sin respaldo."
      ],
      points: [
        "Publica usos previstos y prohibidos.",
        "Vincula cambios materiales con revalidación y aprobación.",
        "Proporciona vías de incidente, respaldo y parada."
      ],
      callout: { label: "Derecho de decisión", text: "La persona responsable de la decisión operativa debe poder comprender y anular la recomendación digital dentro de una autoridad definida." },
      deepDive: {
        title: "RACI es solo el comienzo",
        paragraphs: [
          "Un mapa de Responsable, Aprobador, Consultado e Informado ayuda a aclarar participación, pero la gobernanza también necesita competencia, evidencia, escalado y tiempo para actuar.",
          "Revisa el mapa después de cambios organizativos. Un responsable nombrado que ya no ocupa el puesto no es un control."
        ]
      },
      workedExample: "El cálculo de un cuadro de mando cambia de datos medidos a estimados tras una migración de sistema. Se etiqueta la versión, se revisa la interpretación de la tendencia y se avisa a usuarios en lugar de presentar silenciosamente una serie continua."
    }
  ],
  visual: {
    title: "De la señal a la acción responsable",
    intro: "Cada transición puede introducir error, sesgo o pérdida de contexto. Revisa la cadena completa, no solo el cuadro de mando.",
    items: [
      { title: "Detectar", text: "Contador, sensor, registro, imagen u observación humana." },
      { title: "Datos", text: "Limpia, une, etiqueta y conserva con procedencia." },
      { title: "Modelo", text: "Aplica reglas o algoritmos dentro de un dominio de validez." },
      { title: "Juzgar", text: "Revisa incertidumbre, compensaciones y contexto operativo." },
      { title: "Actuar", text: "Implanta con responsable y condiciones controladas." },
      { title: "Aprender", text: "Compara resultado con predicción y actualiza el sistema." }
    ]
  },
  caseStudy: {
    eyebrow: "Ejemplo aplicado · mantenimiento predictivo",
    title: "Una predicción útil no implica automáticamente la intervención correcta",
    context: "Un modelo identifica una mayor probabilidad de degradación de un componente. Actuar inmediatamente puede evitar un suceso no planificado, pero también sustituir una pieza aún útil y provocar impactos de logística, materiales y mantenimiento. Esperar puede conservar vida útil, pero aumentar el riesgo operativo.",
    analysis: "La decisión requiere confianza del modelo, consecuencia del fallo, alternativas de inspección, vida útil restante, oportunidad de mantenimiento, disponibilidad de piezas y capacidad de seguimiento. Una inspección controlada o un umbral revisado pueden ser más sólidos que la sustitución o el aplazamiento automáticos. El modelo informa la elección; no es su propietario."
  },
  scenario: {
    title: "Un resultado de optimización parece impresionante",
    brief: "Una herramienta de IA predice una reducción energética del 9 % con una nueva secuencia de producción. Los datos de entrenamiento excluyen condiciones de invierno, una etapa de proveedor está representada por un promedio antiguo y los operadores no pueden explicar el factor principal.",
    question: "¿Cuál es el siguiente paso más sólido?",
    options: [
      { text: "Implantar inmediatamente porque el 9 % supera la meta de mejora.", feedback: "El tamaño del beneficio previsto no resuelve las lagunas de validez del modelo y calidad de datos." },
      { text: "Prohibir la herramienta porque la IA no puede utilizarse en decisiones ambientales.", feedback: "Un ensayo controlado proporcionado puede generar evidencia útil. El problema es la gobernanza y la adecuación, no la etiqueta tecnológica." },
      { text: "Validar el factor principal y los datos del proveedor, probar sensibilidad en invierno, definir revisión humana y ejecutar un ensayo supervisado con condiciones de parada.", feedback: "Esto utiliza el modelo como herramienta de aprendizaje manteniendo visibles responsabilidad e incertidumbre." },
      { text: "Publicar el resultado como reducción potencial sin cambiar el modelo.", feedback: "El calificativo «potencial» no compensa limitaciones sin resolver si la afirmación se utiliza para sugerir rendimiento." }
    ]
  },
  checks: [
    { question: "¿Qué describe la procedencia de los datos?", options: ["El diseño visual de un cuadro de mando.", "La cadena desde la fuente de datos, pasando por las transformaciones, hasta el resultado comunicado.", "La cantidad máxima de datos que puede almacenar un sistema."], explanation: "La procedencia hace revisables el origen, la transformación y la responsabilidad de los datos." },
    { question: "¿Qué hace significativa la supervisión humana?", options: ["Una persona pulsa aprobar después de ejecutar el modelo.", "Una persona competente dispone de información, tiempo y autoridad para cuestionar o intervenir.", "El modelo tiene alta exactitud en entrenamiento."], explanation: "La supervisión debe poder cambiar el resultado, no limitarse a presenciarlo." },
    { question: "¿Cómo debería probarse el valor ambiental de una herramienta digital?", options: ["Por el volumen de datos recopilados.", "Por su novedad.", "Comparando el beneficio permitido con su carga de recursos y los resultados de decisión supervisados."], explanation: "El valor neto depende del uso real y de los resultados, no del volumen de datos ni de la novedad." }
  ],
  reflection: "Nombra un cuadro de mando, modelo o resultado apoyado por IA utilizado en tu trabajo. ¿Qué pregunta de procedencia, validez o supervisión debería hacerse antes de confiar en él?",
  takeaway: "La capacidad digital crea valor cuando evidencia adecuada a la finalidad respalda una decisión responsable y supervisada.",
  explainers: [
    {
      title: "Del suceso físico a la acción responsable",
      kicker: "Modelo interactivo 1 de 2",
      intro: "Cada transformación puede cambiar el significado. Selecciona cada paso para descubrir el control necesario.",
      items: [
        { title: "Detectar", text: "Un contador, sensor, registro, imagen u observación captura una señal.", detail: "Define mensurando, instalación, rango, calibración y detección de fallos." },
        { title: "Validar", text: "Valida fecha y hora, unidad, rango, exhaustividad y contexto operativo.", detail: "Conserva datos originales e indicadores de calidad." },
        { title: "Transformar", text: "Limpia, une, asigna, normaliza y agrega.", detail: "Registra fórmula, versión y responsable para que el resultado sea reproducible." },
        { title: "Modelizar", text: "Aplica reglas, estadística o IA dentro de un dominio de validez definido.", detail: "Valida por condición operativa y consecuencia, no solo por error medio." },
        { title: "Juzgar", text: "Revisa confianza, restricciones, alternativas y compensaciones.", detail: "La supervisión humana necesita información, competencia, tiempo y autoridad." },
        { title: "Actuar y aprender", text: "Implanta, compara el resultado con lo esperado y actualiza el sistema.", detail: "Una predicción solo crea valor ambiental a través de una acción verificada." }
      ]
    },
    {
      title: "El balance de valor digital",
      kicker: "Modelo interactivo 2 de 2",
      intro: "Una herramienta crea valor neto solo cuando la carga evitada y verificada supera sus costes directos e indirectos.",
      items: [
        { title: "Carga evitada", text: "Energía, materiales, residuos, desplazamientos o fallos medidos y evitados por un cambio de operación.", detail: "Utiliza un contrafactual creíble y confirma la adopción." },
        { title: "Carga digital", text: "Hardware, cálculo, almacenamiento, redes, refrigeración y mantenimiento.", detail: "Utiliza estimaciones proporcionadas y diseña para una complejidad suficiente, no máxima." },
        { title: "Transferencia", text: "Trabajo, impacto o riesgo trasladado a otro emplazamiento, proveedor, equipo o etapa del ciclo de vida.", detail: "Mantén coherente el límite de comparación." },
        { title: "Rebote", text: "La eficiencia reduce coste o esfuerzo y después aumenta el uso total.", detail: "Supervisa uso absoluto y define límites, conservación y reglas de desconexión." },
        { title: "Incertidumbre", text: "Rangos que pueden cambiar el signo o la magnitud del valor neto.", detail: "Si la incertidumbre es crítica para la decisión, mejora la evidencia antes de ampliar." }
      ]
    }
  ],
  caseFile: {"title":"Caso aplicado M3 · Decisión con evidencias","subtitle":"Situación didáctica ficticia, no datos de Airbus","stages":[{"title":"1. Tu encargo profesional","text":"Actúas como responsable de revisión. Debes elegir una acción, justificarla con los datos y señalar qué información falta. ¿Desplegarías la automatización, continuarías un piloto supervisado o cancelarías?","evidence":["Decisión explícita","Justificación"]},{"title":"2. Contexto y datos comparables","text":"Precisión histórica del modelo: 96 %; la mezcla excepcional es solo el 2 % del entrenamiento. Piloto de 400 alertas con 40 falsos avisos, 18 horas perdidas y 6 % de ahorro energético; no hay autorización para reinicio autónomo.","evidence":["Valores hipotéticos de aprendizaje","No son indicadores reales de Airbus"]},{"title":"3. Análisis y restricciones","text":"Compara las alternativas, distingue estimaciones de mediciones, identifica incertidumbres y respeta las restricciones de seguridad y legales. Exigir aprobación de seguridad, mediciones por escenario, control humano, criterios de parada y seguimiento de resultados.","evidence":["Alternativas","Datos y límites","Evidencias pendientes"]},{"title":"4. Respuesta que debes entregar","text":"Escribe la opción recomendada, al menos dos razones apoyadas en los datos, una incertidumbre y la condición que podría cambiar tu decisión. Después consulta la solución de referencia.","evidence":["Decisión","Dos argumentos","Condición de revisión"]}],"prompt":"¿Desplegarías la automatización, continuarías un piloto supervisado o cancelarías? Explica dos razones y la evidencia que falta para aprobar.","decisionGuide":{"heading":"Solución de referencia y razonamiento","decision":"Mantener solo piloto supervisado y limitado; no permitir reinicio autónomo. El 10 % de falsos avisos y la escasa validación del caso excepcional impiden un despliegue seguro.","reasons":["Exigir aprobación de seguridad, mediciones por escenario, control humano, criterios de parada y seguimiento de resultados.","Los valores son hipótesis formativas, no cálculos verificados de ciclo de vida ni datos de Airbus."]}},
  lab: {
    title: "Laboratorio de aseguramiento de datos y modelos",
    intro: "Identifica la laguna de control en cuatro situaciones digitales de sostenibilidad.",
    questions: [
      { question: "Un cuadro de mando interpola silenciosamente una parada de tres días como producción normal. ¿Qué control falló?", options: ["La selección de colores.", "Las reglas de datos ausentes y la validación del contexto operativo.", "Solo la formación de usuarios.", "El tamaño del modelo."], explanation: "La imputación debe reflejar el estado operativo y permanecer visible." },
      { question: "Un modelo tiene un 96 % de exactitud, pero no detecta la mayoría de fallos raros de alta consecuencia. ¿Qué debería gobernar el lanzamiento?", options: ["Solo la exactitud media.", "Las consecuencias de los errores y el rendimiento por condición operativa relevante.", "El número de filas de entrenamiento.", "Que la interfaz parezca moderna."], explanation: "El riesgo de decisión depende de qué casos son incorrectos, no solo de la media." },
      { question: "Una recomendación de optimización no puede ser anulada por el ingeniero autorizado. ¿Qué falta?", options: ["Supervisión humana significativa y derechos de decisión claros.", "Más almacenamiento en la nube.", "Un icono de sostenibilidad.", "Una fecha anual de reentrenamiento."], explanation: "La persona responsable de decidir necesita autoridad e información para cuestionar el resultado." },
      { question: "Un piloto digital no muestra ningún cambio operativo medido, pero se describe como reducción de emisiones. ¿Cuál es la corrección más sólida?", options: ["Usar una letra más pequeña.", "Distinguir potencial del modelo de resultado verificado y medir la vía de acción.", "Sustituir emisiones por sostenibilidad.", "Excluir el uso del servidor."], explanation: "La predicción o el potencial no son un resultado ambiental logrado." }
    ]
  },
  tool: {
    title: "Registro de evidencia digital",
    description: "Documenta linaje, validez del modelo, supervisión humana y resultado ambiental.",
    headers: ["Elemento", "Definición", "Responsable", "Calidad o validación", "Limitación conocida", "Desencadenante de revisión"],
    rows: [
      ["Decisión y uso previsto", "", "", "", "", ""],
      ["Mensurando y fuente", "", "", "", "", ""],
      ["Transformaciones", "", "", "", "", ""],
      ["Versión del modelo o regla", "", "", "", "", ""],
      ["Rendimiento por condición", "", "", "", "", ""],
      ["Derecho humano de decisión", "", "", "", "", ""],
      ["Uso de recursos digitales", "", "", "", "", ""],
      ["Resultado ambiental verificado", "", "", "", "", ""],
      ["Respaldo y retirada", "", "", "", "", ""]
    ]
  },
  assessmentQuestions: [
    { question: "¿Qué describe la procedencia de los datos?", options: ["El diseño visual de un cuadro de mando.", "La cadena desde la fuente de datos, pasando por las transformaciones, hasta el resultado comunicado.", "La cantidad máxima de datos que puede almacenar un sistema."], explanation: "La procedencia hace revisables el origen, la transformación y la responsabilidad de los datos." },
    { question: "¿Qué hace significativa la supervisión humana?", options: ["Una persona pulsa aprobar después de ejecutar el modelo.", "Una persona competente dispone de información, tiempo y autoridad para cuestionar o intervenir.", "El modelo tiene alta exactitud en entrenamiento."], explanation: "La supervisión debe poder cambiar el resultado, no limitarse a presenciarlo." },
    { question: "¿Cómo debería probarse el valor ambiental de una herramienta digital?", options: ["Por el volumen de datos recopilados.", "Por su novedad.", "Comparando el beneficio permitido con su carga de recursos y los resultados de decisión supervisados."], explanation: "El valor neto depende del uso real y de los resultados, no del volumen de datos ni de la novedad." },
    { question: "¿Qué información debería permanecer asociada a un dato estimado?", options: ["Solo el valor final.", "Método, fuente, unidad, periodo, indicador de calidad y responsable.", "El color del cuadro de mando."], explanation: "La procedencia hace que el valor sea reproducible y revisable." },
    { question: "¿Qué es la deriva de modelo?", options: ["Un cambio en los datos o condiciones que debilita el ajuste del modelo a la operación actual.", "Una pausa planificada del usuario.", "El movimiento de un cable de red."], explanation: "Procesos, equipos y comportamientos pueden salir del dominio de validación." },
    { question: "¿Por qué el sesgo de automatización puede debilitar la supervisión?", options: ["Los usuarios pueden aceptar la salida del sistema pese a evidencia contradictoria.", "Los usuarios siempre rechazan algoritmos.", "Reduce el almacenamiento de datos."], explanation: "Las interfaces y la formación deben favorecer un cuestionamiento activo." },
    { question: "¿Qué convierte un beneficio ambiental de IA en un resultado verificado?", options: ["Alta exactitud del modelo.", "Cambio operativo medido frente a una línea de base creíble, incluyendo la carga añadida relevante.", "Una nota de prensa."], explanation: "Un modelo genera impacto mediante acción real, no solo mediante potencial técnico." },
    { question: "¿Qué suceso puede constituir un cambio material del sistema?", options: ["Una nueva fuente de datos o contexto de uso.", "Corregir únicamente un error ortográfico.", "Abrir la misma página dos veces."], explanation: "Los cambios que afectan al comportamiento o a la validez requieren revisión controlada." }
  ],
  briefing: {
    title: "La evidencia digital es un sistema, no un cuadro de mando",
    paragraphs: [
      "Las decisiones ambientales dependen cada vez más de contadores, sistemas empresariales, analítica, simulaciones e Inteligencia Artificial. Estas herramientas pueden revelar patrones y apoyar controles, pero también hacer que supuestos débiles parezcan autoritativos. El acabado visual no equivale a calidad de evidencia. El suceso físico, el linaje de datos, el modelo y la decisión humana siguen siendo capas distintas.",
      "Este módulo empieza por la decisión prevista y trabaja hacia atrás hasta la arquitectura de medición. Ese orden evita recopilar grandes volúmenes de datos sin vía de respuesta. También aclara la resolución, latencia e incertidumbre que realmente necesita la decisión; no toda pregunta exige sensores permanentes o un modelo complejo.",
      "La evaluación de modelos va más allá de la exactitud media. Modos operativos poco frecuentes, consecuencias asimétricas de error, deriva y comportamiento de usuarios pueden determinar si un modelo técnicamente sólido es seguro y útil. Una supervisión humana significativa requiere autoridad y contexto, mientras la gobernanza conserva uso previsto, versión, respuesta a incidentes y retirada.",
      "La huella ambiental de los sistemas digitales se incluye sin recurrir a afirmaciones simplistas. Hardware, cálculo, almacenamiento y redes añaden carga, pero la comparación también necesita el impacto operativo que evitan de forma creíble. El valor neto depende de adopción, rebote, trabajo transferido y tiempo durante el que la herramienta sigue siendo útil.",
      "Al completar el módulo deberías poder rastrear una cifra desde la fuente hasta la acción, reconocer cuándo un modelo queda fuera de su dominio de validez y exigir evidencia de resultado antes de llamar mejora ambiental a un proyecto digital."
    ]
  },
  misconceptions: [
    { myth: "Más datos siempre mejoran la decisión.", correction: "Los datos crean valor cuando son relevantes, representativos, trazables y están conectados con una acción. Una recopilación excesiva añade hardware, almacenamiento, mantenimiento y carga de interpretación. Empieza por la decisión y recopila la resolución y el historial necesarios para respaldarla." },
    { myth: "Una alta exactitud media hace que un modelo sea seguro para implantar.", correction: "El rendimiento medio puede ocultar errores raros de alta consecuencia y mal rendimiento en modos operativos concretos. Valida por condición, examina consecuencias de falsos positivos y falsos negativos, define autoridad humana y supervisa deriva y resultado." },
    { myth: "Una estimación digital de ahorro es un ahorro logrado.", correction: "La herramienta debe cambiar una operación autorizada y el resultado debe medirse frente a una referencia creíble. La carga digital añadida, el rebote, el trabajo desplazado y la falta de adopción forman parte de la evaluación del sistema antes de afirmar un beneficio ambiental." }
  ]
};