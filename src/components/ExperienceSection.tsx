import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Programmer / Web Developer (MySTEP)",
    company: "Jabatan Perkhidmatan Awam",
    period: "June 2025 – Present",
    achievements: [
      "Assisted in C# and .NET application development using Visual Studio 2022",
      "Supported data migration and integration using SQL Server & Cozyroc",
      "Reduced document processing errors by over 95%",
      "Troubleshot system and database issues",
      "Gained experience with .NET 8, SQL Server, and software testing",
    ],
    current: true,
  },
  {
    title: "IT Intern",
    company: "Anggun Lufya Travel and Tours",
    period: "March 2024 – June 2024",
    achievements: [
      "Maintained websites using HTML, CSS, JavaScript, and MySQL",
      "Improved site performance and system reliability",
      "Reduced IT request resolution time by 30%",
    ],
    current: false,
  },
  {
    title: "Tutor Helper",
    company: "Kumon Putra Height",
    period: "Dec 2018 – Mar 2019",
    achievements: [
      "Guided students through problem-solving and learning exercises",
      "Developed patience and communication skills",
    ],
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

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    exp.current 
                      ? "bg-primary border-primary" 
                      : "bg-background border-primary"
                  }`} />
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                  <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className={`text-sm font-medium ${
                        exp.current ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {exp.current ? "Current" : "Previous"}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
