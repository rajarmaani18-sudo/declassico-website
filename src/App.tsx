/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { initTouchInteractions } from './utils/touchInteractions';
import { TickerBanner } from './components/TickerBanner';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ExploreDesignsSection } from './components/ExploreDesignsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { GallerySection } from './components/GallerySection';
import { PromiseSection } from './components/PromiseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GrowthMetricsSection } from './components/GrowthMetricsSection';
import { YourBrandSection } from './components/YourBrandSection';
import { NeedAssistanceSection } from './components/NeedAssistanceSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { QuoteModal } from './components/QuoteModal';
import { FaqModal } from './components/FaqModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string>('');

  useEffect(() => {
    const cleanup = initTouchInteractions();
    return cleanup;
  }, []);

  const handleOpenQuote = (category?: string) => {
    if (category) {
      setQuoteCategory(category);
    }
    setIsQuoteOpen(true);
  };

  return (
    <div className="bg-black m-0 p-0 select-none min-h-screen flex flex-col font-sans">
      {/* 1. TOP: TRENDING BOTTLE DESIGNS TICKER */}
      <TickerBanner />

      {/* 2. DIRECTLY BELOW: BLACK DECLASSICO HEADER */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      {/* 3. HERO CAROUSEL SECTION */}
      <main className="flex-1 flex flex-col">
        <HeroCarousel onOpenQuote={() => handleOpenQuote()} />

        {/* 4. WHY CHOOSE CUSTOM BOTTLED WATER? */}
        <WhyChooseSection />

        {/* 5. EXPLORE OUR BOTTLE DESIGNS */}
        <ExploreDesignsSection
          onSelectCategory={(cat) => handleOpenQuote(cat)}
        />

        {/* 6. HOW IT WORKS */}
        <HowItWorksSection />

        {/* 7. OUR GALLERY */}
        <GallerySection />

        {/* 8. OUR PROMISE */}
        <PromiseSection />

        {/* 9. TESTIMONIALS SECTION */}
        <TestimonialsSection />

        {/* 10. GROWTH METRICS */}
        <GrowthMetricsSection />

        {/* 11. YOUR BRAND. YOUR BOTTLE. */}
        <YourBrandSection onOpenQuote={() => handleOpenQuote()} />

        {/* 12. STILL HAVE QUESTIONS? WE'RE HERE TO HELP. */}
        <NeedAssistanceSection
          onOpenFaq={() => setIsFaqOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* 13. FOOTER */}
      <Footer />

      {/* MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialRequirementFor={quoteCategory}
      />

      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
