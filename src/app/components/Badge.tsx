interface BadgeProps {
    content: string
}

const Badge = ({ content }: BadgeProps) => {
    return (
        <div className="h-[33px] bg-right sm:bg-left bg-rectangle bg-no-repeat rounded mt-1 flex items-center text-white font-semibold text-sm px-2">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default Badge;