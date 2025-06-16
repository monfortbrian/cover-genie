import { useEffect } from 'react';
import CoverLetterForm from '@/components/CoverLetterForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoCarousel from '@/components/LogoCarousel';
import AnimatedSection from '@/components/AnimatedSection';
import bg from '../images/background.jpg';

const Index = () => {
  useEffect(() => {
    // Ensure page always starts at top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-white to-[#f9fafb] scroll-smooth">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative flex items-center justify-center h-screen w-full overflow-hidden px-4 rounded-b-[0px]"
        >
          {/* Background with Spline */}
          <div className="absolute inset-0 z-0 flex justify-end items-center">
            <div className="absolute inset-0 bg-black z-0" />
            <div className="w-[100vw] h-[100vh] z-10">
              <iframe
                src="https://my.spline.design/untitled-n5pwkJkhyJk8rt6sKEeWfUpQ/"
                frameBorder="0"
                width="150%"
                height="150%"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8">
            <div
              className="flex flex-col justify-center items-start w-full max-w-2xl"
              style={{ minHeight: '520px' }}
            >
              {/* Badge */}
              <AnimatedSection delay={200} direction="fade">
                <span className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 rounded-full px-4 py-1 mb-6 text-white border border-white/20 shadow-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  In Seed Raise Mode 🚀
                </span>
              </AnimatedSection>

              {/* TITLE (LEFT ALIGNED, ONE LINE) */}
              <AnimatedSection delay={400} direction="up">
                <h1
                  className="mb-4 text-white text-left"
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    letterSpacing: 0,
                    lineHeight: 1.1,
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                  }}
                >
                  Do good.{' '}
                  <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>
                    Better.
                  </span>
                </h1>
              </AnimatedSection>

              {/* SUBTITLE (TWO LINES, 20px, LEFT ALIGNED) */}
              <AnimatedSection delay={600} direction="up">
                <div
                  className="mb-7 text-left max-w-[550px]"
                  style={{
                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                    lineHeight: 1.35,
                    fontWeight: 400,
                    marginBottom: '18px',
                    background:
                      'linear-gradient(90deg,hsl(152, 95.50%, 43.90%) 0%,hsl(270, 93.40%, 70.40%) 50%, #ffffff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  <p>
                    Get noticed with AI-powered cover letter crafted
                    effortlessly to land your interviews. No more writer’s
                    block, just results.
                  </p>
                </div>
              </AnimatedSection>

              {/* BUTTONS */}
              <AnimatedSection delay={800} direction="up">
                <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
                  <a
                    href="#generate"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById('generate')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-400 text-white px-7 py-3 font-semibold text-base shadow-lg hover:bg-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto justify-center">
                      CREATE ONE 🡥
                    </span>
                  </a>
                  <a
                    href="mailto:briandev007@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-base bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
                  >
                    SAY HI 👋
                  </a>
                </div>
              </AnimatedSection>

              {/* TRUSTED BY LOGOS */}
              <AnimatedSection delay={1000} direction="fade">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-1 w-full max-w-md">
                  <span className="text-xs text-gray-400 tracking-widest uppercase whitespace-nowrap">
                    Trusted by:
                  </span>
                  <div className="w-full flex-1 max-w-[300px]">
                    <LogoCarousel />
                  </div>
                </div>
              </AnimatedSection>
            </div>
            {/* empty right to allow content to align left and have space */}
            <div className="flex-1" />
          </div>
        </section>
        {/* FORM SECTION */}
        <section
          id="generate"
          className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50/50 py-24"
        >
          <AnimatedSection
            delay={200}
            direction="up"
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Generate Your Letter in Seconds
            </h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              Fill out the form below and let our AI craft the perfect cover
              letter for you.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={400}
            direction="up"
            className="w-full max-w-2xl"
          >
            <CoverLetterForm />
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
