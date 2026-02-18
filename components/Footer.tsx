"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-20 px-6 md:px-12 bg-[#0A0A0A] text-[#F5F5F7] border-t border-gray-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
                <div className="mb-12 md:mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-8"
                    >
                        Let&apos;s talk.
                    </motion.h2>
                    <a href="mailto:hello@vibecoder.dev" className="text-xl md:text-2xl font-sans text-gray-400 hover:text-white transition-colors">
                        teguhashidiqie@gmail.com
                    </a>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4 text-sm font-mono text-gray-500 uppercase tracking-widest">
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Teguh S. Ashidiqie.</p>
                </div>
            </div>
        </footer>
    );
}
