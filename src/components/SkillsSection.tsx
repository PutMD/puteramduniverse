const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "PostgreSQL", level: 75 },
];

const tools = [
  "Git & GitHub",
  "VS Code",
  "Figma",
  "Docker",
  "AWS",
  "Vercel",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Explore My</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-card p-4 rounded-lg border border-border text-center hover:border-primary transition-colors"
                >
                  <span className="text-foreground font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
