"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Basic",
        description: "Essential mindfulness tools",
        price: "Free",
        features: ["5 Intro Sessions", "Daily Timer", "1 Background Sound"],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        description: "Deepen your practice",
        price: "$9.99",
        period: "/mo",
        features: [
            "Unlimited Access",
            "Offline Downloads",
            "All Sleep Stories",
            "Advanced Stats",
        ],
        cta: "Choose Pro",
        popular: true,
    },
    {
        name: "Premium",
        description: "Full family access",
        price: "$14.99",
        period: "/mo",
        features: [
            "Everything in Pro",
            "Up to 5 Family Members",
            "1-on-1 Coaching (Monthly)",
        ],
        cta: "Choose Premium",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-20 lg:py-24 bg-white border-t border-gray-100 scroll-mt-16">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-5 duration-700 fade-in">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                        Choose Your Path
                    </h2>
                    <p className="mt-4 text-lg text-text-secondary">
                        Simple, transparent pricing. No commitment, cancel anytime.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "rounded-2xl p-8 bg-white transition-all duration-300 relative",
                                plan.popular
                                    ? "border-2 border-primary shadow-2xl scale-105 z-10"
                                    : "border border-gray-200 hover:shadow-lg hover:-translate-y-1"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-text-main">{plan.name}</h3>
                            <p className="mt-2 text-sm text-text-secondary">
                                {plan.description}
                            </p>
                            <div className="my-6">
                                <span className="text-4xl font-bold text-text-main">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-text-secondary">{plan.period}</span>
                                )}
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className={cn(
                                            "flex items-center gap-3 text-sm",
                                            plan.popular
                                                ? "text-text-main font-medium"
                                                : "text-text-secondary"
                                        )}
                                    >
                                        <CheckCircle2
                                            className={cn(
                                                "h-5 w-5",
                                                plan.popular ? "text-primary" : "text-green-500"
                                            )}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={cn(
                                    "w-full rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300",
                                    plan.popular
                                        ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-xl"
                                        : "border border-gray-200 bg-white text-text-main hover:bg-gray-50 hover:border-gray-300"
                                )}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
