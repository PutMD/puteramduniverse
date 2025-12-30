import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-amber-300 bg-primary">
        <p className="text-primary font-medium mb-4 animate-fade-in">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-4">
          Putera M. Danial
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          Programmer / Web Developer
        </p>
        <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Motivated and detail-oriented Computer Science graduate with strong foundations in C#, .NET, and web development. 
          Experienced in application development, data integration, and database management. Quick learner with strong 
          analytical and problem-solving skills, eager to contribute to innovative software projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection("#projects")}>
            View My Projects
          </Button>
          <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
            <a href="/resume.pdf" download className="bg-destructive text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" onClick={() => scrollToSection("#contact")}>
            <Mail className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={() => scrollToSection("#about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-foreground/60 hover:text-primary transition-colors animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>;
};
export default HeroSection;