import { Bounce, Equilizer, Equilizer2, Equilizer3, Heart, MoonFaces, Pop, Prespective, Theme, Wheel } from "./animatedComponent"
import "./animation.css"

export default function Animation() {
    return (
        <div className="h-full w-full flex flex-wrap gap-4 select-none ">

            {/* <Transforms /> */}
            {/* <Transition /> */}
            {/* <KeyFrames /> */}
            <Equilizer />
            <Equilizer2 />
            <Equilizer3 />
            <Pop />
            <Heart />
            <Prespective />
            <Wheel />
            <Bounce />
            <Theme />
            <MoonFaces />


        </div>
    )
}
