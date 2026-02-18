"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState(projects[0]); // Default init
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params?.id) {
            const id = Number(params.id);
            const found = projects.find((p) => p.id === id);
            if (found) {
                setProject(found);
                setLoading(false);
            } else {
                notFound();
            }
        }
    }, [params]);

    if (loading) return <div className="min-h-screen bg-[#0A0A0A]" />;

    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#F5F5F7]">
            <Header />

            <article className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="px-6 md:px-12 mb-20">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/work"
                            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Work
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-800 pb-12">
                                <div>
                                    <h1 className="text-4xl md:text-7xl font-serif font-medium mb-4">
                                        {project.title}
                                    </h1>
                                    <p className="text-gray-400 font-mono uppercase tracking-wider">
                                        {project.category}
                                    </p>
                                </div>
                                <span className="text-2xl md:text-4xl font-serif text-gray-500">
                                    {project.year}
                                </span>
                            </div>
                        </motion.div>

                        {/* Cover Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#1a1a1a]"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="px-6 md:px-12 mb-32">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2"
                        >
                            <h2 className="text-2xl font-serif mb-6">Overview</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-12">
                                {project.longDescription}
                            </p>

                            <h3 className="text-xl font-serif mb-6">Key Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start text-gray-400">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                )) || <p className="text-gray-500 italic">No specific features listed.</p>}
                            </ul>
                        </motion.div>

                        {/* Sidebar Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="mb-12">
                                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    )) || <span className="text-gray-500 italic">Not specified</span>}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Gallery Section */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <section className="px-6 md:px-12 mb-20">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-serif mb-12">Gallery</h2>
                            <div className="grid grid-cols-1 gap-12">
                                {project.screenshots.map((shot, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#1a1a1a]"
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
            </article>

            <Footer />
        </main>
    );
}
