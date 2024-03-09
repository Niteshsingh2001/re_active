import { RefObject, useRef } from "react";
import { data } from "../../data/products";

export default function ScrollToView() {
    const ref: RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null)
    function handleToView() {

        const container = document.getElementById("scroll")

        if (ref.current && container) {

            container.scrollTo({
                behavior: "smooth",
                top: ref.current?.getBoundingClientRect().top
            })
            ref.current.style.color = "blue"
        }

    }



    return (
        <div className="flex h-full w-full flex-col items-center">
            <div className="py-2 w-full flex items-center justify-center flex-col gap-2">
                <h1 className="text-2xl font-bold">Scroll To Section</h1>
                <button onClick={handleToView} className="bg-black py-1 px-2 text-white rounded" type="button">Scroll to 10 Element</button>
            </div>
            <div id="scroll" className="flex flex-col  w-fit overflow-y-auto">
                <div className="flex justify-center flex-col gap-4 ">
                    {
                        data.products.map(({ id, title }, index) => {
                            return <p ref={index === 25 ? ref : null} className="capitalize py-2 h-14 bg-slate-400 flex items-center px-2 rounded" key={id}>{index} {title}</p>
                        })
                    }
                </div>
            </div>

        </div>
    )
}
