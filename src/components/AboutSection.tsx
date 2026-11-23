import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  const infoCards = [
    {
      icon: User,
      title: "Who I Am",
      content: "A results-driven Software Engineer and Web Developer with a Computer Science background and hands-on enterprise development experience."
    },
    {
      icon: Briefcase,
      title: "Current Role",
      content: "Personnel MySTEP at Jabatan Perkhidmatan Awam, building enterprise backend solutions with C#, .NET 8, and SQL Server."
    },
    {
      icon: GraduationCap,
      title: "Education",
      content: "Bachelor of Computer Science (Hons) from UiTM Jasin, graduated September 2025."
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Based in Bandar Saujana Putra, Selangor, Malaysia"
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
              I'm a results-driven Software Engineer and Web Developer with hands-on experience building enterprise solutions using
              <span className="text-foreground font-medium"> C#, .NET 8, ASP.NET Core, and SQL Server</span>.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I architect RESTful APIs, deliver high-accuracy data integration pipelines, and optimize web frontend performance.
              At Jabatan Perkhidmatan Awam, I <span className="text-foreground font-medium">reduced document processing errors by over 95%</span> while streamlining departmental workflows.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I apply Agile methodologies and Git workflows to deliver clean, reliable, and scalable software,
              supported by precise documentation and accurate development estimates.
            </p>
            
            {/* Quick highlights */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-3">Key Strengths:</p>
              <div className="flex flex-wrap gap-2">
                {["RESTful APIs", "Data Integration", "Agile & Git", "Clean, Scalable Code"].map((strength, i) => (
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
