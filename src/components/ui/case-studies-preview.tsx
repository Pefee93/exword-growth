"use client";
import { LinkPreview } from "./link-preview";
import { ArrowUpRight } from "lucide-react";

const studies = [
    {
        name: "Postman",
        url: "https://postman.com",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Doordash",
        url: "https://doordash.com",
        imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Binance",
        url: "https://binance.com",
        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
        name: "Booking.com",
        url: "https://booking.com",
        imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
    }
];

export function CaseStudiesPreviewSection() {
    return (
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-10 pb-32">

            {/* Top Header Area */}
            <div className="flex items-center gap-4 mb-10 md:mb-16">
                <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[#1B0624]/40 uppercase opacity-80">[ Selected Works ]</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 to-transparent" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 lg:mb-32">
                <h2 className="font-['Instrument_Serif'] font-light text-[64px] md:text-[96px] lg:text-[120px] text-[#1B0624] leading-[0.8] tracking-[-0.03em]">
                    Case<br />Studies.
                </h2>
                <div className="flex flex-col gap-6 md:max-w-sm border-l border-black/10 pl-6 md:pb-4">
                    <p className="font-sans text-[14px] md:text-[16px] text-black/50 font-normal leading-[1.6]">
                        We partner with ambitious SaaS companies to engineer their transition into the AI-search era, driving measurable pipeline.
                    </p>
                    <button className="text-left font-sans text-[12px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-50 transition-opacity">
                        View all <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Immersive Full-Width Editorial List */}
            <div className="flex flex-col w-full border-b border-black/10">
                {studies.map((study, index) => (
                    <div key={index} className="w-full relative group">
                        <LinkPreview
                            url={study.url}
                            imageSrc={study.imageSrc}
                            isStatic
                            className="block w-full py-10 md:py-16 border-t border-black/10 hover:bg-black/[0.015] transition-colors duration-500 no-underline cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 md:px-8">

                                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                                    <span className="font-sans font-semibold text-[12px] tracking-[0.3em] text-[#1B0624] opacity-30 mt-2 md:mt-0 w-8">
                                        0{index + 1}
                                    </span>
                                    <span className="font-['Instrument_Serif'] text-[48px] md:text-[80px] lg:text-[100px] text-[#1B0624] font-light tracking-tight leading-none group-hover:translate-x-8 transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]">
                                        {study.name}
                                    </span>
                                </div>

                                {/* Magnetic-style Interactive Button */}
                                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-black/10 flex items-center justify-center bg-transparent shrink-0 overflow-hidden relative group-hover:border-transparent transition-colors duration-500">
                                    {/* Liquid Background Fill */}
                                    <div className="absolute inset-0 bg-[#1B0624] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
                                    <ArrowUpRight strokeWidth={1} className="w-6 h-6 md:w-10 md:h-10 text-black group-hover:text-white relative z-10 group-hover:rotate-45 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                                </div>

                            </div>
                        </LinkPreview>
                    </div>
                ))}
            </div>
        </section>
    );
}
