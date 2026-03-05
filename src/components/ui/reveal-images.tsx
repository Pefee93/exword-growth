import { cn } from "../../lib/utils";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
    const container = "absolute right-8 top-1/2 -translate-y-1/2 z-40 h-32 w-24";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-24 h-24 overflow-hidden transition-all rounded-xl";

    return (
        <div className="group relative w-full overflow-visible py-8 md:py-16 border-t border-black/10 hover:bg-black/[0.015] transition-colors duration-500 cursor-pointer">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                    <span className="font-sans font-semibold text-[48px] md:text-[64px] lg:text-[80px] text-[#1B0624] tracking-tight leading-none group-hover:translate-x-8 transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {text}
                    </span>
                </div>
            </div>

            {/* Floating images area */}
            <div className={container}>
                <div className={cn(effect, "duration-300 md:h-40 md:w-32")}>
                    <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
                </div>
            </div>
            <div
                className={cn(
                    container,
                    "translate-x-0 translate-y-[-50%] rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-12 group-hover:translate-y-[-30%] group-hover:rotate-12",
                )}
            >
                <div className={cn(effect, "duration-400 delay-75 md:h-40 md:w-32")}>
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
                <RevealImageListItem key={index} text={item.text} images={item.images} />
            ))}
        </div>
    );
}
