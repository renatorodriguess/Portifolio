'use client'

import { FaRegEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

export const ContactForm = () => {
    return (
        <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
            <motion.div className="w-full max-w-[600px] mx-auto"
            {...fadeUpAnimation}
            >
                <div className="max-w-[1000px] w-full lg:text-center">
                    <div className="items-center text-center">
                        <p className="text-5xl lg:text-6xl font-bold lg:font-black inline border-b-4 border-emerald-600 text-gray-300">
                            Contato
                        </p>
                        <p className="text-gray-300 text-center text-[21px] pt-9 pb-7">Me envie um email para conversarmos! Você também pode me encontrar no <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/renato-rodriguess/" className="underline decoration-emerald-600 hover:text-emerald-700">Linkedin</a> se desejar mais praticidade!.</p>
                        <div>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renato072002@gmail.com" className="text-2xl lg:font-semibold flex items-center justify-center gap-3
                                text-emerald-500 hover:text-emerald-600">
                                <FaRegEnvelope />
                                renato072002@gmail.com</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}