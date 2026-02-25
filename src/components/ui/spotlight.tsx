import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, type SpringOptions, useMotionTemplate } from 'framer-motion';
import { cn } from '../../lib/utils';

type SpotlightProps = {
    className?: string;
    size?: number;
    springOptions?: SpringOptions;
    color?: string;
};

export function Spotlight({
    className,
    size = 180,
    springOptions = { stiffness: 500, damping: 35 },
    color = "rgba(225, 200, 160, 1)",
}: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

    const mouseX = useSpring(0, springOptions);
    const mouseY = useSpring(0, springOptions);

    useEffect(() => {
        if (containerRef.current) {
            const parent = containerRef.current.parentElement;
            if (parent) {
                parent.style.position = 'relative';
                parent.style.overflow = 'hidden';
                setParentElement(parent);
            }
        }
    }, []);

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!parentElement) return;
            const { left, top } = parentElement.getBoundingClientRect();
            mouseX.set(event.clientX - left);
            mouseY.set(event.clientY - top);
        },
        [mouseX, mouseY, parentElement]
    );

    useEffect(() => {
        if (!parentElement) return;

        parentElement.addEventListener('mousemove', handleMouseMove);
        parentElement.addEventListener('mouseenter', () => setIsHovered(true));
        parentElement.addEventListener('mouseleave', () => setIsHovered(false));

        return () => {
            parentElement.removeEventListener('mousemove', handleMouseMove);
            parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
            parentElement.removeEventListener('mouseleave', () =>
                setIsHovered(false)
            );
        };
    }, [parentElement, handleMouseMove]);

    // Create a dynamic radial gradient mask driven by the spring physics coordinates!
    const maskImage = useMotionTemplate`radial-gradient(${size / 2}px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

    return (
        <motion.div
            ref={containerRef}
            className={cn(
                'pointer-events-none absolute inset-0 transition-opacity duration-300',
                isHovered ? 'opacity-100' : 'opacity-0',
                className
            )}
            style={{
                backgroundColor: color,
                // Inject an SVG fractal noise map to give it genuine physical "sand" texture
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
                backgroundBlendMode: 'multiply',
                WebkitMaskImage: maskImage,
                maskImage: maskImage,
            }}
        />
    );
}
