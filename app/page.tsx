import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <ProjectGrid />
      <Services />
      <Footer />
    </main>
  );
}
