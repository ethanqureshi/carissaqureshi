import Reveal from "@/components/Reveal";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1040px] px-4 sm:px-8 ${className}`}>{children}</div>;
}

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <Container>
        <div className="border-t border-gold/70 py-16 sm:py-20">
          <Reveal>
            <h2 id={`${id}-heading`} className="mb-10 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {title}
            </h2>
          </Reveal>
          {children}
        </div>
      </Container>
    </section>
  );
}

export type EntryData = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  details?: string[];
  bullets?: string[];
};

export function EntryList({ entries }: { entries: EntryData[] }) {
  return (
    <ul className="divide-y divide-navy/10 border-t border-navy/10">
      {entries.map((e) => (
        <Reveal as="li" key={`${e.title}-${e.org}`} className="py-7">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <h3 className="font-serif text-xl font-semibold leading-snug sm:text-2xl">{e.title}</h3>
            <p className="shrink-0 text-sm text-navy/60 sm:text-right">{e.dates}</p>
          </div>
          <p className="mt-1 text-[15px] text-navy/80">
            {e.org}
            {e.location && <span className="text-navy/60">, {e.location}</span>}
          </p>
          {e.details && e.details.length > 0 && (
            <p className="mt-2 text-[15px] text-navy/80">{e.details.join(" · ")}</p>
          )}
          {e.bullets && e.bullets.length > 0 && (
            <ul className="mt-4 max-w-[68ch] space-y-2">
              {e.bullets.map((b) => (
                <li key={b} className="relative pl-5 text-[15px] leading-relaxed text-navy/85">
                  <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-gold" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ul>
  );
}
