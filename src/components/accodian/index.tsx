import { useState } from 'react'
import { accordionData } from './data'

export default function Accordian() {
    const [selectionType, setselectionType] = useState<"single" | "multi">("single")
    const [single, setSingle] = useState<number | null>(null)
    const [multi, setmulti] = useState<Array<number>>([])

    function handleSingle(id: number) {
        setSingle(single === id ? null : id)
    }
    function handleMulti(id: number) {
        const cpyMulti = [...multi]
        if (multi.indexOf(id) === -1) {
            cpyMulti.push(id)
        }
        else {
            cpyMulti.splice(multi.indexOf(id), id)
        }
        setmulti(cpyMulti)
    }

    return (
        <div className='w-full h-full flex flex-col items-center gap-2 justify-center'>

            {
                selectionType === "single" ?
                    <button className='bg-blue-600 rounded p-2 text-white' onClick={() => setselectionType("multi")} type='button'>Multi Select</button>
                    :
                    <button className='bg-blue-600 rounded p-2 text-white' type='button' onClick={() => setselectionType("single")} >Single Select</button>
            }

            {
                accordionData && accordionData.map(({ content, id, title }) =>
                    <div key={id} onClick={() => { selectionType === "single" ? handleSingle(id) : handleMulti(id) }} className='w-[500px] bg-slate-500 p-2 rounded flex flex-col gap-2 text-white'>

                        <div className="flex justify-between font-medium">
                            <h3>{title}</h3>
                            <span>+</span>
                        </div>
                        {
                            selectionType === "single" ?
                                single === id && <p>{content}</p>
                                :
                                multi.indexOf(id) !== -1 && <p>{content}</p>
                        }


                    </div>)
            }

        </div>

    )
}
