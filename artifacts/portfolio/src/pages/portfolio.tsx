import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CustomCursor from '@/components/CustomCursor';

// Below-the-fold sections are lazy-loaded to reduce initial bundle size.
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const Projects = lazy(() => import('@/components/Projects'));
const Skills = lazy(() => import('@/components/Skills'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

function SectionFallback() {
  return null;
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Services />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

