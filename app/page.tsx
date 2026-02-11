import Hero from '@/components/Hero';
import WhatIsOpenClaw from '@/components/WhatIsOpenClaw';
import Packages from '@/components/Packages';
import WhyMe from '@/components/WhyMe';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <WhatIsOpenClaw />
      <Packages />
      <WhyMe />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  );
}
