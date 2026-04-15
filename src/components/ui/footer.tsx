"use client";
import { Mail } from "lucide-react";

interface FooterProps {
    theme?: "dark" | "light";
}

export function Footer({ theme = "dark" }: FooterProps) {
    const isLight = theme === "light";
    
    // Define color mappings based on theme to ensure Tailwind's JIT compiler picks them up
    const bgClass = isLight ? "bg-[#F4EFE6]" : "bg-[#050505]";
    const textClass = isLight ? "text-[#1B0624]" : "text-white";
    const textMutedClass = isLight ? "text-[#1B0624]/60" : "text-white/60";
    const textFaintClass = isLight ? "text-[#1B0624]/40" : "text-white/40";
    const borderTopClass = isLight ? "border-[#1B0624]/10" : "border-white/10";
    const borderClass = isLight ? "border-[#1B0624]/10" : "border-white/10";
    const dividerClass = isLight ? "bg-[#1B0624]/10" : "bg-white/10";
    const logoClass = isLight ? "brightness-0" : "brightness-0 invert";
    const buttonBgClass = isLight ? "bg-[#1B0624]/5 hover:bg-[#1B0624]/10" : "bg-white/5 hover:bg-white/10";
    const iconClass = isLight ? "text-[#1B0624]/70 group-hover:text-[#1B0624]" : "text-white/70 group-hover:text-white";
    
    // Hover classes
    const linkHoverClass = isLight ? "hover:text-[#1B0624]" : "hover:text-white";

    return (
        <div className="w-full px-4 md:px-8 pb-10">
            <footer className={`${bgClass} rounded-b-[3rem] md:rounded-b-[4rem] px-8 md:px-16 pt-0 pb-16 md:pb-24 border-t-0 flex flex-col items-center transition-colors duration-300`}>

                <div className={`w-full max-w-[1200px] h-[1px] ${dividerClass} mb-16 md:mb-24`} />

                <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">

                    {/* Brand / Logo */}
                    <div className="flex flex-col gap-6 w-full md:w-1/3 items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <img
                                src="/assets/Logo.svg"
                                alt="ExWord Growth Logo"
                                className={`h-[26px] w-auto ${logoClass} transition-all duration-300`}
                            />
                            <span className={`font-sans text-[21px] font-light tracking-wide ${textClass}`}>
                                ExWord Growth
                            </span>
                        </div>
                        <p className={`font-sans text-[14px] ${textMutedClass} leading-[1.6] max-w-[280px]`}>
                            Organic growth for B2B SaaS in the era of AI search and online communities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 w-full md:w-1/3 items-center">
                        <h4 className={`font-sans font-semibold ${textClass} tracking-widest text-[12px] uppercase mb-2`}>Explore</h4>
                        <a href="#" className={`font-sans text-[14px] ${textMutedClass} ${linkHoverClass} transition-colors duration-200 no-underline`}>Services</a>
                        <a href="#" className={`font-sans text-[14px] ${textMutedClass} ${linkHoverClass} transition-colors duration-200 no-underline`}>Case Studies</a>
                        <a href="#" className={`font-sans text-[14px] ${textMutedClass} ${linkHoverClass} transition-colors duration-200 no-underline`}>Company</a>
                        <a href="#" className={`font-sans text-[14px] ${textMutedClass} ${linkHoverClass} transition-colors duration-200 no-underline`}>Talk to Us</a>
                    </div>

                    {/* Socials / Contact */}
                    <div className="flex flex-col w-full md:w-1/3 items-center md:items-end gap-6">
                        <a
                            href="mailto:ognjen@exword.co"
                            className={`group flex items-center gap-3 ${buttonBgClass} border ${borderClass} px-6 py-3 rounded-full transition-all duration-300 pointer`}
                        >
                            <Mail className={`w-4 h-4 ${iconClass} transition-colors`} />
                            <span className={`font-sans text-[14px] ${textClass} font-medium tracking-wide`}>ognjen@exword.co</span>
                        </a>
                    </div>

                </div>

                {/* Copyright Row */}
                <div className={`w-full max-w-[1200px] flex justify-center items-center mt-20 md:mt-32 pt-8 border-t ${borderTopClass}`}>
                    <span className={`font-sans text-[12px] ${textFaintClass} tracking-wider uppercase text-center`}>
                        © 2026 EXWORD GROWTH. ALL RIGHTS RESERVED.
                    </span>
                </div>

            </footer>
        </div>
    );
}
