import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const EMAIL = "carissadaniellequreshi@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/carissa-qureshi-a34914208/";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <p className="max-w-[62ch] text-base leading-relaxed text-navy/85 sm:text-lg">
          Seeking policy and legal internship roles. Open to introductions, informational interviews, and opportunities.
        </p>
      </Reveal>

      <Reveal>
        <dl className="mt-10 border-t border-navy/10 text-[15px]">
          <div className="grid gap-1 border-b border-navy/10 py-4 sm:grid-cols-[180px_1fr] sm:gap-8">
            <dt className="text-xs uppercase tracking-[0.15em] text-navy/55 sm:pt-1">Email</dt>
            <dd>
              <a href={`mailto:${EMAIL}`} className="break-all underline decoration-gold underline-offset-4">
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="grid gap-1 border-b border-navy/10 py-4 sm:grid-cols-[180px_1fr] sm:gap-8">
            <dt className="text-xs uppercase tracking-[0.15em] text-navy/55 sm:pt-1">LinkedIn</dt>
            <dd>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-4">
                linkedin.com/in/carissa-qureshi
              </a>
            </dd>
          </div>
          <div className="grid gap-1 border-b border-navy/10 py-4 sm:grid-cols-[180px_1fr] sm:gap-8">
            <dt className="text-xs uppercase tracking-[0.15em] text-navy/55 sm:pt-1">Location</dt>
            <dd>Washington, D.C. area</dd>
          </div>
        </dl>
      </Reveal>

      <Reveal>
        <a
          href="/Carissa-Qureshi-Resume.pdf"
          download
          className="mt-10 inline-block border border-navy px-6 py-3 text-sm tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream"
        >
          Download resume (PDF)
        </a>
      </Reveal>
    </Section>
  );
}
