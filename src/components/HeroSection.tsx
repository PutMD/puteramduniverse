import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary font-medium mb-4 animate-fade-in">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
          A passionate developer crafting beautiful digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-foreground/60 hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
