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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
