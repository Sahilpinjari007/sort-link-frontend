"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe2,
  Link2,
  QrCode,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Link2,
    title: "Smart link management",
    desc: "Bulk create, edit and organize thousands of links in workspaces.",
  },
  {
    icon: Sparkles,
    title: "Custom short URLs",
    desc: "Branded domains and memorable slugs for every campaign.",
  },
  {
    icon: QrCode,
    title: "QR code generator",
    desc: "Design beautiful QR codes with colors, logos and styles.",
  },
  {
    icon: Target,
    title: "Campaign tracking",
    desc: "Group links under campaigns and measure performance end-to-end.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    desc: "Live click streams, conversions and trends in one view.",
  },
  {
    icon: Globe2,
    title: "Geographic insights",
    desc: "Country, region and city level visitor breakdowns.",
  },
  {
    icon: Smartphone,
    title: "Device tracking",
    desc: "OS, device and browser intelligence on every click.",
  },
  {
    icon: Zap,
    title: "Referrer analytics",
    desc: "Know exactly where every click came from in real time.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    desc: "Workspaces, roles and shared link libraries for teams.",
  },
];

const trustedLogos = [
  "Acme",
  "Linear",
  "Notion",
  "Vercel",
  "Stripe",
  "Clerk",
  "Dub",
  "Webflow",
];

const trendData = Array.from({ length: 24 }).map((_, i) => ({
  d: `${i}:00`,
  v: Math.round(800 + Math.sin(i / 2) * 200 + Math.random() * 250),
  u: Math.round(400 + Math.cos(i / 3) * 120 + Math.random() * 150),
}));

const pricing = [
  {
    name: "Free",
    price: "$0",
    desc: "For makers exploring SortLink.",
    cta: "Start free",
    features: [
      "100 links / mo",
      "Basic analytics",
      "1 user",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    highlight: true,
    desc: "For growing teams and creators.",
    cta: "Start Pro trial",
    features: [
      "10k links / mo",
      "Advanced analytics",
      "QR customization",
      "5 team members",
      "Custom domain",
    ],
  },
  {
    name: "Business",
    price: "$79",
    desc: "For marketing teams at scale.",
    cta: "Talk to sales",
    features: [
      "Unlimited links",
      "Conversion tracking",
      "SSO & SAML",
      "Audit logs",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    q: "Can I use my own domain?",
    a: "Yes. Connect a custom domain on Pro and above with SSL provisioned automatically.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes — the Free plan includes 100 links a month and basic analytics.",
  },
  {
    q: "How does click tracking work?",
    a: "We track each click in real time and anonymize visitor data per GDPR best practices.",
  },
  {
    q: "Can I migrate from Bitly or Dub?",
    a: "Yes. Import your existing links via CSV or our API in under a minute.",
  },
];

export function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <Badge
            variant="outline"
            className="rounded-full border-border/80 px-3 py-1 text-xs font-medium"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            New — Conversion tracking is here
          </Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Shorten, track & grow{" "}
            <span className="brand-gradient-text">every link.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Create branded short links, QR codes and powerful analytics from a
            single platform built for modern marketing teams.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 rounded-xl px-6">
              <Link href="/auth/sign-up">
                Start free <ArrowRight className="ml-1.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-xl px-6"
            >
              <a href="#analytics">Watch demo</a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required · Free forever plan
          </p>
        </div>

        {/* Product preview */}
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative rounded-2xl border border-border/80 bg-card p-2 shadow-pop">
            <div className="rounded-xl border border-border/60 bg-background">
              <ProductPreview />
            </div>
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-4xl bg-linear-to-b from-foreground/5 to-transparent blur-2xl" />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by ambitious teams worldwide
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 opacity-70 sm:grid-cols-4 md:grid-cols-8">
            {trustedLogos.map((l) => (
              <div
                key={l}
                className="text-center text-sm font-semibold tracking-tight text-muted-foreground"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="rounded-full">
            Features
          </Badge>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to ship links that convert.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From short links and QR codes to deep analytics — SortLink replaces
            a stack of tools with one calm, powerful workspace.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card p-7 transition-colors hover:bg-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYTICS SHOWCASE */}
      <section id="analytics" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="rounded-full">
              Analytics
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Business intelligence baked into every link.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Watch traffic flow across countries, devices and referrers in real
              time. Slice by campaign, export anywhere.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Real-time click stream",
                "Geographic & device insights",
                "Conversion attribution",
                "Export to CSV / API",
              ].map((i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-emerald-500" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <Card className="rounded-2xl border-border/80 p-5 shadow-elevated">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  Clicks · Last 24h
                </p>
                <p className="mt-1 text-3xl font-semibold tracking-tight">
                  128,402
                </p>
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400">
                +12.4%
              </Badge>
            </div>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="var(--brand)"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--brand)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    stroke="var(--border)"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="d"
                    stroke="var(--muted-foreground)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="var(--muted-foreground)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke="var(--brand)"
                    strokeWidth={2}
                    fill="url(#g1)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="rounded-full">
            How it works
          </Badge>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Three steps to launch.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Create a link",
              d: "Paste a URL, set a slug, add UTM and protection in seconds.",
            },
            {
              n: "02",
              t: "Share anywhere",
              d: "Drop short links or QR codes into emails, ads and packaging.",
            },
            {
              n: "03",
              t: "Measure & grow",
              d: "Watch live analytics and iterate on what's working.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border/80 bg-card p-7"
            >
              <p className="text-sm font-mono text-muted-foreground">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                q: "SortLink replaced three tools we used to pay for. The analytics are stunning.",
                n: "Maya Chen",
                r: "Head of Growth, Northwind",
              },
              {
                q: "QR codes with our brand on packaging — completely changed our retention.",
                n: "Arjun Patel",
                r: "CMO, Loop Coffee",
              },
              {
                q: "The cleanest dashboard I've used since Linear. It just gets out of the way.",
                n: "Sofia Rivas",
                r: "PM, Halo Labs",
              },
            ].map((t) => (
              <Card key={t.n} className="rounded-2xl border-border/80 p-6">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <p className="mt-4 text-[15px] leading-relaxed">
                  &quot;{t.q}&quot;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <Badge variant="secondary" className="rounded-full">
            Pricing
          </Badge>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple, scalable pricing.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Start free. Upgrade when your team grows.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <Card
              key={p.name}
              className={`rounded-2xl p-7 ${p.highlight ? "border-foreground/40 shadow-pop ring-1 ring-foreground/10" : "border-border/80"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.highlight && <Badge className="rounded-full">Popular</Badge>}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <Button
                asChild
                className="mt-6 w-full rounded-lg"
                variant={p.highlight ? "default" : "outline"}
              >
                <Link href="/auth/sign-up">{p.cta}</Link>
              </Button>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-foreground" /> {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-foreground p-12 text-center text-background">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] grid-bg" />
          <h2 className="relative text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to ship better links?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md opacity-80">
            Join thousands of teams using SortLink to grow their reach.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-11 rounded-xl px-6"
            >
              <Link href="/auth/sign-up">Start free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-xl border-background/30 bg-transparent px-6 text-background hover:bg-background/10 hover:text-background"
            >
              <Link href="/auth/sign-in">Sign in</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 text-xs text-muted-foreground">
          app.sortlink.io / dashboard
        </span>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 hidden border-r border-border/60 bg-sidebar p-4 md:block">
          <div className="space-y-1">
            {[
              "Dashboard",
              "Links",
              "QR Codes",
              "Analytics",
              "Campaigns",
              "Settings",
            ].map((i, idx) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ${idx === 0 ? "bg-accent text-foreground" : "text-muted-foreground"}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-50" />{" "}
                {i}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 p-5 md:col-span-9">
          <div dir="ltr" data-orientation="horizontal" className="w-full">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
              tabIndex={0}
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-_R_19opaq_-content-overview"
                data-state="active"
                id="radix-_R_19opaq_-trigger-overview"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                tabIndex={0}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Overview
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_R_19opaq_-content-links"
                data-state="inactive"
                id="radix-_R_19opaq_-trigger-links"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Links
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_R_19opaq_-content-visitors"
                data-state="inactive"
                id="radix-_R_19opaq_-trigger-visitors"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Visitors
              </button>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_R_19opaq_-trigger-overview"
              id="radix-_R_19opaq_-content-overview"
              tabIndex={0}
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4"
              style={{}}
            >
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { l: "Clicks", v: "128.4k", d: "+12%" },
                  { l: "Links", v: "1,284", d: "+4%" },
                  { l: "QR Codes", v: "312", d: "+8%" },
                  { l: "Campaigns", v: "24", d: "+2%" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-lg border border-border/60 p-3"
                  >
                    <p className="text-[11px] text-muted-foreground">{s.l}</p>
                    <p className="mt-1 text-lg font-semibold tracking-tight">
                      {s.v}
                    </p>
                    <p className="text-[10px] text-emerald-500">{s.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-44 rounded-lg border border-border/60 p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="var(--foreground)"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="100%"
                          stopColor="var(--foreground)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      dataKey="v"
                      stroke="var(--foreground)"
                      strokeWidth={1.5}
                      fill="url(#g2)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
