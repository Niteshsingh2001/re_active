import ImageSlider from "../imageSlider"
import QRCodeGenerator from "../qrCodeGenerator"

interface Tab {
    name: string
    content: JSX.Element
}
export const tabs: Array<Tab> = [
    {
        name: "Tab 1",
        content: <div className="font-bold">Content 1</div>
    },
    {
        name: "Tab 2",
        content: <div className="font-thin">Content 2</div>
    },
    {
        name: "Tab 3",
        content: <div className="text-red-500">Content 3</div>
    },
    {
        name: "Tab 4",
        content: <div className="font-serif text-blue-500">Content 4</div>
    },
    {
        name: "Tab 5",
        content: <QRCodeGenerator />
    },
    {
        name: "Tab 6",
        content: <ImageSlider />
    },

]