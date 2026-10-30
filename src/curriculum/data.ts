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
    tagline: "Cómo usar el editor, los ejercicios y tu progreso.",
    accent: "primary",
    lessons: [
      L(
        "empieza-aqui",
        "Empieza aquí",
        "Corre tu primer programa y aprende a usar las predicciones y los ejercicios.",
        10,
        [
          "Correr, detener y reiniciar un ejemplo del curso.",
          "Escribir una predicción antes de correr el código y compararla con el resultado.",
          "Distinguir entre marcar una lección como vista y poder resolverla sin ayuda.",
        ],
        "00-orientacion",
      ),
    ],
  },
  {
    id: "como-piensa-un-programa",
    number: "01",
    title: "Cómo piensa un programa",
    tagline: "Instrucciones en orden, valores que se guardan y decisiones.",
    accent: "primary",
    lessons: [
      L(
        "que-es-un-programa",
        "Un programa es una receta que se sigue en orden",
        "Lee un programa línea por línea y predice lo que imprime.",
        15,
        [
          "Predecir qué imprime un programa de cinco líneas antes de correrlo.",
          "Usar console.log para ver un valor en cualquier punto del programa.",
          "Explicar por qué cambiar el orden de dos líneas cambia el resultado.",
        ],
        "01-como-piensa",
      ),
      L(
        "valores-y-variables",
        "Las variables son etiquetas para valores",
        "Guarda números, texto y verdadero/falso, y decide cuándo un valor puede cambiar.",
        20,
        [
          "Crear variables con números, texto y booleanos.",
          "Elegir entre const y let según si el valor debe cambiar.",
          "Rastrear el valor de una variable después de varias reasignaciones.",
        ],
        "01-como-piensa",
      ),
      L(
        "decisiones",
        "El programa decide con if y else",
        "Haz que el programa tome caminos distintos según los datos.",
        20,
        [
          "Escribir comparaciones con ===, <, > y combinarlas con && y ||.",
          "Predecir qué rama de un if/else se ejecuta para varias entradas.",
          "Reparar una condición que deja pasar un caso que no debería.",
        ],
        "01-como-piensa",
      ),
    ],
  },
  {
    id: "tipos",
    number: "02",
    title: "Tipos: el corrector que trabaja para ti",
    tagline: "TypeScript revisa tu código antes de que se ejecute.",
    accent: "primary",
    lessons: [
      L(
        "tipos-basicos",
        "Un tipo dice qué clase de valor cabe en una variable",
        "Anota tipos y lee tu primer error de TypeScript sin miedo.",
        20,
        [
          "Anotar variables con number, string y boolean.",
          "Leer un error de tipo e identificar la línea y la causa.",
          "Explicar la diferencia entre un error de tipo y un error al ejecutar.",
        ],
        "02-tipos",
      ),
      L(
        "inferencia",
        "TypeScript deduce la mayoría de los tipos",
        "Descubre cuándo hace falta escribir el tipo y cuándo no.",
        15,
        [
          "Predecir qué tipo deduce TypeScript para un valor.",
          "Decidir cuándo una anotación explícita aporta claridad.",
        ],
        "02-tipos",
      ),
      L(
        "funciones",
        "Una función es una receta con nombre, entradas y salida",
        "Empaqueta lógica en funciones con parámetros y valor de retorno tipados.",
        25,
        [
          "Escribir una función con parámetros tipados y un tipo de retorno.",
          "Distinguir entre imprimir un valor y devolverlo.",
          "Reparar una función que devuelve el tipo equivocado en un caso.",
        ],
        "02-tipos",
      ),
    ],
  },
  {
    id: "datos-con-forma",
    number: "03",
    title: "Datos con forma",
    tagline: "Objetos para describir cosas y listas para agruparlas.",
    accent: "secondary",
    lessons: [
      L(
        "objetos",
        "Un objeto agrupa los datos de una misma cosa",
        "Describe un paciente con sus propiedades y léelas o cámbialas.",
        20,
        [
          "Crear un objeto con varias propiedades y leer cada una.",
          "Describir la forma de un objeto con un tipo.",
          "Encontrar el error cuando falta una propiedad o tiene el tipo equivocado.",
        ],
        "03-datos",
      ),
      L(
        "listas",
        "Un array es una lista ordenada",
        "Guarda varias citas en una lista y accede a ellas por posición.",
        20,
        [
          "Crear un array tipado y leer elementos por su índice.",
          "Agregar elementos y consultar cuántos hay.",
          "Explicar por qué el primer elemento está en la posición 0.",
        ],
        "03-datos",
      ),
      L(
        "recorrer-listas",
        "Recorrer una lista para acumular un resultado",
        "Usa un ciclo para contar, sumar y buscar dentro de una lista.",
        25,
        [
          "Recorrer un array con for...of.",
          "Acumular un total o un conteo mientras recorres la lista.",
          "Reparar un ciclo que cuenta de más o de menos.",
        ],
        "03-datos",
      ),
      L(
        "map-filter",
        "Transformar y filtrar listas sin ciclos manuales",
        "Usa filter, map y reduce para responder preguntas sobre los datos.",
        30,
        [
          "Filtrar una lista con filter según una condición.",
          "Transformar cada elemento con map.",
          "Combinar filter y map para responder una pregunta de negocio.",
          "Elegir entre un ciclo for...of y map/filter para un caso dado.",
        ],
        "03-datos",
      ),
    ],
  },
  {
    id: "modelar",
    number: "04",
    title: "Modelar el mundo real",
    tagline: "Tipos propios que describen tu dominio y evitan estados imposibles.",
    accent: "secondary",
    lessons: [
      L(
        "tipos-propios",
        "Ponle nombre a la forma de tus datos",
        "Define tipos Paciente y Cita y reúsalos en todo el programa.",
        20,
        [
          "Declarar un tipo con type y usarlo en variables y funciones.",
          "Componer un tipo que contiene otro tipo.",
          "Cambiar un tipo y seguir los errores que aparecen hasta corregirlos todos.",
        ],
        "04-modelar",
      ),
      L(
        "uniones",
        "Un valor que puede ser una de varias opciones",
        "Modela estados como agendada, cancelada o atendida, y deja que TypeScript revise cada caso.",
        30,
        [
          "Declarar una unión de textos literales para un estado.",
          "Usar if o switch para tratar cada estado por separado.",
          "Explicar cómo TypeScript avisa cuando un caso queda sin tratar.",
        ],
        "04-modelar",
      ),
      L(
        "datos-que-faltan",
        "Datos que pueden faltar: opcionales y null",
        "Maneja el teléfono que nadie registró sin que el programa falle.",
        25,
        [
          "Marcar una propiedad como opcional.",
          "Revisar si un valor existe antes de usarlo.",
          "Reparar un programa que falla cuando un dato llega vacío.",
        ],
        "04-modelar",
      ),
    ],
  },
  {
    id: "cuando-falla",
    number: "05",
    title: "Cuando las cosas fallan",
    tagline: "Leer errores, encontrar la causa y desconfiar de los datos externos.",
    accent: "secondary",
    lessons: [
      L(
        "depurar",
        "Depurar es reducir el problema hasta encontrarlo",
        "Sigue un método para pasar de 'no funciona' a la línea que falla.",
        25,
        [
          "Reproducir un error con el caso más pequeño posible.",
          "Usar console.log para comparar lo que esperas con lo que pasa.",
          "Localizar y corregir un error de lógica en una función de varios pasos.",
        ],
        "05-cuando-falla",
      ),
      L(
        "datos-externos",
        "Los datos que llegan de afuera no traen garantías",
        "Lee datos en formato JSON y valida su forma antes de confiar en ellos.",
        30,
        [
          "Convertir texto JSON en objetos con JSON.parse.",
          "Explicar por qué el tipo unknown obliga a revisar los datos.",
          "Escribir una función que verifica si un dato tiene la forma de un Paciente.",
        ],
        "05-cuando-falla",
      ),
    ],
  },
  {
    id: "proyecto",
    number: "06",
    title: "Proyecto: la agenda del día",
    tagline: "Junta todo para construir un reporte real a partir de datos crudos.",
    accent: "primary",
    lessons: [
      L(
        "proyecto-agenda",
        "Construye el reporte diario de una agenda médica",
        "Recibe citas en JSON, valídalas y produce un resumen útil para la recepción.",
        45,
        [
          "Dividir un problema en funciones pequeñas con tipos claros.",
          "Validar, filtrar, agrupar y resumir datos reales.",
          "Explicar las decisiones de diseño de tu solución.",
        ],
        "06-proyecto",
      ),
      L(
        "siguiente-paso",
        "Lo que sigue: de programas a sistemas",
        "Repasa lo aprendido sin ayuda y mira cómo se conecta con Node y las APIs.",
        15,
        [
          "Resolver sin ayuda un ejercicio que combina tipos, listas y uniones.",
          "Describir qué es una API y por qué necesitarás Node para construirla.",
        ],
        "06-proyecto",
      ),
    ],
  },
];
