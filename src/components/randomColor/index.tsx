import { useState } from 'react'

const elements: Array<string | number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

export default function RandomColor() {

    const [color, setcolor] = useState<string>("#ffffff")
    const [colorType, setColorType] = useState<"HEX" | "RGB">("RGB")

    function random(elements: Array<string | number>, length: number) {
        return elements[Math.floor(Math.random() * length)]
    }

    function hextorgb(colorCode: string) {
        const hex: string = colorCode.replace(/^#/, '');
        const r: number = parseInt(hex.substring(0, 2), 16);
        const g: number = parseInt(hex.substring(2, 4), 16);
        const b: number = parseInt(hex.substring(4, 6), 16);
        return `rgb(${r},${g},${b})`;
    }
    function handleRandomize() {
        let newColor: string = "#"
        for (let index = 0; index < 6; index++) {
            newColor += random(elements, elements.length)
        }
        setcolor(newColor)
    }


    return (
        <div style={{ backgroundColor: color }} className='flex flex-col items-center  w-full h-full'>
            <div className='flex gap-2 my-2'>
                <button onClick={() => { setColorType("HEX") }} className='bg-blue-500 rounded text-white px-3 py-1' type="button">HEX</button>
                <button onClick={() => { setColorType("RGB") }} className='bg-blue-500 rounded text-white px-3 py-1' type="button">RGB</button>
                <button onClick={handleRandomize} className='bg-blue-500 rounded text-white px-3 py-1' type="button">Randomize</button>
            </div>

            <div className='h-full w-full' >
                <div className='flex items-center justify-center h-full'>
                    {
                        colorType === "HEX" ?
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <h3 className=' font-semibold'>{colorType}</h3>
                                <p className='text-2xl font-light'>{color}</p>
                            </div>
                            :
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <h3 className=' font-semibold'>{colorType}</h3>
                                <p className='text-2xl font-light'>{hextorgb(color)}</p>
                            </div>
                    }
                </div>
            </div>



        </div>
    )
}
