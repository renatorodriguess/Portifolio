'use client'

import Image from "next/image"
import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb"


const MOCK_CONTACTS = [
    {
        url: 'http://github.com/',
        icon: <TbBrandGithub />
    },
    {
        url: 'http://github.com/',
        icon: <TbBrandLinkedin />
    },
]



export const HeroSection = () => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Renato Rodrigues</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">
                        Olá nome é
                    </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 1 }).map((_, index) => (
                            <TechBadge name="Nextjs" />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center h-20">
                            {MOCK_CONTACTS.map((content, index) => (
                                <a
                                    href={content.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {content.icon}
                                </a>
                            ))}

                        </div>
                    </div>
                </div>

                <Image
                    width={420}
                    height={404}
                    src=""
                    alt="Foto de Perfil"
                    className="w-[300px] h-[300px] lg:w-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>
        </section>
    )
}