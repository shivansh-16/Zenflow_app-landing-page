"use client";

import { PlayCircle, ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const scrollToFeatures = () => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-white to-accent-blue/30 min-h-[calc(100vh-64px)] flex items-center">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="max-w-2xl relative z-10 animate-in slide-in-from-left duration-700 fade-in">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <span className="flex size-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            New: Sleep Stories available now
                        </div>
                        <h1 className="text-4xl font-black tracking-tight text-text-main sm:text-5xl md:text-6xl lg:leading-[1.15]">
                            Find Your Calm in <span className="text-primary relative whitespace-nowrap">
                                5 Minutes
                                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-lg">
                            Join 50,000+ people transforming their minds with ZenFlow. Reduce stress, improve sleep, and find balance in your daily life with our guided sessions.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5">
                                Start Free Trial
                            </button>
                            <button className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-base font-semibold text-text-main hover:bg-gray-50 hover:border-gray-300 transition-colors group">
                                <PlayCircle className="mr-2 h-5 w-5 text-text-secondary group-hover:text-primary transition-colors" />
                                Watch Demo
                            </button>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm text-text-secondary">
                            <div className="flex -space-x-3">
                                {/* Placeholders for avatars - using colored circles if no images, but I'll use placeholders from UI names if I can or just divs */}
                                <div className="size-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                    <Image src="/user1.png" loading="lazy" alt="User" fill className="object-cover" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                    <Image src="/user2.png" loading="lazy" alt="User" fill className="object-cover" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                    <Image src="/user3.png" loading="lazy" alt="User" fill className="object-cover" />
                                </div>
                            </div>
                            <p>Used by <span className="font-bold text-text-main">50,000+</span> mindful people</p>
                        </div>
                    </div>

                    <div className="relative lg:ml-auto w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-blue-400 opacity-20 blur-3xl animate-pulse"></div>
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xl border border-white/50">
                            {/* 
                  Using a placeholder image since the original URL was a google user content one which might expire or be specific.
                  I'll use a high quality Unsplash source for "meditation"
                */}
                            <Image
                                src="/Woman_meditating_hero.png"
                                alt="Woman meditating peacefully"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-text-secondary/50 hover:text-primary transition-colors" onClick={scrollToFeatures}>
                <ArrowDown size={32} />
            </div>
        </section>
    );
}
