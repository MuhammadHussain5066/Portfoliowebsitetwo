import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills"; // Import the Skills component
import About from "@/components/About"; // Import the About component

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-blue-200">
        <Hero />
      </section>

      {/* About Section */}
      <About /> {/* Render the About component here */}

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills /> {/* Render the Skills component here */}
    </main>
  );
}
