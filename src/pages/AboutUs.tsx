import { useEffect } from 'react';
import { ProgressiveBlur } from "../components/ui/progressive-blur";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from "../components/ui/footer";

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#fbfbf9] text-black">
            {/* Top Blur Effect */}
            <ProgressiveBlur position="top" backgroundColor="#fbfbf9" height="150px" className="z-20 fixed" />

            <div className="fixed top-10 left-6 md:left-10 z-30">
                <Link to="/" className="flex items-center gap-2 text-black/50 hover:text-black transition-colors mix-blend-difference hover:mix-blend-normal">
                    <ArrowLeft size={16} />
                    <span className="font-sans text-[14px]">Back to Home</span>
                </Link>
            </div>

            <main className="flex w-full flex-col items-center pt-32 md:pt-48 pb-0">

                {/* Hero / Our Story */}
                <section className="w-full max-w-[800px] flex flex-col items-center px-6 text-center mb-20 md:mb-32">
                    <h1 className="font-['Instrument_Serif'] font-light text-[64px] md:text-[100px] leading-[0.9] tracking-[-0.03em] mb-12">
                        Our Story
                    </h1>
                    <span className="relative text-[10px] font-semibold tracking-widest uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:mt-4 after:h-24 after:w-px after:bg-gradient-to-b after:from-[#1B0624]/30 after:to-transparent after:content-['']">
                        Scroll down to explore
                    </span>
                </section>

                {/* Narrative paragraphs and images */}
                <section className="w-full max-w-[800px] flex flex-col px-6 gap-12 md:gap-16 text-left font-sans text-[16px] md:text-[18px] text-black/75 leading-[1.8] font-light mb-32 z-10">
                    <p>
                        ExWord started in 2022 from a straightforward observation - there are smarter ways 
                        to help a product reach its audience than competing in the same expensive channels 
                        where everyone else is fighting for attention. Reddit was the obvious starting point. 
                        It's where people go to compare tools, ask for honest opinions, and talk about the 
                        products they actually use. We saw an opportunity to help companies show up in those 
                        conversations in a way that felt natural, not forced, and we built everything around that idea.
                    </p>

                    <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-[2rem] my-4 shadow-xl">
                        <img
                            src="/assets/about1.jpg"
                            alt="ExWord Growth Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                    </div>

                    <p>
                        Since then, we've helped over 100 brands build a real presence on Reddit and in the 
                        online communities that matter to their customers. What made it work came down to four things - 
                        becoming a genuine extension of each company we work with, deeply understanding their product 
                        and what makes it worth talking about, knowing the culture and language of every community 
                        we operate in, and being able to see the product through the eyes of the people who would actually benefit from it. 
                        When you combine that level of understanding with consistent, high-quality content, the results follow.
                    </p>

                    <p>
                        Our roots are in Reddit, and that's still at the core of everything we do. But the way 
                        people discover software keeps evolving - AI tools are answering questions that used to go to Google, 
                        community discussions carry more weight than landing pages, and founders with strong online 
                        reputations are closing deals their competitors never even hear about. We've expanded alongside 
                        those shifts, helping B2B SaaS companies build visibility across Reddit, AI search surfaces, 
                        and the places where their buyers spend their downtime and actually make decisions.
                    </p>

                    <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-[2rem] my-4 shadow-xl">
                        <img
                            src="/assets/about2.jpg"
                            alt="ExWord Analytics Dashboard"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                    </div>

                    <p>
                        What sets ExWord Growth apart is that we care about what actually moves the needle for your business. 
                        Community impressions and upvotes are nice, but we measure our work against the things that matter - 
                        qualified leads, pipeline influence, and real conversations with potential buyers. Every post we write, 
                        every community we engage in, and every strategy we build is designed to bring the right people closer 
                        to your product. We're not here to generate vanity metrics. We're here to help you grow.
                    </p>
                </section>

                {/* Core Values */}
                <section className="w-full max-w-[1200px] px-6 mb-32 md:mb-48">
                    <div className="flex flex-col mb-16 md:mb-24 items-center">
                        <h2 className="font-['Instrument_Serif'] font-light text-[56px] md:text-[80px] leading-[0.9] text-[#1B0624] tracking-tight">Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                        {[
                            {
                                title: "Authenticity First",
                                desc: "We believe the best marketing doesn't feel like marketing. Every piece of content we create is written to fit naturally into the communities where it lives, earning attention through quality and relevance rather than volume or tricks."
                            },
                            {
                                title: "Community Fluency",
                                desc: "Our team spends time in the communities your buyers care about every single day. We understand the culture, the unwritten rules, and the conversations that matter - because we're active participants, not outsiders looking in."
                            },
                            {
                                title: "Results Over Activity",
                                desc: "Posting more content doesn't mean better results. Every strategy we design is guided by data and shaped by what's actually working. We focus on the activities that drive measurable outcomes, and we're honest about what's moving the needle and what isn't."
                            },
                            {
                                title: "Partnership, Not Outsourcing",
                                desc: "We join your Slack, learn your product inside out, and work alongside your team as a dedicated growth partner. The goal is never to feel like an external agency - it's to feel like your team just got bigger."
                            }
                        ].map((val, i) => (
                            <div key={i} className="flex flex-col p-10 md:p-14 rounded-[2.5rem] border border-black/5 bg-[#f5f5f3] hover:bg-[#1B0624] hover:text-white transition-colors duration-500 group">
                                <h3 className="font-sans font-bold text-[18px] md:text-[20px] uppercase tracking-widest mb-6">
                                    {val.title}
                                </h3>
                                <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] opacity-70 group-hover:opacity-100 font-light">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Journey */}
                <section className="w-full max-w-[1000px] px-6 mb-32 md:mb-48">
                    <div className="flex flex-col mb-16 md:mb-24">
                        <h2 className="font-['Instrument_Serif'] font-light text-[56px] md:text-[80px] leading-[0.9] text-[#1B0624] tracking-tight text-center md:text-left">Our Journey</h2>
                    </div>
                    
                    <div className="relative border-l border-black/10 flex flex-col gap-12 md:gap-20 py-8 ml-4 md:ml-8">
                        {[
                            { year: "2022", title: "The Beginning", desc: "Founded with a mission to help brands grow through authentic community engagement. Our first campaigns proved that well-crafted Reddit content could drive real, measurable results - and the demand grew from there." },
                            { year: "2023", title: "Building the Methodology", desc: "Expanded the team, refined our content creation process, and developed the research tools that let us find buying conversations happening in real time. Started building long-term partnerships with clients who saw the value of sustained community presence over one-off campaigns." },
                            { year: "2024", title: "Scaling and Expanding", desc: "Grew to work with clients across multiple industries and continents. Developed our proprietary community intelligence tools and expanded our service offering to include AI search optimization, reputation management, and YouTube marketing." },
                            { year: "2025", title: "SaaS and B2B Focus", desc: "Launched ExWord Growth as a dedicated practice for B2B SaaS companies. Applied everything we had learned from hundreds of campaigns to a market where community trust, buyer intent, and AI search visibility are becoming the most important growth levers." },
                            { year: "NOW", title: "Ready to Grow With You", desc: "Working with ambitious SaaS teams who want to build organic visibility that compounds over time. We're looking for companies that care about doing this the right way - and we're ready to help them get there." },
                        ].map((node, i) => (
                            <div key={i} className="relative pl-8 md:pl-16">
                                <div className="absolute left-[-5px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#1B0624]" />
                                <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                                    <div className="w-[100px] shrink-0 font-sans font-bold text-[14px] md:text-[15px] tracking-[0.2em] text-[#1B0624] uppercase">
                                        {node.year}
                                    </div>
                                    <div className="flex flex-col mt-1 md:mt-0">
                                        <h4 className="font-['Instrument_Serif'] text-[32px] md:text-[40px] text-[#1B0624] leading-[1] tracking-tight mb-4">{node.title}</h4>
                                        <p className="font-sans text-[15px] md:text-[17px] leading-[1.8] text-black/70 font-light max-w-[600px]">{node.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Founder Profile */}
                <div className="w-full px-4 md:px-8">
                    <section className="relative w-full bg-[#F4EFE6] text-[#1B0624] pt-24 pb-12 md:pt-32 md:pb-16 px-6 rounded-t-[3rem] md:rounded-t-[4rem] transition-colors duration-300 shadow-[0_-20px_60px_-15px_rgba(27,6,36,0.05),inset_0_2px_0_rgba(255,255,255,0.6)] z-10">
                        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24">
                            <div className="w-full md:w-5/12 shrink-0">
                                <div className="w-full relative rounded-t-[10rem] rounded-b-xl overflow-hidden aspect-[3/4] shadow-2xl">
                                    <img
                                        src="/assets/about3.jpg"
                                        alt="Ognjen Srdanovic - CEO & Founder"
                                        className="w-full h-full object-cover grayscale-[30%] contrast-125 hover:scale-105 transition-transform duration-[2s] ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col justify-center h-full pt-0 md:pt-12">
                                <div className="flex flex-col gap-2 mb-12">
                                    <h2 className="font-['Instrument_Serif'] text-[56px] md:text-[80px] font-light leading-[1] text-[#1B0624] tracking-tight">
                                        Ognjen Srdanovic
                                    </h2>
                                    <span className="font-sans font-bold text-[13px] tracking-[0.2em] text-[#1B0624]/60 uppercase">
                                        CEO & Founder
                                    </span>
                                </div>

                                <div className="flex flex-col gap-6 font-sans text-[15px] md:text-[18px] leading-[1.8] text-[#1B0624]/80 font-light max-w-[600px]">
                                    <p>
                                        With a Master's degree in Philosophy and years spent in online communities long before it became a marketing channel, building a career around community-driven growth was a natural fit. The analytical thinking and creative problem-solving that came from studying philosophy turned out to be surprisingly useful tools for understanding how people discover products, form opinions, and decide what to trust online.
                                    </p>
                                    <p>
                                        The idea behind ExWord was straightforward - every product deserves to reach the people who would genuinely benefit from it, and every potential buyer deserves to hear about solutions that could actually help them. Not through ads they scroll past, but through the communities and conversations they already care about.
                                    </p>
                                    <p>
                                        Since founding ExWord, I've had the privilege of leading campaigns for over 100 brands, helping them connect with millions of potential customers through the platforms where real purchasing decisions are made. If you're building something worth talking about, I'd love to explore how we can help more people find it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                {/* Global Footer */}
                <div className="w-full">
                    <Footer theme="light" />
                </div>
            </main>
        </div>
    );
}
