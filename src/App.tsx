import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnoAI from './components/ui/animated-shader-background';
import { Spotlight } from './components/ui/spotlight';
import { Marquee } from './components/ui/marquee';
import { FeatureSteps } from './components/ui/feature-section';
import TestimonialSection from './components/ui/testimonials-section';
import { Footer } from './components/ui/footer';
import { CaseStudiesPreviewSection } from './components/ui/case-studies-preview';
import { TrendingUp, Globe, BarChart3 } from 'lucide-react';

const servicesFeatures = [
  {
    step: 'Service 1',
    title: 'AEO-ready content & search visibility',
    content: 'We build and optimize content so answer engines and search systems can confidently use you as the source. Think: question-led playbooks, feature pages, and resource hubs that directly answer what your buyers ask at each stage.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Service 2',
    title: 'Community positioning',
    content: 'We help you show up consistently and credibly in the online communities that shape B2B decisions—like Reddit, LinkedIn, Hacker News, and other niche forums in your market. We turn e-word-of-mouth into trust, traffic, and signups.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Service 3',
    title: 'Conversion-focused web journeys',
    content: 'We realign your homepage, pricing, and key product pages with how B2B buyers actually research, evaluate, and decide—reducing friction. Clear paths and AEO-friendly structures give answers fast.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    step: 'Service 4',
    title: 'Measurement, learning, and iteration',
    content: 'We track what matters across the full funnel: contribution of organic and AEO visibility to leads, opportunities, and revenue—not just vanity traffic. Every month, you get concrete experiments based on real behavior.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop'
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsPastHero(window.scrollY > window.innerHeight * 1.05);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fbfbf9] w-full min-h-screen overflow-x-hidden relative">

      {/* Global Subtle Noise Overlay for organic texture */}
      <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.015] mix-blend-multiply bg-noise" />

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
            <span className={`font-sans text-[21px] font-light tracking-wide leading-none transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]' : 'text-white'}`}>
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
      <motion.div
        className="absolute top-0 left-0 right-0 h-[115vh] pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/neom-gVDUuJaG_wM-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 65%',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
          opacity: backgroundOpacity
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
      </motion.div>

      {/* Content Section Overlay */}
      <section className="relative z-10 flex flex-col min-h-screen">

        {/* Main Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-start text-center px-6 pt-[22vh] max-[768px]:pt-[15vh] max-[768px]:justify-start relative z-20">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            className="flex flex-col items-center"
          >
            <div className="overflow-hidden mb-6">
              <motion.h1
                variants={{
                  hidden: { y: "100%", rotate: 2 },
                  visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-['Instrument_Serif'] font-light leading-[1.05] text-white drop-shadow-xl"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 10rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '1200px'
                }}
              >
                AI–era organic
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.h1
                variants={{
                  hidden: { y: "100%", rotate: -2 },
                  visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-['Instrument_Serif'] font-light leading-[1.05] text-white drop-shadow-xl"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 10rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '1200px'
                }}
              >
                growth for SaaS.
              </motion.h1>
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
                visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }
              }}
              className="font-sans text-[13px] md:text-[15px] leading-[1.7] text-white/70 font-light tracking-wide max-w-[620px] mb-12 max-[768px]:px-4"
            >
              Search is no longer just ten blue links. Buyers see AI overviews, answer boxes, and summaries long before they ever click a result. ExWord Growth designs SEO and GEO strategies so your product is the answer those systems trust.
            </motion.p>

            <motion.button
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white text-[#000] font-sans font-medium text-[15px] px-[28px] py-[12px] rounded-[1000px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-none"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Book a growth session</span>
              <div className="absolute inset-0 bg-[#000] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
            </motion.button>
          </motion.div>

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
        <div className="flex flex-col gap-16 relative">

          <div className="flex items-center gap-4 animate-fade-in anim-delay-500">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[#1B0624]/40 uppercase opacity-80">[ Architecture ]</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 to-transparent" />
          </div>

          <h2 className="font-['Instrument_Serif'] font-light text-[44px] md:text-[56px] text-[#1B0624] leading-[1.1] tracking-tight max-w-[800px]">
            Designed to convert.<br />Built to scale.
          </h2>

          {/* Stats Row (Animated + Minimalist) */}
          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 border-y border-black/10 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col gap-2 border-l border-black/20 pl-6 md:pl-8">
              <span className="font-['Instrument_Serif'] font-light text-[80px] md:text-[110px] text-black leading-[0.8] tracking-[-0.04em]">2.4<span className="font-sans font-light text-[40px] md:text-[50px] ml-1 tracking-normal">x</span></span>
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Increase in organic traffic</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className="flex flex-col gap-2 border-l border-black/20 pl-6 md:pl-8">
              <span className="font-['Instrument_Serif'] font-light text-[80px] md:text-[110px] text-black leading-[0.8] tracking-[-0.04em]">40<span className="font-sans font-light text-[40px] md:text-[50px] ml-1 tracking-normal">%</span></span>
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Higher conversion rate</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="flex flex-col gap-2 border-l border-black/20 pl-6 md:pl-8">
              <span className="font-['Instrument_Serif'] font-light text-[80px] md:text-[110px] text-black leading-[0.8] tracking-[-0.04em]">#1</span>
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Rankings in AI overviews</span>
            </motion.div>
          </div>

          {/* Asymmetrical Bento Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-6 relative border-none">

            {/* Card 1 - Wide Block Spanning 2 Columns */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="md:col-span-2 relative flex flex-col justify-end gap-6 p-10 md:p-14 border border-black/10 hover:border-black/20 hover:bg-black/[0.015] bg-white transition-all duration-500 rounded-[2.5rem] overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[420px]">
              <Spotlight size={300} />

              <div className="absolute top-10 right-10 w-16 h-16 rounded-full border border-black/10 flex items-center justify-center text-black bg-white/50 backdrop-blur-md z-10 group-hover:bg-[#1B0624] group-hover:text-white transition-all duration-500 rotate-0 group-hover:rotate-[360deg]">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>

              <div className="absolute top-6 left-10 opacity-30 group-hover:opacity-10 transition-opacity">
                <span className="font-sans text-xs tracking-[0.3em] font-bold uppercase">SEC-01</span>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="font-['Instrument_Serif'] font-light text-[40px] md:text-[56px] text-black leading-[0.9] tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">AI-Optimized Content</h3>
                <p className="font-sans text-[15px] text-black/60 font-normal leading-[1.7] max-w-[380px]">
                  We structure your SaaS content specifically for Large Language Models and AI search generative experiences, not just legacy blue links.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Vertical Single Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className="md:col-span-1 relative flex flex-col justify-between p-8 md:p-10 border border-black/10 hover:border-black/20 hover:bg-black/[0.015] bg-white transition-all duration-500 rounded-[2.5rem] group shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[420px]">
              <Spotlight size={200} />

              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black mb-2 relative z-10 group-hover:bg-[#1B0624] group-hover:text-white transition-colors duration-500">
                <Globe size={20} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 mt-16">
                <h3 className="font-['Instrument_Serif'] font-light text-[32px] md:text-[40px] text-black leading-[1] mb-3 group-hover:pl-2 transition-all duration-500 border-l border-transparent group-hover:border-black/20">GEO Eng.</h3>
                <p className="font-sans text-[14px] text-black/50 font-normal leading-[1.6]">
                  Generative Engine Optimization tailored for ChatGPT, Perplexity, and AI Overviews to capture modern bottom-funnel intents.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Vertical Single Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="md:col-span-1 relative flex flex-col justify-between p-8 md:p-10 border border-black/10 hover:border-black/20 hover:bg-black/[0.015] bg-white transition-all duration-500 rounded-[2.5rem] group shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[420px]">
              <Spotlight size={200} />

              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black mb-2 relative z-10 group-hover:bg-[#1B0624] group-hover:text-white transition-colors duration-500">
                <BarChart3 size={20} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 mt-16">
                <h3 className="font-['Instrument_Serif'] font-light text-[32px] md:text-[40px] text-black leading-[1] mb-3 group-hover:pl-2 transition-all duration-500 border-l border-transparent group-hover:border-black/20">Architecture</h3>
                <p className="font-sans text-[14px] text-black/50 font-normal leading-[1.6]">
                  Semantic markup and deep technical SEO architecture that provides clear, unambiguous data signals to search crawlers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative connecting vertical line between sections */}
      <div className="flex justify-center w-full relative z-10 h-32 md:h-48 overflow-hidden opacity-30">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="w-[1px] bg-black"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#fbfbf9] px-2 font-sans font-semibold text-[8px] tracking-[0.3em] uppercase opacity-50">
          PROCESS
        </div>
      </div>

      {/* Services Feature Steps */}
      <section className="relative z-10 w-full pb-48 pt-16 mt-0">
        <FeatureSteps features={servicesFeatures} />
      </section>

      {/* Decorative connecting vertical line */}
      <div className="flex justify-center w-full relative z-10 h-32 md:h-48 overflow-hidden opacity-30">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="w-[1px] bg-black"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#fbfbf9] px-2 font-sans font-semibold text-[8px] tracking-[0.3em] uppercase opacity-50">
          CLIENTS
        </div>
      </div>

      {/* Text-based Link Preview Case Studies */}
      <div className="mb-32">
        <CaseStudiesPreviewSection />
      </div>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Footer Seamlessly Blending */}
      <Footer />

    </div>
  )
}

export default App
