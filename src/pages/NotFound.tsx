import { Link } from 'react-router-dom';
import { FlickeringGrid } from '../components/ui/flickering-grid';
import { MoveRight } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center pt-24 pb-32">
            {/* Background Animation */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <FlickeringGrid
                    className="z-0 absolute inset-0 size-full [mask-image:radial-gradient(100vh_circle_at_center,white,transparent)] opacity-40"
                    squareSize={6}
                    gridGap={8}
                    color="#FF4500"
                    maxOpacity={0.6}
                    flickerChance={0.15}
                />
            </div>
            
            {/* Content Segment */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl selection:bg-[#FF4500]/30 selection:text-white">
                <div className="font-['Instrument_Serif'] font-light text-[120px] md:text-[180px] lg:text-[250px] text-white leading-[0.8] tracking-[-0.03em] mb-4 drop-shadow-[0_0_40px_rgba(255,69,0,0.15)]">
                    404
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-md">
                    Lost in the algorithm.
                </h1>
                
                <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-12">
                    The page you're looking for doesn't exist, has been moved, or didn't survive the latest Reddit update. Let's get you back.
                </p>
                
                <Link
                    to="/"
                    className="group relative flex items-center gap-3 px-8 py-4 bg-white text-[#1B0624] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,69,0,0.3)]"
                >
                    <div className="absolute inset-0 w-full h-full bg-[#FF4500] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 font-bold uppercase tracking-widest text-[13px] group-hover:text-white transition-colors duration-300">
                        Return to Home
                    </span>
                    <MoveRight className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
            </div>
        </main>
    );
}
