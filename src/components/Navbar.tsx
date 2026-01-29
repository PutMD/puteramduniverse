import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "Home",
  href: "#home"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Experience",
  href: "#experience"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Skills",
  href: "#skills"
}, {
  name: "Certifications",
  href: "#certifications"
}, {
  name: "Education",
  href: "#education"
}, {
  name: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={e => {
          e.preventDefault();
          scrollToSection("#home");
        }} className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            Putera M. Danial
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="transition-colors font-medium text-sm text-primary">
                {link.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
          e.preventDefault();
          scrollToSection(link.href);
        }} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {link.name}
              </a>)}
          </div>}
      </div>
    </nav>;
};
export default Navbar;