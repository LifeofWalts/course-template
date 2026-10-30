import type { Accent } from "./types";

/**
 * ============================================================
 *  THE COURSE MAP — your second-most-edited file (after lessons).
 * ============================================================
 *
 * Every lesson declares its intended MDX `file`. A lesson is
 * automatically "ready" the moment that file exists on disk (see
 * index.ts); until then it renders a placeholder listing its
 * objectives. So the workflow is:
 *
 *   1. Add an L(...) entry here under the right part.
 *   2. Create the .mdx file at the path it points to.
 *   3. It lights up. No registration, no imports.
 *
 * The three parts below are a worked example. Replace them with
 * your own — keep `00-orientation` as the on-ramp, then order parts
 * so each builds on the last. See docs/COURSE-PLAYBOOK.md.
 */

export interface RawLesson {
  slug: string;
  title: string;
  blurb: string;
  minutes: number;
  objectives: string[];
  file: string;
}
export interface RawPart {
  id: string;
  number: string;
  title: string;
  tagline: string;
  accent: Accent;
  lessons: RawLesson[];
}

const L = (
  slug: string,
  title: string,
  blurb: string,
  minutes: number,
  objectives: string[],
  folder: string,
): RawLesson => ({
  slug,
  title,
  blurb,
  minutes,
  objectives,
  file: `/src/lessons/${folder}/${slug}.mdx`,
});

export const PARTS: RawPart[] = [
  {
    id: "orientacion",
    number: "00",
    title: "Orientación",
    tagline: "Cómo usar el curso y qué significa avanzar de verdad.",
    accent: "primary",
    lessons: [
      L(
        "empieza-aqui",
        "Empieza aquí",
        "Corre tu primer ejemplo y aprende a usar predicciones, ejercicios y soluciones.",
        10,
        [
          "Correr, detener y reiniciar un ejemplo del curso.",
          "Escribir una predicción antes de correr el código y compararla con el resultado.",
          "Distinguir entre marcar una lección como vista y poder explicarla sin ayuda.",
        ],
        "00-orientacion",
      ),
    ],
  },
  {
    id: "lo-minimo",
    number: "01",
    title: "Lo mínimo para leer código",
    tagline: "Solo la sintaxis necesaria para ver los conceptos funcionar.",
    accent: "primary",
    lessons: [
      L(
        "leer-codigo",
        "Leer código es seguir una receta",
        "Variables, decisiones y funciones en una sola pasada, para leer más que memorizar.",
        25,
        [
          "Predecir qué imprime un programa corto antes de correrlo.",
          "Identificar en un programa sus variables, decisiones y funciones.",
          "Cambiar un valor y explicar por qué cambió el resultado.",
        ],
        "01-lo-minimo",
      ),
      L(
        "datos-y-contratos",
        "Los tipos son contratos entre partes del código",
        "Usa objetos, listas y tipos para describir datos y dejar que TypeScript haga cumplir el acuerdo.",
        25,
        [
          "Describir un paciente y una cita con tipos.",
          "Leer un error de tipo e identificar qué parte rompió el contrato.",
          "Explicar por qué un contrato explícito facilita el trabajo en equipo.",
        ],
        "01-lo-minimo",
      ),
    ],
  },
  {
    id: "diseno",
    number: "02",
    title: "Diseñar código que se puede cambiar",
    tagline: "Abstracción, responsabilidades y acoplamiento: por qué un cambio pequeño a veces rompe todo.",
    accent: "primary",
    lessons: [
      L(
        "abstraccion",
        "Una buena abstracción esconde el cómo y muestra el qué",
        "Agrupa detalles detrás de un nombre para pensar en un nivel más alto.",
        25,
        [
          "Extraer una función con un nombre que describe su propósito.",
          "Reconocer una abstracción que esconde demasiado o muy poco.",
          "Explicar cómo una abstracción reduce lo que necesitas tener en la cabeza.",
        ],
        "02-diseno",
      ),
      L(
        "responsabilidades",
        "Cada pieza debe tener una sola razón para cambiar",
        "Separa las reglas del negocio de la lectura de datos y de la presentación.",
        30,
        [
          "Separar un programa mezclado en reglas de negocio, entrada y salida.",
          "Predecir qué partes deben cambiar ante un nuevo requisito.",
          "Explicar el principio de responsabilidad única con un ejemplo propio.",
        ],
        "02-diseno",
      ),
      L(
        "acoplamiento",
        "Acoplamiento y cohesión: qué tanto dependen las piezas entre sí",
        "Mide el costo de un cambio por cuántas piezas obliga a tocar.",
        30,
        [
          "Identificar dependencias ocultas entre dos módulos.",
          "Reducir el acoplamiento pasando datos en vez de compartir estado.",
          "Comparar dos diseños por el costo de un mismo cambio.",
        ],
        "02-diseno",
      ),
      L(
        "modelar-dominio",
        "Haz que los estados imposibles no se puedan escribir",
        "Modela el dominio con tipos para que el compilador atrape errores de negocio.",
        30,
        [
          "Modelar los estados de una cita con una unión de tipos.",
          "Reemplazar varios booleanos contradictorios por un solo estado.",
          "Explicar cómo un buen modelo evita bugs antes de que existan.",
        ],
        "02-diseno",
      ),
    ],
  },
  {
    id: "estado",
    number: "03",
    title: "Estado y efectos",
    tagline: "Lo que el sistema recuerda y lo que cambia en el mundo.",
    accent: "secondary",
    lessons: [
      L(
        "estado",
        "El estado es lo que el sistema recuerda",
        "Descubre por qué el estado compartido y mutable causa los bugs más difíciles.",
        30,
        [
          "Rastrear cómo cambia un valor compartido entre dos funciones.",
          "Reparar un bug causado por modificar un dato que otra parte usaba.",
          "Explicar la diferencia entre copiar un valor y compartir una referencia.",
        ],
        "03-estado",
      ),
      L(
        "funciones-puras",
        "Funciones puras y efectos secundarios",
        "Separa el cálculo de las acciones para que tu lógica sea predecible.",
        25,
        [
          "Clasificar funciones en puras o con efectos secundarios.",
          "Empujar los efectos al borde del programa y dejar puro el núcleo.",
          "Explicar por qué una función pura es más fácil de probar.",
        ],
        "03-estado",
      ),
    ],
  },
  {
    id: "calidad",
    number: "04",
    title: "Calidad: cómo sabes que funciona",
    tagline: "Pruebas, errores y refactorización con red de seguridad.",
    accent: "secondary",
    lessons: [
      L(
        "pruebas",
        "Una prueba es una afirmación que la máquina revisa por ti",
        "Escribe pruebas automáticas y entiende qué demuestran y qué no.",
        30,
        [
          "Escribir pruebas para una regla de negocio.",
          "Encontrar el caso límite que una prueba existente no cubre.",
          "Explicar por qué pasar las pruebas no garantiza que el código sea correcto.",
        ],
        "04-calidad",
      ),
      L(
        "errores",
        "Fallar a propósito: errores esperados e inesperados",
        "Decide qué hacer cuando algo sale mal en lugar de esperar que no pase.",
        30,
        [
          "Distinguir un error esperado (dato inválido) de uno inesperado (bug).",
          "Devolver un resultado de éxito o error en vez de fallar en silencio.",
          "Reparar código que oculta un error y lo convierte en un dato equivocado.",
        ],
        "04-calidad",
      ),
      L(
        "refactorizar",
        "Refactorizar: cambiar la estructura sin cambiar el comportamiento",
        "Mejora código existente paso a paso, protegido por pruebas.",
        30,
        [
          "Refactorizar una función larga en pasos pequeños sin romper las pruebas.",
          "Reconocer señales de deuda técnica en un fragmento de código.",
          "Explicar a un no técnico cuándo vale la pena pagar la deuda técnica.",
        ],
        "04-calidad",
      ),
    ],
  },
  {
    id: "sistemas",
    number: "05",
    title: "Sistemas que hablan entre sí",
    tagline: "APIs, asincronía y fallas de red: el día a día de un forward deployed engineer.",
    accent: "primary",
    lessons: [
      L(
        "apis",
        "Una API es un contrato entre dos sistemas",
        "Construye un servidor pequeño y entiende peticiones, respuestas y códigos de estado.",
        35,
        [
          "Describir una petición HTTP: método, ruta, cuerpo y respuesta.",
          "Correr un servidor pequeño y elegir el código de estado correcto para cada caso.",
          "Explicar qué pasa cuando un lado cambia el contrato sin avisar.",
        ],
        "05-sistemas",
      ),
      L(
        "asincronia",
        "Esperar sin detenerse: código asíncrono",
        "Entiende promesas y async/await, y por qué el orden de ejecución sorprende.",
        30,
        [
          "Predecir el orden de impresión de código con async/await.",
          "Correr varias tareas en paralelo y esperar a que todas terminen.",
          "Reparar código que usa un resultado antes de que llegue.",
        ],
        "05-sistemas",
      ),
      L(
        "fallas-de-red",
        "La red siempre falla: tiempos de espera, reintentos e idempotencia",
        "Diseña integraciones que sobreviven a respuestas lentas, perdidas o duplicadas.",
        35,
        [
          "Agregar un tiempo límite y reintentos a una llamada que falla a veces.",
          "Explicar por qué reintentar un pago puede cobrar dos veces.",
          "Hacer una operación idempotente para que repetirla no cause daño.",
        ],
        "05-sistemas",
      ),
      L(
        "validar-en-la-frontera",
        "Valida en la frontera, confía adentro",
        "Recibe datos de un sistema externo, valida su forma y conviértelos a tu modelo.",
        30,
        [
          "Validar datos externos de forma desconocida antes de usarlos.",
          "Traducir el formato de otro sistema a tu modelo de dominio.",
          "Explicar por qué la validación vive en el borde del sistema.",
        ],
        "05-sistemas",
      ),
    ],
  },
  {
    id: "arquitectura",
    number: "06",
    title: "Arquitectura y escala",
    tagline: "Capas, datos, caché y colas: las decisiones que se discuten en una pizarra.",
    accent: "secondary",
    lessons: [
      L(
        "capas",
        "Arquitectura en capas: monolito, módulos y microservicios",
        "Compara formas de organizar un sistema y lo que cada una cuesta.",
        30,
        [
          "Organizar un programa en capas de presentación, negocio y datos.",
          "Comparar monolito y microservicios para un caso concreto.",
          "Defender una decisión de arquitectura con sus ventajas y costos.",
        ],
        "06-arquitectura",
      ),
      L(
        "bases-de-datos",
        "Las bases de datos guardan la verdad del sistema",
        "Modela tablas, consulta con SQL y usa transacciones para no dejar datos a medias.",
        35,
        [
          "Modelar pacientes y citas en tablas relacionadas.",
          "Consultar datos con SQL para responder una pregunta de negocio.",
          "Usar una transacción para que una operación de varios pasos sea todo o nada.",
        ],
        "06-arquitectura",
      ),
      L(
        "cache-y-colas",
        "Caché y colas: velocidad a cambio de consistencia",
        "Simula una caché y una cola para ver qué ganas y qué arriesgas.",
        35,
        [
          "Agregar una caché a una consulta lenta y medir la diferencia.",
          "Encontrar el bug de una caché que sirve datos viejos.",
          "Explicar cuándo una cola desacopla dos sistemas.",
        ],
        "06-arquitectura",
      ),
      L(
        "escalar",
        "¿Qué pasa con diez veces más usuarios?",
        "Encuentra cuellos de botella y razona sobre trade-offs de escala.",
        30,
        [
          "Identificar el cuello de botella de un sistema simulado.",
          "Estimar el impacto de una decisión con números aproximados.",
          "Explicar el trade-off entre consistencia, disponibilidad y costo.",
        ],
        "06-arquitectura",
      ),
    ],
  },
  {
    id: "proyecto",
    number: "07",
    title: "Proyecto: diseña y construye una integración",
    tagline: "De un problema de cliente a un diseño defendible y código que funciona.",
    accent: "primary",
    lessons: [
      L(
        "documento-de-diseno",
        "Escribe el documento de diseño antes del código",
        "Integra la agenda de una clínica con un sistema externo: requisitos, opciones y decisión.",
        40,
        [
          "Redactar un documento de diseño con contexto, opciones y decisión.",
          "Registrar una decisión de arquitectura con sus consecuencias.",
          "Anticipar las fallas principales de la integración.",
        ],
        "07-proyecto",
      ),
      L(
        "construir-la-integracion",
        "Construye la integración",
        "Implementa tu diseño: valida, transforma, maneja fallas y pruébalo.",
        50,
        [
          "Implementar la integración separando dominio, frontera y efectos.",
          "Probar los casos felices y los casos de falla.",
          "Comparar lo construido con el diseño y explicar las diferencias.",
        ],
        "07-proyecto",
      ),
      L(
        "pensar-como-ingeniero",
        "Pensar como ingeniero frente al cliente",
        "Repasa sin ayuda y practica explicar trade-offs a personas técnicas y no técnicas.",
        20,
        [
          "Resolver sin ayuda un problema que combina diseño, errores y APIs.",
          "Explicar un trade-off técnico en lenguaje de negocio.",
          "Identificar qué estudiar después según tus vacíos.",
        ],
        "07-proyecto",
      ),
    ],
  },
];
