"use client";
import React from 'react';
import { motion } from "framer-motion";
import AnoAI from './animated-shader-background';

// --- Types ---
interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
    {
        text: "Working with ExWord has been fantastic. The team is highly knowledgeable about internet culture, online communities, and how to build real momentum for new products. They are professional, genuinely care about what they do, and value strong relationships. Partnering with them was a no-brainer for us.",
        image: "/assets/clever.png",
        name: "Clever Plays",
        role: "Client",
    },
    {
        text: "I am incredibly impressed with the personal touch that ExWord has brought to our brand. They take the time to really understand your vision and goals. What sets them apart is their deep understanding of the channels that real buyers actually use to make decisions. I highly recommend them to anyone looking to grow their organic presence.",
        image: "/assets/filmic.png",
        name: "Filmic Studios",
        role: "Client",
    },
    {
        text: "ExWord took time to understand our product and our needs to help us grow our online presence. As a growing company, it was great getting support on this. They provided regular reports of their work and have been following us closely since we started working together. We will be happy working with them again in the future.",
        image: "/assets/hibernian.png",
        name: "Hibernian Workshop",
        role: "Client",
    }
];

const firstColumn = [testimonials[0]];
const secondColumn = [testimonials[1]];
const thirdColumn = [testimonials[2]];

// --- Sub-Components ---
const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -8,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    whileFocus={{
                                        scale: 1.03,
                                        y: -8,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="p-10 rounded-3xl border border-white/20 shadow-lg shadow-black/5 max-w-xs w-full bg-white/90 backdrop-blur-md transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30"
                                >
                                    <blockquote className="m-0 p-0">
                                        <p className="text-neutral-800 leading-relaxed font-normal m-0 transition-colors duration-300">
                                            {text}
                                        </p>
                                        <footer className="flex items-center gap-3 mt-6">
                                            <img
                                                src={image}
                                                alt={`Logo of ${name}`}
                                                className="h-10 w-auto max-w-[90px] object-contain transition-all duration-300 ease-in-out mr-1 opacity-90"
                                                style={{ filter: "brightness(0)" }}
                                            />
                                            <div className="flex flex-col">
                                                <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 transition-colors duration-300">
                                                    {name}
                                                </cite>
                                                <span className="text-sm leading-5 tracking-tight text-neutral-600 mt-0.5 transition-colors duration-300">
                                                    {role}
                                                </span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    );
};

export default function TestimonialSection() {
    return (
        <div className="w-full px-4 md:px-8">
            <section
                aria-labelledby="testimonials-heading"
                className="relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]"
                style={{
                    backgroundImage: "url('/assets/daysky.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                }}
            >
                <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
                    <AnoAI />
                </div>
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#050505] opacity-90" />

                {/* Extra layer to assure the bottom pixel is perfectly #050505 */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-0" />

                <div className="py-24 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotate: -2 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            opacity: { duration: 0.8 }
                        }}
                        className="container px-4 z-10 mx-auto"
                    >
                        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
                            <div className="flex justify-center">
                                <div className="border border-white/30 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-white bg-black/20 backdrop-blur-md transition-colors">
                                    TESTIMONIALS
                                </div>
                            </div>

                            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-white transition-colors">
                                What our clients say
                            </h2>
                            <p className="text-center mt-5 text-white/80 text-lg leading-relaxed max-w-sm transition-colors">
                                Real results from real partnerships.
                            </p>
                        </div>

                        <div
                            className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
                            role="region"
                            aria-label="Scrolling Testimonials"
                        >
                            <TestimonialsColumn testimonials={firstColumn} duration={15} />
                            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
