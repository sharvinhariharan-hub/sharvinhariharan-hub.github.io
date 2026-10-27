/**
 * All public copy lives in this file.
 * Search for "TODO" before treating a line as finished.
 * Do not add facts, numbers, or project details that are not confirmed.
 */

export type Skill = {
  label: string;
};

export type SkillGroup = {
  heading: string;
  skills: Skill[];
  /** How he picks the discipline up. Not a proficiency claim. */
  lines: string[];
  /** First group gets more room on the page. */
  prominent?: boolean;
};

export type FooterLink = {
  label: string;
  href: string | null;
  /** Shown instead of a link when href is null. */
  todo?: string;
};

export const site = {
  name: "Sharvin Hariharan",
  school: "St. Joseph's CBSE School",
  place: "Nagercoil, Tamil Nadu",
  hero: "Sharvin Hariharan. Class XII. I build with AI tools and software, and I stay close to how the tech behaves.",
  meta: {
    title: "Sharvin Hariharan",
    description:
      "Class XII at St. Joseph's CBSE School, Nagercoil. I build with AI tools and software, and I stay close to how the tech behaves.",
  },
  about: {
    heading: "a bit on me",
    paragraphs: [
      "i'm sharvin. class xii at St. Joseph's CBSE School in Nagercoil, Tamil Nadu. i taught myself software and AI tools, and i tinker with electronics too.",
      "the part i care about is the tech. what a model will do, what it won't, how a page is actually put together. i love building projects. once something is open i stay with it until it works. pretty chill about it, and bad at leaving it half done.",
    ],
  },
  building: {
    heading: "how i think about building",
    paragraphs: [
      "i start from the user's problem. if i can't say what they're stuck on, the build is just me playing.",
      "then i prototype fast. a rough version i can actually try. i test it, see what breaks, and iterate.",
      "i want the tech deep enough to make the tradeoff. a quicker path that gets the behavior wrong isn't quicker. i'd rather know why something is hard before i cut it.",
    ],
  },
  learning: {
    heading: "how i learn",
    paragraphs: [
      "i'm self-taught. i learn by building. when something grabs me i go deep, and then i jump to the next field that looks interesting.",
      "what i'm into is the spread of it. software, hardware, and 3D. a page, a board, and a shape on screen are the same kind of curiosity to me.",
    ],
  },
  skills: {
    heading: "skills",
    groups: [
      {
        heading: "AI tools",
        prominent: true,
        skills: [{ label: "AI tools" }],
        lines: [
          "i build with AI tools, and i don't treat the output as finished. i read it, try it, and throw out the part that sounds right but isn't.",
          "a model is good at a first pass and bad at knowing my constraints. it can miss context, invent a confident detail, or drift when the task gets specific. i keep what i can check.",
          "the useful part is the limit. if i understand what it can and can't do, i know when to use it and when to just write the thing myself.",
        ],
      },
      {
        heading: "Dev stack",
        skills: [
          { label: "Next.js" },
          { label: "TypeScript" },
          { label: "React" },
          { label: "web development" },
        ],
        lines: [
          "I know the fundamentals of multiple programming languages, and I build across the stack. On the web I work in Next.js, TypeScript, and React, from the interface down to the behavior underneath.",
        ],
      },
      {
        heading: "Electronics & hardware",
        skills: [
          { label: "electronics" },
          { label: "microcontrollers" },
          { label: "sensors" },
          { label: "embedded systems" },
        ],
        lines: [
          "I work with all sorts of electronics, microcontrollers, sensors, and embedded systems. The work is understanding the system, building a prototype, and staying with it until the behavior is right.",
        ],
      },
      {
        heading: "Design",
        skills: [
          { label: "UI/UX" },
          { label: "Figma" },
          { label: "Blender" },
        ],
        lines: [
          "i start rough. a sketch, then the UI in Figma. i stay on the flow and the small details until using it feels easy.",
          "when i want to see the idea in 3D, i model it in Blender. then i hand it to code. a picture that never runs isn't finished.",
        ],
      },
    ] satisfies SkillGroup[],
  },
  wins: {
    heading: "wins",
    paragraphs: [
      "I have won multiple hackathons, and many robotics and science competitions.",
      "Those were builds under time pressure. I competed with prototypes that had to work in the room, and I presented them to judges. A lot of the work crossed software and hardware, so both sides had to hold together for the demo.",
    ],
  },
  hobbies: {
    heading: "outside the screen",
    paragraph:
      "Away from the screen I shoot archery and play badminton. Both ask for focus and for reflexes: settle, watch, then move. Reading feeds the curiosity. Building is where it comes together, the same attention pointed at something I can actually make.",
  },
  footer: {
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sharvinhariharan-hub",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sharvin-hariharan",
      },
      {
        label: "X",
        href: "https://x.com/Sharvinh8",
      },
      {
        label: "sharvinhariharan@gmail.com",
        href: "mailto:sharvinhariharan@gmail.com",
      },
    ] as FooterLink[],
    place: "Nagercoil, Tamil Nadu",
  },
};
