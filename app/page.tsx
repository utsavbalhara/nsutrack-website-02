// Add this line at the very top to enable client-side hooks
'use client';

import { useState, useEffect } from 'react'; // Import hooks
import Image from "next/image"
import Link from "next/link"
// Removed Instagram from lucide imports
import { Calendar, CheckCircle, Clock, FileText, Bell, Download } from "lucide-react"

// Removed Button import as it might not be needed if other buttons are also removed/changed
// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactDialog } from "@/components/contact-dialog"
import { PrivacyDialog } from "@/components/privacy-dialog"
import { TermsDialog } from "@/components/terms-dialog"

// Countdown Timer Component (Adapted for IST & Large Size)
const CountdownTimer = () => {
  // Target Date: April 9th, 2025, 17:00:00 IST (UTC+5:30) -> 5 PM IST
  // *** IMPORTANT: Update '2025' to the correct launch year if different ***
  const targetDate = new Date('2025-04-09T17:00:00+05:30'); // Updated time to 17:00

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isLaunched, setIsLaunched] = useState(+targetDate <= +new Date());

  useEffect(() => {
    if (isLaunched) return;
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (+targetDate <= +new Date()) {
        setIsLaunched(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="my-10 text-center">
      {isLaunched ? (
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary animate-pulse">Available Now!</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-baseline gap-4 sm:gap-6 md:gap-8 font-mono tracking-tighter">
            <div className="text-center"><span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary">{formatTime(timeLeft.days)}</span><span className="mt-1 block text-sm sm:text-base font-medium text-muted-foreground">DAYS</span></div>
            <span className="text-4xl sm:text-5xl md:text-6xl text-muted-foreground/50">:</span>
            <div className="text-center"><span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary">{formatTime(timeLeft.hours)}</span><span className="mt-1 block text-sm sm:text-base font-medium text-muted-foreground">HOURS</span></div>
            <span className="text-4xl sm:text-5xl md:text-6xl text-muted-foreground/50">:</span>
            <div className="text-center"><span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary">{formatTime(timeLeft.minutes)}</span><span className="mt-1 block text-sm sm:text-base font-medium text-muted-foreground">MINUTES</span></div>
            <span className="text-4xl sm:text-5xl md:text-6xl text-muted-foreground/50">:</span>
            <div className="text-center"><span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary tabular-nums">{formatTime(timeLeft.seconds)}</span><span className="mt-1 block text-sm sm:text-base font-medium text-muted-foreground">SECONDS</span></div>
          </div>
          {/* Updated subtitle text */}
          <p className="mt-4 text-lg text-muted-foreground">Until Launch (April 9th, 5 PM IST)</p>
        </>
      )}
    </div>
  );
};


export default function Home() {
  return (
      <div className="flex min-h-screen flex-col bg-background">
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center font-bold text-xl">
              <Image src="/images/logo-dark.png" alt="NSUTrack Logo" width={32} height={32} className="rounded-md mr-1.5"/>
              <span className="text-primary">NSUT</span><span>rack</span>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
              <Link href="#planned" className="text-sm font-medium hover:text-primary">Planned</Link>
              <Link href="#comparison" className="text-sm font-medium hover:text-primary">Why NSUTrack?</Link>
            </nav>
            {/* Removed Header Button */}
             <div className="w-[98px]"></div> {/* Placeholder to keep layout balanced */}
          </div>
        </header>
        <main className="flex-1">
          {/* === HERO SECTION START === */}
          <section className="container py-12 space-y-6 md:py-16">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Your NSUT Life, <span className="text-primary">Simplified</span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Fast, intuitive, and feature-rich. NSUTrack brings your schedule, attendance, exam results, admit card and circulars right to
                your fingertips. <span className="font-semibold text-primary">Preorder Now!</span>
              </p>

              <CountdownTimer />

              {/* === HERO CTA: Only Badge + Android Image === */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                 {/* App Store Badge Image Link */}
                 <Link href="https://apps.apple.com/in/app/nsutrack/id6743798718" target="_blank" rel="noopener noreferrer">
                   <Image
                     src="/images/Pre-order_on_the_App_Store_Badge.png"
                     alt="Pre-order on the App Store Badge"
                     width={180}
                     height={60}
                     className="inline-block hover:opacity-90 transition-opacity"
                   />
                 </Link>

                 {/* Android Coming Soon Image */}
                 <Image
                     src="/images/comingsoonandroid.png"
                     alt="Android Coming Soon"
                     width={160}
                     height={54}
                     className="h-auto"
                  />
              </div>
              {/* === HERO CTA END === */}

              <div className="text-sm text-muted-foreground pt-4">
                <span className="font-bold">Lightning Fast:</span> App loads in ~1.8 seconds, no captcha needed.
              </div>
            </div>
          </section>
          {/* === HERO SECTION END === */}

          {/* --- Existing sections remain the same --- */}
          <section className="relative h-[70vh] overflow-hidden">
            <div className="sticky top-0 h-[68vh] flex items-center justify-center">
              <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="app-screenshot-container">
                    <div className="app-screenshot">
                      <Image src="/images/home-dark.png" width={380} height={780} alt="NSUTrack App Home Screen" className="rounded-3xl border-[12px] border-black bg-black shadow-2xl w-[320px] md:w-[380px] h-auto"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="comparison" className="container py-12 space-y-8 bg-muted/50 rounded-3xl">
            {/* Comparison content unchanged */}
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose NSUTrack?</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">See how NSUTrack compares to other solutions.</p>
            </div>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border">
              <div className="grid grid-cols-4 border-b bg-muted/50">
                <div className="p-4 font-medium">Feature</div><div className="p-4 font-medium text-center">NSUTrack</div><div className="p-4 font-medium text-center">IMS Portal</div><div className="p-4 font-medium text-center whitespace-normal break-words">Chat Bot</div>
              </div>
              {[
                { feature: "Speed", nsutrack: true, ims: false, whatsapp: false }, { feature: "Live Schedule", nsutrack: true, ims: false, whatsapp: false }, { feature: "Detailed Attendance", nsutrack: true, ims: true, whatsapp: true }, { feature: "Exam Results", nsutrack: true, ims: true, whatsapp: false }, { feature: "Admit Cards", nsutrack: true, ims: true, whatsapp: false }, { feature: "Notifications", nsutrack: true, ims: false, whatsapp: false }, { feature: "Circulars", nsutrack: true, ims: true, whatsapp: false }, { feature: "Offline Access", nsutrack: true, ims: false, whatsapp: false }, { feature: "User-friendly UI", nsutrack: true, ims: false, whatsapp: false }, { feature: "Auto-Login", nsutrack: true, ims: false, whatsapp: false }, { feature: "No-captcha", nsutrack: true, ims: false, whatsapp: true }, { feature: "No-Ads", nsutrack: true, ims: true, whatsapp: false }
              ].map((row, index) => (
                  <div key={index} className={`grid grid-cols-4 items-center ${index % 2 === 1 ? "bg-muted/20" : ""}`}>
                    <div className="p-3 sm:p-4 text-sm sm:text-base">{row.feature}</div>
                    <div className="p-3 sm:p-4 flex justify-center">{row.nsutrack ? ( <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" /> ) : ( <span className="h-4 w-4 sm:h-5 sm:w-5 text-red-500">✕</span> )}</div>
                    <div className="p-3 sm:p-4 flex justify-center">{row.ims ? ( <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" /> ) : ( <span className="h-4 w-4 sm:h-5 sm:w-5 text-red-500">✕</span> )}</div>
                    <div className="p-3 sm:p-4 flex justify-center">{row.whatsapp ? ( <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" /> ) : ( <span className="h-4 w-4 sm:h-5 sm:w-5 text-red-500">✕</span> )}</div>
                  </div>
              ))}
            </div>
          </section>

          <section id="planned" className="container py-24 space-y-8">
             {/* Planned features content unchanged */}
             <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coming Soon</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">We're constantly improving NSUTrack with new features.</p>
            </div>
            <div className="mx-auto grid gap-4 md:grid-cols-3 max-w-3xl">
              {[
                { title: "Event Tracking", description: "Stay updated with all campus events and never miss out." }, { title: "Social Features", description: "Connect with classmates, share notes, and collaborate." }, { title: "IMS Integration", description: "Streamlined access to IMS services and information." }
              ].map((feature) => (
                <Card key={feature.title} className="backdrop-blur-sm bg-background/80">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <h3 className="text-xl font-bold">{feature.title}</h3><p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          {/* --- Existing sections end --- */}


          {/* === FINAL CTA Section MODIFIED === */}
          <section className="container py-24 space-y-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Ready for NSUTrack!</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Click the badge below to preorder NSUTrack on the App Store and be the first to experience a simplified campus life! Android version coming soon.
              </p>
              {/* Final CTA: Only Badge + Android Image */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
                 {/* App Store Badge Image Link */}
                 <Link href="https://apps.apple.com/in/app/nsutrack/id6743798718" target="_blank" rel="noopener noreferrer">
                   <Image
                     src="/images/Pre-order_on_the_App_Store_Badge.png"
                     alt="Pre-order on the App Store Badge"
                     width={180}
                     height={60}
                     className="inline-block hover:opacity-90 transition-opacity"
                   />
                 </Link>

                 {/* Android Coming Soon Image */}
                 <Image
                     src="/images/comingsoonandroid.png"
                     alt="Android Coming Soon"
                     width={160}
                     height={54}
                     className="h-auto"
                  />
              </div>
            </div>
          </section>
          {/* === FINAL CTA Section END === */}


        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© 2025 NSUTrack. All rights reserved.</p> {/* Ensure year is correct */}
            <div className="flex gap-4">
              <PrivacyDialog /> <TermsDialog /> <ContactDialog />
              {/* Instagram link permanently removed */}
            </div>
          </div>
        </footer>
      </div>
  )
}