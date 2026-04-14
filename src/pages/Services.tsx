import { DottedSurface } from '../components/ui/dotted-surface';
import { cn } from '../lib/utils';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: "01",
        title: "Reddit Growth Campaigns",
        tagline: "WHERE YOUR BUYERS ALREADY ARE",
        description: "Your potential customers are on Reddit right now, comparing tools and looking for honest opinions on their next solution. We write posts and comments that fit naturally into those conversations, matching the tone and culture of each community. Our focus is getting your product in front of the right people in a way that earns real engagement and actually resonates. We handle everything from subreddit research and content strategy to daily posting and community interaction, so your brand shows up consistently in the places that matter.",
        deliverables: [
            "Subreddit Research & Strategy",
            "Authentic Post Creation",
            "Community-Native Comments",
            "Performance Reporting & Optimization"
        ]
    },
    {
        id: "02",
        title: "Reddit SEO & AI Search Optimization",
        tagline: "BE THE ANSWER, NOT JUST A RESULT",
        description: "When someone searches Google for \"best CRM for startups\" or asks ChatGPT for a recommendation, Reddit threads increasingly dominate the results. We create keyword-targeted Reddit content designed to rank across Google, Reddit's own search, and AI-generated answers from tools like ChatGPT, Perplexity, and Gemini. Every post is mapped to the search terms your buyers are actually using, so your brand becomes a consistent presence across every major search surface. It goes well beyond traditional SEO, because the goal is making sure your product shows up wherever modern buyers go looking for answers.",
        deliverables: [
            "Keyword Research & Search Mapping",
            "SEO-Optimized Reddit Posts",
            "AI Search Visibility (ChatGPT, Perplexity)",
            "Monthly Ranking Reports"
        ]
    },
    {
        id: "03",
        title: "Founder & Brand Thought Leadership",
        tagline: "YOUR VOICE IN THE COMMUNITIES THAT MATTER",
        description: "There's a reason the most respected SaaS founders have strong online presences in the communities their customers care about. We help you or your leadership team build an authentic presence on Reddit and other key platforms by consistently sharing insights and joining the discussions your customers care about. Over time, this turns your personal reputation into a growth channel. When someone in your industry sees your name in a thread, they should already associate it with expertise and credibility. We handle the strategy, content, and day-to-day management so you get the benefits of an active online presence without it taking over your calendar.",
        deliverables: [
            "Personal Brand Strategy",
            "Thought Leadership Content",
            "Community Participation Management",
            "Credibility & Trust Building"
        ]
    },
    {
        id: "04",
        title: "Community Intelligence & Lead Monitoring",
        tagline: "FIND BUYERS BEFORE YOUR COMPETITORS DO",
        description: "Every day, people post on Reddit asking for software recommendations and comparing alternatives in your space, and most companies have no idea these conversations are even happening. Our proprietary research tools monitor Reddit and key forums daily, surfacing threads where potential buyers are actively looking for solutions like yours. You get weekly reports packed with real buying signals, competitor mentions, and emerging trends in your category. Your sales and marketing teams get a direct window into what your market is saying, thinking, and searching for, so they can act on it while the conversations are still live.",
        deliverables: [
            "Daily Reddit & Forum Monitoring",
            "Weekly Buyer Intent Reports",
            "Competitor Mention Tracking",
            "Market Trend & Sentiment Analysis"
        ]
    },
    {
        id: "05",
        title: "Reputation Management & Monitoring",
        tagline: "PROTECT WHAT YOU'VE BUILT",
        description: "One negative Reddit thread can shape how thousands of potential buyers perceive your brand, and it tends to stick around in search results for a long time. We keep a close eye on how your company is being discussed across Reddit and key online communities, tracking mentions, sentiment shifts, and potential issues before they escalate. When something does come up - a frustrated customer venting, a competitor making claims about you, or an old complaint resurfacing in search results - we help you respond thoughtfully and get ahead of it before it spreads. This is about making sure the online conversation around your brand reflects the reality of your product and your team.",
        deliverables: [
            "Brand Mention Monitoring",
            "Sentiment Analysis & Alerts",
            "Response Strategy & Execution",
            "Search Result Reputation Management"
        ]
    },
    {
        id: "06",
        title: "YouTube Comment Marketing",
        tagline: "SHOW UP WHERE YOUR AUDIENCE IS WATCHING",
        description: "Your potential customers aren't just reading Reddit threads. They're watching YouTube reviews and industry breakdowns in your space. We place thoughtful, high-quality comments on the videos your target audience is already watching, positioning your brand in front of highly engaged viewers at exactly the right moment. Every comment is written to sound natural and add something worthwhile to the discussion, not to spam. We research the most relevant channels, identify the videos with the highest potential, and make sure your brand is visible in the conversations happening beneath them.",
        deliverables: [
            "Channel & Video Research",
            "High-Quality Comment Placement",
            "Audience Targeting & Positioning",
            "Performance Tracking & Reporting"
        ]
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
                    <h1 className="font-['Instrument_Serif'] font-light text-[60px] md:text-[100px] leading-[0.9] tracking-[-0.03em] mb-8 max-w-[900px]">
                        Organic growth for SaaS,<br />from the ground up.
                    </h1>
                    <p className="font-sans text-[16px] md:text-[20px] text-white/50 font-light leading-[1.6] max-w-[700px]">
                        We work with B2B SaaS companies to build a real, lasting presence in the online communities where their buyers actually spend time and make decisions. Everything we do starts with understanding how people discover software today.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] flex flex-col gap-8 pb-16">
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

                {/* Bottom Back to Home Button */}
                <div className="w-full max-w-[1200px] flex justify-center border-t border-white/10 pt-16 pb-32">
                    <Link to="/" className="group relative overflow-hidden bg-white text-[#050505] font-sans font-medium text-[15px] px-[32px] py-[16px] rounded-[1000px] cursor-pointer shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_10px_rgba(255,255,255,0.1)] transition-shadow">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </span>
                        <div className="absolute inset-0 bg-[#111111] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
