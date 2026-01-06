import { ArrowDown, Download, Briefcase, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const stats = [
    { icon: Briefcase, value: "1+", label: "Year Experience" },
    { icon: Code, value: "3+", label: "Projects Built" },
    { icon: Award, value: "95%", label: "Error Reduction" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-12">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary">Open to Opportunities</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Putera M. Danial
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
          Software Developer | C# & .NET Specialist
        </p>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          I build <span className="text-foreground font-medium">reliable software solutions</span> that reduce errors by 95%. 
          Currently developing enterprise applications at Jabatan Perkhidmatan Awam.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("#projects")}>
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("#about")} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
