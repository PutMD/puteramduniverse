import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Blood Donation Mobile Application",
    description: "A location-based mobile application for discovering blood donation events with real-time listings and notifications.",
    features: [
      "Location-based blood donation event discovery",
      "Real-time event listings and notifications",
      "Firebase authentication and cloud storage",
      "Clean, user-friendly mobile UI",
    ],
    tags: ["Java", "Firebase", "Google Maps API"],
    icon: Smartphone,
    githubUrl: "https://github.com/PutMD",
  },
  {
    title: "Personal Portfolio Website",
    description: "A fully responsive personal portfolio website showcasing projects, skills, and professional experience.",
    features: [
      "Fully responsive design",
      "Clean navigation and fast load time",
      "Custom JavaScript interactions",
      "Mobile-first and semantic HTML practices",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    githubUrl: "https://github.com/PutMD",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Browse My Recent</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <article
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-primary transition-all group"
              >
                {/* Project Icon Header */}
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="p-6 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-16 w-16 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
