import { Container } from "@/components/Section";
import Year from "@/components/Year";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col gap-3 border-t border-gold/70 py-10 text-sm text-navy/60 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="font-serif text-lg text-navy">Carissa Qureshi</p>
          <p>
            &copy; <Year fallback={new Date().getFullYear()} /> · carissaqureshi.com
          </p>
          <div className="flex gap-6">
            <a href="mailto:carissadaniellequreshi@gmail.com" className="hover:text-navy">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/carissa-qureshi-a34914208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="pb-10 text-xs text-navy/50">Logos are trademarks of their respective owners.</p>
      </Container>
    </footer>
  );
}
