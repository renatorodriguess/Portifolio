import { HorizontalDivider } from "@/app/components/divider/horizontal."
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/app/types/projects"


type HighlitedProjectsProps = {
    projects: Project[]
}

export const HighlitedProjects = ({ projects }: HighlitedProjectsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtile="Destaques" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16" />

            <div>
                {projects?.map(project => (
                    <div key={project.slug}>
                        <ProjectCard project={project}/>
                        <HorizontalDivider />
                    </div>
                ))}
                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href="/projects" className="inline-flex">
                        Ver Todos
                        <HiArrowNarrowRight />
                    </Link>
                </p>
            </div>
        </section>
    )
}