import { useEffect, useState } from "react";
import { data } from "../../data/products";

export default function CustomScroll() {

    const [scrollPercentage, setSetscrollPercentage] = useState<number>()
    const [scrollHeight, setScrollHeight] = useState<number>()
    const scrollElement = document.getElementById("scroll");


    function handleScroll() {
        if (scrollElement) {
            setSetscrollPercentage(scrollElement.scrollTop);
            setScrollHeight(scrollElement.scrollHeight - scrollElement.clientHeight);
        }
    }


    useEffect(() => {
        if (scrollElement) {
            scrollElement.addEventListener("scroll", handleScroll)
        }

        return () => {
            window.removeEventListener("scroll", () => { })
        }
    }, [scrollElement, handleScroll])



    return (
        <div className="flex h-full w-full flex-col items-center">
            <div className="py-2 w-full flex items-center justify-center flex-col gap-2">
                <h1 className="text-2xl font-bold">Custom Scroll</h1>
                <progress className=" w-full" value={scrollPercentage} max={scrollHeight} />
            </div>
            <div id="scroll" className="flex flex-col w-full items-center overflow-y-auto">
                {
                    data.products.map(({ id, title }) => {
                        return <p className="capitalize py-2 " key={id}>{title}</p>
                    })
                }
            </div>
        </div>
    )
}
