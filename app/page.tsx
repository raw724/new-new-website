import AmbientShapes from "@/components/AmbientShapes";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10">
        <AmbientShapes />
      </div>
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Interests />
      <Contact />
    </main>
  );
}
