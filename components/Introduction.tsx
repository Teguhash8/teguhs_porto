"use client";

import { motion } from "framer-motion";


export default function Introduction() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* Profile Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto md:mr-auto overflow-hidden bg-gray-100">
                        {/* Placeholder for Profile Image */}
                        <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400 font-mono text-xs uppercase tracking-widest">
                            [Profile Image Asset]
                            <br />
                            /assets/profile/me.jpg
                        </div>
                        {/* Swiss style decorative elements */}
                        <div className="absolute top-0 right-0 w-4 h-4 bg-black" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 bg-black" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 md:-right-12 text-9xl font-serif opacity-5 select-none pointer-events-none">
                        01
                    </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="font-sans font-bold text-black uppercase text-sm tracking-widest block mb-8">Philosophy</span>
                    <p className="text-2xl md:text-4xl font-serif leading-relaxed text-gray-800">
                        I believe that code is not just about function, but about <span className="italic">feeling</span>.
                        In a digital world cluttered with noise, I strive to create
                        <span className="font-bold"> clarity, elegance, and purpose</span>.
                        Every pixel, every interaction, and every line of code is crafted with the intent
                        to leave a lasting impression.
                    </p>

                    <div className="mt-12 flex gap-4">
                        <div className="h-[1px] w-24 bg-black self-center" />
                        <span className="font-mono text-xs uppercase tracking-widest">Teguhash</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
