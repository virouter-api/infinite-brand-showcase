import { useState } from "react";

export type Brand = {
  name: string;
  src?: string;
};

const ICON = (file: string) => `https://icon.xiaoge.org/images/ai/${file}`;

export const defaultBrands: Brand[] = [
  { name: "Claude", src: ICON("Claude.png") },
  { name: "OpenAI", src: ICON("ChatGPT.png") },
  { name: "Moonshot AI", src: ICON("Moonshot.png") },
  { name: "DeepSeek", src: ICON("DeepSeek.png") },
  { name: "Z.ai", src: ICON("Zhipu.png") },
  { name: "MiniMax", src: ICON("Minimax.png") },
  { name: "Seedance", src: ICON("Doubao.png") },
  { name: "X.ai", src: ICON("Grok.png") },
  { name: "Claude Code", src: ICON("Claude-Code.png") },
  { name: "Codex", src: ICON("Codex.png") },
  { name: "ChatGPT", src: ICON("ChatGPT-2.png") },
  { name: "Gemini", src: ICON("Gemini.png") },
  { name: "Qwen", src: ICON("Qwen.png") },
  { name: "Kimi", src: ICON("Kimi.png") },
  { name: "Hermes Agent", src: ICON("Hermes-Agent.png") },
];

function BrandPill({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);
  const showImg = brand.src && !failed;

  return (
    <li className="marquee-pill">
      {showImg ? (
        <img
          src={brand.src}
          alt={`${brand.name} logo`}
          loading="lazy"
          decoding="async"
          width={28}
          height={28}
          className="size-6 shrink-0 rounded-md object-contain sm:size-7"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent text-[0.65rem] font-semibold text-accent-foreground sm:size-7">
          {brand.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-medium tracking-tight text-foreground sm:text-base">
        {brand.name}
      </span>
    </li>
  );
}

function MarqueeRow({
  brands,
  reverse = false,
  duration = 42,
}: {
  brands: Brand[];
  reverse?: boolean;
  duration?: number;
}) {
  const items = brands.length < 10 ? [...brands, ...brands] : brands;
  return (
    <div className="marquee-row group" aria-label="Supported AI providers">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className="marquee-track"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {items.map((brand, i) => (
            <BrandPill key={`${copy}-${i}-${brand.name}`} brand={brand} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export function LogoMarquee({ brands = defaultBrands }: { brands?: Brand[] }) {
  const mid = Math.ceil(brands.length / 2);
  const top = brands.slice(0, mid);
  const bottom = brands.slice(mid);

  return (
    <div className="marquee-mask flex flex-col gap-3 sm:gap-4">
      <MarqueeRow brands={top} duration={38} />
      <MarqueeRow brands={bottom} reverse duration={46} />
    </div>
  );
}

export default LogoMarquee;
