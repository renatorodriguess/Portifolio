import Image from "next/image"
import { TechBadge } from "@/app/components/tech-badge"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = ( ) => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                width={420}
                height={304}
                src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                alt="Thumbnail Projeto 1"
                className="w-full h-[200px] sm-h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                    width={20}
                    height={20}
                    alt=""
                    src="/images/icons/project-title-icon.svg"
                    />
                    Teste
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempore laudantium magni! Incidunt laboriosam itaque nostrum, nihil autem eaque reprehenderit accusamus eos odio ab minima accusantium architecto veritatis. Sit sequi similique esse. Quam veniam rerum totam est numquam veritatis, minus sequi aspernatur soluta, quia ea suscipit eveniet voluptate facere impedit!
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="NextJs"/>
                    <TechBadge name="NextJs"/>
                    <TechBadge name="NextJs"/>
                    <TechBadge name="NextJs"/>
                    <TechBadge name="NextJs"/>
                    <TechBadge name="NextJs"/>
                    <TechBadge name="NextJs"/>
                </div>

                <Link href="/projects/teste">
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}