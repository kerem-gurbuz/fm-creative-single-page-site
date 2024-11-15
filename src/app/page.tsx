import {
  ApproachSection,
  HeroSection,
  PortfolioSection,
  StrategySection,
} from '@/components/sections/home';

export default function Home() {
  return (
    <main id="homepage">
      <HeroSection />
      <StrategySection />
      <ApproachSection />
      <PortfolioSection />
    </main>
  );
}
