// js/app.js — Lógica de reactividad, datos embebidos y renderizado vectorial para Sanesca

// Datos maestros embebidos (Garantiza funcionamiento 100% tanto en GitHub Pages como en file:// local)
const MASTER_CONCILIACION_DATA = {
  "meta": {
    "version": "2.0",
    "version_docsemver": "v2.0.0",
    "fecha_emision": "Agosto 2026",
    "empresa": "Sanesca",
    "facilitador": "Encargado de Datos / Jefe de Almacén",
    "periodo_observacion": "14 Abril – 18 Agosto 2026",
    "semanas_observadas": 18,
    "total_eventos": 62,
    "horas_generacion_acumuladas": 272.1,
    "generador": {
      "modelo": "Iveco Aifo GE 8031 I 06.05",
      "motor": "8031.06 (3 cilindros, 2.93 L)",
      "potencia_prp_kw": 28.0,
      "potencia_kva": 35.0,
      "amperaje_nominal": 92.0,
      "voltaje_frecuencia": "220V Trifásico @ 1800 RPM (60 Hz)",
      "consumo_nominal_lh": 6.2,
      "consumo_nominal_galh": 1.64,
      "capacidad_carter_l": 7.7,
      "intervalo_mantenimiento_hrs": 300
    }
  },
  "principios": [
    {
      "id": "p1",
      "titulo": "1. Aproximación Falsificable y Evolutiva",
      "subtitulo": "Diseño abierto a co-construcción",
      "icono": "🔬",
      "contenido": "Todo lo plasmado en este marco es una primera estimación estructurada con la información técnica y estadística disponible. Se reconoce expresamente incompleto y está diseñado para ser corregido, enriquecido y calibrado con la experiencia práctica diaria de operarios y gerencia de Sanesca."
    },
    {
      "id": "p2",
      "titulo": "2. Corresponsabilidad Real",
      "subtitulo": "Compromisos simétricos y viables",
      "icono": "🤝",
      "contenido": "La supervivencia operativa de la fábrica y el cumplimiento de los tiempos de entrega no pueden depender exclusivamente del esfuerzo heroico de los trabajadores, ni la empresa puede asumir compromisos financieros inmediatos inviables. Se requiere una articulación simétrica, transparente y no punitiva de compromisos mutuos."
    },
    {
      "id": "p3",
      "titulo": "3. Protección del Ingreso y la Integridad Física",
      "subtitulo": "Salida de tiendas y seguridad laboral",
      "icono": "🛡️",
      "contenido": "El esquema busca maximizar las horas efectivas de producción para asegurar la salida a tiempo de las tiendas completas (liberando los bonos de productividad semanales del personal), minimizando a la vez los riesgos de traslado de madrugada y la fatiga laboral."
    }
  ],
  "horario_laboral": {
    "lunes_viernes": "07:00 AM – 04:00 PM",
    "sabado": "07:00 AM – 12:00 PM",
    "franja_dorada": {
      "inicio": "06:00 AM",
      "fin": "11:00 AM",
      "duracion_horas": 5.0,
      "confiabilidad": "100%",
      "descripcion": "Estabilidad eléctrica absoluta comprobada de red comercial pública en 18 semanas de observación."
    },
    "ventana_riesgo": {
      "inicio": "11:30 AM",
      "fin": "04:30 PM",
      "porcentaje_cortes_dias_habiles": "82.3%",
      "duracion_media_corte": "4h 23m"
    }
  },
  "estadistica_semanal": [
    {
      "dia": "Miércoles",
      "dia_num": 3,
      "cortes": 15,
      "pct_total": 24.2,
      "probabilidad_semanal": 83,
      "nivel_riesgo": "muy_alto",
      "riesgo_badge": "🔴 Muy Alto",
      "riesgo_color": "rose",
      "ventana_promedio": "11:53 AM – 04:15 PM",
      "duracion_media": "4h 22m",
      "duracion_min": 262
    },
    {
      "dia": "Lunes",
      "dia_num": 1,
      "cortes": 13,
      "pct_total": 21.0,
      "probabilidad_semanal": 72,
      "nivel_riesgo": "muy_alto",
      "riesgo_badge": "🔴 Muy Alto",
      "riesgo_color": "rose",
      "ventana_promedio": "12:28 PM – 05:05 PM",
      "duracion_media": "4h 36m",
      "duracion_min": 276
    },
    {
      "dia": "Jueves",
      "dia_num": 4,
      "cortes": 12,
      "pct_total": 19.4,
      "probabilidad_semanal": 67,
      "nivel_riesgo": "alto",
      "riesgo_badge": "🟠 Alto",
      "riesgo_color": "amber",
      "ventana_promedio": "12:18 PM – 04:12 PM",
      "duracion_media": "3h 54m",
      "duracion_min": 234
    },
    {
      "dia": "Martes",
      "dia_num": 2,
      "cortes": 11,
      "pct_total": 17.7,
      "probabilidad_semanal": 61,
      "nivel_riesgo": "alto",
      "riesgo_badge": "🟠 Alto",
      "riesgo_color": "amber",
      "ventana_promedio": "12:57 PM – 05:02 PM",
      "duracion_media": "4h 06m",
      "duracion_min": 246
    },
    {
      "dia": "Viernes",
      "dia_num": 5,
      "cortes": 8,
      "pct_total": 12.9,
      "probabilidad_semanal": 44,
      "nivel_riesgo": "medio",
      "riesgo_badge": "🟡 Medio",
      "riesgo_color": "yellow",
      "ventana_promedio": "11:06 AM – 03:57 PM",
      "duracion_media": "4h 52m",
      "duracion_min": 292
    },
    {
      "dia": "Sábado",
      "dia_num": 6,
      "cortes": 3,
      "pct_total": 4.8,
      "probabilidad_semanal": 17,
      "nivel_riesgo": "bajo",
      "riesgo_badge": "🟢 Bajo",
      "riesgo_color": "emerald",
      "ventana_promedio": "11:00 AM – 04:20 PM",
      "duracion_media": "5h 20m",
      "duracion_min": 320
    },
    {
      "dia": "Domingo",
      "dia_num": 0,
      "cortes": 0,
      "pct_total": 0.0,
      "probabilidad_semanal": 0,
      "nivel_riesgo": "ninguno",
      "riesgo_badge": "⚪ Ninguno",
      "riesgo_color": "slate",
      "ventana_promedio": "Sin registro de cortes",
      "duracion_media": "0 min",
      "duracion_min": 0
    }
  ],
  "maquinaria": [
    {
      "id": "laser",
      "nombre": "Corte Láser CNC",
      "icono": "⚡",
      "operador": "Gabriel Méndez",
      "area": "Mecanizado Primario",
      "estado_generador": "Restringido / Exclusivo",
      "badge_type": "restringido",
      "badge_label": "🔴 Restringido / Exclusivo",
      "regla_corta": "Debe concentrarse al 100% en la Franja Dorada con red comercial pública.",
      "regla_completa": "Exige alta potencia y máxima estabilidad de onda senoidal. Debe concentrarse 100% en la Franja Dorada (06:00–11:00 AM) con red pública comercial para prevenir descalibraciones ópticas y fallas electrónicas costosas.",
      "incompatibles": ["punzonadora", "horno", "soldadura"],
      "recomendacion_operativa": "Planificar lotes de corte pesado antes de las 11:00 AM para abastecer a doblado y soldadura."
    },
    {
      "id": "punzonadora",
      "nombre": "Punzonadora CNC / Manual",
      "icono": "⚙️",
      "operador": "Carlos Silva",
      "area": "Mecanizado Primario",
      "estado_generador": "No Simultáneo con Láser",
      "badge_type": "condicionado",
      "badge_label": "🟠 No Simultáneo con Láser",
      "regla_corta": "Programar en ventanas alternas; evitar encendido simultáneo con el láser.",
      "regla_completa": "Se programa en ventanas alternas durante la mañana; evitar el encendido simultáneo con el láser bajo generador para prevenir picos de caída de tensión.",
      "incompatibles": ["laser", "horno"],
      "recomendacion_operativa": "Operar bandejas perforadas y tapas de módulos antes del mediodía."
    },
    {
      "id": "plegadora",
      "nombre": "Prensa Plegadora CNC",
      "icono": "📐",
      "operador": "Operario asignado según lote",
      "area": "Mecanizado Primario / Doblado",
      "estado_generador": "Programado / Alterno",
      "badge_type": "condicionado",
      "badge_label": "🟠 Programado / Alterno",
      "regla_corta": "Ventanas alternas con láser; no encender junto con punzonadora bajo planta.",
      "regla_completa": "Utilizada activamente para conformado y doblado de piezas cortadas. Se programa en ventanas alternas con el láser; evitar concurrencia con punzonadora bajo generador.",
      "incompatibles": ["punzonadora", "horno"],
      "recomendacion_operativa": "Doblado secuencial inmediato post-corte láser para alimentar a Herrería."
    },
    {
      "id": "soldadura",
      "nombre": "Soldadura MIG (Herrería)",
      "icono": "🔥",
      "operador": "Gustavo Méndez (Joan, Hermo, Renny)",
      "area": "Transformación Intermedia",
      "estado_generador": "Carga Parcial Permitida",
      "badge_type": "parcial",
      "badge_label": "🟡 Carga Parcial (1-2 puestos)",
      "regla_corta": "Máximo 1 a 2 puestos simultáneos; incompatible con compresores pesados.",
      "regla_completa": "Máximo 1 a 2 puestos de soldadura activos simultáneamente bajo generador. Incompatible con el encendido concurrente de compresores de alta demanda de pintura.",
      "incompatibles": ["compresores", "horno", "laser"],
      "recomendacion_operativa": "Armar y soldar estructuras principales en paralelo mientras Pintura prepara lotes."
    },
    {
      "id": "compresores",
      "nombre": "Compresores y Cabina de Pintura",
      "icono": "💨",
      "operador": "Julio Daniel / Barbara / Janeth / Neuro",
      "area": "Terminación y Acabado",
      "estado_generador": "Carga Aislada Programada",
      "badge_type": "condicionado",
      "badge_label": "🟠 Carga Aislada Programada",
      "regla_corta": "Solo si Herrería no tiene soldadura pesada en curso; asignar bloques horarios.",
      "regla_completa": "Solo si Herrería no tiene soldadura pesada en curso. Se recomienda asignar bloques exclusivos por horas para la aplicación de pintura en polvo electrostática.",
      "incompatibles": ["soldadura", "laser"],
      "recomendacion_operativa": "Aplicar polvo en tandas coordinadas una vez desengrasadas las piezas."
    },
    {
      "id": "horno",
      "nombre": "Horno de Pintura Electrostática",
      "icono": "🌡️",
      "operador": "Julio Daniel / Barbara / Janeth / Neuro",
      "area": "Terminación y Curado",
      "estado_generador": "Consumo Masivo Exclusivo",
      "badge_type": "restringido",
      "badge_label": "🔴 Consumo Masivo Exclusivo",
      "regla_corta": "Puede operar con planta pero bloquea casi cualquier otra máquina pesada.",
      "regla_completa": "Puede encenderse con la planta diésel Iveco, pero su altísima demanda térmica (~18–24 kW) bloquea el uso de casi cualquier otra máquina pesada durante el ciclo de curado (~180°C–200°C).",
      "incompatibles": ["laser", "punzonadora", "plegadora", "soldadura", "compresores", "sierra"],
      "recomendacion_operativa": "Acumular lote suficiente de tienda completa para justificar 1 solo ciclo de horneado."
    },
    {
      "id": "sierra",
      "nombre": "Sierra de Banco (Carpintería)",
      "icono": "🪵",
      "operador": "Alí Torrealba / Wilfredo Bello (Contratistas)",
      "area": "Transformación Intermedia / Madera",
      "estado_generador": "Bloques Notificados",
      "badge_type": "notificado",
      "badge_label": "🔵 Bloques Notificados",
      "regla_corta": "Notificar horas de corte los viernes para no colisionar con herrería ni pintura.",
      "regla_completa": "Como contratistas autogestionados, deben notificar sus horas de corte los viernes para programar ventanas que no colisionen con herrería o pintura.",
      "incompatibles": ["horno"],
      "recomendacion_operativa": "Los módulos de madera avanzan en paralelo y convergen en Ensamble Final (NO entran al horno)."
    }
  ],
  "cadena_critica": [
    {
      "paso": 0,
      "paso_label": "Paso 0",
      "nombre": "Diseño y Planificación",
      "ventana": "Viernes 03:00 PM",
      "responsables": "José Javier Cardozo / Eduardo Catalá",
      "hito": "Entrega y verificación de planos, listas de despiece (BOM) y archivos CNC antes del cierre del viernes.",
      "proposito": "Garantizar que el lunes a las 06:00 AM el taller arranque de inmediato con luz comercial sin esperas."
    },
    {
      "paso": 1,
      "paso_label": "Paso 1",
      "nombre": "Mecanizado Primario",
      "ventana": "Lun-Mié 06:00 AM – 10:30 AM",
      "responsables": "Gabriel Méndez / Carlos Silva / Plegador",
      "hito": "Láser CNC, Punzonadora y Prensa Plegadora transforman láminas de acero en la Franja Dorada.",
      "proposito": "Abastecer de piezas cortadas y conformadas a soldadura antes del corte de luz del mediodía."
    },
    {
      "paso": 2,
      "paso_label": "Paso 2",
      "nombre": "Transformación y Ensamble",
      "ventana": "Lunes a Jueves",
      "responsables": "Gustavo Méndez (Herrería) / Alí Torrealba (Carpintería)",
      "hito": "Herrería y Carpintería arman en paralelo estructuras metálicas y muebles modulares de madera.",
      "proposito": "Entregar piezas acumuladas completas a Pintura y al área de Ensamble Final."
    },
    {
      "paso": 3,
      "paso_label": "Paso 3",
      "nombre": "Acabado y Horneado",
      "ventana": "Miércoles y Jueves",
      "responsables": "Julio Daniel / Barbara / Janeth / Neuro",
      "hito": "Preparación, desengrase, aplicación de polvo electrostático y curado en horno a 200°C.",
      "proposito": "Pintura acumula carga suficiente para justificar 1 ciclo completo de horno, evitando retrabajos."
    },
    {
      "paso": 3.5,
      "paso_label": "Paso 3.5",
      "nombre": "Embalaje y Verificación QC",
      "ventana": "Jueves y Viernes",
      "responsables": "Keyver Merchan / Yorvel",
      "hito": "Protección (burbuja, cartón, flejes), etiquetado y control de calidad antes de la carga.",
      "proposito": "Prevenir daños durante el transporte y asegurar que no falte ningún herraje o componente."
    },
    {
      "paso": 4,
      "paso_label": "Paso 4",
      "nombre": "Despacho e Instalación",
      "ventana": "Viernes Cierre",
      "responsables": "Marvin / Arsenio (Contratistas)",
      "hito": "Salida de la tienda completa de mobiliario y estructuras para instalación en tienda del cliente.",
      "proposito": "Cumplimiento del pedido que libera la satisfacción del cliente y el bono semanal de producción."
    }
  ],
  "pacto_bilateral": {
    "taller": [
      {
        "num": 1,
        "titulo": "1. Puntualidad en Franja Dorada (06:00 AM)",
        "detalle": "Concentrar el 80% del corte y mecanizado crítico en las primeras 5 horas del día con luz comercial garantizada."
      },
      {
        "num": 2,
        "titulo": "2. Respeto a los Bloques de Concurrencia",
        "detalle": "Acatar las reglas preliminares de la planta eléctrica; coordinar encendidos de horno o soldadoras sin sobrecargar el generador."
      },
      {
        "num": 3,
        "titulo": "3. Notificación de Lotes de Avance",
        "detalle": "Informar piezas terminadas acumuladas por tienda para que Pintura y Carpintería programen sus ciclos sin duplicar arranques."
      },
      {
        "num": 4,
        "titulo": "4. Colaboración con los Diagnósticos",
        "detalle": "Participar activamente en los 3 formularios de recolección de información. Son herramientas de planificación compartida que nos benefician a todos con datos reales."
      }
    ],
    "gerencia": [
      {
        "num": 1,
        "titulo": "1. Blindaje de Planos y Materiales",
        "detalle": "Garantizar que los planos, listas de despiece y materia prima estén al pie de máquina el viernes previo, eliminando tiempos muertos el lunes temprano."
      },
      {
        "num": 2,
        "titulo": "2. Gestión Proactiva de Diésel",
        "detalle": "Verificar reserva mínima de combustible (al menos 6 horas de autonomía) antes de las 07:00 AM de lunes a jueves; evitar paradas por tanque seco."
      },
      {
        "num": 3,
        "titulo": "3. Estabilidad en Prioridades",
        "detalle": "Mantener las prioridades de fabricación sin cambios de proyecto a mitad de semana, protegiendo el lote que libera el bono semanal de producción."
      },
      {
        "num": 4,
        "titulo": "4. Facilitación Logística de Transporte",
        "detalle": "Coordinar rutas compartidas, enlaces con vehículos internos o apoyos logísticos para mitigar el costo y riesgo de traslados a las 5:00 AM / noche."
      }
    ]
  },
  "formularios": [
    {
      "id": "f1",
      "codigo": "F1",
      "nombre": "Censo de Movilidad y Rutas de Transporte",
      "icono": "📱",
      "destinatarios": "Todo el Personal de Planta (Herrería, Pintura, Láser, Carpintería, etc.)",
      "preguntas_total": 16,
      "obligatorias": 14,
      "proposito": "Conocer la realidad de traslado de cada trabajador (rutas, tiempos, costos de pasaje) para evaluar opciones de rutas compartidas y apoyos logísticos que faciliten la llegada a las 06:00 AM.",
      "como_apoya": "Permite identificar compañeros con rutas similares para estructurar apoyos mutuos y dimensionar el impacto real del pasaje sobre el transporte de cada persona.",
      "url": "https://forms.gle/sgGnxzz94ujBXh156"
    },
    {
      "id": "f2",
      "codigo": "F2",
      "nombre": "Ficha Operativa de Tiempos y Capacidad de Taller",
      "icono": "⏱️",
      "destinatarios": "Encargados y Operarios Clave de cada Proceso (6 áreas con branching)",
      "preguntas_total": 35,
      "obligatorias": "Específicas por área",
      "proposito": "Registrar estimaciones reales de tiempos de máquina, corte, ensamble, pintura y embalaje según los tipos de piezas que fabricamos habitualmente.",
      "como_apoya": "Permite calcular cuántas horas efectivas de la Franja Dorada consume cada proceso, planificar la secuencia de la cadena crítica con datos reales y detectar cuellos de botella.",
      "url": "https://forms.gle/8JkBLP8QgKnU4Mh89"
    },
    {
      "id": "f3",
      "codigo": "F3",
      "nombre": "Exploración de la Gestión de Combustible de Planta",
      "icono": "⛽",
      "destinatarios": "Gerencia de Operaciones, Almacén, Compras y Encargados del Generador",
      "preguntas_total": 16,
      "obligatorias": 14,
      "proposito": "Entender la realidad actual del manejo del gasoil del generador Iveco Aifo (cómo se compra, quién lo carga, con qué frecuencia y qué datos existen) antes de diseñar un sistema de control.",
      "como_apoya": "Permite anticipar cuándo va a hacer falta combustible en vez de descubrirlo cuando el tanque está vacío, protegiendo la continuidad operativa durante los cortes de luz.",
      "url": "https://forms.gle/3uPQFro4jZQWxk7j6"
    }
  ],
  "glosario": [
    {
      "termino": "Franja Dorada",
      "definicion": "Ventana horaria de 06:00 AM a 11:00 AM con 100% de confiabilidad comprobada de red comercial pública en 18 semanas de registro histórico. La hora de 06:00 a 07:00 AM es la propuesta de adelanto operativo para arrancar con luz estable."
    },
    {
      "termino": "Ventana de Riesgo",
      "definicion": "Franja horaria de 11:30 AM a 04:30 PM donde ocurre el 82.3% de los cortes de luz comerciales de lunes a jueves."
    },
    {
      "termino": "Concurrencia de Maquinaria",
      "definicion": "Capacidad técnica y de balance eléctrico para encender dos o más equipos industriales simultáneamente sin exceder la potencia límite del generador Iveco Aifo (28 kW PRP / 92A)."
    },
    {
      "termino": "Cadena Crítica",
      "definicion": "Secuencia obligatoria de pasos de producción donde un retraso en la entrega inicial (Diseño/Corte) frena de forma automática a los eslabones posteriores (Herrería/Pintura/Embalaje)."
    },
    {
      "termino": "Tienda Completa",
      "definicion": "Conjunto integral de mobiliario, torres, mostradores y estructuras que conforma un pedido cerrado de cliente, cuya entrega y despacho es la condición requerida para la liberación de los bonos de productividad semanales."
    },
    {
      "termino": "Embalaje y QC",
      "definicion": "Proceso de protección (plástico burbuja, cartón, flejes), etiquetado y verificación de integridad de las piezas terminadas antes de su carga al transporte de despacho."
    },
    {
      "termino": "Prensa Plegadora CNC",
      "definicion": "Centro de trabajo de doblado y conformado de láminas metálicas cortadas. Opera después del corte láser/punzonado y antes de la soldadura."
    },
    {
      "termino": "DocSemVer",
      "definicion": "Estándar de versionado semántico documental (vX.Y.Z) adoptado en Sanesca para garantizar la trazabilidad técnica de todas las especificaciones y manuales."
    }
  ],
  "enlaces": {
    "dashboard": "https://cazx008.github.io/sanesca-dashboard/",
    "documento_pdf": "assets/Documento_Marco_Conciliacion_Sanesca.pdf"
  }
};

document.addEventListener('alpine:init', () => {
  Alpine.data('medidasApp', () => ({
    loading: true,
    data: MASTER_CONCILIACION_DATA,
    
    // Estado del día actual
    todayDayIndex: new Date().getDay(),
    todayData: null,
    currentTimeStr: '',
    currentStatusFranja: '',
    
    // Pestañas y filtros
    activeDiagramTab: 'flujo_industrial',
    diagramZoom: 1.0,
    
    // Simulador de concurrencia
    selectedMachine1: 'laser',
    selectedMachine2: 'horno',
    
    // Glosario
    searchGlossary: '',
    
    // Modal QR
    qrModalOpen: false,
    currentQrForm: null,
    
    // Definiciones Mermaid (Código fuente limpio)
    mermaidFlujoCode: `flowchart TD
    subgraph S1 ["1. Dirección, Planificación y Diseño"]
        DIR["Gerencia de Operaciones<br/><b>(Eduardo Catalá)</b>"]
        ORD["Orden de Producción y Prioridades"]
        DIS["Diseño, Planos y Despieces BOM<br/><b>(José Javier Cardozo)</b>"]
        DIR --> ORD --> DIS
    end

    subgraph S_ALM ["Abastecimiento y Almacén"]
        ALM["Almacén de Materia Prima e Insumos<br/><i>(Láminas de acero, Tubos, Melamina, Pintura)</i>"]
    end

    subgraph S2 ["2. Mecanizado Primario (Alta Dependencia Eléctrica — Franja Dorada)"]
        PUNZ["Punzonado CNC / Manual<br/><b>(Carlos Silva)</b>"]
        LASER["Corte Láser CNC<br/><b>(Gabriel Méndez)</b>"]
        PLEG["Prensa Plegadora CNC<br/><i>(Conformado y Doblado)</i>"]
    end

    subgraph S3 ["3. Transformación Intermedia (Líneas Paralelas)"]
        HERR["Herrería y Soldadura MIG<br/><b>(Gustavo Méndez - Joan, Hermo, Renny)</b>"]
        CARP["Carpintería y Modulares<br/><b>(Alí Torrealba / Wilfredo Bello)</b>"]
    end

    subgraph S4 ["4. Fase Terminación (Cuello de Botella Crítico)"]
        PREP["Preparación, Limpieza y Desengrase"]
        PINT["Pintura Electrostática en Polvo y Horno 200°C<br/><b>(Julio Daniel / Barbara / Janeth / Neuro)</b>"]
        PREP --> PINT
    end

    subgraph S5 ["5. Integración, Control de Calidad y Salida"]
        ENS["Ensamble Final e Integración<br/><i>(Acople Estructura Metálica + Módulos de Madera)</i>"]
        EMB["Embalaje y Verificación QC<br/><b>(Keyver Merchan / Yorvel)</b>"]
        DESP["Despacho e Instalación en Tienda<br/><b>(Marvin / Arsenio - Contratistas)</b>"]
        ENS -->|Mobiliario verificado| EMB -->|Producto protegido y flejado| DESP
    end

    %% Conexiones entre Fases
    ORD -.->|Liberación de Materiales| ALM
    DIS -->|Archivos CNC .dxf/.nc| LASER
    DIS -->|Planos de punzonado| PUNZ
    DIS -->|Planos de armado y soldadura| HERR
    DIS -->|Planos de despiece y corte| CARP
    DIS -.->|Ficha técnica y código de color| PINT

    ALM -->|Láminas a punzonar| PUNZ
    ALM -->|Láminas y perfiles de acero| LASER
    ALM -->|Tableros melamina y herrajes| CARP

    LASER -->|Piezas para plegar| PLEG
    PUNZ -->|Piezas perforadas para plegar| PLEG
    LASER -->|Piezas planas cortadas| HERR
    PUNZ -->|Piezas punzonadas planas| HERR
    PLEG -->|Piezas conformadas / plegadas| HERR

    HERR -->|Estructuras armadas y soldadas| PREP
    CARP -->|Módulos de madera / Melamina armada| ENS
    PINT -->|Estructuras metálicas horneadas y frías| ENS

    %% Estilos de Subgrafos
    style S1 fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f8fafc
    style S_ALM fill:#0f172a,stroke:#94a3b8,stroke-width:2px,color:#f8fafc
    style S2 fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#f8fafc
    style S3 fill:#78350f,stroke:#fbbf24,stroke-width:2px,color:#f8fafc
    style S4 fill:#881337,stroke:#fb7185,stroke-width:2px,color:#f8fafc
    style S5 fill:#4c1d95,stroke:#c084fc,stroke-width:2px,color:#f8fafc`,

    mermaidCadenaCode: `flowchart LR
    P0["<b>Paso 0: Diseño y Planos</b><br/><span style='font-size:12px;color:#38bdf8;'>Viernes 03:00 PM</span><br/><span style='font-size:11px;color:#94a3b8;'>Javier Cardozo / Eduardo</span>"]
    P1["<b>Paso 1: Corte y Plegado CNC</b><br/><span style='font-size:12px;color:#34d399;'>Lun-Mié 06:00–10:30 AM</span><br/><span style='font-size:11px;color:#94a3b8;'>Gabriel / Carlos / Plegador</span>"]
    P2["<b>Paso 2: Ensamble Herrería/Carp.</b><br/><span style='font-size:12px;color:#fbbf24;'>Lunes a Jueves</span><br/><span style='font-size:11px;color:#94a3b8;'>Gustavo / Alí / Wilfredo</span>"]
    P3["<b>Paso 3: Pintura y Horno 200°C</b><br/><span style='font-size:12px;color:#fb7185;'>Miércoles y Jueves</span><br/><span style='font-size:11px;color:#94a3b8;'>Julio Daniel / Barbara / Neuro</span>"]
    P3b["<b>Paso 3.5: Embalaje y QC</b><br/><span style='font-size:12px;color:#c084fc;'>Jueves y Viernes</span><br/><span style='font-size:11px;color:#94a3b8;'>Keyver / Yorvel</span>"]
    P4["<b>Paso 4: Tienda Completa</b><br/><span style='font-size:12px;color:#4ade80;'>Viernes Cierre</span><br/><span style='font-size:11px;color:#94a3b8;'>Despacho e Instalación</span>"]

    P0 ==>|Planos listos| P1
    P1 ==>|Piezas conformadas| P2
    P2 ==>|Estructuras listas| P3
    P3 ==>|Piezas horneadas| P3b
    P3b ==>|Libera Bono Semanal| P4

    style P0 fill:#1e293b,stroke:#38bdf8,stroke-width:2.5px,color:#f8fafc
    style P1 fill:#064e3b,stroke:#34d399,stroke-width:2.5px,color:#f8fafc
    style P2 fill:#78350f,stroke:#fbbf24,stroke-width:2.5px,color:#f8fafc
    style P3 fill:#881337,stroke:#fb7185,stroke-width:2.5px,color:#f8fafc
    style P3b fill:#581c87,stroke:#c084fc,stroke-width:2.5px,color:#f8fafc
    style P4 fill:#14532d,stroke:#4ade80,stroke-width:3.5px,color:#f8fafc`,

    async init() {
      // Intentar actualizar desde JSON si está en un servidor HTTP, sino usa MASTER_CONCILIACION_DATA directo
      try {
        const res = await fetch('data/conciliacion.json');
        if (res.ok) {
          this.data = await res.json();
        }
      } catch (e) {
        // En file:// o sin red, ya tiene MASTER_CONCILIACION_DATA
      }
      
      this.evaluateTodayStatus();
      this.loading = false;
      
      setInterval(() => {
        this.evaluateTodayStatus();
      }, 60000);
      
      this.$nextTick(() => {
        this.initChart();
        this.renderMermaidDiagrams();
      });
    },
    
    evaluateTodayStatus() {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      this.currentTimeStr = now.toLocaleDateString('es-ES', options);
      this.todayDayIndex = now.getDay();
      
      if (this.data && this.data.estadistica_semanal) {
        this.todayData = this.data.estadistica_semanal.find(d => d.dia_num === this.todayDayIndex) || this.data.estadistica_semanal[0];
      }
      
      const currentHour = now.getHours() + now.getMinutes() / 60;
      if (currentHour >= 6.0 && currentHour < 11.0) {
        this.currentStatusFranja = 'dorada';
      } else if (currentHour >= 11.0 && currentHour < 16.5) {
        this.currentStatusFranja = 'riesgo';
      } else {
        this.currentStatusFranja = 'recuperacion';
      }
    },
    
    async renderMermaidDiagrams() {
      if (!window.mermaid) return;
      
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'loose',
        fontFamily: 'Inter, system-ui, sans-serif',
        themeVariables: {
          darkMode: true,
          background: '#090d16',
          primaryColor: '#1e293b',
          primaryTextColor: '#f8fafc',
          primaryBorderColor: '#38bdf8',
          lineColor: '#64748b',
          secondaryColor: '#0f172a',
          tertiaryColor: '#1e293b',
          fontSize: '14px'
        }
      });
      
      try {
        const flujoContainer = document.getElementById('mermaid-flujo-target');
        if (flujoContainer) {
          const { svg } = await mermaid.render('mermaid_flujo_svg', this.mermaidFlujoCode);
          flujoContainer.innerHTML = svg;
          const svgEl = flujoContainer.querySelector('svg');
          if (svgEl) {
            svgEl.style.width = '100%';
            svgEl.style.minWidth = '920px';
            svgEl.style.height = 'auto';
          }
        }
      } catch (err) {
        console.error('Error renderizando Diagrama 3:', err);
      }

      try {
        const cadenaContainer = document.getElementById('mermaid-cadena-target');
        if (cadenaContainer) {
          const { svg } = await mermaid.render('mermaid_cadena_svg', this.mermaidCadenaCode);
          cadenaContainer.innerHTML = svg;
          const svgEl = cadenaContainer.querySelector('svg');
          if (svgEl) {
            svgEl.style.width = '100%';
            svgEl.style.minWidth = '850px';
            svgEl.style.height = 'auto';
          }
        }
      } catch (err) {
        console.error('Error renderizando Diagrama 2:', err);
      }
    },
    
    setDiagramTab(tab) {
      this.activeDiagramTab = tab;
      this.diagramZoom = 1.0;
    },
    
    zoomIn() {
      if (this.diagramZoom < 1.8) this.diagramZoom += 0.15;
    },
    
    zoomOut() {
      if (this.diagramZoom > 0.6) this.diagramZoom -= 0.15;
    },
    
    zoomReset() {
      this.diagramZoom = 1.0;
    },
    
    get activeMachine() {
      if (!this.data || !this.data.maquinaria) return null;
      return this.data.maquinaria.find(m => m.id === this.activeMachineId) || this.data.maquinaria[0];
    },
    
    get filteredGlossary() {
      if (!this.data || !this.data.glosario) return [];
      if (!this.searchGlossary.trim()) return this.data.glosario;
      const q = this.searchGlossary.toLowerCase();
      return this.data.glosario.filter(g => 
        g.termino.toLowerCase().includes(q) || g.definicion.toLowerCase().includes(q)
      );
    },
    
    get concurrencyResult() {
      if (!this.data || !this.data.maquinaria) return { compatible: false, message: '' };
      const m1 = this.data.maquinaria.find(m => m.id === this.selectedMachine1);
      const m2 = this.data.maquinaria.find(m => m.id === this.selectedMachine2);
      if (!m1 || !m2) return { compatible: false, message: '' };
      
      if (m1.id === m2.id) {
        return {
          compatible: true,
          badge: 'misma_maquina',
          color: 'blue',
          title: 'Mismo equipo seleccionado',
          message: `Estás evaluando la operación individual de ${m1.nombre}.`
        };
      }
      
      const m1IncompatibleWithM2 = (m1.incompatibles || []).includes(m2.id);
      const m2IncompatibleWithM1 = (m2.incompatibles || []).includes(m1.id);
      
      if (m1IncompatibleWithM2 || m2IncompatibleWithM1) {
        return {
          compatible: false,
          badge: 'incompatible',
          color: 'red',
          title: '⚠️ Concurrencia Incompatible bajo Generador',
          message: `NO se deben operar simultáneamente ${m1.nombre} y ${m2.nombre} bajo la planta diésel Iveco (28 kW PRP / 92A). Podría ocasionar caídas de tensión o sobrecarga térmica.`
        };
      } else {
        return {
          compatible: true,
          badge: 'compatible',
          color: 'emerald',
          title: '✅ Concurrencia Permitida con Supervisión',
          message: `Es viable operar simultáneamente ${m1.nombre} y ${m2.nombre} bajo generador respetando los límites de carga parcial y monitoreando el amperaje.`
        };
      }
    },
    
    openQr(form) {
      this.currentQrForm = form;
      this.qrModalOpen = true;
      this.$nextTick(() => {
        const container = document.getElementById('qr-canvas-container');
        if (container) {
          container.innerHTML = '';
          if (window.QRCode) {
            new QRCode(container, {
              text: form.url,
              width: 200,
              height: 200,
              colorDark: '#0f172a',
              colorLight: '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            });
          }
        }
      });
    },
    
    initChart() {
      const ctx = document.getElementById('chartProbabilidadCortes');
      if (!ctx || !window.Chart || !this.data || !this.data.estadistica_semanal) return;
      
      const diasOrdenados = [...this.data.estadistica_semanal].sort((a, b) => {
        const order = [1, 2, 3, 4, 5, 6, 0];
        return order.indexOf(a.dia_num) - order.indexOf(b.dia_num);
      });
      
      const labels = diasOrdenados.map(d => d.dia);
      const dataProb = diasOrdenados.map(d => d.probabilidad_semanal);
      const backgroundColors = diasOrdenados.map(d => {
        if (d.probabilidad_semanal >= 70) return 'rgba(244, 63, 94, 0.85)';
        if (d.probabilidad_semanal >= 50) return 'rgba(245, 158, 11, 0.85)';
        if (d.probabilidad_semanal > 0) return 'rgba(16, 185, 129, 0.85)';
        return 'rgba(148, 163, 184, 0.4)';
      });
      
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Probabilidad Semanal de Corte (%)',
            data: dataProb,
            backgroundColor: backgroundColors,
            borderRadius: 6,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => ` Probabilidad de corte: ${ctx.raw}%`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                color: '#94a3b8',
                callback: (v) => `${v}%`
              },
              grid: { color: 'rgba(51, 65, 85, 0.5)' }
            },
            x: {
              ticks: { color: '#cbd5e1', font: { weight: 'bold' } },
              grid: { display: false }
            }
          }
        }
      });
    }
  }));
});
