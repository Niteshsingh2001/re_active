import { ChangeEvent, useState } from "react"
import QRCode from "react-qr-code"

export default function QRCodeGenerator() {

    const [text, setText] = useState<string>('')
    const [qrValue, setQrValue] = useState('')

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }


    function handleGenerate() {
        setQrValue(text)
        setText('')
    }


    return (
        <div className="h-screen flex flex-col gap-2  justify-evenly">

            <div className="flex gap-2 w-full items-center justify-center">
                <input type="text"
                    className="bg-gray-200 rounded p-1 px-2 outline-none w-96"
                    placeholder="Enter text here"
                    aria-label="text here"
                    value={text}
                    onChange={handleInputChange}
                />
                <button
                    type="button"
                    onClick={handleGenerate}
                    className="bg-blue-500 rounded p-1 px-2 text-white disabled:bg-slate-500"
                    disabled={text && text.trim() !== "" ? false : true}
                >
                    Generate
                </button>
            </div>

            <div className="flex items-center justify-center  ">
                {qrValue && <QRCode value={qrValue} className="rounded-lg p-1"  />}
            </div>
        </div>
    )
}
