import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero4 } from '@/components/Hero4';
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

const Index4 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />

      {!isLoading && (
        <>
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero4 />
            <MatchTicker />
            <NewsSection />
            <MatchesSection />
            <PlayersSection />
            <AboutSection />
            <StrategySection />
            <TableSocialSection />
            <ShopSection />
            <SponsorsSection />
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Index4;
