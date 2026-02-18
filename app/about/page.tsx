"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function About() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#F5F5F7]">
            <Header />
            <section className="pt-40 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-12 w-full">
                                <h1 className="font-serif font-medium leading-none tracking-tight text-white w-full text-[13vw] lg:text-[6.5vw]">
                                    Introduction
                                </h1>
                                <span className="block font-sans font-bold mt-2 tracking-wide text-gray-400 w-full text-[8vw] lg:text-[4vw]">
                                    Teguh S. Ashidiqie
                                </span>
                            </div>
                            <div className="aspect-[3/4] bg-gray-800 relative grayscale hover:grayscale-0 transition-all duration-700">
                                {/* Placeholder for Profile Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono">
                                    PROFILE IMAGE
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8 font-light text-xl leading-relaxed text-gray-300 pt-12"
                        >
                            <p>
                                I am a multidisciplinary creator sitting at the intersection of design and technology.
                                With a background in both fine arts and computer science, I don&apos;t just build websites;
                                I craft digital atmospheres.
                            </p>
                            <p>
                                My philosophy is simple: <span className="text-white font-medium">Form follows function, but feeling follows form.</span>
                                The logic of code creates the structure, but the aesthetic decisions create the experience.
                                I aim to bring the precision of Swiss design into the interactive capabilities of the modern web.
                            </p>
                            <p>
                                When I&apos;m not coding, I&apos;m analyzing editorial layouts, exploring architecture,
                                or simplifying complex systems into intuitive user interfaces.
                            </p>

                            <div className="pt-12 grid grid-cols-2 gap-8 font-mono text-sm uppercase tracking-widest text-gray-500">
                                <div>
                                    <span className="block text-white mb-4">Recognition</span>
                                    <ul className="space-y-2">
                                        <li>Awwwards - SOTD</li>
                                        <li>SiteInspire Feature</li>
                                        <li>Behance Best in UI</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="block text-white mb-4">Education</span>
                                    <ul className="space-y-2">
                                        <li>MSc Computer Science</li>
                                        <li>BFA Graphic Design</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
