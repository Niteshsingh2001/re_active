import { data } from "../../data/products";

export default function ScrollToTopAndBottom() {
    function handleTop() {
        const container = document.getElementById("scroll")
        if (container) {
            container.scrollTo({
                behavior: "smooth",
                left: 0,
                top: 0
            })

        }

    }
    function handleBottom() {
        const container = document.getElementById("scroll")
        if (container) {
            container.scrollTo({
                behavior: "smooth",
                left: 0,
                top: container.scrollHeight
            })

        }

    }



    return (
        <div className="flex h-full w-full flex-col items-center">
            <div className="py-2 w-full flex items-center justify-center flex-col gap-2">
                <h1 className="text-2xl font-bold">Custom Scroll</h1>
                <button onClick={handleBottom} className="bg-black py-1 px-2 text-white rounded" type="button">Scroll to Bottom</button>
            </div>
            <div id="scroll" className="flex flex-col  w-fit overflow-y-auto">
                <div className="flex justify-center flex-col">
                    {
                        data.products.map(({ id, title }, index) => {
                            return <p className="capitalize py-2 " key={id}>{index} {title}</p>
                        })
                    }
                </div>
            </div>
            <div className="py-2 w-full flex items-center justify-center flex-col gap-2">
                <button onClick={handleTop} className="bg-black py-1 px-2 text-white rounded" type="button">Scroll to Top</button>
            </div>
        </div>
    )
}

// QhGAWD5aetA1P4V3