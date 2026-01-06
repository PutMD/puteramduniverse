import { Briefcase, Calendar, CheckCircle, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Software Developer (MySTEP)",
    company: "Jabatan Perkhidmatan Awam",
    period: "June 2025 – Present",
    highlight: "95% error reduction in document processing",
    achievements: [
      "Built production C# applications using .NET 8 and Visual Studio 2022",
      "Reduced document processing errors by 95% through automated solutions",
      "Led data migration and integration projects using SQL Server & Cozyroc",
      "Resolved system and database issues, improving team productivity",
    ],
    technologies: ["C#", ".NET 8", "SQL Server", "Visual Studio"],
    current: true,
  },
  {
    title: "IT Support & Web Developer",
    company: "Anggun Lufya Travel and Tours",
    period: "March 2024 – June 2024",
    highlight: "30% faster IT request resolution",
    achievements: [
      "Reduced IT request resolution time by 30% through streamlined processes",
      "Maintained and optimized company websites using HTML, CSS, JavaScript",
      "Improved site performance and system reliability for better user experience",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    current: false,
  },
  {
    title: "Tutor Helper",
    company: "Kumon Putra Heights",
    period: "Dec 2018 – Mar 2019",
    highlight: "Developed communication skills",
    achievements: [
      "Guided students through problem-solving and learning exercises",
      "Developed patience, mentoring, and clear communication skills",
    ],
    technologies: [],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className={`bg-background p-6 md:p-8 rounded-lg border transition-colors ${
                exp.current ? "border-primary" : "border-border hover:border-primary"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Key Result Highlight */}
              <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg mb-4">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  Key Result: {exp.highlight}
                </span>
              </div>

              {/* Achievements */}
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-muted text-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
