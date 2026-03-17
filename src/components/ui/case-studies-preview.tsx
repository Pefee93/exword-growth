import { ArrowUpRight } from "lucide-react";

import { RevealImageList } from "./reveal-images";

const studies = [
    {
        text: "B2B SaaS Platform",
        subtext: "2,500% increase in organic brand visibility across 12 communities",
        url: "#",
        images: [
            { src: "/assets/case_1.png", alt: "B2B SaaS Platform Case Study" },
            { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "B2B SaaS Background" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    },
    {
        text: "Developer Tools Company",
        subtext: "From zero Reddit presence to 1.2M+ organic impressions in 6 months",
        url: "#",
        images: [
            { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", alt: "Developer Tools Case Study" },
            { src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", alt: "Developer Tools Secondary" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    },
    {
        text: "Creative Marketplace",
        subtext: "300+ qualified B2B leads attributed to community engagement",
        url: "#",
        images: [
            { src: "/assets/case_2.png", alt: "Creative Marketplace Case Study" },
            { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Creative Marketplace Secondary" }
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
                        Real results from the companies we work with.
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
