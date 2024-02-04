import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px_1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-start gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-churrasco-criativo_23-2149017951.jpg?w=740&t=st=1707007481~exp=1707008081~hmac=13711ba93d604ba27ed02d1edffa73cfa31b893f918088204dbf558246012f3d.svg"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo Freelancer"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800"></div>
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a
                        href="#"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @ Freelancer
                    </a>
                    <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
                    <span className="text-gray-500">
                        ago 2023 • O momento • (6 meses)
                    </span>
                    <p className="text-gray-400">
                        Desenvolvimento e manutenção de interfaces utilizando React, Next, Tailwind, Typescript e Figma. Para o planejamento dos sprints, é utilizado o Jira.
                    </p>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                </div>
            </div>
        </div>
    )
}