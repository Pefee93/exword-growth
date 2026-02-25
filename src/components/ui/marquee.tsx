"use client";

import { useRef, useState, useEffect } from "react";
import { useAnimationFrame, useMotionValue, motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface MarqueeProps {
    className?: string;
    children: React.ReactNode;
    baseVelocity?: number;
}

export function Marquee({
    className,
    children,
    baseVelocity = 50,
}: MarqueeProps) {
    const baseX = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const velocityRef = useRef(baseVelocity);
    const [contentWidth, setContentWidth] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    // Measure the precise physical pixel width of the cloned block to guarantee a perfectly invisible loop point
    useEffect(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.getBoundingClientRect().width);
        }
    }, [children]);

    useAnimationFrame((_t, delta) => {
        if (!contentWidth) return;

        // Smoothly interpolate the moving speed
        const targetVelocity = isHovered ? baseVelocity * 0.2 : baseVelocity;
        velocityRef.current += (targetVelocity - velocityRef.current) * 0.1;

        // Velocity is in pixels per second
        let moveBy = velocityRef.current * (delta / 1000);
        let newX = baseX.get() - moveBy;

        // When we exactly travel the width of the absolute block, snap it back to identically map the sequence
        if (newX <= -contentWidth) {
            newX += contentWidth;
        }

        baseX.set(newX);
    });

    return (
        <div
            className={cn("overflow-hidden flex flex-nowrap w-full", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div className="flex w-max shrink-0" style={{ x: baseX }}>
                <div ref={contentRef} className="flex shrink-0">
                    {children}
                </div>
                {/* Clone the block side-by-side to act as the seamlessly incoming visual */}
                <div className="flex shrink-0">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
