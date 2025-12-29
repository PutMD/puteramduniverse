const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/80 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a
              href="#home"
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
