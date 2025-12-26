"use client";

import Image from "next/image";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 lg:py-24 bg-accent-blue/30 scroll-mt-16">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative animate-in slide-in-from-left duration-700 fade-in">
                        <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 transform -z-10"></div>
                        <div className="relative rounded-3xl shadow-2xl border border-white/50 overflow-hidden bg-white aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
                            {/* Using placeholder for app interface. */}
                            <Image
                                src="/App_interface.png"
                                alt="App Interface"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                                <p className="text-white font-medium">Daily Calm Session</p>
                                <div className="w-full bg-white/30 h-1 rounded-full mt-2 overflow-hidden">
                                    <div className="bg-primary h-full w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl mb-10">
                            Simple Path to Peace
                        </h2>
                        <div className="space-y-12">
                            {[
                                {
                                    step: 1,
                                    title: "Download the App",
                                    desc: "Available on iOS & Android. Create your account in seconds to start your journey.",
                                },
                                {
                                    step: 2,
                                    title: "Pick a Session",
                                    desc: "Choose from our library of 500+ guided meditations, ranging from 5 to 60 minutes.",
                                },
                                {
                                    step: 3,
                                    title: "Find Your Peace",
                                    desc: "Sit back, close your eyes, and experience instant calm. Feel the difference immediately.",
                                },
                            ].map((item, index, arr) => (
                                <div key={item.step} className="relative flex gap-6 group">
                                    {index !== arr.length - 1 && (
                                        <div className="absolute left-5 top-12 h-[calc(100%+24px)] w-0.5 bg-gray-200 group-hover:bg-primary/30 transition-colors" />
                                    )}
                                    <div className="flex-shrink-0 relative z-10">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-white border-2 border-primary text-primary font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 duration-300">
                                            {item.step}
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                                        <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
