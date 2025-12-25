import { Hero } from './components/Hero';
import { AboutSnapshot } from './components/AboutSnapshot';
import { StatsSection } from './components/StatsSection';
import { ServicesOverview } from './components/ServicesOverview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { CallToAction } from './components/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <StatsSection />
      <ServicesOverview />
      <ProcessSection />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}
