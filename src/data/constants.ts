import Accordian from "../components/accodian"
import AutoComplete from "../components/autocomplete"
import CustomModal from "../components/customModal"
import CustomScroll from "../components/customScroll"
import CustomTabs from "../components/customTabs"
import GithubProfile from "../components/githubProfileFinder"
import ImageSlider from "../components/imageSlider"
import QRCodeGenerator from "../components/qrCodeGenerator"
import RandomColor from "../components/randomColor"
import ScrollToTopAndBottom from "../components/scrollToTopAndBottom"
import ScrollToView from "../components/scrollToView"
import StarRating from "../components/starRating"
import TicTacToe from "../components/tic-tac-toe"
import TreeView from "../components/treeView"
import useFetchTest from "../components/useFetch/useFetchTest"
import UserOnClickOutsideTest from "../components/userOnClickOutside/userOnClickOutsideTest"
import WindowResizeHookTest from "../components/windowResizeHook/test"

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
    {
        link: "tic_tac_toe", label: "Tic Tac Toe",
        component: TicTacToe
    },
    {
        link: "usefetch_test", label: "useFetch Test",
        component: useFetchTest
    },
    {
        link: "userOnClickOutside_test", label: "userOnClickOutside Test",
        component: UserOnClickOutsideTest
    },
    {
        link: "WindowResizeHook_test", label: "WindowResizeHook Test",
        component: WindowResizeHookTest
    },
    {
        link: "ScrollToTopAndBottom", label: "Scroll To Top And Bottom",
        component: ScrollToTopAndBottom
    },
    {
        link: "scroll_to_view", label: "Scroll To View",
        component: ScrollToView
    },

]
