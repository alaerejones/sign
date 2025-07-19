"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-emerald-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo and Social Section */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <Image
                                src="/images/logo1.png"
                                alt="Sinocle"
                                width={120}
                                height={40}
                                className="mb-6"
                            />
                        </Link>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-emerald-400 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="hover:text-emerald-400 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="hover:text-emerald-400 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="hover:text-emerald-400 transition-colors">
                                <Youtube className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="hover:text-emerald-400 transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="hover:text-emerald-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:text-emerald-400 transition-colors">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                                    Term and Condition
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                                    Blogs / News
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/career" className="hover:text-emerald-400 transition-colors">
                                    Career
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Contact Details</h3>
                        <ul className="space-y-3">
                            <li>Asaba, Delta State</li>
                            <li>+254 810 406 4868</li>
                            <li>
                                <a
                                    href="mailto:sinocleltc@gmail.com"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    sinocleltc@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-emerald-800 text-center text-sm text-emerald-300">
                    All rights reserved. Copyright © 2024 | Sinocle Nigeria Limited
                </div>
            </div>
        </footer>
    );
}