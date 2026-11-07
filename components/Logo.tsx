import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Renders a locally stored logo from /public/logos/<file> at a fixed 28px height, in grayscale.
 * Falls back to the organization's name in small-caps serif when the file is missing.
 * Logos are never fetched from the web; drop files into /public/logos to enable them.
 *
 * Expected files (any of .svg, .png, .webp, .jpg is accepted if `file` has no extension):
 *   usa-wrestling, uww, cif, north-central-college, uccs, golden-west-college,
 *   marina-high-school, gracie-barra, stateville-speaks, partners-for-success
 */

const LOGO_DIR = path.join(process.cwd(), "public", "logos");
const EXTENSIONS = [".svg", ".png", ".webp", ".jpg", ".jpeg"];

function resolveLogo(file: string): string | null {
  const candidates = path.extname(file) ? [file] : EXTENSIONS.map((ext) => file + ext);
  for (const candidate of candidates) {
    if (fs.existsSync(path.join(LOGO_DIR, candidate))) return candidate;
  }
  return null;
}

type LogoProps = {
  file: string;
  name: string;
  className?: string;
};

export default function Logo({ file, name, className = "" }: LogoProps) {
  const resolved = resolveLogo(file);

  if (!resolved) {
    return (
      <span
        className={`inline-flex h-7 items-center font-serif text-base tracking-wide text-navy/70 [font-variant-caps:all-small-caps] ${className}`}
      >
        {name}
      </span>
    );
  }

  return (
    <Image
      src={`/logos/${resolved}`}
      alt={`${name} logo`}
      height={28}
      width={140}
      unoptimized={resolved.endsWith(".svg")}
      className={`h-7 w-auto grayscale opacity-80 ${className}`}
    />
  );
}
