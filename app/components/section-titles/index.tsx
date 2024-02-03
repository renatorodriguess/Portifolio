import { cn } from "@/app/lib/utils"

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
    return (
        <div className={cn('flex flex-col gap-4')}>
            <span className="font-mono text-sm text-emerald-400">{`../${subtile}`}</span>
            <h3 className="text-3xl font-medium">{title}</h3>
        </div>
    )
}
