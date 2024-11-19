import {
  ApproachSection,
  CtaSection,
  HeroSection,
  PortfolioSection,
  StrategySection,
} from '@/components/sections/home';
import { jsonLd } from '@/config/seo/schema';

export default function Home() {
  return (
    <main id="homepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StrategySection />
      <ApproachSection />
      <PortfolioSection />
      <CtaSection />
    </main>
  );
}
