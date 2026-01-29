import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Putera M. Danial | Software Developer - C# & .NET Specialist</title>
        <meta 
          name="description" 
          content="Software Developer specializing in C#, .NET, and SQL Server. Reduced document processing errors by 95%. View my portfolio, projects, and download my resume." 
        />
        <meta name="keywords" content="Putera M. Danial, software developer, C#, .NET developer, SQL Server, web developer, Malaysia, hire developer" />
        <meta property="og:title" content="Putera M. Danial | Software Developer - C# & .NET Specialist" />
        <meta property="og:description" content="Software Developer who builds reliable systems. Reduced errors by 95%. View portfolio and download resume." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://puteramdanial.com" />
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
          <CertificationsSection />
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
