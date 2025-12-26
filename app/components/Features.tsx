"use client";

import { Sparkles, Mic, BarChart3, Download } from "lucide-react";

const features = [
    {
        name: "Personalized Meditations",
        description: "Daily recommendations based on your mood, goals, and experience level.",
        icon: Sparkles,
    },
    {
        name: "Expert Instructors",
        description: "Learn from world-renowned meditation guides and certified mindfulness experts.",
        icon: Mic,
    },
    {
        name: "Progress Tracking",
        description: "Track your streaks, mindful minutes, and mood improvements over time.",
        icon: BarChart3,
    },
    {
        name: "Offline Access",
        description: "Download sessions to meditate anywhere, anytime—even without internet.",
        icon: Download,
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 lg:py-24 bg-white scroll-mt-16">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-10 fade-in duration-700">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Why Choose ZenFlow</h2>
                    <p className="mt-4 text-lg text-text-secondary">
                        Discover the tools you need to build a consistent meditation practice, tailored just for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
                            className="group relative rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-accent-blue text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-text-main mb-2">{feature.name}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
