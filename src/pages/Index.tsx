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
  const [animateGrid, setAnimateGrid] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
    // Small delay before triggering bento grid animations
    setTimeout(() => setAnimateGrid(true), 50);
    setTimeout(() => setIsLoading(false), 100);
  };

  // Bento grid staggered animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-foreground">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={animateGrid ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <Header />
        </motion.div>
        <main>
          <motion.div variants={itemVariants}>
            <Hero />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MatchTicker />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NewsSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MatchesSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <PlayersSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <AboutSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StrategySection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TableSocialSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ShopSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SponsorsSection />
          </motion.div>
        </main>
        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
