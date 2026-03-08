"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState(projects[0]);
    const [loading, setLoading] = useState(true);
    const [nextProject, setNextProject] = useState(projects[1]);

    useEffect(() => {
        if (params?.id) {
            const id = Number(params.id);
            const foundIndex = projects.findIndex((p) => p.id === id);
            if (foundIndex !== -1) {
                setProject(projects[foundIndex]);
                setNextProject(projects[(foundIndex + 1) % projects.length]);
                setLoading(false);
            } else {
                notFound();
            }
        }
    }, [params]);

    if (loading) return <div className="min-h-screen bg-[#0A0A0A]" />;

    return (
        <main className="bg-[#050505] min-h-screen text-[#F5F5F7]">
            <Header />

            {/* Hero — Light Section */}
            <section className="bg-[#F5F5F7] text-[#0A0A0A] pt-36 pb-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors mb-12 text-sm font-sans font-medium tracking-wide group"
                        >
                            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                            Back to Work
                        </Link>
                    </motion.div>

                    {/* Project Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tight leading-[1.05] mb-16 max-w-5xl"
                    >
                        {project.title}
                    </motion.h1>

                    {/* Metadata row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center justify-between pb-8 border-b border-[#0A0A0A]/10"
                    >
                        <span className="text-sm font-sans font-medium text-[#0A0A0A]/50 tracking-wide">
                            {project.category}
                        </span>
                        <span className="text-sm font-sans font-medium text-[#0A0A0A]/50 tracking-wide">
                            {project.year}
                        </span>
                    </motion.div>
                </div>

                {/* Full-width Cover Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="w-full mt-0 relative overflow-hidden"
                    style={{ height: 'clamp(300px, 50vw, 600px)' }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </motion.div>
            </section>

            {/* Content Section */}
            <section className="px-6 md:px-12 py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8"
                    >
                        <h2 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/40 mb-6">
                            Overview
                        </h2>
                        <p className="text-xl md:text-2xl font-sans font-medium leading-[1.6] text-white/80 mb-16">
                            {project.longDescription}
                        </p>

                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <div>
                                <h3 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/40 mb-6">
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center py-3 border-b border-white/5"
                                        >
                                            <span className="w-6 text-xs font-sans text-white/20 font-medium">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-sm font-sans text-white/70 ml-4">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="lg:col-span-4"
                    >
                        {/* Technologies */}
                        <div className="mb-12">
                            <h3 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/40 mb-6">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-sm font-sans text-white/70 border border-white/10 rounded-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Year */}
                        <div className="mb-12">
                            <h3 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/40 mb-4">
                                Year
                            </h3>
                            <p className="text-lg font-sans font-medium text-white/80">
                                {project.year}
                            </p>
                        </div>

                        {/* Category */}
                        <div>
                            <h3 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/40 mb-4">
                                Category
                            </h3>
                            <p className="text-sm font-sans text-white/70 leading-relaxed">
                                {project.category}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            {project.screenshots && project.screenshots.length > 0 && (
                <section className="px-6 md:px-12 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/40 mb-12">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-1 gap-8">
                            {project.screenshots.map((shot, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-video w-full overflow-hidden bg-[#111]"
                                >
                                    <Image
                                        src={shot}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Next Project */}
            <section className="border-t border-white/10">
                <Link href={`/work/${nextProject.id}`} className="block group">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex items-center justify-between">
                        <div>
                            <span className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/40 block mb-4">
                                Next Project
                            </span>
                            <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight group-hover:text-white/80 transition-colors duration-300">
                                {nextProject.title}
                            </h3>
                        </div>
                        <span className="text-2xl text-white/30 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                            →
                        </span>
                    </div>
                </Link>
            </section>

            <Footer />
        </main>
    );
}

