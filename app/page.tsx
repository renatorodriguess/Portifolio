import { HeroSection } from "./components/pages/home/hero-section";
import { HighlitedProjects } from "./components/pages/home/highlited-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
   const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        } 
      }
    }
  `
  return fetchHygraphQuery( 
    query,
  )

}
export default async function Home() {
  const { page: pageData } = await getPageData()


  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighlitedProjects />
      <WorkExperience />
    </>
  )
}
