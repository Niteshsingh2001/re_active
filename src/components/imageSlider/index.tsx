import { useState } from "react"
import { images } from "./imageData"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"


export default function ImageSlider() {
    const [currentImage, setCurrentImage] = useState<number>(0)

    function handleLeft() {
        if (currentImage <= 0) {
            setCurrentImage(images.length - 1)
        }
        else {
            setCurrentImage((prev: number) => prev - 1)
        }


    }

    function handleRight() {
        if (currentImage >= images.length - 1) {
            setCurrentImage(0)
        }
        else {
            setCurrentImage((prev: number) => prev + 1)

        }
    }



    return (
        <div className="flex flex-col justify-between items-center my-2 py-2 ">

            <div className="flex w-[800px] h-[500px] ">
                <button type="button" onClick={handleLeft} aria-label="Previous">
                    <ChevronLeftIcon className="w-10 h-10 drop-shadow-md text-black" />
                </button>

                <img src={images[currentImage].download_url} alt={images[currentImage].author} className="rounded object-fill" />

                <button type="button" onClick={handleRight} aria-label="Previous">
                    <ChevronRightIcon className="w-10 h-10 drop-shadow-md text-black" />
                </button>
            </div>

            <div className="relative bottom-6 flex gap-2 items-center justify-center">
                {images.map((_, index) =>
                    <div
                        key={index}
                        className={`${currentImage === index ? "bg-slate-600" : "bg-slate-200"} cursor-pointer  rounded-full w-3 h-3`}
                        onClick={() => { setCurrentImage(index) }}
                    />
                )}
            </div>


        </div >
    )
}
