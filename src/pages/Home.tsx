import { useState, useEffect } from 'react';
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
  }
];

export default function Home() {
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
            <Link to="/services" className={`flex items-center gap-1.5 no-underline text-[14px] font-sans font-normal tracking-wide transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]/80 hover:text-[#1B0624]' : 'text-white/90 hover:text-white'}`}>
              Services
            </Link>
            <Link to="/about" className={`no-underline text-[14px] font-sans font-normal tracking-wide transition-colors duration-300 ${isPastHero ? 'text-[#1B0624]/80 hover:text-[#1B0624]' : 'text-white/90 hover:text-white'}`}>
              Company
            </Link>
          </nav>

          <div className="flex items-center justify-end w-[130px] max-[768px]:hidden">
            <button className={`font-sans font-medium text-[12px] px-5 py-2.5 rounded-[1000px] border border-transparent cursor-pointer transition-all duration-300 ${isPastHero ? 'bg-[#1B0624] text-white hover:bg-black' : 'bg-white text-[#000] hover:bg-[#000] hover:text-[#fff] hover:border-white/20'}`}>
              Talk to Us
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
        <main className="flex-1 flex flex-col items-center justify-start text-center px-6 pt-[16vh] max-[768px]:pt-[12vh] max-[768px]:justify-start relative z-20">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            className="flex flex-col items-center"
          >
            <div className="overflow-hidden mb-0 md:mb-2">
              <motion.h1
                variants={{
                  hidden: { y: "100%", rotate: 2 },
                  visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-['Instrument_Serif'] font-light leading-[1] text-white drop-shadow-xl"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '1200px'
                }}
              >
                Your next customers
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-0 md:mb-2">
              <motion.h1
                variants={{
                  hidden: { y: "100%", rotate: -2 },
                  visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-['Instrument_Serif'] font-light leading-[1] text-white drop-shadow-xl"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '1200px'
                }}
              >
                are already talking.
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.h1
                variants={{
                  hidden: { y: "100%", rotate: 1 },
                  visible: { y: "0%", rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-['Instrument_Serif'] font-light leading-[1] text-white drop-shadow-xl"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '1200px'
                }}
              >
                We make sure they find you.
              </motion.h1>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="relative rounded-2xl md:rounded-3xl p-6 md:p-8 mb-8 max-w-[680px] w-full"
            >
              {/* Glassmorphism background with grain */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
                 {/* Internal subtle gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              </div>
              
              <p className="relative z-10 font-sans text-[13px] md:text-[15px] leading-[1.7] text-white font-light tracking-wide text-center">
                The way people discover and choose software has completely changed. Your buyers are researching on Reddit, asking AI tools for recommendations, and trusting community discussions over landing pages long before they ever visit your website. We build your organic presence in the places where those decisions actually happen, so when someone's looking for a solution like yours, your product is already part of the conversation.
              </p>
            </motion.div>

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
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Higher conversion from organic</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="flex flex-col gap-2 border-l border-black/20 pl-6 md:pl-8">
              <span className="font-['Instrument_Serif'] font-light text-[80px] md:text-[110px] text-black leading-[0.8] tracking-[-0.04em]">12<span className="font-sans font-light text-[40px] md:text-[50px] ml-1 tracking-normal">M+</span></span>
              <span className="font-sans text-[12px] md:text-[14px] text-black/50 tracking-widest font-semibold uppercase mt-2">Community impressions generated</span>
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
                <h3 className="font-['Instrument_Serif'] font-light text-[40px] md:text-[56px] text-black leading-[0.9] tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">Reddit Growth Campaigns</h3>
                <p className="font-sans text-[15px] text-black/60 font-normal leading-[1.7] max-w-[380px]">
                  We write posts and comments that belong in the communities where your buyers hang out. Content that people actually engage with and come back to - because it was written to fit, not to sell.
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
                <Search size={20} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 mt-16">
                <h3 className="font-['Instrument_Serif'] font-light text-[32px] md:text-[40px] text-black leading-[1] mb-3 group-hover:pl-2 transition-all duration-500 border-l border-transparent group-hover:border-black/20">AI Search Optimization</h3>
                <p className="font-sans text-[14px] text-black/50 font-normal leading-[1.6]">
                  When someone asks ChatGPT or Perplexity about your category, your brand should be part of the answer. We make that happen through strategic Reddit content that AI tools pick up and reference.
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
                <Radar size={20} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 mt-16">
                <h3 className="font-['Instrument_Serif'] font-light text-[32px] md:text-[40px] text-black leading-[1] mb-3 group-hover:pl-2 transition-all duration-500 border-l border-transparent group-hover:border-black/20">Buyer Intent Monitoring</h3>
                <p className="font-sans text-[14px] text-black/50 font-normal leading-[1.6]">
                  Our research tools scan Reddit daily for people actively looking for solutions like yours, and we surface those conversations so your team can act on them while they're still fresh.
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

    </div>
  )
}
