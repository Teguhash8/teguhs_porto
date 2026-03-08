"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";

export default function ProjectGrid() {
    return (
        <section id="work" className="py-24 px-6 md:px-12 bg-[#F5F5F7] text-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-sans font-bold tracking-tight"
                    >
                        Selected Works
                    </motion.h2>
                    <div className="mt-6 md:mt-0 flex gap-6 text-sm font-medium text-gray-500 uppercase tracking-wide">
                        <Link href="/work" className="text-black underline underline-offset-4">All</Link>
                        <span className="text-gray-400 cursor-not-allowed">Web Design</span>
                        <span className="text-gray-400 cursor-not-allowed">Development</span>
                        <span className="text-gray-400 cursor-not-allowed">Branding</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <Link href={`/work/${project.id}`} key={project.id} passHref>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] bg-gray-200 relative overflow-hidden mb-6 rounded-lg">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <h3 className="text-2xl font-sans font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                                    {project.category}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
