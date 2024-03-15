import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { ComponentProps } from "react"

interface Card extends ComponentProps<"div"> {
    logo: string
    description: string
}
const elements: Array<string | number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function random(elements: Array<string | number>, length: number) {
    return elements[Math.floor(Math.random() * length)]
}

function getRandomColors() {
    let newColor: string = "#"
    for (let index = 0; index < 6; index++) {
        newColor += random(elements, elements.length)
    }
    return newColor
}


export default function Card({ logo, description, className }: Card) {
    return (

        <div style={{ backgroundColor: getRandomColors() }} className={`p-4 sticky justify-center gap-2 h-[250px] rounded-md shadow-md flex flex-col w-[800px]  my-2 ${className}`}>
            <h1 className="text-4xl font-bold drop-shadow-mds">{logo}</h1>
            <p className="text-2xl font-thin drop-shadow-mds">{description}</p>
            <span><ArrowRightIcon className="h-5 w-5" /></span>
        </div>

    )
}
