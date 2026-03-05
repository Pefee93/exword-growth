import { DottedSurface } from '../components/ui/dotted-surface';
import { cn } from '../lib/utils';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: "01",
        title: "Answer Engine Optimization (AEO)",
        tagline: "Be the Source for LLMs",
        description: "Large Language Models like ChatGPT and Perplexity are changing how buyers research. We don't just optimize for human reading; we structure your technical documentation, product capabilities, and engineering blogs utilizing advanced semantic markup. This guarantees that when an AI system is asked an industry question, it confidently synthesizes the response using your brand as the authoritative source. We focus intensely on zero-click search visibility and entity resolution.",
        deliverables: ["Semantic Schema Architecture", "LLM-Native Content Structuring", "Knowledge Graph Injection", "Entity Authority Building"]
    },
    {
        id: "02",
        title: "Community Seeding & Positioning",
        tagline: "Authentic E-Word-of-Mouth",
        description: "B2B decisions are heavily influenced by peers on Reddit, Hacker News, LinkedIn, and specialized discord groups. We deploy native, value-first content into these challenging environments where traditional marketers fail. By acting organically and answering questions from a deeply technical standpoint, we build immense trust and drive direct bottom-of-funnel traffic that converts far higher than paid channels.",
        deliverables: ["Platform-Native Playbooks", "Technical Brand Advocates", "Subreddit/Forum Moderation", "Organic Discussion Genesis"]
    },
    {
        id: "03",
        title: "Generative Engine Engineering (GEO)",
        tagline: "Capture Modern Intent",
        description: "While traditional SEO focuses on queries like 'CRM software', GEO targets complex conversational intents like 'What is the most secure CRM software for financial services integrating with Stripe?'. We reverse-engineer the prompt engineering of your target ICPs. From there, we build deeply layered feature pages and compare-and-contrast structures that precisely intercept these prompts, securing the highly coveted #1 spot in Google's AI Overviews.",
        deliverables: ["AI Overview Optimization", "Feature Deep-Dives", "Conversational Query Targeting", "Competitor Interception"]
    },
    {
        id: "04",
        title: "Technical Web Architecture",
        tagline: "Unambiguous Data Signals",
        description: "Search bots are lazy. We rebuild your web architecture to serve them efficiently. This means server-side rendering strategies, millisecond-fast load times, perfectly flat site architectures, isolated rendering trees, and comprehensive internal linking graphs. We eliminate crawl budget waste and ensure your most valuable pages are indexed and understood immediately. This provides a robust foundation for all other growth efforts.",
        deliverables: ["Javascript Rendering Optimization", "Crawl Budget Allocation", "Internal Link Graphs", "Core Web Vitals Perfection"]
    },
    {
        id: "05",
        title: "Growth Funnel Analytics & Iteration",
        tagline: "Mathematical Attribution",
        description: "Vanity traffic is useless. We build sophisticated tracking pipelines connecting your CMS, GA4, Search Console, and CRM (Salesforce/HubSpot). We measure the exact pipeline generated, right down to the closed-won revenue, directly attributing organic touchpoints. Every month, we review the data and launch specialized sprint experiments to constantly iterate on our highest performing assets.",
        deliverables: ["Full-Funnel Attribution", "Cohort Analysis", "Monthly Experiment Sprints", "Revenue Dashboards"]
    },
    {
        id: "06",
        title: "Editorial Content scaling",
        tagline: "Volume Meets Quality",
        description: "Scaling content usually means dropping quality. We've built an editorial pipeline that produces high-end, research-backed thought leadership at scale. Whether it's interviewing your subject matter experts or conducting original data journalism based on your platform's anonymized metrics, we create the kind of content that earns high-DA backlinks naturally and drives the industry conversation.",
        deliverables: ["Data Journalism", "SME Interviews", "Whitepapers & Reports", "High-Volume Pillar Clusters"]
    }
];

export default function Services() {
    return (
        <div className="relative w-full min-h-screen bg-[#050505] text-[#fbfbf9]">
            {/* Dark background Dotted Surface */}
            <div className="fixed inset-0 z-0">
                <DottedSurface className="opacity-60" />
            </div>

            {/* Radial gradient background to blend colors together smoothly behind text */}
            <div
                aria-hidden="true"
                className={cn(
                    'fixed -top-[20%] left-1/2 w-[80vw] h-[80vh] -translate-x-1/2 rounded-full pointer-events-none z-0',
                    'bg-[radial-gradient(ellipse_at_center,rgba(200,168,233,0.1),transparent_60%)]',
                    'blur-[60px]',
                )}
            />

            <div className="relative z-10 flex flex-col items-center pt-10 px-6">

                <div className="w-full max-w-[1200px] flex justify-start mb-20">
                    <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-sans text-[14px] uppercase tracking-wider font-semibold">Back</span>
                    </Link>
                </div>

                <div className="w-full max-w-[1200px] mb-20 md:mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase opacity-80">[ Our Expertise ]</span>
                        <div className="h-[1px] w-16 bg-gradient-to-r from-white/20 to-transparent" />
                    </div>
                    <h1 className="font-['Instrument_Serif'] font-light text-[60px] md:text-[100px] leading-[0.9] tracking-[-0.03em] mb-8 max-w-[800px]">
                        Architecting growth for the AI era.
                    </h1>
                    <p className="font-sans text-[16px] md:text-[20px] text-white/50 font-light leading-[1.6] max-w-[600px]">
                        We partner with ambitious B2B SaaS companies to engineer organic visibility, from technical foundations to community positioning.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] flex flex-col gap-8 pb-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row gap-8 md:gap-16 p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-md rounded-[2.5rem] hover:bg-white/[0.03] transition-colors relative overflow-hidden"
                        >
                            {/* Hover accent line */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="md:w-1/3 flex flex-col gap-4">
                                <span className="font-sans text-[12px] text-white/30 font-semibold tracking-widest uppercase mb-2">
                                    [ Service {service.id} ]
                                </span>
                                <h2 className="font-['Instrument_Serif'] text-[36px] md:text-[48px] text-white leading-[1.1] tracking-tight group-hover:pl-2 transition-all duration-300">
                                    {service.title}
                                </h2>
                                <h3 className="font-sans text-[14px] text-white/50 uppercase tracking-widest font-semibold mt-auto mb-4 md:mb-0">
                                    // {service.tagline}
                                </h3>
                            </div>

                            <div className="md:w-2/3 flex flex-col gap-8">
                                <p className="text-white/70 font-sans text-[15px] md:text-[16px] leading-[1.8] font-light">
                                    {service.description}
                                </p>

                                <div>
                                    <span className="font-sans text-[12px] text-white/40 uppercase tracking-widest font-semibold mb-4 block">Key Deliverables</span>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {service.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                                <span className="font-sans text-[14px] text-white/80 font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Back to Home Button */}
            <div className="w-full max-w-[1200px] flex justify-center mb-32 relative z-10 border-t border-white/10 pt-16">
                <Link to="/" className="group relative overflow-hidden bg-white text-[#050505] font-sans font-medium text-[15px] px-[32px] py-[16px] rounded-[1000px] cursor-pointer shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_10px_rgba(255,255,255,0.1)] transition-shadow">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </span>
                    <div className="absolute inset-0 bg-[#1B0624] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                </Link>
            </div>

        </div>
    );
}
