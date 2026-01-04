import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MatchTicker } from '@/components/MatchTicker';
import { NewsSection } from '@/components/NewsSection';
import { MatchesSection } from '@/components/MatchesSection';
import { PlayersSection } from '@/components/PlayersSection';
import { AboutSection } from '@/components/AboutSection';
import { StrategySection } from '@/components/StrategySection';
import { TableSocialSection } from '@/components/TableSocialSection';
import { ShopSection } from '@/components/ShopSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { Footer } from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Header />
        <main>
          <Hero />
          <MatchTicker />
          <NewsSection />
          <MatchesSection />
          <PlayersSection />
          <AboutSection />
          <StrategySection />
          <TableSocialSection />
          <ShopSection />
          <SponsorsSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
