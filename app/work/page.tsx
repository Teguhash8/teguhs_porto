"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";

export default function Work() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#F5F5F7]">
            <Header />
            <section className="pt-40 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-medium mb-20"
                    >
                        Selected Work
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {projects.map((project, index) => (
                            <Link href={`/work/${project.id}`} key={project.id} passHref>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                    layoutId={`project-${project.id}`}
                                >
                                    <div className="aspect-[16/10] bg-[#1a1a1a] mb-6 relative overflow-hidden rounded-lg">
                                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/0 transition-colors duration-500 z-10" />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-3xl font-serif group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                        <span className="text-gray-500 font-mono text-sm">{project.year}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-mono uppercase tracking-wider mb-3">
                                        {project.category}
                                    </p>
                                    <p className="text-gray-400 font-light max-w-md">
                                        {project.description}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
