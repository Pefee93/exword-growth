import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll while loading
    document.body.style.overflow = 'hidden';
    
    let currentProgress = 0;
    
    // Smooth artificial countdown logic to ensure components have time to mount
    const interval = setInterval(() => {
        // Fast random increments
        currentProgress += Math.floor(Math.random() * 12) + 3;
        if (currentProgress > 100) currentProgress = 100;
        
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                setIsLoading(false);
                // Unlock body scroll after animation completes
                setTimeout(() => {
                    document.body.style.overflow = '';
                }, 800);
            }, 600); // Wait a beat at 100%
        }
    }, 80);

    return () => {
        clearInterval(interval);
        document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%", filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] text-[#fbfbf9]"
        >
          {/* Background grain texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8L3N2Zz4=')]" />
          
          <div className="flex flex-col items-center gap-10 z-10 w-full max-w-sm px-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.7, ease: "easeOut" }}
               className="relative overflow-hidden w-28 h-28"
            >
               <img 
                 src="/assets/Logo.svg" 
                 alt="Exword Growth" 
                 className="w-full h-full object-contain filter invert opacity-100" 
               />
            </motion.div>

            <div className="w-full flex-col flex items-center justify-center gap-4 mt-8">
                <motion.div 
                    className="text-[80px] md:text-[100px] font-['Instrument_Serif'] font-light tracking-tight tabular-nums leading-none flex justify-center w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {progress}%
                </motion.div>
                
                <div className="w-full md:w-3/4 h-[1px] bg-white/20 rounded-full overflow-hidden flex justify-start">
                    <motion.div 
                        className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "circOut", duration: 0.2 }}
                    />
                </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
