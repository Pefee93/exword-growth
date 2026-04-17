import { cn } from "../../lib/utils";

import React from 'react';

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    subtext?: React.ReactNode;
    images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, subtext, images }: ShowImageListItemProps) {
    const container = "absolute right-8 top-1/2 -translate-y-1/2 z-40 h-32 w-24 md:h-64 md:w-48 pointer-events-none";
    const effect =
        "relative duration-500 shadow-none group-hover:shadow-xl scale-[0.4] group-hover:scale-100 opacity-0 group-hover:opacity-100 w-full h-full overflow-hidden transition-all rounded-xl transform-gpu will-change-transform";

    return (
        <div className="group relative w-full overflow-visible py-8 md:py-16 border-t border-black/10 hover:bg-black/[0.015] transition-colors duration-500 cursor-pointer">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 md:px-8">
                <div className="flex flex-col gap-2 md:gap-4 max-w-[80%] pr-4 z-10">
                    <div className="group-hover:translate-x-4 transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B0624]/60 border border-[#1B0624]/10 rounded-full bg-[#1B0624]/[0.02]">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0" />
                            Under NDA
                        </span>
                        <span className="block font-['Instrument_Serif'] font-light text-[36px] md:text-[56px] lg:text-[72px] text-[#1B0624] tracking-tight leading-none">
                            {text}
                        </span>
                    </div>
                    {subtext && (
                        <div className="font-sans text-[14px] md:text-[15px] text-black/60 font-normal leading-[1.6] group-hover:translate-x-4 transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] max-w-xl">
                            {subtext}
                        </div>
                    )}
                </div>
            </div>

            {/* Floating images area */}
            <div className={container}>
                <div className={effect}>
                    <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
                </div>
            </div>
            <div
                className={cn(
                    container,
                    "translate-x-0 translate-y-[-50%] rotate-0 transition-all delay-100 duration-500 will-change-transform group-hover:translate-x-12 group-hover:translate-y-[-30%] group-hover:rotate-12",
                )}
            >
                <div className={cn(effect, "delay-75")}>
                    <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export function RevealImageList({ items }: { items: ShowImageListItemProps[] }) {
    return (
        <div className="flex flex-col w-full border-b border-black/10 mt-10">
            {items.map((item, index) => (
                <RevealImageListItem key={index} text={item.text} subtext={item.subtext} images={item.images} />
            ))}
        </div>
    );
}
