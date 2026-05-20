import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import PageWrapper from "@/components/PageWrapper";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <PageWrapper>
      <SmoothScroll>
        <main className="noise radial-bg bg-black text-white">
          <Cursor />

          <Navbar />

          <Hero />

          <Services />

          <Projects />

          <Contact />

          <Footer />
        </main>
      </SmoothScroll>
    </PageWrapper>
  );
}