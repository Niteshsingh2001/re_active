import { Routes, Route } from "react-router-dom";
import { components } from "../data/constants";
import HomePage from "../routes/homepage";
import Base from "../routes/base";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route index element={<Base />} />
                {
                    components.map(({ component: Component, link }) => <Route key={link} path={link} element={<Component />} />)
                }
            </Route>
        </Routes >
    );
}
