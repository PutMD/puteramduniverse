import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science (Hons)",
    institution: "Universiti Teknologi MARA (UiTM), Jasin",
    graduation: "September 2025",
    current: true,
  },
  {
    degree: "Module 3 Computer Science",
    institution: "Perlis Matriculation College",
    graduation: "May 2020",
    current: false,
  },
];

const languages = [
  { name: "Malay", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Beginner" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education & Languages</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors relative"
                >
                  {edu.current && (
                    <span className="absolute top-4 right-4 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      Current
                    </span>
                  )}
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Graduation: {edu.graduation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="text-lg">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Languages</h3>
            </div>

            <div className="space-y-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{language.name}</span>
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      {language.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
