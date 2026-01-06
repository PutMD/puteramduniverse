import { Download, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <span className="text-sm text-muted-foreground hidden md:block">
          Ready to hire? Let's connect →
        </span>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <Button size="sm" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </Button>
          
          <Button size="sm" variant="outline" asChild>
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Schedule</span> Interview
            </a>
          </Button>
          
          <Button size="sm" variant="secondary" onClick={scrollToContact}>
            <Mail className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Email</span> Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
