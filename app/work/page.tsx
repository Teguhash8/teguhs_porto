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

            {/* Hero */}
            <section className="pt-40 pb-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-sm font-sans font-medium uppercase tracking-[0.3em] text-white/40 mb-6"
                    >
                        Portfolio
                    </motion.p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter uppercase leading-[0.9]"
                        >
                            Selected<br />Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="max-w-md text-base font-sans font-light text-white/50 leading-relaxed lg:pb-4"
                        >
                            Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Filter Tags */}
            <section className="px-6 md:px-12 pb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-3 text-sm font-sans font-medium"
                    >
                        {["All", "Web Development", "Web App", "Web Design", "Cultural Heritage"].map((tag, i) => (
                            <span
                                key={i}
                                className={`px-4 py-2 rounded-full border transition-colors cursor-pointer ${i === 0
                                    ? "bg-white text-black border-white"
                                    : "border-white/20 text-white/60 hover:text-white hover:border-white/50"
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 md:px-12 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
                        {projects.map((project, index) => (
                            <Link href={`/work/${project.id}`} key={project.id} passHref>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: (index % 2) * 0.1, duration: 0.8 }}
                                    className="group cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="aspect-[16/10] bg-[#111] mb-6 relative overflow-hidden rounded-sm">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-xs font-sans font-medium bg-lime-400 text-black px-3 py-1 rounded-full">↗</span>
                                        </div>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Title + Year */}
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight group-hover:text-lime-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <span className="text-white/30 font-sans text-sm font-medium">{project.year}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm font-sans text-white/50 leading-relaxed mb-3 max-w-md">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.category.split(", ").map((tag, i) => (
                                            <span key={i} className="text-xs font-sans font-medium uppercase tracking-wider text-white/30 border border-white/10 px-2 py-1 rounded-sm">
                                                {tag}
                                            </span>
                                        ))}
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
