import { createFileRoute } from "@tanstack/react-router";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Check, Gauge, Route as RouteIcon, ShieldCheck, Wallet } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViRouter — One API for the world's leading models" },
      {
        name: "description",
        content:
          "Smart routing, transparent pricing. Reach Claude, OpenAI, DeepSeek, Gemini, Qwen and more through one OpenAI-compatible endpoint.",
      },
      {
        property: "og:title",
        content: "ViRouter — One API for the world's leading models",
      },
      {
        property: "og:description",
        content:
          "Smart routing, transparent pricing. One endpoint for every top AI model.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: RouteIcon,
    title: "Smart routing",
    body: "Every request lands on the fastest healthy provider, with automatic failover between models.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    body: "Per-token cost shown before and after each call. No hidden markup, no surprise invoices.",
  },
  {
    icon: Gauge,
    title: "Low latency",
    body: "Edge-deployed gateway with connection reuse and streaming passthrough on every route.",
  },
  {
    icon: ShieldCheck,
    title: "Drop-in compatible",
    body: "OpenAI-compatible API — change the base URL and your existing SDK keeps working.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/month",
    blurb: "Try every model with a single key.",
    features: ["1M tokens included", "All supported models", "Community support", "Usage dashboard"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "/month",
    blurb: "For teams shipping to production.",
    features: [
      "50M tokens included",
      "Smart routing & failover",
      "Priority throughput",
      "API keys per project",
      "Email support",
    ],
    cta: "Get Pro",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    blurb: "Volume pricing and dedicated capacity.",
    features: ["Unlimited tokens", "Dedicated routing pool", "SLA & audit logs", "Private deployment"],
    cta: "Talk to us",
    featured: false,
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-25%] h-[70vh] bg-[radial-gradient(55%_50%_at_50%_50%,color-mix(in_oklch,var(--color-primary)_22%,transparent),transparent_70%)] blur-2xl"
      />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <span className="text-base font-semibold tracking-tight text-foreground">
          Vi<span className="text-primary">Router</span>
        </span>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#models" className="transition-colors hover:text-foreground">
            Models
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get started
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pt-16 pb-14 text-center sm:pt-24">
        <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          Unified AI gateway
        </span>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          One API connecting the world&rsquo;s{" "}
          <span className="text-primary">leading models</span>
        </h1>
        <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          Smart routing, transparent pricing.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start building
          </a>
          <a
            href="#features"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Marquee */}
      <section id="models" className="relative pb-24">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Supported providers
        </p>
        <LogoMarquee />
      </section>

      {/* Features */}
      <section id="features" className="relative mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <f.icon className="size-5 text-primary" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative mx-auto max-w-6xl px-5 pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple plans, transparent cost
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Pay for what you route. Upgrade or cancel at any time.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                plan.featured
                  ? "border-primary/50 bg-card shadow-[0_24px_70px_-40px_color-mix(in_oklch,var(--color-primary)_80%,transparent)]"
                  : "border-border bg-card/60"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-muted-foreground">{plan.cadence}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.blurb}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#pricing"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-secondary text-secondary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>
            Vi<span className="text-primary">Router</span> — one API for every AI model.
          </span>
          <span>© {new Date().getFullYear()} ViRouter</span>
        </div>
      </footer>
    </main>
  );
}
