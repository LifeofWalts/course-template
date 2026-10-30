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
  brandName: "Ingeniería de software",
  brandTagline: "Conceptos y arquitectura desde primeros principios",
  crumb: "Ingeniería de software · Interactivo",
  documentTitle: "Ingeniería de software desde primeros principios",
  metaDescription:
    "Aprende diseño de código, estado, pruebas, APIs y arquitectura con ejemplos en TypeScript que puedes correr y cambiar.",

  storagePrefix: "ing-software",

  hero: {
    eyebrow: "Para quien viene de producto y quiere pensar como ingeniero",
    titleLead: "Entiende cómo se construye el software.",
    titleAccent: "Defiende tus decisiones de arquitectura.",
    lede:
      "Al terminar podrás leer un sistema y explicar cómo está organizado, discutir trade-offs de diseño con ingenieros y clientes, y construir una integración pequeña bien estructurada. Cada concepto se ve en código que corres, rompes y reparas.",
    primaryCtaStart: "Empezar el curso",
    primaryCtaResume: "Seguir donde quedé",
    ghostCta: "Cómo usar el curso",
    ghostCtaSlug: "empieza-aqui",
  },

  spotlight: null,

  pathSection: {
    heading: "La ruta",
    blurb:
      "Empiezas con el mínimo de código para leer ejemplos. Luego subes por capas: diseño de código, estado, calidad, sistemas que hablan entre sí y arquitectura. Terminas diseñando y construyendo una integración real.",
  },

  footer:
    "Tu progreso se guarda en este navegador. Los ejemplos necesitan conexión a internet; no pegues contraseñas ni datos reales de pacientes en los editores.",
};
