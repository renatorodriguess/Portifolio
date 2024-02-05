import { HeroSection } from "./components/pages/home/hero-section";
import { HighlitedProjects } from "./components/pages/home/highlited-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";


export default async function Home() {
  
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlitedProjects />
      <WorkExperience />
    </>
  )
}
