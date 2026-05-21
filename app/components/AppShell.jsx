'use client';

import React from 'react';
import { AppProvider } from './AppProvider';
import { QuoteModal } from './QuoteModal';
import { SolarTweaks } from './SolarTweaks';
import { Navbar, Hero, ProblemSolution, HowItWorks } from './sections-top';
import { Products, AISection, AppMockup, Plans, Calculator } from './sections-mid';
import { Testimonials, FAQ, FinalCTA, Footer } from './sections-bot';

export default function AppShell() {
  return (
    <AppProvider>
      <div data-screen-label="Solar Landing">
        <Navbar />
        <main className="density-standard">
          <Hero />
          <ProblemSolution />
          <HowItWorks />
          <Products />
          <AISection />
          <AppMockup />
          <Plans />
          <Calculator />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <QuoteModal />
        <SolarTweaks />
      </div>
    </AppProvider>
  );
}
