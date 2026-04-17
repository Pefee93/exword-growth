import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnoAI from '../components/ui/animated-shader-background';
import { Spotlight } from '../components/ui/spotlight';
import { FeatureSteps } from '../components/ui/feature-section';
import TestimonialSection from '../components/ui/testimonials-section';
import { Footer } from '../components/ui/footer';
import { CaseStudiesPreviewSection } from '../components/ui/case-studies-preview';
import { ContactSection } from '../components/ui/contact-section';
import { TrendingUp, Search, Radar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RedditStatsOverlay } from '../components/ui/reddit-stats-overlay';

const servicesFeatures = [
  {
    step: 'Service 1',
    title: 'Reddit Growth Campaigns',
    content: 'Your buyers are already on Reddit comparing tools and asking for recommendations. We create posts and comments that fit naturally into those conversations, written to match the tone of each community and bring real attention back to your product.',
    image: '/assets/service_1.png'
  },
  {
    step: 'Service 2',
    title: 'AI Search & SEO Optimization',
    content: 'When a developer asks ChatGPT "what\'s the best project management tool for remote teams" and your competitor shows up instead of you, that\'s a gap we close. We create keyword-targeted Reddit content that ranks on Google, shows up in Reddit search, and gets pulled into AI-generated answers so your brand is part of the conversation across every major search surface.',
    image: '/assets/service_2.png'
  },
  {
    step: 'Service 3',
    title: 'Founder & Brand Thought Leadership',
    content: 'People trust founders who actually participate in the communities they serve. We help you or your team show up consistently in relevant subreddits with valuable contributions that build credibility and trust over time, turning your personal presence into a real growth channel.',
    image: '/assets/service_3.png'
  },
  {
    step: 'Service 4',
    title: 'Community Intelligence & Lead Monitoring',
    content: 'Our proprietary tools monitor Reddit and key forums daily for threads where potential buyers are actively looking for your type of solution. You get weekly reports with real buying signals, giving your team a direct line to the conversations that matter most.',
    image: '/assets/service_4.png'
  },
  {
    step: 'Service 5',
    title: 'Reputation Management & Monitoring',
    content: 'A single negative thread can shape how thousands of buyers see your brand for years. We track mentions and sentiment across Reddit and key communities, then help you respond thoughtfully and proactively so search results and conversations reflect the real quality of your product and team.',
    image: '/assets/service_5.png'
  },
  {
    step: 'Service 6',
    title: 'YouTube Comment Marketing',
    content: 'Your audience is watching YouTube reviews and deep-dives before they ever hit your website. We place thoughtful, non-spammy comments on the videos your buyers already trust, adding value to the discussion while putting your brand in front of highly engaged viewers at exactly the right moment.',
    image: '/assets/service_6.png'
  }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [expandedCard, setExpandedCard] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRedditStatsOpen, setIsRedditStatsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  const timeoutRef = useRef<number | null>(null);

  const handleCardHover = (index: number) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setExpandedCard(index);
    }, 150);
  };

  const clearHoverTimeout = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top on fresh load if no hash is present
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      const t = setTimeout(() => window.scrollTo(0, 0), 100);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsPastHero(window.scrollY > window.innerHeight * 1.05);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fbfbf9] w-full min-h-screen relative">

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
            <Link to="/services" className={`flex items-center gap-1.5 no-underline text-[14px] font-sans font-normal tracking-wide transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]/80 hover:text-[#1B0624]' : 'text-white/90 hover:text-white'}`}>
              Services
            </Link>
            <Link to="/about" className={`no-underline text-[14px] font-sans font-normal tracking-wide transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]/80 hover:text-[#1B0624]' : 'text-white/90 hover:text-white'}`}>
              Company
            </Link>
          </nav>

          <div className="flex items-center justify-end w-[130px] max-[768px]:hidden">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className={`font-sans font-medium text-[12px] px-5 py-2.5 rounded-[1000px] border border-transparent cursor-pointer transition-all duration-300 ${isPastHero ? 'bg-[#1B0624] text-white hover:bg-black' : 'bg-white text-[#000] hover:bg-[#000] hover:text-[#fff] hover:border-white/20'}`}>
              Talk to Us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={`hidden max-[768px]:flex items-center justify-center bg-transparent border-none transition-colors duration-300 ml-4 p-2 cursor-pointer ${isPastHero ? 'text-[#1B0624]' : 'text-white'}`}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1B0624] text-white flex flex-col pt-6 px-6">
          <div className="flex items-center justify-between w-full mb-16">
            <div className="flex items-center gap-3">
              <img src="/assets/Logo.svg" alt="ExWord Logo" className="h-[24px] w-auto brightness-0 invert" />
              <span className="font-sans text-[20px] font-light tracking-wide">ExWord Growth</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 bg-transparent border-none text-white cursor-pointer"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col gap-10 items-start pl-2">
            <Link onClick={() => setMobileMenuOpen(false)} to="/" className="font-['Instrument_Serif'] text-[40px] text-white no-underline font-light tracking-tight">Home</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/services" className="font-['Instrument_Serif'] text-[40px] text-white/70 hover:text-white transition-colors no-underline font-light tracking-tight">Services</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="font-['Instrument_Serif'] text-[40px] text-white/70 hover:text-white transition-colors no-underline font-light tracking-tight">Company</Link>
            <div className="pt-8 w-full">
               <button onClick={() => { setMobileMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="w-full bg-white text-[#1B0624] py-4 rounded-full font-sans text-[16px] font-semibold tracking-wide cursor-pointer border-none hover:bg-white/90">
                 Talk to Us
               </button>
            </div>
          </nav>
        </div>
      )}

      {/* Extra-tall absolute background that bleeds seamlessly into the next section */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[115vh] pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/neom-gVDUuJaG_wM-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
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
          className="absolute bottom-0 left-0 right-0 h-[25vh]"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(251,251,249,0.8) 30%, #fbfbf9 60%, #fbfbf9 100%)' }}
        />
      </motion.div>

      {/* Content Section Overlay */}
      <section className="relative z-10 flex flex-col w-full">

        <main className="w-full flex flex-col items-center relative z-20">

          {/* Block 1: 100vh Title Section */}
          <div className="w-full min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 pt-20 pb-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
              }}
              className="flex flex-col items-center w-full px-2 md:px-0 text-center"
            >
              <div className="overflow-hidden mb-1 md:mb-2 w-full">
                <motion.h1
                  variants={{
                    hidden: { y: "100%", rotate: 2 },
                    visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="font-['Instrument_Serif'] font-light leading-[1.1] text-white drop-shadow-xl mx-auto"
                  style={{
                    fontSize: 'clamp(3rem, 9vw, 7rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  Your next customers
                </motion.h1>
              </div>

              <div className="overflow-hidden mb-1 md:mb-2 w-full">
                <motion.h1
                  variants={{
                    hidden: { y: "100%", rotate: -2 },
                    visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="font-['Instrument_Serif'] font-light leading-[1.1] text-white drop-shadow-xl mx-auto"
                  style={{
                    fontSize: 'clamp(3rem, 9vw, 7rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  are already talking.
                </motion.h1>
              </div>
              
              <div className="overflow-hidden mb-6 md:mb-8 w-full">
                <motion.h1
                  variants={{
                    hidden: { y: "100%", rotate: 1 },
                    visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="font-['Instrument_Serif'] font-light leading-[1.1] text-white drop-shadow-xl mx-auto"
                  style={{
                    fontSize: 'clamp(3rem, 9vw, 7rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  We make sure they find you.
                </motion.h1>
              </div>
            </motion.div>
          </div>

          {/* Block 2: Subtext and Button completely below the fold */}
          <div className="w-full flex flex-col items-center px-4 md:px-6 pt-[30vh] pb-[15vh]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30%" }}
              variants={{
               hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="relative p-8 md:p-10 mb-10 max-w-[800px] w-full text-center"
            >
              <p className="relative z-10 font-sans text-[17px] md:text-[22px] leading-[1.7] text-[#1B0624] font-medium tracking-wide">
                Your buyers trust Reddit more than ads, review sites, or search results. We make sure your brand shows up in the conversations that drive their decisions - organically, authentically, and at scale.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30%" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.4, ease: "easeOut" } }
              }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-white text-[#000] font-sans font-medium text-[15px] px-[32px] py-[16px] rounded-[1000px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-none min-w-[200px]"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Book a growth session</span>
                <div className="absolute inset-0 bg-[#000] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsRedditStatsOpen(true)}
                className="group relative overflow-hidden bg-transparent text-[#FF4500] font-sans font-bold text-[15px] px-[32px] py-[16px] rounded-[1000px] cursor-pointer shadow-[0_10px_30px_rgba(255,69,0,0.15)] hover:shadow-none min-w-[200px] border-2 border-[#FF4500]"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Why Reddit?</span>
                <div className="absolute inset-0 bg-[#FF4500] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
              </motion.button>
            </motion.div>
          </div>

        </main>
      </section>

      {/* Logos Strip Removed at Launch */}

      {/* Structured "Designed to Convert" Section modeled after duna.com */}
      <section className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-24 md:pt-[15vh] pb-32 mt-12 md:mt-0">
        <div className="flex flex-col gap-16 relative">

          <div className="flex items-center gap-4 animate-fade-in anim-delay-500">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[#1B0624]/40 uppercase opacity-80">[ Architecture ]</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 to-transparent" />
          </div>

          <h2 className="font-['Instrument_Serif'] font-light text-[44px] md:text-[56px] text-[#1B0624] leading-[1.1] tracking-tight max-w-[800px]">
            Growth that compounds.<br />Presence that lasts.
          </h2>

          {/* Stats Row (Animated + Minimalist) */}
          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 border-y border-black/10 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col gap-2 border-l border-black/20 pl-6 md:pl-8">
              <span className="font-['Instrument_Serif'] font-light text-[80px] md:text-[110px] text-black leading-[0.8] tracking-[-0.04em]">250<span className="font-sans font-light text-[40px] md:text-[50px] ml-1 tracking-normal">M+</span></span>
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Community impressions generated</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className="flex flex-col gap-2 border-l border-black/20 pl-6 md:pl-8">
              <span className="font-['Instrument_Serif'] font-light text-[80px] md:text-[110px] text-black leading-[0.8] tracking-[-0.04em]">90<span className="font-sans font-light text-[40px] md:text-[50px] ml-1 tracking-normal">+</span></span>
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Clients served</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="flex flex-col gap-2 border-l border-black/20 pl-6 md:pl-8">
              <span className="font-['Instrument_Serif'] font-light text-[80px] md:text-[110px] text-black leading-[0.8] tracking-[-0.04em]">12<span className="font-sans font-light text-[40px] md:text-[50px] ml-1 tracking-normal">M+</span></span>
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Products sold</span>
            </motion.div>
          </div>

          {/* Asymmetrical Bento Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-6 relative border-none">

            {/* Card 1 */}
            <motion.div
              onMouseEnter={() => handleCardHover(0)}
              onMouseLeave={clearHoverTimeout}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className={`${expandedCard === 0 ? 'md:col-span-2 p-10 md:p-14' : 'md:col-span-1 p-8 md:p-10'} relative flex flex-col justify-end gap-6 border border-black/10 hover:border-black/20 hover:bg-black/[0.015] bg-white transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2.5rem] overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[420px]`}
            >
              <Spotlight size={expandedCard === 0 ? 300 : 200} />

              <div className={`absolute top-10 right-10 ${expandedCard === 0 ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border border-black/10 flex items-center justify-center text-black bg-white/50 backdrop-blur-md z-10 group-hover:bg-[#1B0624] group-hover:text-white transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rotate-0 group-hover:rotate-[180deg]`}>
                <TrendingUp size={expandedCard === 0 ? 24 : 20} strokeWidth={1.5} />
              </div>

              <div className="absolute top-6 left-10 opacity-30 group-hover:opacity-10 transition-opacity duration-[800ms]">
                <span className="font-sans text-xs tracking-[0.3em] font-bold uppercase">SEC-01</span>
              </div>

              <motion.div className="relative z-10 mt-auto">
                <motion.h3 className={`font-['Instrument_Serif'] font-light ${expandedCard === 0 ? 'text-[40px] md:text-[56px]' : 'text-[32px] md:text-[40px]'} text-black leading-[1] tracking-tight mb-4 group-hover:translate-x-2 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]`}>
                  Reddit Growth<br />Campaigns
                </motion.h3>
                <motion.p className={`font-sans ${expandedCard === 0 ? 'text-[15px]' : 'text-[14px]'} text-black/60 font-normal leading-[1.7] ${expandedCard === 0 ? 'max-w-[380px]' : ''} transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]`}>
                  We write posts and comments that belong in the communities where your buyers hang out. Content that people actually engage with and come back to - because it was written to fit, not to sell.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              onMouseEnter={() => handleCardHover(1)}
              onMouseLeave={clearHoverTimeout}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className={`${expandedCard === 1 ? 'md:col-span-2 p-10 md:p-14' : 'md:col-span-1 p-8 md:p-10'} relative flex flex-col justify-end gap-6 border border-black/10 hover:border-black/20 hover:bg-black/[0.015] bg-white transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2.5rem] overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[420px]`}
            >
              <Spotlight size={expandedCard === 1 ? 300 : 200} />

              <div className={`absolute top-10 right-10 ${expandedCard === 1 ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border border-black/10 flex items-center justify-center text-black bg-white/50 backdrop-blur-md z-10 group-hover:bg-[#1B0624] group-hover:text-white transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rotate-0 group-hover:rotate-[180deg]`}>
                <Search size={expandedCard === 1 ? 24 : 20} strokeWidth={1.5} />
              </div>

              <div className="absolute top-6 left-10 opacity-30 group-hover:opacity-10 transition-opacity duration-[800ms]">
                <span className="font-sans text-xs tracking-[0.3em] font-bold uppercase">SEC-02</span>
              </div>

              <motion.div className="relative z-10 mt-auto">
                <motion.h3 className={`font-['Instrument_Serif'] font-light ${expandedCard === 1 ? 'text-[40px] md:text-[56px]' : 'text-[32px] md:text-[40px]'} text-black leading-[1] tracking-tight mb-4 group-hover:translate-x-2 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]`}>
                  AI Search<br />Optimization
                </motion.h3>
                <motion.p className={`font-sans ${expandedCard === 1 ? 'text-[15px]' : 'text-[14px]'} text-black/60 font-normal leading-[1.7] ${expandedCard === 1 ? 'max-w-[380px]' : ''} transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]`}>
                  When someone asks ChatGPT or Perplexity about your category, your brand should be part of the answer. We make that happen through strategic Reddit content that AI tools pick up and reference.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              onMouseEnter={() => handleCardHover(2)}
              onMouseLeave={clearHoverTimeout}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className={`${expandedCard === 2 ? 'md:col-span-2 p-10 md:p-14' : 'md:col-span-1 p-8 md:p-10'} relative flex flex-col justify-end gap-6 border border-black/10 hover:border-black/20 hover:bg-black/[0.015] bg-white transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2.5rem] overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[420px]`}
            >
              <Spotlight size={expandedCard === 2 ? 300 : 200} />

              <div className={`absolute top-10 right-10 ${expandedCard === 2 ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border border-black/10 flex items-center justify-center text-black bg-white/50 backdrop-blur-md z-10 group-hover:bg-[#1B0624] group-hover:text-white transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rotate-0 group-hover:rotate-[180deg]`}>
                <Radar size={expandedCard === 2 ? 24 : 20} strokeWidth={1.5} />
              </div>

              <div className="absolute top-6 left-10 opacity-30 group-hover:opacity-10 transition-opacity duration-[800ms]">
                <span className="font-sans text-xs tracking-[0.3em] font-bold uppercase">SEC-03</span>
              </div>

              <motion.div className="relative z-10 mt-auto">
                <motion.h3 className={`font-['Instrument_Serif'] font-light ${expandedCard === 2 ? 'text-[40px] md:text-[56px]' : 'text-[32px] md:text-[40px]'} text-black leading-[1] tracking-tight mb-4 group-hover:translate-x-2 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]`}>
                  Buyer Intent<br />Monitoring
                </motion.h3>
                <motion.p className={`font-sans ${expandedCard === 2 ? 'text-[15px]' : 'text-[14px]'} text-black/60 font-normal leading-[1.7] ${expandedCard === 2 ? 'max-w-[380px]' : ''} transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]`}>
                  Our research tools scan Reddit daily for people actively looking for solutions like yours, and we surface those conversations so your team can act on them while they're still fresh.
                </motion.p>
              </motion.div>
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
          SERVICES OVERVIEW
        </div>
      </div>

      {/* Services Feature Steps */}
      <section className="relative z-10 w-full pb-48 pt-16 mt-0">
        <FeatureSteps 
          features={servicesFeatures} 
          title="What we do for SaaS teams"
          subtitle="We work alongside your team as your organic growth partner, handling everything from research and strategy to daily execution across the communities where your buyers spend their time."
        />
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

      {/* Premium Contact Form directly attached to Footer */}
      <ContactSection />

      {/* Footer Seamlessly Blending */}
      <Footer />

      {/* Reddit Stats Overlay Full Screen Modal */}
      <RedditStatsOverlay 
        isOpen={isRedditStatsOpen} 
        onClose={() => setIsRedditStatsOpen(false)} 
      />

    </div>
  )
}
