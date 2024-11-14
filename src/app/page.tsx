import {
  ApproachSection,
  HeroSection,
  StrategySection,
} from '@/components/sections/home';

export default function Home() {
  return (
    <main id="homepage">
      <HeroSection />
      <StrategySection />
      <ApproachSection />
    </main>
  );
}
