import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team features.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts and interactive maps.",
    tags: ["React", "API Integration", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Browse My Recent</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Project Preview</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

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
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
