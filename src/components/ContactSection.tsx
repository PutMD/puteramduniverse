import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contact Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="text-foreground hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
