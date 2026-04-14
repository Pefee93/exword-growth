import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface RedditStatsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RedditStatsOverlay({ isOpen, onClose }: RedditStatsOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1B0624]/95 backdrop-blur-xl overflow-y-auto px-4 py-12 md:p-12"
        >
          {/* subtle noise texture */}
          <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-noise" />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            onClick={onClose}
            className="fixed top-6 right-6 md:top-10 md:right-10 z-50 p-4 rounded-full bg-white/5 hover:bg-white/15 text-white backdrop-blur-md transition-all duration-300 border border-white/10 group cursor-pointer"
          >
            <X size={28} className="group-hover:rotate-90 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" strokeWidth={1.5} />
          </motion.button>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto min-h-full flex flex-col justify-center">
            
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16 lg:mb-24">
              <div className="lg:col-span-7 flex flex-col gap-6 lg:border-l lg:border-white/20 lg:pl-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-['Instrument_Serif'] text-white text-[56px] leading-[1.05] tracking-tight md:text-[80px] lg:text-[110px]"
                >
                  The platform your<br />buyers trust most.
                </motion.h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end h-full">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans text-white/70 text-[18px] md:text-[22px] leading-[1.6] font-light max-w-[500px]"
                >
                  Reddit is the place people go to when they want real opinions from real users, not ads, not sponsored reviews. And it's growing faster than any other platform on the internet.
                </motion.p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
              
              {/* Stat 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 group"
              >
                <div className="h-[1px] w-full bg-white/20 mb-2 group-hover:bg-white/60 transition-colors duration-500" />
                <h3 className="font-['Instrument_Serif'] text-white text-[70px] md:text-[90px] leading-[0.9] tracking-tight">
                  471<span className="text-[40px] md:text-[50px] font-sans font-light tracking-normal">M+</span>
                </h3>
                <p className="font-sans text-white/50 text-[14px] uppercase tracking-widest font-semibold mt-2">
                  Weekly active users<br /><span className="text-white/30 text-[12px]">(Q4 2025, official)</span>
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 group"
              >
                <div className="h-[1px] w-full bg-white/20 mb-2 group-hover:bg-white/60 transition-colors duration-500" />
                <h3 className="font-['Instrument_Serif'] text-white text-[70px] md:text-[90px] leading-[0.9] tracking-tight">
                  #1
                </h3>
                <p className="font-sans text-white/50 text-[14px] uppercase tracking-widest font-semibold mt-2">
                  Most-cited source in AI search<br /><span className="text-white/30 text-[12px] font-normal tracking-normal normal-case">ChatGPT • Perplexity • Google AI</span>
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 group"
              >
                <div className="h-[1px] w-full bg-white/20 mb-2 group-hover:bg-white/60 transition-colors duration-500" />
                <h3 className="font-['Instrument_Serif'] text-white text-[70px] md:text-[90px] leading-[0.9] tracking-tight">
                  6<span className="text-[40px] md:text-[50px] font-sans font-light tracking-normal">th</span>
                </h3>
                <p className="font-sans text-white/50 text-[14px] uppercase tracking-widest font-semibold mt-2">
                  Most visited website on the planet
                </p>
              </motion.div>

              {/* Stat 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 group"
              >
                <div className="h-[1px] w-full bg-white/20 mb-2 group-hover:bg-white/60 transition-colors duration-500" />
                <h3 className="font-['Instrument_Serif'] text-white text-[70px] md:text-[90px] leading-[0.9] tracking-tight">
                  #6
                </h3>
                <p className="font-sans text-white/50 text-[14px] uppercase tracking-widest font-semibold mt-2">
                  Most Googled word in the US
                </p>
              </motion.div>

              {/* Stat 5 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 group"
              >
                <div className="h-[1px] w-full bg-white/20 mb-2 group-hover:bg-white/60 transition-colors duration-500" />
                <h3 className="font-['Instrument_Serif'] text-white text-[70px] md:text-[90px] leading-[0.9] tracking-tight">
                  97.5<span className="text-[40px] md:text-[50px] font-sans font-light tracking-normal">%</span>
                </h3>
                <p className="font-sans text-white/50 text-[14px] uppercase tracking-widest font-semibold mt-2">
                  Of product review searches<br />on Google show Reddit
                </p>
              </motion.div>

              {/* Stat 6 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 group"
              >
                <div className="h-[1px] w-full bg-white/20 mb-2 group-hover:bg-white/60 transition-colors duration-500" />
                <h3 className="font-['Instrument_Serif'] text-white text-[70px] md:text-[90px] leading-[0.9] tracking-tight">
                  1,328<span className="text-[40px] md:text-[50px] font-sans font-light tracking-normal">%</span>
                </h3>
                <p className="font-sans text-white/50 text-[14px] uppercase tracking-widest font-semibold mt-2">
                  Increase in Reddit's Google<br />SEO visibility since 2023
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
