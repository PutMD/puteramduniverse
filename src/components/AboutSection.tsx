import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutSection = () => {
  const infoCards = [
    {
      id: "who-i-am",
      icon: User,
      title: "Who I Am",
      content: "A motivated Computer Science graduate passionate about creating efficient software solutions and solving complex problems."
    },
    {
      id: "current-role",
      icon: Briefcase,
      title: "Current Role",
      content: "Programmer / Web Developer at Jabatan Perkhidmatan Awam, working with C#, .NET, and SQL Server."
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      content: "Bachelor of Computer Science (Hons) from UiTM Jasin, graduating September 2025."
    },
    {
      id: "location",
      icon: MapPin,
      title: "Location",
      content: "Based in Selangor, Malaysia"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 my-0 text-xl">Get To Know</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Cards - Collapsible */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {infoCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <AccordionItem
                  key={card.id}
                  value={card.id}
                  className="bg-card rounded-lg border border-border hover:border-primary transition-colors shadow-sm px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold text-card-foreground">{card.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-muted-foreground pl-10">{card.content}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* About Text */}
          <div>
            <p className="leading-relaxed mb-6 text-muted-foreground">
              I'm a detail-oriented developer with a strong foundation in software development and web technologies. 
              My expertise spans across C#, .NET framework, and modern web development practices, allowing me to 
              build robust and scalable applications.
            </p>
            <p className="leading-relaxed mb-6 text-muted-foreground">
              Currently, I'm focused on application development, data integration, and database management at 
              Jabatan Perkhidmatan Awam, where I've successfully reduced document processing errors by over 95% 
              through efficient software solutions.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I believe in continuous learning and staying updated with emerging technologies. My goal is to 
              contribute to innovative software projects that make a positive impact and to grow as a versatile 
              software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;