import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient px-6 py-20">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Mike Yan Michelis
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            PhD Student at ETH AI Center
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Computational Robotics • Differentiable Simulation • Physics-Based Machine Learning
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="gap-2"
              onClick={() => window.location.href = 'mailto:mike.michelis@ai.ethz.ch'}
            >
              <Mail className="w-5 h-5" />
              Contact
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              onClick={() => window.open('https://www.linkedin.com/in/mymichelis/', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              onClick={() => window.open('https://scholar.google.com/citations?user=xxCOii8AAAAJ&hl=en', '_blank')}
            >
              <FileText className="w-5 h-5" />
              Scholar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
