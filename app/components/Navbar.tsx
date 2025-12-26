"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex bg-primary/10 text-primary p-1.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                            <Leaf size={24} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-text-main">
                            ZenFlow
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-sm font-medium text-text-main hover:text-primary transition-colors"
                    >
                        Log in
                    </Link>
                    <button className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        Start Free Trial
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-main p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-5 duration-200">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:bg-gray-50 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col gap-3 pb-4 border-t border-gray-100 pt-4">
                            <Link
                                href="#"
                                className="text-center text-sm font-medium text-text-main hover:text-primary"
                            >
                                Log in
                            </Link>
                            <button className="w-full h-10 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white hover:bg-primary-dark">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
