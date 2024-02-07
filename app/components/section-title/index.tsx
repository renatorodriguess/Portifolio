'use client'

import { cn } from "@/app/lib/utils"
import { motion } from "framer-motion"

type SectionTtitleProps = {
    title: string,
    subtile: string,
    className?: string
}

export const SectionTitle = ({
    title,
    subtile,
    className
}: SectionTtitleProps) => {
    const animProps = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: -100 }
    }
    return (
        <div className={cn('flex flex-col gap-4', className)}>
            <motion.span
                {...animProps}
                transition={{ duration: 0.5 }}
                className="font-mono text-sm text-emerald-400">{`../${subtile}`}
            </motion.span>
            <motion.h3 className="text-3xl font-medium"
                {...animProps}
                transition={{ duration: 0.5, delay: 0.2 }}
            >{title}
            </motion.h3>
        </div>
    )
}
