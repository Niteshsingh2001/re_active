import { Link, Outlet } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="h-screen w-screen">
            <div className="px-4 flex justify-between py-2">
                <Link to="/" className="font-thin text-2xl"><span className="font-bold">Re</span>active</Link>
                <h1 className="font-thin">version 0.0.1</h1>
            </div>
            <div className="flex flex-col h-[93.5%] justify-center items-center">
                <Outlet />
            </div>
        </div>
    )
}
