import { User, Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="grid gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group">
              <User className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Who I Am</h3>
              <p className="text-muted-foreground">
                A creative developer with a passion for building intuitive and visually appealing web applications.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group">
              <Briefcase className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Experience</h3>
              <p className="text-muted-foreground">
                5+ years of professional experience working with modern web technologies and frameworks.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group">
              <GraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Education</h3>
              <p className="text-muted-foreground">
                Bachelor's degree in Computer Science with continuous learning in emerging technologies.
              </p>
            </div>
          </div>

          {/* About Text */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a full-stack developer who loves turning ideas into reality. With expertise in 
              React, TypeScript, and modern CSS frameworks, I create seamless user experiences 
              that are both functional and beautiful.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating products that make 
              a positive impact on people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
