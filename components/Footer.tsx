export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/10 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-base text-white/50">
          Carissa <span className="text-gold-500/70">Qureshi</span>
        </p>
        <p className="font-sans text-xs text-white/30 tracking-wide">
          &copy; {new Date().getFullYear()} &middot; carissaqureshi.com
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:carissadaniellequreshi@gmail.com"
            className="text-xs font-sans tracking-widest uppercase text-white/30 hover:text-gold-400 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/carissa-qureshi-a34914208/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-widest uppercase text-white/30 hover:text-gold-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
