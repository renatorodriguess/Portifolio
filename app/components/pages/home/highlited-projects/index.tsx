import { HorizontalDivider } from "@/app/components/divider/horizontal."
import { SectionTitle } from "@/app/components/section-titles"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlitedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtile="Destaques" title="Projetos em destaque"/>
            <HorizontalDivider className="mb-16" />

            <div>
                <ProjectCard />
                <HorizontalDivider />
                <ProjectCard />
                <HorizontalDivider />

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