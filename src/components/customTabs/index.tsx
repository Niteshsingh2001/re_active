import { useState } from "react";
import { tabs } from "./data";

export default function CustomTabs() {
    const [currentTab, setCurrentTab] = useState<number>(0)
    return (
        <div >
            <div className="flex items-center justify-center gap-4 my-5">
                {

                    tabs.map(({ name }, index) => <div className="bg-blue-500 cursor-pointer px-5 rounded py-1" onClick={() => { setCurrentTab(index) }}>{name}</div>)
                }
            </div>
            {
                tabs.map(({ content }, index) =>
                    currentTab === index && <div className="rounded py-1 items-center justify-center flex ">{content}</div>
                )
            }
        </div>
    )
}
