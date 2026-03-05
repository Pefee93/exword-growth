import { ArrowUpRight } from "lucide-react";

import { RevealImageList } from "./reveal-images";

const studies = [
    {
        text: "Postman",
        url: "https://postman.com",
        images: [
            { src: "/assets/case_1.png", alt: "Postman Case Study" },
            { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "Postman Background" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    },
    {
        text: "Doordash",
        url: "https://doordash.com",
        images: [
            { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", alt: "Doordash Case Study" },
            { src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", alt: "Doordash Secondary" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    },
    {
        text: "Binance",
        url: "https://binance.com",
        images: [
            { src: "/assets/case_2.png", alt: "Binance Case Study" },
            { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Binance Secondary" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    },
    {
        text: "Booking.com",
        url: "https://booking.com",
        images: [
            { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop", alt: "Booking Case Study" },
            { src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", alt: "Booking Secondary" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
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
            <RevealImageList items={studies} />
        </section>
    );
}
