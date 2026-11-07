import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/Section";

const figures = [
  { value: "4.0 GPA", label: "North Central College, double major" },
  { value: "2x Team USA", label: "U20 World Team, 2024 and 2025" },
  { value: "Silver", label: "2025 U20 Pan-American Championships" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-28 sm:pt-36">
      <Container>
        <div className="grid gap-10 pb-16 sm:pb-20 md:grid-cols-[1fr_240px] md:gap-14">
          <div id="about">
            <Reveal>
              <p className="text-[13px] leading-relaxed tracking-wide text-navy/65">
                Political Science &amp; Criminology · North Central College · Prospective M.A., International Relations
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
                Carissa Qureshi
              </h1>
            </Reveal>
            <Reveal>
              <div className="mt-7 h-px w-16 bg-gold" aria-hidden />
              <p className="mt-7 max-w-[62ch] text-base leading-relaxed text-navy/85 sm:text-lg">
                Political science and criminology student preparing to study how institutions, law, and governance shape
                security and justice across borders. A two-time U.S. U20 World Team member, she has represented the
                United States internationally while excelling academically, and brings policy research and writing skills
                grounded in criminal justice reform work.
              </p>
            </Reveal>
          </div>

          <Reveal className="order-first md:order-none">
            <div className="relative aspect-[4/5] w-40 sm:w-52 md:w-full">
              <Image
                src="/hero-headshot.png"
                alt="Portrait of Carissa Qureshi"
                fill
                sizes="(min-width: 768px) 240px, 208px"
                className="object-cover object-top"
                preload
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <ul className="grid border-y border-gold/70 sm:grid-cols-3">
            {figures.map((f, i) => (
              <li
                key={f.value}
                className={`py-6 sm:px-6 sm:first:pl-0 ${i > 0 ? "border-t border-navy/10 sm:border-l sm:border-t-0 sm:border-l-gold/70" : ""}`}
              >
                <p className="font-serif text-3xl font-medium sm:text-4xl">{f.value}</p>
                <p className="mt-1 text-sm text-navy/65">{f.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="py-8 text-[15px] text-navy/80">Seeking policy and legal internship roles.</p>
        </Reveal>
      </Container>
    </section>
  );
}
