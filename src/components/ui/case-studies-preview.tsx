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
        <section className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 py-32 border-t border-black/5 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20">

                {/* Left Title Section - Vertically centered vs the list */}
                <div className="flex-shrink-0 md:w-1/3 text-center md:text-left">
                    <h2 className="font-['Instrument_Serif'] font-light text-[48px] md:text-[64px] lg:text-[80px] text-[#1B0624] leading-[0.9] tracking-tight whitespace-nowrap">
                        Case<br className="hidden md:block" /> Studies
                    </h2>
                </div>

                {/* Right Links Section - Soft elegant buttons */}
                <div className="flex flex-col w-full md:w-2/3 gap-6 md:gap-8 pt-2">
                    {studies.map((study, index) => (
                        <div key={index} className="group w-full relative">
                            {/* 
                                The LinkPreview component acts as our button block.
                                Soft white background, subtle border, large elegant shadow.
                                On hover: it sinks down slightly (translate-y-2) and the shadow shrinks,
                                creating a highly tactile, physical "press" feeling that remains sleek.
                            */}
                            <LinkPreview
                                url={study.url}
                                imageSrc={study.imageSrc}
                                isStatic
                                className="block w-full bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:translate-y-[4px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] no-underline cursor-pointer"
                            >
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <span className="font-sans text-[28px] md:text-[36px] lg:text-[48px] text-[#1B0624] font-medium tracking-tight leading-none group-hover:translate-x-3 transition-transform duration-300">
                                        {study.name}
                                    </span>

                                    {/* Action icon */}
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/10 flex items-center justify-center bg-[#fbfbf9] group-hover:bg-[#1B0624] group-hover:text-white transition-colors duration-300 shrink-0">
                                        <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-300" />
                                    </div>
                                </div>
                            </LinkPreview>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
