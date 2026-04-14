"use client";
import { Mail } from "lucide-react";

export function Footer() {
    return (
        <div className="w-full px-4 md:px-8 pb-10">
            {/* 
              The Footer seamlessly attaches to the #050505 color ending of the Testimonials section. 
              We use the exact same #050505 background here, and cap it off with the rounded edges at the bottom.
            */}
            <footer className="bg-[#050505] rounded-b-[3rem] md:rounded-b-[4rem] px-8 md:px-16 pt-0 pb-16 md:pb-24 border-t-0 flex flex-col items-center">

                {/* A subtle divider line that separates Testimonials from Footer content but doesn't break the color continuation */}
                <div className="w-full max-w-[1200px] h-[1px] bg-white/10 mb-16 md:mb-24" />

                <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">

                    {/* Brand / Logo */}
                    <div className="flex flex-col gap-6 w-full md:w-1/3 items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <img
                                src="/assets/Logo.svg"
                                alt="ExWord Growth Logo"
                                className="h-[26px] w-auto brightness-0 invert"
                            />
                            <span className="font-sans text-[21px] font-light tracking-wide text-white">
                                ExWord Growth
                            </span>
                        </div>
                        <p className="font-sans text-[14px] text-white/60 leading-[1.6] max-w-[280px]">
                            Organic growth for B2B SaaS in the era of AI search and online communities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 w-full md:w-1/3 items-center">
                        <h4 className="font-sans font-semibold text-white tracking-widest text-[12px] uppercase mb-2">Explore</h4>
                        <a href="#" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors duration-200 no-underline">Services</a>
                        <a href="#" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors duration-200 no-underline">Case Studies</a>
                        <a href="#" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors duration-200 no-underline">Company</a>
                        <a href="#" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors duration-200 no-underline">Talk to Us</a>
                    </div>

                    {/* Socials / Contact */}
                    <div className="flex flex-col w-full md:w-1/3 items-center md:items-end gap-6">
                        <a
                            href="mailto:ognjen@exword.co"
                            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-all duration-300 pointer"
                        >
                            <Mail className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                            <span className="font-sans text-[14px] text-white font-medium tracking-wide">ognjen@exword.co</span>
                        </a>
                    </div>

                </div>

                {/* Copyright Row */}
                <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center mt-20 md:mt-32 pt-8 border-t border-white/10 gap-4">
                    <span className="font-sans text-[12px] text-white/40 tracking-wider uppercase">
                        © 2026 EXWORD GROWTH. ALL RIGHTS RESERVED.
                    </span>
                    <div className="flex gap-6">
                        <a href="#" className="font-sans text-[12px] text-white/40 hover:text-white/80 transition-colors uppercase tracking-wider">Privacy Policy</a>
                        <a href="#" className="font-sans text-[12px] text-white/40 hover:text-white/80 transition-colors uppercase tracking-wider">Terms of Service</a>
                    </div>
                </div>

            </footer>
        </div>
    );
}
