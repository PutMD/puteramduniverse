import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Putera M. Danial | Software Engineer | .NET & Full-Stack Web Developer</title>
        <meta 
          name="description" 
          content="Software Engineer specializing in C#, .NET 8, ASP.NET Core, SQL Server, RESTful APIs, and full-stack web development. View projects and download my resume."
        />
        <meta name="keywords" content="Putera M. Danial, software engineer, C#, .NET 8, ASP.NET Core, SQL Server, RESTful API, full-stack web developer, Malaysia" />
        <meta property="og:title" content="Putera M. Danial | Software Engineer | .NET & Full-Stack Web Developer" />
        <meta property="og:description" content="Software Engineer building reliable enterprise solutions, RESTful APIs, data integration pipelines, and high-performing web experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://puteramduniverse.lovable.app" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pb-20">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <ThemeCustomizer />
        <StickyCTA />
      </div>
    </>
  );
};

export default Index;
