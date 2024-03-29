import React from 'react'
import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectList } from '../components/pages/projects/projects-list'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'
import { ProjectsPageData } from '../types/page-info'

export const metadata = {
  title: 'Projetos'
}

const getPageData = async (): Promise<ProjectsPageData>=> {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `


  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}


export default async function Projects() {
  const { projects } = await getPageData()
  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  )
}