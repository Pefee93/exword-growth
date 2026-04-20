import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { RevealImageList } from "./reveal-images";

const studies = [
    {
        text: "RPG Game",
        subtext: (
            <div className="flex flex-col gap-8 md:gap-10 mt-4 mb-4">
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[var(--theme-text)] transition-colors duration-700 tracking-wide text-[18px] md:text-[22px]">From an Up-and-Comer to a Viral Hit</p>
                    <p className="font-sans text-[15px] md:text-[17px] leading-[1.7] text-[var(--theme-muted)] transition-colors duration-700 max-w-3xl">Helped an up-and-coming RPG game grow from niche recognition to one of the most talked-about titles on Reddit. Built sustained hype through strategic, organic posting and community engagement, transforming a small, dedicated following into a thriving player base with an unmatched increase in authentic visibility and discussion.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[var(--theme-text)] transition-colors duration-700 text-[12px] md:text-[13px] uppercase tracking-[0.1em] border-b border-[var(--theme-border)] transition-colors duration-700 pb-2 mb-2">Reddit Performance (First 3 Months)</span>
                        <ul className="flex flex-col gap-2.5 list-none p-0 text-[14px] md:text-[16px] text-[var(--theme-muted)] transition-colors duration-700">
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 1,929,000 Total Views</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 3,522 Organic Comments</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 89% Upvote Rate</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 20+ High-Ranking SEO Posts</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[var(--theme-text)] transition-colors duration-700 text-[12px] md:text-[13px] uppercase tracking-[0.1em] border-b border-[var(--theme-border)] transition-colors duration-700 pb-2 mb-2">Overall Campaign Impact</span>
                        <ul className="flex flex-col gap-2.5 list-none p-0 text-[14px] md:text-[16px] text-[var(--theme-muted)] transition-colors duration-700">
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 3000%+ Growth in Organic Brand Presence</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> Contributed to Selling 1M+ Units</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> Community Expansion from ~40K to 300K+ Members</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 40+ Viral Posts Reaching 100K+ Views Each</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        images: [
            { src: "/assets/RPG1.jpeg", alt: "RPG Game Art" },
            { src: "/assets/RPG2.jpeg", alt: "RPG Game Background" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    },
    {
        text: "Creative Marketplace",
        subtext: (
            <div className="flex flex-col gap-8 md:gap-10 mt-4 mb-4">
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[var(--theme-text)] transition-colors duration-700 tracking-wide text-[18px] md:text-[22px]">Establishing Authentic Presence & Growing the Brand</p>
                    <p className="font-sans text-[15px] md:text-[17px] leading-[1.7] text-[var(--theme-muted)] transition-colors duration-700 max-w-3xl">Helped an emerging creative marketplace find its audience and establish itself as one of the most positively received brands on Reddit. Forged enduring connections with industry thought leaders and built dozens of meaningful collaborations with top-tier influencers, driving visibility, trust, and engagement across key communities.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[var(--theme-text)] transition-colors duration-700 text-[12px] md:text-[13px] uppercase tracking-[0.1em] border-b border-[var(--theme-border)] transition-colors duration-700 pb-2 mb-2">Reddit Performance (First 3 Months)</span>
                        <ul className="flex flex-col gap-2.5 list-none p-0 text-[14px] md:text-[16px] text-[var(--theme-muted)] transition-colors duration-700">
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 1,240,000 Total Views</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 3,556 Organic Comments</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 96% Upvote Rate</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 25+ High-Ranking SEO & GEO Posts</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[var(--theme-text)] transition-colors duration-700 text-[12px] md:text-[13px] uppercase tracking-[0.1em] border-b border-[var(--theme-border)] transition-colors duration-700 pb-2 mb-2">Overall Campaign Impact</span>
                        <ul className="flex flex-col gap-2.5 list-none p-0 text-[14px] md:text-[16px] text-[var(--theme-muted)] transition-colors duration-700">
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 2500%+ Growth in Organic Brand Presence</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 15+ High-Quality Influencer Collaborations</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> Forged Lasting Relationships</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 300+ High-Quality B2B Conversions</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        images: [
            { src: "/assets/Creative1.jpg", alt: "Creative Marketplace Art" },
            { src: "/assets/Creative2.jpg", alt: "Creative Talent Studio" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    },
    {
        text: "Premium Fragrance Brand",
        subtext: (
            <div className="flex flex-col gap-8 md:gap-10 mt-4 mb-4">
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[var(--theme-text)] transition-colors duration-700 tracking-wide text-[18px] md:text-[22px]">Community Growth across key spaces</p>
                    <p className="font-sans text-[15px] md:text-[17px] leading-[1.7] text-[var(--theme-muted)] transition-colors duration-700 max-w-3xl">Elevated a modern fragrance brand through authentic storytelling and community engagement. Strengthened brand reputation and authority on Reddit while building meaningful collaborations with key figures in the industry.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[var(--theme-text)] transition-colors duration-700 text-[12px] md:text-[13px] uppercase tracking-[0.1em] border-b border-[var(--theme-border)] transition-colors duration-700 pb-2 mb-2">Reddit Performance (First 3 Months)</span>
                        <ul className="flex flex-col gap-2.5 list-none p-0 text-[14px] md:text-[16px] text-[var(--theme-muted)] transition-colors duration-700">
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 1,110,000 Total Views</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 921 Organic Shares</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 88% Upvote Rate</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[var(--theme-text)] transition-colors duration-700 text-[12px] md:text-[13px] uppercase tracking-[0.1em] border-b border-[var(--theme-border)] transition-colors duration-700 pb-2 mb-2">Overall Campaign Impact</span>
                        <ul className="flex flex-col gap-2.5 list-none p-0 text-[14px] md:text-[16px] text-[var(--theme-muted)] transition-colors duration-700">
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 1400%+ Growth in Organic Brand Presence</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> 2,000+ Products Sold Through Community</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-muted)] transition-colors duration-700 mt-2 shrink-0"/> Multiple Viral Posts Reaching 100K+ Views</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        images: [
            { src: "/assets/Fragrance2.jpg", alt: "Premium Fragrance Art" },
            { src: "/assets/Fragrance1.jpg", alt: "Luxury Background" }
        ] as [{ src: string, alt: string }, { src: string, alt: string }]
    }
];

export function CaseStudiesPreviewSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const THEMES = [
        { bg: '#2C3A29', text: '#ffffff', muted: 'rgba(255,255,255,0.7)', border: 'rgba(255,255,255,0.2)' }, // RPG
        { bg: '#E0B0B0', text: '#1B0624', muted: 'rgba(27,6,36,0.7)', border: 'rgba(27,6,36,0.15)' }, // Creative
        { bg: '#0F0F0F', text: '#ffffff', muted: 'rgba(255,255,255,0.6)', border: 'rgba(255,255,255,0.15)' } // Fragrance
    ];
    const DEFAULT_THEME = { bg: '#fbfbf9', text: '#1B0624', muted: 'rgba(27,6,36,0.6)', border: 'rgba(27,6,36,0.1)' };
    const activeTheme = hoveredIndex !== null ? THEMES[hoveredIndex] : DEFAULT_THEME;

    return (
        <section 
            id="case-studies" 
            className="relative z-0 w-full overflow-hidden border-y border-[var(--theme-border)] transition-colors duration-700"
            style={{
                backgroundColor: activeTheme.bg,
                '--theme-text': activeTheme.text,
                '--theme-muted': activeTheme.muted,
                '--theme-border': activeTheme.border,
            } as React.CSSProperties}
        >
            {/* Background is purely the solid activeTheme.bg */}

            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-10 pb-32">
                {/* Top Header Area */}
                <div className="flex items-center gap-4 mb-10 md:mb-16">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[var(--theme-muted)] uppercase opacity-80 transition-colors duration-700">[ Selected Works ]</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--theme-border)] to-transparent transition-colors duration-700" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 lg:mb-32">
                    <h2 className="font-['Instrument_Serif'] font-light text-[64px] md:text-[96px] lg:text-[120px] text-[var(--theme-text)] leading-[0.8] tracking-[-0.03em] transition-colors duration-700">
                        Case<br />Studies.
                    </h2>
                    <div className="flex flex-col gap-6 md:max-w-sm border-l border-[var(--theme-border)] pl-6 md:pb-4 transition-colors duration-700">
                        <p className="font-sans text-[18px] md:text-[22px] text-[var(--theme-muted)] font-medium leading-[1.6] transition-colors duration-700">
                            Real results from the companies we work with.
                        </p>
                        <button className="text-left font-sans text-[12px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-50 transition-opacity text-[var(--theme-text)]">
                            View all <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Immersive Full-Width Editorial List */}
                <RevealImageList items={studies} onHoverItem={setHoveredIndex} />
            </div>
        </section>
    );
}
