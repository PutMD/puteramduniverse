import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  const infoCards = [
    {
      icon: User,
      title: "Who I Am",
      content: "A motivated Computer Science graduate passionate about creating efficient software solutions and solving complex problems."
    },
    {
      icon: Briefcase,
      title: "Current Role",
      content: "Programmer / Web Developer at Jabatan Perkhidmatan Awam, working with C#, .NET, and SQL Server."
    },
    {
      icon: GraduationCap,
      title: "Education",
      content: "Bachelor of Computer Science (Hons) from UiTM Jasin, graduating September 2025."
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Based in Selangor, Malaysia"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 text-lg">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Cards - Always visible */}
          <div className="grid sm:grid-cols-2 gap-4">
            {infoCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-5 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{card.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.content}</p>
                </div>
              );
            })}
          </div>

          {/* About Text */}
          <div className="space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              I'm a detail-oriented developer with a strong foundation in software development and web technologies. 
              My expertise spans across <span className="text-foreground font-medium">C#, .NET framework, and modern web development</span> practices, 
              allowing me to build robust and scalable applications.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              At Jabatan Perkhidmatan Awam, I've successfully <span className="text-foreground font-medium">reduced document processing errors by over 95%</span> through 
              efficient software solutions. I work daily with .NET 8, SQL Server, and enterprise-level data integration tools.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I believe in continuous learning and staying updated with emerging technologies. My goal is to 
              contribute to innovative software projects and grow as a versatile software engineer.
            </p>
            
            {/* Quick highlights */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-3">Key Strengths:</p>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Clean Code", "Fast Learner", "Team Player"].map((strength, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
