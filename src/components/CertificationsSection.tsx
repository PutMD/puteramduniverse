import { Award, BookOpen, Clock, ExternalLink, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const completedCertifications = [
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#",
    skills: ["Cloud Computing", "Azure Services", "Cloud Architecture"],
  },
  {
    name: "SQL Server Database Administration",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialUrl: "#",
    skills: ["SQL Server", "Database Management", "Performance Tuning"],
  },
  {
    name: "C# Programming Fundamentals",
    issuer: "Coursera",
    date: "2023",
    credentialUrl: "#",
    skills: ["C#", ".NET", "Object-Oriented Programming"],
  },
];

const inProgressCertifications = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    progress: 65,
    expectedCompletion: "Q2 2025",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    progress: 40,
    expectedCompletion: "Q3 2025",
  },
];

const relevantTraining = [
  {
    name: "Advanced .NET Development",
    platform: "Pluralsight",
    hours: 40,
  },
  {
    name: "RESTful API Design",
    platform: "Udemy",
    hours: 25,
  },
  {
    name: "Agile Project Management",
    platform: "LinkedIn Learning",
    hours: 15,
  },
  {
    name: "Git & Version Control",
    platform: "Codecademy",
    hours: 20,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Continuous Learning</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Certifications & Training
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Committed to staying current with industry standards and expanding my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Completed Certifications */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Completed Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {completedCertifications.map((cert, index) => (
                <Card key={index} className="hover:border-primary transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <h4 className="font-semibold text-foreground">
                            {cert.name}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {cert.issuer} • {cert.date}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`View ${cert.name} credential`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* In Progress */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                In Progress
              </h3>
            </div>

            <div className="space-y-4">
              {inProgressCertifications.map((cert, index) => (
                <Card key={index} className="hover:border-primary transition-colors">
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.issuer}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-primary">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Expected: {cert.expectedCompletion}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Relevant Training */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Relevant Training
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relevantTraining.map((training, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium text-foreground mb-1">
                    {training.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {training.platform}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {training.hours} hours
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
