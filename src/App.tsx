import { useState, useEffect } from 'react';
import AnoAI from './components/ui/animated-shader-background';
import { Spotlight } from './components/ui/spotlight';
import { Marquee } from './components/ui/marquee';
import { TrendingUp, Globe, BarChart3 } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsPastHero(window.scrollY > window.innerHeight * 1.05);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fbfbf9] w-full min-h-screen overflow-x-hidden">

      {/* Header (Sticky & Frosted Glass on Scroll) */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled
          ? isPastHero
            ? 'bg-[#fbfbf9]/80 py-4'
            : 'bg-transparent py-4'
          : 'bg-transparent py-5 mt-4'
          }`}
        style={{
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="flex w-full max-w-[2000px] mx-auto items-center justify-between px-5 md:px-[44px] max-[768px]:px-6">
          {/* Logo Group */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src="/assets/Logo.svg"
              alt="ExWord Growth Logo"
              className="h-[26px] w-auto transition-all duration-300 group-hover:scale-105"
              style={{ filter: isPastHero ? 'brightness(0)' : 'brightness(0) invert(1)' }}
            />
            <span className={`font-['Instrument_Serif'] text-[24px] mt-1 font-normal tracking-tight leading-none transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]' : 'text-white'}`}>
              ExWord Growth
            </span>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex items-center gap-10 absolute left-1/2 -translate-x-1/2 max-[768px]:hidden">
            <a href="#" className={`flex items-center gap-1.5 no-underline text-[14px] font-sans font-normal tracking-wide transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]/80 hover:text-[#1B0624]' : 'text-white/90 hover:text-white'}`}>
              Product
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 mt-[2px]">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" className={`no-underline text-[14px] font-sans font-normal tracking-wide transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]/80 hover:text-[#1B0624]' : 'text-white/90 hover:text-white'}`}>
              Company
            </a>
          </nav>

          <div className="flex items-center justify-end w-[130px] max-[768px]:hidden">
            <button className={`font-sans font-medium text-[12px] px-5 py-2.5 rounded-[1000px] border border-transparent cursor-pointer transition-all duration-300 ${isPastHero ? 'bg-[#1B0624] text-white hover:bg-black' : 'bg-white text-[#000] hover:bg-[#000] hover:text-[#fff] hover:border-white/20'}`}>
              Talk to us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button className={`hidden max-[768px]:flex items-center justify-center bg-transparent border-none transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]' : 'text-white'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Extra-tall absolute background that bleeds seamlessly into the next section */}
      <div
        className="absolute top-0 left-0 right-0 h-[115vh] pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/neom-gVDUuJaG_wM-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 65%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <AnoAI />
        {/* Soft Dark Gradient at top/middle to keep white text readable against the bright sky */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 30%, transparent 100%)' }}
        />
        {/* Bottom Fade Gradient blending the image effortlessly into the off-white paper background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[30vh]"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(251,251,249,0.4) 70%, #fbfbf9 100%)' }}
        />
      </div>

      {/* Content Section Overlay */}
      <section className="relative z-10 flex flex-col min-h-screen">

        {/* Main Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-start text-center px-6 pt-[18vh] max-[768px]:pt-[12vh] max-[768px]:justify-start">

          <h1
            className="font-['Instrument_Serif'] font-light leading-[1.1] mb-5 text-white drop-shadow-xl opacity-0 animate-fade-up anim-delay-300 relative z-20"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
              maxWidth: '1200px'
            }}
          >
            AI–era organic growth<br />for your SaaS.
          </h1>

          <p className="font-sans text-[12px] md:text-[14px] leading-[1.6] text-white/70 font-light tracking-wide max-w-[680px] mb-8 opacity-0 animate-fade-up anim-delay-500 max-[768px]:px-4 relative z-20">
            Search is no longer just ten blue links. Buyers see AI overviews, answer boxes, and summaries long before they ever click a result. ExWord Growth designs SEO and GEO strategies so your product is the answer those systems trust - from Google's AI experiences to LLM-powered research tools.
          </p>

          <button className="relative z-20 bg-white text-[#000] font-sans font-medium text-[14px] px-[22px] py-[10px] rounded-[1000px] border border-transparent cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-colors duration-200 hover:bg-[#000] hover:text-[#fff] hover:border-white/20 hover:shadow-none opacity-0 animate-fade-up anim-delay-700">
            Book a growth session
          </button>

        </main>
      </section>

      {/* Logos Strip - Infinite Scrolling Marquee */}
      <section className="relative z-10 w-full pt-[20vh] pb-20 opacity-0 animate-fade-in anim-delay-1200">

        {/* We wrap the Marquee strictly inside its own relative container and use a clean CSS mask-image for edge fading, avoiding overlap with the Hero fade padding! */}
        <div
          className="relative overflow-hidden w-full flex items-center h-20"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >

          <Marquee baseVelocity={50}>
            {/* We map the sequence of logos 10 times to guarantee the primary content block is wider than any possible physical monitor resolution, creating a perfect mathematical loop */}
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center gap-24 opacity-40 px-12">
                <div className="flex items-center gap-2.5 font-sans font-semibold text-base tracking-widest text-[#1B0624]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-auto">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1B0624" />
                    <circle cx="9" cy="12" r="3" fill="#fbfbf9" />
                    <path d="M9 12L16 8M9 12L15 17" stroke="#fbfbf9" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>POSTMAN</span>
                </div>

                <div className="flex items-center gap-2.5 font-sans font-semibold text-base tracking-widest text-[#1B0624]">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-auto">
                    <path d="M0.5 8C0.5 4 4.5 1 10.5 1C17 1 20 4 23.5 8C20 12 17 15 10.5 15C4.5 15 0.5 12 0.5 8Z" stroke="#1B0624" strokeWidth="2" />
                    <path d="M7 8H17" stroke="#1B0624" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>DOORDASH</span>
                </div>

                <div className="flex items-center gap-2.5 font-sans font-semibold text-base tracking-widest text-[#1B0624]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-auto">
                    <path d="M12 2L16 6L12 10L8 6L12 2Z" fill="#1B0624" />
                    <path d="M12 14L16 18L12 22L8 18L12 14Z" fill="#1B0624" />
                    <path d="M5 9L9 13L5 17L1 13L5 9Z" fill="#1B0624" />
                    <path d="M19 9L23 13L19 17L15 13L19 9Z" fill="#1B0624" />
                  </svg>
                  <span>BINANCE</span>
                </div>

                <div className="flex items-center gap-2.5 font-sans font-bold text-base text-[#1B0624]">
                  Booking.com
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Structured "Designed to Convert" Section modeled after duna.com */}
      <section className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-4 pb-32">
        <div className="flex flex-col gap-16">
          <h2 className="font-['Instrument_Serif'] font-light text-[44px] md:text-[56px] text-[#1B0624] leading-[1.1] tracking-tight max-w-[800px]">
            Designed to convert.<br />Built to scale.
          </h2>

          {/* Stats Row (No vertical boxes/borders) */}
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 border-y border-black/10 py-12 md:py-16">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-[64px] md:text-[80px] text-black leading-none tracking-tight">2.4<span className="text-[40px] md:text-[50px] ml-1">x</span></span>
              <span className="font-sans text-[14px] text-black/60 tracking-wide font-normal">Increase in organic traffic</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-[64px] md:text-[80px] text-black leading-none tracking-tight">40<span className="text-[40px] md:text-[50px] ml-1">%</span></span>
              <span className="font-sans text-[14px] text-black/60 tracking-wide font-normal">Higher conversion rate</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-[64px] md:text-[80px] text-black leading-none tracking-tight">#1</span>
              <span className="font-sans text-[14px] text-black/60 tracking-wide font-normal">Rankings in AI overviews</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 pt-4 border-t-0 md:border-b-0 border-black/10">
            {/* Card 1 */}
            <div className="relative flex flex-col gap-4 p-8 md:pr-10 md:border-r border-black/10 hover:bg-black/[0.015] transition-colors rounded-3xl md:rounded-none">
              <Spotlight size={180} />
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black mb-2 relative z-10">
                <TrendingUp size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-sans font-medium text-[18px] text-black relative z-10">AI-Optimized Content</h3>
              <p className="font-sans text-[14px] text-black/60 font-normal leading-[1.7] relative z-10">
                We structure your SaaS content specifically for Large Language Models and AI search generative experiences, not just legacy blue links.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col gap-4 p-8 md:px-10 md:border-r border-black/10 hover:bg-black/[0.015] transition-colors rounded-3xl md:rounded-none">
              <Spotlight size={180} />
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black mb-2 relative z-10">
                <Globe size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-sans font-medium text-[18px] text-black relative z-10">GEO Engineering</h3>
              <p className="font-sans text-[14px] text-black/60 font-normal leading-[1.7] relative z-10">
                Generative Engine Optimization tailored for ChatGPT, Perplexity, and Google's AI Overviews to capture modern bottom-funnel intents.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col gap-4 p-8 md:pl-10 hover:bg-black/[0.015] transition-colors rounded-3xl md:rounded-none">
              <Spotlight size={180} />
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black mb-2 relative z-10">
                <BarChart3 size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-sans font-medium text-[18px] text-black relative z-10">Technical Architecture</h3>
              <p className="font-sans text-[14px] text-black/60 font-normal leading-[1.7] relative z-10">
                Semantic markup and deep technical SEO architecture that provides clear, unambiguous data signals to search crawlers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
