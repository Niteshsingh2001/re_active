import Accordian from "../components/accodian"
import ImageSlider from "../components/imageSlider"
import QRCodeGenerator from "../components/qrCodeGenerator"
import RandomColor from "../components/randomColor"
import StarRating from "../components/starRating"
import TreeView from "../components/treeView"
import HomePage from "../routes/homepage"

interface Components {
    link: string
    label: string
    component: () => JSX.Element
}


export const components: Components[] = [
    {
        link: "",
        label: "HomePage",
        component: HomePage
    },
    {
        link: "accordian", label: "Accordian",
        component: Accordian
    },
    {
        link: "random_color", label: "Random Color",
        component: RandomColor
    },
    {
        link: "star_rating", label: "Star Rating",
        component: StarRating
    },
    {
        link: "image_slider", label: "Image Slider",
        component: ImageSlider
    },
    {
        link: "tree_view", label: "Tree View",
        component: TreeView
    },
    {
        link: "qr_code_generator", label: "QR Code Generator",
        component: QRCodeGenerator
    },

]
