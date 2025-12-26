"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Marketing Executive",
        quote: "I've tried every meditation app out there, but ZenFlow is the only one that stuck. The 5-minute sessions are perfect for my busy schedule.",
        image: "https://ui-avatars.com/api/?name=Sarah+M&background=random",
    },
    {
        name: "David L.",
        role: "Yoga Instructor",
        quote: "As a yoga teacher, I recommend ZenFlow to all my students. The sleep stories have completely cured my insomnia.",
        image: "https://ui-avatars.com/api/?name=David+L&background=random",
    },
    {
        name: "Elena R.",
        role: "Software Engineer",
        quote: "The interface is so clean and calming. It doesn't feel like another tech product clamoring for my attention. It's my daily sanctuary.",
        image: "https://ui-avatars.com/api/?name=Elena+R&background=random",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-24 bg-white scroll-mt-16">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-in slide-in-from-bottom-5 duration-700 fade-in">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                        What Our Community Says
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className="flex flex-col rounded-2xl bg-accent-blue/30 p-8 transition-transform hover:-translate-y-2 hover:shadow-lg duration-300 border border-transparent hover:border-primary/10"
                        >
                            <div className="flex text-yellow-400 mb-4 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <blockquote className="flex-1 text-lg text-text-main italic mb-6 leading-relaxed">
                                "{t.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-text-main">{t.name}</div>
                                    <div className="text-sm text-text-secondary">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
