import Hero from '../components/Hero';
import ServiceGrid from '../components/ServiceGrid';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function NewHome() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <StatsSection />
      <TestimonialsSection />
      <ProcessTimeline />
      <CTASection />
      <Footer />
    </>
  );
}
