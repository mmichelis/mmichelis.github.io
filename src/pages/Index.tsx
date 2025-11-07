import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Publications />
      <Experience />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-6 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mike Yan Michelis. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
