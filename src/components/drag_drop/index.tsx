import { useState } from "react";



export default function DragDrop() {
    const [data, setData] = useState<string[]>([])
    const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3", "Item 4"])

    return (
        <div className="h-full w-full flex shadow-md gap-1 p-1">

            {/* Dragables */}
            <div className=" bg-gray-200 w-1/3 p-2 gap-2 flex flex-col">
                {
                    items.map((item, index) => {
                        return (
                            <div
                                key={index}
                                draggable
                                className="p-2 rounded-md shadow-sm bg-white"
                                onDragStart={(e) => {
                                    e.dataTransfer.setData("data", item);
                                    e.dataTransfer.dropEffect = "move";
                                }}
                            >
                                {item}
                            </div>

                        )
                    })
                }

            </div>


            {/* Drop Area */}
            <div
                className="border-dashed rounded-md border-2 flex items-center justify-center 
                border-black bg-pink-100  w-full flex-col gap-2 px-2"

                onDragOver={(e) => {
                    e.preventDefault();
                }}

                onDrop={(e) => {
                    e.preventDefault();
                    const newItems = items.filter((item) => item !== e.dataTransfer.getData("data"));
                    setItems([...newItems])
                    setData([...data, e.dataTransfer.getData("data")]);
                }}

            >
                {
                    data && data.length > 0 ? data.map((item, index) => {
                        return (
                            <div key={index} className="p-2 rounded-md shadow-sm w-full bg-white">
                                {item}
                            </div>
                        )
                    })
                        :
                        <p>Drop Area</p>
                }
            </div>


        </div>
    )
}

