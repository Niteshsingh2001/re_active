import { Link } from "react-router-dom";
import { components } from "../data/constants";

export default function HomePage() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            {
                components.map(({ label, link }) => <Link to={link}>{label}</Link >)
            }

        </div>
    )
}
