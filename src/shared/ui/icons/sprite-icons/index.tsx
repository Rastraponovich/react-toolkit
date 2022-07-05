import { ComponentProps, Ref, forwardRef, ForwardedRef } from "react"

const Sprite = (props: ComponentProps<"svg">, svgRef: ForwardedRef<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 19 19"
            aria-hidden={true}
            {...props}
            ref={svgRef}
        >
            <use xlinkHref={`/assets/social.svg#${props.name}`}></use>
        </svg>
    )
}
export const SpriteIcons = forwardRef(Sprite)
