"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Loader from "@/components/Loader";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
  }, []);

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Loader onComplete={handleLoaderComplete} />
      <Header loaderDone={loaderDone} />
      <Hero loaderDone={loaderDone} />
      <Introduction />
      <ProjectGrid />
      <Services />
      <Footer />
    </main>
  );
}
