import { Code, Wrench, Database, Brain, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Backend",
    icon: Code,
    skills: ["C#", ".NET 8", "ASP.NET Core Web API", "Python", "Java", "SQL", "Entity Framework"],
  },
  {
    title: "Frontend & Web",
    icon: Wrench,
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive UI Design", "RESTful Services"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["SQL Server", "SSMS", "MySQL", "Firebase", "Git", "GitHub", "Visual Studio 2022", "Cozyroc"],
  },
  {
    title: "Engineering Practices",
    icon: GitBranch,
    skills: ["Function Point Analysis", "Software Testing & QA", "Data Migration", "CI/CD Baselines"],
  },
];

const coreCompetencies = [
  "Agile Methodologies",
  "RESTful API Architecture",
  "ETL Data Integration",
  "Function Point Analysis",
  "Software Testing & QA",
  "Git Workflows",
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
