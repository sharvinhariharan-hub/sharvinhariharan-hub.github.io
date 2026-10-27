import { HeroScene } from "@/components/hero-scene";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div className="mx-auto w-full max-w-5xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <header className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_17rem] sm:gap-12">
          <div>
            <h1 className="max-w-3xl text-balance font-serif text-[clamp(2.35rem,5.4vw,3.7rem)] leading-[1.05] tracking-[-0.03em]">
              {site.hero}
            </h1>
            <p className="mt-6 text-sm text-muted sm:mt-8">
              {site.school}, {site.place}
            </p>
          </div>
          <HeroScene />
        </header>

        <main id="content" className="mt-20 max-w-2xl space-y-20 sm:mt-28">
          <section aria-labelledby="about-heading">
            <h2
              id="about-heading"
              className="font-mono text-[0.8rem] text-faint"
            >
              {site.about.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-pretty">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="building-heading">
            <h2
              id="building-heading"
              className="font-mono text-[0.8rem] text-faint"
            >
              {site.building.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-pretty">
              {site.building.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="learning-heading">
            <h2
              id="learning-heading"
              className="font-mono text-[0.8rem] text-faint"
            >
              {site.learning.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-pretty">
              {site.learning.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="font-mono text-[0.8rem] text-faint"
            >
              {site.skills.heading}
            </h2>
            <div className="mt-8 space-y-10">
              {site.skills.groups.map((group) => (
                <article
                  key={group.heading}
                  className={
                    group.prominent
                      ? "rounded-2xl border border-line bg-card px-5 py-6 sm:px-6"
                      : "border-t border-line pt-8"
                  }
                >
                  <h3
                    className={
                      group.prominent
                        ? "text-2xl tracking-[-0.02em]"
                        : "text-xl tracking-[-0.02em]"
                    }
                  >
                    {group.heading}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.label}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.72rem] text-muted"
                      >
                        {skill.label}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-3 text-pretty leading-relaxed text-muted">
                    {group.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="wins-heading"
            className="border-t border-line pt-10"
          >
            <h2 id="wins-heading" className="font-mono text-[0.8rem] text-faint">
              {site.wins.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-pretty">
              {site.wins.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="hobbies" aria-labelledby="hobbies-heading">
            <h2
              id="hobbies-heading"
              className="font-mono text-[0.8rem] text-faint"
            >
              {site.hobbies.heading}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-pretty">
              {site.hobbies.paragraph}
            </p>
          </section>
        </main>

        <footer className="mt-20 flex max-w-2xl flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {site.footer.links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline decoration-line underline-offset-4 hover:decoration-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span className="font-mono text-[0.75rem] text-todo">
                    {link.todo}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-sm text-faint">{site.footer.place}</p>
        </footer>
      </div>
    </>
  );
}
