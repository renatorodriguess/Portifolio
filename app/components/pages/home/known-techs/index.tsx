import { SectionTitle } from "@/app/components/section-titles"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtile="Competências" title="Conhecimentos" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {Array.from({ length: 8 }).map((_, index) => (
                    <KnownTech tech={{
                        icon: <TbBrandNextjs />,
                        name: "Next.js",
                        startDate: "2024-02-01"
                    }} />
                ))}
            </div>
        </section>
    )
}