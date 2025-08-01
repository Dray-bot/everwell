import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingSection from '@/components/Pricing';
import BlogSection from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Features />
      <PricingSection />
      <BlogSection />
      <CTA />
      <Footer />
    </div>
    </>
  );
}
