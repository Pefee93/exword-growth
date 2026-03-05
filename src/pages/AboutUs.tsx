import { ProgressiveBlur } from "../components/ui/progressive-blur";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AboutUs() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center bg-[#fbfbf9] text-black">
            {/* Top and Bottom Blur Effects */}
            <ProgressiveBlur position="top" backgroundColor="#fbfbf9" height="150px" className="z-20" />
            <ProgressiveBlur position="bottom" backgroundColor="#fbfbf9" height="150px" className="z-20" />

            <div className="absolute top-10 left-10 z-30">
                <Link to="/" className="flex items-center gap-2 text-black/50 hover:text-black transition-colors">
                    <ArrowLeft size={16} />
                    <span className="font-sans text-[14px]">Back to Home</span>
                </Link>
            </div>

            <div className="flex w-full flex-col items-center overflow-auto scrollbar-hide py-32 px-6">

                <div className="grid content-start justify-items-center gap-6 text-center text-black mb-24">
                    <h1 className="font-['Instrument_Serif'] font-light text-[60px] md:text-[80px] leading-[0.9] tracking-[-0.03em]">
                        Our Story
                    </h1>
                    <span className="relative mt-8 max-w-[18ch] text-xs font-semibold tracking-widest uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:mt-4 after:h-24 after:w-px after:bg-gradient-to-b after:from-[#1B0624]/20 after:to-transparent after:content-['']">
                        Scroll down to explore
                    </span>
                </div>

                <div className="w-full max-w-[700px] flex flex-col gap-16 md:gap-24 text-justify font-sans text-[16px] md:text-[18px] text-black/70 leading-[1.8] font-light z-10">

                    <p>
                        ExWord Growth was built on the fundamental understanding that the way
                        businesses discover and purchase software has irrevocably changed. The era
                        of blindly trusting legacy blue links or gating content behind massive forms
                        is over. Today's technically adept buyers—developers, engineers, and product
                        leads—demand immediate answers, transparent pricing, and communities they can
                        trust.
                    </p>

                    <div className="w-full h-[400px] overflow-hidden rounded-[2rem]">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Team"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p>
                        Our specialized focus is purely on B2B SaaS. We don't employ generic SEO tactics
                        that might work for local businesses or e-commerce. We build sophisticated,
                        architecturally sound Answer Engine Optimization (AEO) strategies that ensure
                        your product isn't just found, but properly understood and integrated by the
                        Large Language Models (LLMs) and systems powering the modern internet.
                    </p>

                    <p>
                        We plug seamlessly into your existing growth team, operating not as an outsourced
                        agency, but as a specialized organic growth unit. Our daily reality involves
                        restructuring technical taxonomy, seeding organic discussions in difficult-to-penetrate
                        developer networks like HackerNews and specialized Reddit communities, and
                        measuring the exact pipeline generated from our efforts.
                    </p>

                    <div className="w-full h-[400px] overflow-hidden rounded-[2rem]">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="Data Analysis"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p>
                        What separates ExWord Growth is our commitment to attribution. Traffic means
                        nothing without revenue. Every metric we track, every piece of generative engine
                        content we engineer, and every technical schema we deploy is meticulously measured
                        against actual qualified leads and closed-won opportunities. We architect organic
                        growth systems designed to convert.
                    </p>

                </div>
            </div>
        </div>
    );
}
