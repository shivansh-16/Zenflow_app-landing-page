"use client";

import Link from "next/link";
import { Leaf, Twitter, Instagram, Facebook } from "lucide-react";

const footerLinks = {
    Product: ["Features", "Pricing", "For Teams", "Gift Cards"],
    Company: ["About Us", "Careers", "Blog", "Contact"],
    Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
                                <Leaf size={16} />
                            </div>
                            <span className="text-lg font-bold text-text-main">ZenFlow</span>
                        </Link>
                        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                            Making mindfulness accessible to everyone, everywhere. Find your daily balance with ZenFlow.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" aria-label="Twitter" className="text-text-secondary hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="text-text-secondary hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" aria-label="Facebook" className="text-text-secondary hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-main mb-4">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.Product.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-main mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.Company.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-main mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.Legal.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-text-secondary">
                        © 2024 ZenFlow Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Using simple text or placeholders for app store buttons roughly matching design without specific images */}
                        <button className="h-10 px-4 bg-black text-white rounded-lg text-xs flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            <span>Download on the</span>
                            <span className="text-base font-bold">App Store</span>
                        </button>
                        <button className="h-10 px-4 bg-black text-white rounded-lg text-xs flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            <span>Get it on</span>
                            <span className="text-base font-bold">Google Play</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
