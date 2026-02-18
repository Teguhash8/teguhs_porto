"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#F5F5F7]">
            <Header />
            <section className="pt-40 pb-20 px-6 md:px-12 flex flex-col justify-center min-h-[80vh]">
                <div className="max-w-4xl mx-auto w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-medium mb-8 text-center"
                    >
                        Get in touch.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-center text-gray-400 mb-16 max-w-2xl mx-auto"
                    >
                        Available for freelance opportunities and collaborations. <br />
                        Let&apos;s build something timeless together.
                    </motion.p>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative border-b border-gray-700 py-4">
                                <input type="text" placeholder="Name" className="w-full bg-transparent outline-none text-xl placeholder:text-gray-600 focus:border-white transition-colors" />
                            </div>
                            <div className="relative border-b border-gray-700 py-4">
                                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-xl placeholder:text-gray-600 focus:border-white transition-colors" />
                            </div>
                        </div>
                        <div className="relative border-b border-gray-700 py-4">
                            <input type="text" placeholder="Subject" className="w-full bg-transparent outline-none text-xl placeholder:text-gray-600 focus:border-white transition-colors" />
                        </div>
                        <div className="relative border-b border-gray-700 py-4">
                            <textarea rows={4} placeholder="Message" className="w-full bg-transparent outline-none text-xl placeholder:text-gray-600 resize-none focus:border-white transition-colors" />
                        </div>

                        <div className="flex justify-center pt-8">
                            <button className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </section>
            <Footer />
        </main>
    );
}
