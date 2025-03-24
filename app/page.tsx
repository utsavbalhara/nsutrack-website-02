import Image from "next/image"
import Link from "next/link"
import { Calendar, CheckCircle, Clock, FileText, Bell, Download, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactDialog } from "@/components/contact-dialog"
import { PrivacyDialog } from "@/components/privacy-dialog"
import { TermsDialog } from "@/components/terms-dialog"

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-0 font-bold text-xl">
              <Image src="/images/logo-dark.png" alt="NSUTrack Logo" width={32} height={32} className="rounded-md" />
              <span className="text-primary">NSUT</span>rack
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium hover:text-primary">
                Features
              </Link>
              <Link href="#planned" className="text-sm font-medium hover:text-primary">
                Planned
              </Link>
              <Link href="#comparison" className="text-sm font-medium hover:text-primary">
                Why NSUTrack?
              </Link>
            </nav>
            <Button variant="outline">Coming Soon</Button>
          </div>
        </header>
        <main className="flex-1">
          <section className="container py-12 space-y-8 md:py-16">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Your NSUT Life, <span className="text-primary">Simplified</span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Fast, intuitive, and feature-rich. NSUTrack brings your schedule, attendance, exam results, admit card and circulars right to
                your fingertips.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="https://instagram.com/nsutrack.systems" target="_blank" className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                    Follow @nsutrack.systems
                  </Link>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-bold">Lightning Fast:</span> App loads in just 1.8 seconds, no captcha needed
              </div>

            </div>
          </section>

          <section className="relative h-[70vh] overflow-hidden">
            <div className="sticky top-0 h-[68vh] flex items-center justify-center">
              <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="app-screenshot-container">
                    <div className="app-screenshot">
                      <Image
                        src="/images/home-dark.png"
                        width={380}
                        height={780}
                        alt="NSUTrack App Home Screen"
                        className="rounded-3xl border-[12px] border-black bg-black shadow-2xl w-[320px] md:w-[380px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="container py-12 space-y-8 bg-muted/50 rounded-3xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose NSUTrack?</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                See how NSUTrack compares to other solutions.
              </p>
            </div>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border">
              <div className="grid grid-cols-4 border-b bg-muted/50">
                <div className="p-4 font-medium">Feature</div>
                <div className="p-4 font-medium text-center">NSUTrack</div>
                <div className="p-4 font-medium text-center">IMS Portal</div>
                <div className="p-4 font-medium text-center whitespace-normal break-words">Chat Bot</div>
              </div>
              {[
                { feature: "Speed", nsutrack: true, ims: false, whatsapp: false },
                { feature: "Live Schedule", nsutrack: true, ims: false, whatsapp: false },
                { feature: "Detailed Attendance", nsutrack: true, ims: true, whatsapp: true },
                { feature: "Exam Results", nsutrack: true, ims: true, whatsapp: false },
                { feature: "Admit Cards", nsutrack: true, ims: true, whatsapp: false },
                { feature: "Notifications", nsutrack: true, ims: false, whatsapp: false },
                { feature: "Circulars", nsutrack: true, ims: true, whatsapp: false },
                { feature: "Offline Access", nsutrack: true, ims: false, whatsapp: false },
                { feature: "User-friendly UI", nsutrack: true, ims: false, whatsapp: false },
                { feature: "Auto-Login", nsutrack: true, ims: false, whatsapp: false },
                { feature: "No-captcha", nsutrack: true, ims: false, whatsapp: true },
                { feature: "No-Ads", nsutrack: true, ims: true, whatsapp: false }
              ].map((row, index) => (
                  <div key={index} className={`grid grid-cols-4 ${index % 2 === 1 ? "bg-muted/20" : ""}`}>
                    <div className="p-4">{row.feature}</div>
                    <div className="p-4 flex justify-center">
                      {row.nsutrack ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                          <span className="h-5 w-5 text-red-500">✕</span>
                      )}
                    </div>
                    <div className="p-4 flex justify-center">
                      {row.ims ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                          <span className="h-5 w-5 text-red-500">✕</span>
                      )}
                    </div>
                    <div className="p-4 flex justify-center">
                      {row.whatsapp ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                          <span className="h-5 w-5 text-red-500">✕</span>
                      )}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          <section id="planned" className="container py-24 space-y-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coming Soon</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                We're constantly improving NSUTrack with new features.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="backdrop-blur-sm bg-background/80">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <h3 className="text-xl font-bold">Event Tracking</h3>
                    <p className="text-muted-foreground">
                      Stay updated with all campus events and never miss out on opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-background/80">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <h3 className="text-xl font-bold">Social Features</h3>
                    <p className="text-muted-foreground">
                      Connect with classmates, share notes, and collaborate on projects.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-background/80">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <h3 className="text-xl font-bold">IMS Integration</h3>
                    <p className="text-muted-foreground">
                      Streamlined access to IMS services and information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="container py-24 space-y-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get NSUTrack Today</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Be among the first NSUT students to try our new college app and make campus life easier!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="https://instagram.com/nsutrack.systems" target="_blank" className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                    Follow @nsutrack.systems
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 NSUTrack. All rights reserved.
            </p>
            <div className="flex gap-4">
              <PrivacyDialog />
              <TermsDialog />
              <ContactDialog />
            </div>
          </div>
        </footer>
      </div>
  )
}

