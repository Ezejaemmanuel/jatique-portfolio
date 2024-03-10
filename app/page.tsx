import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsComponent from "@/components/all-my-skills";
import { HorizontalScrollCarousel } from "@/components/my-skills";
import { MainZoomText } from "@/components/testing/all-zoom-text";
import MyProjects from "@/components/testing/my-projects";
import { Carousel } from "@/components/testing/testing-carousel";
import { Benefits } from "@/components/testing/testing-my-skills";
import { SwipeCarousel } from "@/components/what-our-clients-are-saying";



export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212]">
      <Navbar />
      <div className="container   py-4 mx-auto mt-24">
        <HeroSection />
        <AchievementsSection />
        <div className="">
          <SkillsComponent />
        </div>
        <HorizontalScrollCarousel />
        <MyProjects />
        {/* <AboutSection /> */}
        <MainZoomText />
        <SwipeCarousel />
        {/* <ProjectsSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
