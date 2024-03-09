import { RefObject, useRef, useState } from "react";
import UserOnClickOutside from ".";



export default function UserOnClickOutsideTest() {
    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [showContent, setShowContent] = useState<boolean>(false)
    UserOnClickOutside(ref, () => setShowContent(false))
    function handleOpen() {
        setShowContent(!showContent)
    }

    return (
        <div className="w-full flex flex-col gap-2 items-center">
            {
                showContent &&
                <div ref={ref} className="absolute flex justify-center  w-1/2 z-10 my-5">
                    <div className="flex flex-col w-full p-5 shadow-md rounded-md">
                        <h1>Lorem Ipsome</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam architecto expedita reprehenderit? Dignissimos provident ducimus voluptates asperiores sit magnam inventore similique quae sapiente itaque aut odit deleniti dicta, tempore libero!
                        </p>
                    </div>


                </div>
            }
            <div className="flex flex-col items-center">
                <button type="button" onClick={handleOpen}>Open Menu</button>
            </div>
        </div>
    )
}
