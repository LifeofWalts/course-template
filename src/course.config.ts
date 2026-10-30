/**
 * ============================================================
 *  THE ONE FILE YOU EDIT TO REBRAND A NEW COURSE.
 * ============================================================
 *
 * Everything course-specific that *isn't* a lesson lives here:
 * the name in the sidebar, the hero copy on the home page, the
 * landing-page sections, and the localStorage namespace.
 *
 * Change these strings, write your lessons + curriculum map
 * (src/curriculum/data.ts), and you have a new course. You should
 * not need to touch the components, the layout, or the styles.
 */

export interface CourseConfig {
  /** Short brand shown in the sidebar logo, e.g. "Postgres". */
  brandName: string;
  playground?: { defaultPreset?: import("./components/ui/playground/types").PresetId };
  /** Sub-line under the brand, e.g. "From Tables to Transactions". */
  brandTagline: string;
  /** Breadcrumb text in the top bar — usually "<brand> <tagline>". */
  crumb: string;
  /** Browser tab / <title> text and meta description. */
  documentTitle: string;
  metaDescription: string;

  /**
   * Namespace for localStorage keys (theme + progress). Keep it unique
   * per course so two courses served from the same origin don't clash.
   * e.g. "postgres-course".
   */
  storagePrefix: string;

  /** The landing page. All copy lives here so the home page stays generic. */
  hero: {
    eyebrow: string;
    /** The title is split so the second clause can carry the accent gradient. */
    titleLead: string;
    titleAccent: string;
    lede: string;
    primaryCtaStart: string;
    primaryCtaResume: string;
    /** Optional secondary button. Omit `ghostCta` to hide it. */
    ghostCta?: string;
    /** Slug the ghost button links to (must exist in the curriculum). */
    ghostCtaSlug?: string;
  };

  /**
   * Optional "what this really covers" section — a list of weighted bars.
   * In the reference course this was "what the interview actually asks".
   * Reuse it for anything rankable (topic emphasis, exam weighting, …),
   * or set to `null` to hide the whole section.
   */
  spotlight: {
    heading: string;
    blurb: string;
    rows: { label: string; pct: number; note: string }[];
  } | null;

  /** Heading + blurb for the auto-generated "parts" grid. */
  pathSection: {
    heading: string;
    blurb: string;
  };

  /** Small print at the bottom of the home page. */
  footer: string;
}

export const course: CourseConfig = {
  playground: { defaultPreset: "typescript" },
  brandName: "TypeScript",
  brandTagline: "Desde cero hasta datos reales",
  crumb: "TypeScript · Desde cero",
  documentTitle: "TypeScript desde cero — curso interactivo",
  metaDescription:
    "Aprende a leer, escribir y depurar programas en TypeScript con ejemplos que puedes correr y ejercicios con solución explicada.",

  storagePrefix: "ts-desde-cero",

  hero: {
    eyebrow: "Curso interactivo para quien nunca ha programado",
    titleLead: "Escribe programas que entiendes.",
    titleAccent: "Lee los errores sin miedo.",
    lede:
      "Al terminar podrás escribir y depurar programas pequeños en TypeScript que reciben datos reales, como las citas de una clínica, los validan y producen un reporte útil. Cada lección tiene código que corres, cambias y comparas con tus predicciones.",
    primaryCtaStart: "Empezar el curso",
    primaryCtaResume: "Seguir donde quedé",
    ghostCta: "Cómo usar el curso",
    ghostCtaSlug: "empieza-aqui",
  },

  spotlight: null,

  pathSection: {
    heading: "La ruta",
    blurb:
      "Empiezas por cómo piensa un programa, sumas los tipos de TypeScript, aprendes a trabajar con listas de datos y terminas construyendo un reporte real. No necesitas experiencia previa programando.",
  },

  footer:
    "Tu progreso se guarda en este navegador. Los ejemplos necesitan conexión a internet; no pegues contraseñas ni datos reales de pacientes en los editores.",
};
