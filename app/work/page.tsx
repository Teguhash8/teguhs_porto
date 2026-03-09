"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";

export default function Work() {
    return (
        <main className="bg-[#050505] min-h-screen text-[#F5F5F7]">
            <Header />

            {/* Hero — Light Section (matching Services page style) */}
            <section className="bg-[#F5F5F7] text-[#0A0A0A] pt-40 pb-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Large Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tight leading-[1.05] mb-16 max-w-5xl"
                    >
                        Work built with precision, passion and purpose.
                    </motion.h1>

                    {/* Bottom metadata row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center justify-between pb-8 border-b border-[#0A0A0A]/10"
                    >
                        <span className="text-sm font-sans font-medium text-[#0A0A0A]/50 tracking-wide">
                            Selected Projects
                        </span>
                        <span className="text-sm font-sans font-medium text-[#0A0A0A]/50 tracking-wide">
                            2024 — Present
                        </span>
                    </motion.div>
                </div>

                {/* Wide Cinematic Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="w-full mt-0 relative overflow-hidden"
                    style={{ height: 'clamp(300px, 50vw, 600px)' }}
                >
                    <Image
                        src="/assets/Pict/Ethereal Cityscape Glow.webp"
                        alt="Creative work showcase"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </motion.div>
            </section>

            {/* Recent Projects */}
            <section className="px-6 md:px-12 pt-24 pb-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-serif italic font-normal text-white/80 mb-16"
                    >
                        Recent Projects
                    </motion.h2>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 md:px-12 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20">
                        {projects.map((project, index) => (
                            <Link href={`/work/${project.id}`} key={project.id} passHref>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: (index % 2) * 0.15, duration: 0.8 }}
                                    className="group cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="aspect-[4/3] bg-[#111] mb-5 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Title + Category */}
                                    <div className="mt-4">
                                        <h3 className="text-lg md:text-xl font-sans font-bold tracking-tight mb-1 group-hover:text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-sans text-white/40">
                                            {project.category}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-24 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter uppercase leading-tight">
                            Have a project<br />in mind?
                        </h2>
                    </motion.div>
                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group inline-flex items-center gap-3 border border-white/20 rounded-full px-8 py-4 text-base font-sans font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Let&apos;s discuss
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </motion.a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

