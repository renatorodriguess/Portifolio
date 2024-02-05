type CMCSIconProps = {
    icon: string;
}

export const CMSIcon = ({ icon }: CMCSIconProps) => {
    return (
        <div
        dangerouslySetInnerHTML={{
            __html: icon
        }}
        >
        </div>
    )
}