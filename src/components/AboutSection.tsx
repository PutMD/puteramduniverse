import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 bg-secondary">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 my-0 text-xl">Get To Know</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="grid gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group shadow-sm">
              <User className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Who I Am</h3>
              <p className="text-muted-foreground">
                A motivated Computer Science graduate passionate about creating efficient software solutions and solving complex problems.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group shadow-sm">
              <Briefcase className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Current Role</h3>
              <p className="text-primary">
                Programmer / Web Developer at Jabatan Perkhidmatan Awam, working with C#, .NET, and SQL Server.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group">
              <GraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Education</h3>
              <p className="text-primary">
                Bachelor of Computer Science (Hons) from UiTM Jasin, graduating September 2025.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group border-solid shadow-sm">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Location</h3>
              <p className="text-primary">
                Based in Selangor, Malaysia
              </p>
            </div>
          </div>

          {/* About Text */}
          <div>
            <p className="leading-relaxed mb-6 text-primary">
              I'm a detail-oriented developer with a strong foundation in software development and web technologies. 
              My expertise spans across C#, .NET framework, and modern web development practices, allowing me to 
              build robust and scalable applications.
            </p>
            <p className="leading-relaxed mb-6 text-primary">
              Currently, I'm focused on application development, data integration, and database management at 
              Jabatan Perkhidmatan Awam, where I've successfully reduced document processing errors by over 95% 
              through efficient software solutions.
            </p>
            <p className="leading-relaxed text-primary">
              I believe in continuous learning and staying updated with emerging technologies. My goal is to 
              contribute to innovative software projects that make a positive impact and to grow as a versatile 
              software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;