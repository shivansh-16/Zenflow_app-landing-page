"use client";

import { Check, ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="bg-primary py-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] bg-white rounded-full blur-3xl transform rotate-12"></div>
                <div className="absolute bottom-0 right-0 w-[40%] h-[100%] bg-white rounded-full blur-3xl transform -rotate-12"></div>
            </div>

            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-in slide-in-from-bottom-5 duration-700 fade-in">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                    Ready to Transform Your Mind?
                </h2>
                <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    Start your journey to a calmer, happier you today. No credit card required for the trial.
                </p>

                <form className="max-w-md mx-auto mb-8 flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-5 py-4 rounded-xl text-text-main focus:outline-none focus:ring-2 focus:ring-white/50 border-0 shadow-lg"
                        required
                    />
                    <button className="px-8 py-4 bg-text-main text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2 group">
                        Try Free
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80 text-sm">
                    <Check className="h-5 w-5" />
                    <span>Used by 50,000+ people worldwide</span>
                </div>
            </div>
        </section>
    );
}
