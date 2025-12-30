import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-secondary-foreground font-semibold mb-1">
              Putera M. Danial
            </p>
            <p className="text-secondary-foreground/70 text-sm">
              Programmer / Web Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:putmdanial1412@gmail.com"
              className="p-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/PutMD"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="http://www.linkedin.com/in/putera-muhammad-danial-090977314"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} Putera M. Danial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
