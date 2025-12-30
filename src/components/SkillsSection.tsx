import { Code, Wrench, Database, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C#", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Technologies",
    icon: Wrench,
    skills: [".NET 8", "ASP.NET", "HTML", "CSS", "SDLC"],
  },
  {
    title: "Tools",
    icon: Database,
    skills: ["Visual Studio 2022", "Git", "SQL Server Management Studio", "Cozyroc"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MySQL"],
  },
];

const coreCompetencies = [
  "Data Integration",
  "Software Testing",
  "Problem-Solving",
  "Time Management",
  "Documentation Accuracy",
  "Analytical Thinking",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Explore My</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-muted text-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Brain className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Core Competencies</h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {coreCompetencies.map((competency, index) => (
              <div
                key={index}
                className="bg-background px-6 py-3 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <span className="text-foreground font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
