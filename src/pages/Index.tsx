import CoverLetterForm from '@/components/CoverLetterForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoCarousel from '@/components/LogoCarousel';
import { ArrowRight } from 'lucide-react';
import bg from '../images/background.jpg';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-white to-[#f9fafb]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen overflow-hidden flex items-center justify-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="absolute inset-0">
            <img
              src={bg}
              alt="Professional document on a desk"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          {/* CONTENT LEFT-ALIGNED */}
          <div className="relative z-10 w-full max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8">
            <div
              className="flex flex-col justify-center items-start w-full max-w-2xl"
              style={{ minHeight: '520px' }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 rounded-full px-4 py-1 mb-6 text-white border border-white/20 shadow-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Seed Capital was closed
              </span>

              {/* TITLE (LEFT ALIGNED, ONE LINE) */}
              <h1
                className="mb-4 text-white text-left"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 500,
                  fontSize: '48px',
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

              {/* SUBTITLE (TWO LINES, 20px, LEFT ALIGNED) */}
              <div
                className="mb-7 text-left"
                style={{
                  fontSize: '20px',
                  color: '#e5e7eb',
                  lineHeight: 1.35,
                  fontWeight: 400,
                  marginBottom: '18px',
                  maxWidth: 550,
                }}
              >
                <p>
                  Our AI-powered tool generates professional, personalized cover
                  letters
                </p>
                <p>to help you land your dream job. No more writer's block.</p>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mb-8">
                <a href="#generate">
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-400 text-white px-7 py-3 font-semibold text-base shadow-lg hover:bg-green-500 transition-transform duration-200 hover:-translate-y-1">
                    GET STARTED 🡥
                  </span>
                </a>
                <a
                  href="mailto:briandev007@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-base bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                >
                  Contact
                </a>
              </div>

              {/* TRUSTED BY LOGOS */}
              <div className="flex items-center gap-4 mt-1 w-full max-w-md">
                <span className="text-xs text-gray-400 tracking-widest uppercase whitespace-nowrap mr-2">
                  Trusted by:
                </span>
                <div className="w-full flex-1 max-w-[250px]">
                  <LogoCarousel />
                </div>
              </div>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Generate Your Letter in Seconds
            </h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              Fill out the form below and let our AI craft the perfect cover
              letter for you.
            </p>
          </div>
          <div className="w-full max-w-2xl">
            <CoverLetterForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
