"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

function ClientTime() {
    const [time, setTime] = useState("");
    useEffect(() => {
        setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' }));
    }, []);
    return <p>{time ? `${time} (GMT+7)` : "— (GMT+7)"}</p>;
}

export default function Footer() {
    return (
        <footer className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] text-[#F5F5F7]">
            <div className="max-w-7xl mx-auto flex flex-col">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-16 lg:pb-24 gap-12">
                    <div className="lg:w-2/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.9] text-white uppercase"
                        >
                            Let&apos;s build <br />
                            <span className="font-serif italic font-normal text-lime-400 lowercase ml-2 md:ml-4 drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">something</span> <br />
                            iconic
                        </motion.h2>
                    </div>

                    <div className="lg:w-1/3 flex flex-col gap-8 w-full">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg font-sans font-light text-white/50 max-w-sm"
                        >
                            Currently available for freelance projects. Open to creating unique digital experiences together.
                        </motion.p>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            href="mailto:teguhashidiqie@gmail.com"
                            className="group relative inline-flex items-center gap-4 text-2xl md:text-3xl font-sans font-medium text-white transition-colors w-max"
                        >
                            <span className="relative overflow-hidden">
                                <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">
                                    teguhashidiqie@gmail.com
                                </span>
                                <span className="block absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] text-lime-400">
                                    teguhashidiqie@gmail.com
                                </span>
                            </span>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </motion.a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm font-sans">

                    {/* Navigation */}
                    <div className="flex flex-col gap-6">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">Menu</span>
                        <div className="flex flex-col gap-3">
                            <Link href="/" className="text-white/60 hover:text-white transition-colors w-max">Home</Link>
                            <Link href="/about" className="text-white/60 hover:text-white transition-colors w-max">About</Link>
                            <Link href="/work" className="text-white/60 hover:text-white transition-colors w-max">Selected Works</Link>
                            <Link href="/services" className="text-white/60 hover:text-white transition-colors w-max">Expertise</Link>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-6">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">Connect</span>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-white/60 hover:text-white transition-colors w-max group flex items-center gap-2">
                                LinkedIn <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors w-max group flex items-center gap-2">
                                Dribbble <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors w-max group flex items-center gap-2">
                                Twitter <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors w-max group flex items-center gap-2">
                                GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Location / Local */}
                    <div className="flex flex-col gap-6">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">Local Time</span>
                        <div className="flex flex-col gap-3 text-white/60">
                            <p>Based in Indonesia</p>
                            <ClientTime />
                        </div>
                    </div>
                </div>

                {/* Final Copy */}
                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/30 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Teguh S. Ashidiqie.</p>
                    <p>Designed & Coded entirely from scratch.</p>
                </div>
            </div>
        </footer>
    );
}
