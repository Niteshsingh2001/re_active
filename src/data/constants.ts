import Accordian from "../components/accodian"
import AutoComplete from "../components/autocomplete"
import CustomModal from "../components/customModal"
import CustomScroll from "../components/customScroll"
import CustomTabs from "../components/customTabs"
import GithubProfile from "../components/githubProfileFinder"
import ImageSlider from "../components/imageSlider"
import QRCodeGenerator from "../components/qrCodeGenerator"
import RandomColor from "../components/randomColor"
import StarRating from "../components/starRating"
import TreeView from "../components/treeView"

interface Components {
    link: string
    label: string
    component: () => JSX.Element
}


export const components: Components[] = [
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
    {
        link: "custom_scroll", label: "Custom Scroll",
        component: CustomScroll
    },
    {
        link: "custom_tabs", label: "Custom Tabs",
        component: CustomTabs
    },
    {
        link: "custom_modal", label: "Custom Modal",
        component: CustomModal
    },
    {
        link: "github_profile", label: "Github Profile",
        component: GithubProfile
    },
    {
        link: "auto_complete", label: "Auto Complete",
        component: AutoComplete
    },

]
