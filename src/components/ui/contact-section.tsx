import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        const subject = encodeURIComponent(`New Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
        
        window.location.href = `mailto:ognjen@exword.co?subject=${subject}&body=${body}`;

        setStatus('success');
        // Reset after some time
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <div className="w-full px-4 md:px-8">
            <section className="relative w-full bg-[#050505] text-[#fbfbf9] px-8 md:px-16 pt-10 pb-20 overflow-hidden">
                {/* Subtle background texture/glow */}
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2 translate-x-1/3" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

                        {/* Left: Huge Title & Info */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase opacity-80">[ Let's Talk ]</span>
                                    <div className="h-[1px] w-16 bg-gradient-to-r from-white/20 to-transparent" />
                                </div>
                                <h2 className="font-['Instrument_Serif'] font-light text-[64px] md:text-[90px] lg:text-[120px] leading-[0.9] tracking-[-0.03em] mb-10">
                                    Let's get<br />you growing.
                                </h2>
                                <p className="font-sans text-[15px] md:text-[18px] text-white/60 font-light leading-[1.6] max-w-[420px]">
                                    Ready to build your brand's presence in the places where your buyers actually make decisions? Leave your details below and our team will reach out to set up a free growth session.
                                </p>
                            </div>
                        </div>

                        {/* Right: Premium Form */}
                        <div className="flex-1 w-full max-w-[600px] lg:ml-auto">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-12 pt-4">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Name Input */}
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder=" "
                                            className="w-full bg-transparent border-b border-white/20 pb-4 font-sans text-[16px] text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                                        />
                                        <label htmlFor="name" className="absolute left-0 top-0 text-[16px] text-white/40 font-light transition-all peer-focus:-top-6 peer-focus:text-[12px] peer-focus:text-white/60 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:[font-size:12px] peer-[:not(:placeholder-shown)]:text-white/60 cursor-text">
                                            Full Name *
                                        </label>
                                    </div>

                                    {/* Email Input */}
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder=" "
                                            className="w-full bg-transparent border-b border-white/20 pb-4 font-sans text-[16px] text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                                        />
                                        <label htmlFor="email" className="absolute left-0 top-0 text-[16px] text-white/40 font-light transition-all peer-focus:-top-6 peer-focus:text-[12px] peer-focus:text-white/60 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:[font-size:12px] peer-[:not(:placeholder-shown)]:text-white/60 cursor-text">
                                            Email Address *
                                        </label>
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder=" "
                                        className="w-full bg-transparent border-b border-white/20 pb-4 font-sans text-[16px] text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                                    />
                                    <label htmlFor="phone" className="absolute left-0 top-0 text-[16px] text-white/40 font-light transition-all peer-focus:-top-6 peer-focus:text-[12px] peer-focus:text-white/60 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:[font-size:12px] peer-[:not(:placeholder-shown)]:text-white/60 cursor-text">
                                        Phone Number (Optional)
                                    </label>
                                </div>

                                {/* Message Input */}
                                <div className="relative group mt-4">
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder=" "
                                        className="w-full bg-transparent border-b border-white/20 pb-4 font-sans text-[16px] text-white placeholder-transparent focus:outline-none focus:border-white transition-colors resize-none peer"
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-0 top-0 text-[16px] text-white/40 font-light transition-all peer-focus:-top-6 peer-focus:text-[12px] peer-focus:text-white/60 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:[font-size:12px] peer-[:not(:placeholder-shown)]:text-white/60 cursor-text">
                                        Tell us about your goals *
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-center justify-end mt-4">
                                    <button
                                        type="submit"
                                        disabled={status !== 'idle'}
                                        className="group relative overflow-hidden rounded-full bg-white text-[#050505] px-8 py-4 font-sans font-medium text-[15px] transition-all disabled:opacity-80 disabled:cursor-not-allowed flex items-center gap-3 w-full md:w-auto justify-center"
                                    >
                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                                            {status === 'idle' && <>Submit Inquiry <ArrowUpRight className="w-4 h-4" /></>}
                                            {status === 'submitting' && <span className="animate-pulse">Sending...</span>}
                                            {status === 'success' && <>Sent <CheckCircle2 className="w-4 h-4" /></>}
                                        </span>
                                        {/* Reveal background fill on hover */}
                                        {status === 'idle' && (
                                            <div className="absolute inset-0 bg-transparent opacity-0 scale-x-0 group-hover:bg-black/80 group-hover:opacity-100 group-hover:scale-x-100 origin-left transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                                        )}
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
