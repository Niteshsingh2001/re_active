import { useState } from "react"
import Model from "./model"

export default function CustomModal() {
    const [opneModel, setOpneModel] = useState<boolean>(false)
    const handleModel = () => { setOpneModel(!opneModel) }


    return (
        <div className="h-full w-full flex  bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center">
            {opneModel && <Model title="Information" onClose={handleModel} />}
            <button type="button" className="bg-blue-500 rounded text-white px-5 py-1" onClick={handleModel}>Open Model</button>
        </div>
    )
}
