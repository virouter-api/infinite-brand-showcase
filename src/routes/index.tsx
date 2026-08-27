import { createFileRoute } from "@tanstack/react-router";
import { LogoMarquee } from "@/components/LogoMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViRouter — One API for every AI model" },
      {
        name: "description",
        content:
          "ViRouter routes your prompts across Anthropic, OpenAI, DeepSeek, Gemini, Qwen and more through a single fast, reliable API.",
      },
      { property: "og:title", content: "ViRouter — One API for every AI model" },
      {
        property: "og:description",
        content:
          "Route prompts across Anthropic, OpenAI, DeepSeek, Gemini, Qwen and more through one unified API.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-20%] h-[60vh] bg-[radial-gradient(60%_50%_at_50%_50%,color-mix(in_oklch,var(--color-primary)_22%,transparent),transparent_70%)] blur-2xl"
      />

      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pt-24 pb-16 text-center sm:pt-32">
        <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          Unified AI gateway
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          One API for every <span className="text-primary">AI model</span>
        </h1>
        <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          ViRouter kết nối bạn tới các mô hình hàng đầu thế giới qua một endpoint duy nhất —
          nhanh, ổn định, tiết kiệm.
        </p>
      </section>

      <section className="relative pb-28">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Hỗ trợ các nhà cung cấp hàng đầu
        </p>
        <LogoMarquee />
      </section>
    </main>
  );
}
