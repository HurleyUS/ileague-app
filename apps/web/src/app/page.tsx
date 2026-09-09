import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import {
  Trophy,
  Users,
  Zap,
  Heart,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const features = [
  {
    icon: Trophy,
    title: "Leagues",
    description: "Create and join leagues with leaderboards — wired to Convex where shipped.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Follow creators, posts, and fan engagement flows in the web app.",
  },
  {
    icon: Zap,
    title: "Exclusive content",
    description: "Subscriber-oriented posts and creator tooling as the product matures.",
  },
  {
    icon: Heart,
    title: "Creator monetization",
    description: "Stripe Connect paths exist in the backend; treat payouts as early-access.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="container">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-6 gap-2">
                <Sparkles className="h-3 w-3" />
                Early access — honest status lander
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Where <span className="gradient-text">creators</span> and{" "}
                <span className="gradient-text">fans</span> build leagues together
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
                iLeague is an influencer / fan engagement monorepo (Next.js web, Expo
                mobile, Convex backend). This is a real product lander — not a
                &quot;Coming Soon&quot; waitlist shell and not a page of invented metrics.
              </p>

              <div className="mb-8 w-full max-w-2xl rounded-xl border border-border bg-muted/40 p-5 text-left text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">What is true today</p>
                <ul className="space-y-1.5">
                  <li>• Web app + Convex backend with auth, leagues, posts, and Stripe scaffolding</li>
                  <li>• Mobile app exists; some screens still use placeholder data</li>
                  <li>
                    • Production domain <code className="text-foreground">www.ileague.app</code> may
                    still point at an old static Coming Soon deploy until DNS/Vercel is retargeted
                    (DEPLOY)
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <Button variant="gradient" size="xl" className="gap-2">
                      Get started
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </SignUpButton>
                  <Link href="/explore">
                    <Button variant="outline" size="xl">
                      Explore
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard">
                    <Button variant="gradient" size="xl" className="gap-2">
                      Go to Dashboard
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </SignedIn>
                <a
                  href="https://github.com/HurleyUS/ileague-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="xl" className="gap-2">
                    <Github className="h-5 w-5" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 border-t border-border">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Product surface (no vanity stats)
              </h2>
              <p className="text-lg text-muted-foreground">
                Features below describe the intended product. We do not publish fake
                creator counts, revenue, or testimonials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="group hover:border-primary/50">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display font-bold mb-4">Docs &amp; roadmap</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                {
                  href: "https://github.com/HurleyUS/ileague-app/blob/main/README.md",
                  label: "README — stack and project structure",
                },
                {
                  href: "https://github.com/HurleyUS/ileague-app/blob/main/ROADMAP.md",
                  label: "ROADMAP — audited working / partial / missing items",
                },
                {
                  href: "https://github.com/HurleyUS/ileague-app/blob/main/PLAN.md",
                  label: "PLAN — phased delivery notes",
                },
              ].map((item) => (
                <li key={item.href} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <a
                    href={item.href}
                    className="hover:text-foreground underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="container text-center max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to try the app?</h2>
            <p className="text-muted-foreground mb-8">
              Sign up in the Next app. If the apex domain still shows Coming Soon, that is
              a deploy/DNS mismatch — the product lander lives in this repository.
            </p>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="gradient" size="xl" className="gap-2">
                  Create an account
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="gradient" size="xl">
                  Open dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
