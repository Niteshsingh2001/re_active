import { Routes, Route } from "react-router-dom";
import { components } from "../data/constants";

export default function App() {
    return (
        <Routes>
            {
                components.map(({ component: Component, link }) => <Route path={link} element={<Component />} />)
            }
        </Routes>
    );
}
