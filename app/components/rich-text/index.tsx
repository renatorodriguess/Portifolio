import { ComponentProps } from "react"
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer"


type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({ ...props }: RichTextProps) => {
    return (
        <CMSRichText
            {...props}
            renderers={{
                bold: ({ children }) => (
                    <b className="text-gray-50 font-medium">{children}</b>
                ),
                ul: ({ children }) => (
                    <ul className="list-disc list-inside flex pl-2 flex-col gap-1">
                        {children}
                    </ul>
                ),
                a: ({ children, ...pros }) => (
                    <a
                        {...pros}
                        className="underline hover:text-emerald-500 transition-colors"
                    >
                        {children}
                    </a>
                )
            }}
        />
    )
}