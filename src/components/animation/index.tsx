import { Bounce, Equilizer, Equilizer2, Equilizer3, Heart, MoonFaces, Pop, Prespective, Theme, Wheel } from "./animatedComponent"
import "./animation.css"

export default function Animation() {
    return (
        <div className="h-full">
            <div className=" w-full flex flex-wrap justify-start items-start gap-4 select-none ">

                {/* <Transforms /> */}
                {/* <Transition /> */}
                {/* <KeyFrames /> */}
                <Equilizer />
                <Equilizer2 />
                <Equilizer3 />
                <Heart />
                <Prespective />
                <Wheel />
                <Bounce />
                <Theme />
                <MoonFaces />


            </div>
        </div>
    )
}
