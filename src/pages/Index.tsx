import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Putera M. Danial | Programmer & Web Developer Portfolio</title>
        <meta 
          name="description" 
          content="Motivated Computer Science graduate with expertise in C#, .NET, and web development. Explore my projects, skills, and work experience in software development." 
        />
        <meta name="keywords" content="Putera M. Danial, programmer, web developer, C#, .NET, software engineer, Malaysia" />
        <meta property="og:title" content="Putera M. Danial | Programmer & Web Developer Portfolio" />
        <meta property="og:description" content="Motivated Computer Science graduate with expertise in C#, .NET, and web development." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://puteramdanial.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <ThemeCustomizer />
      </div>
    </>
  );
};

export default Index;
