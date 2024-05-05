import { Routes, Route } from "react-router-dom";
import { components } from "../data/constants";
import HomePage from "../routes/homepage";
import Base from "../routes/base";
import VideoPlayer from "../components/videoPlayer";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route index element={<Base />} />
                {
                    components.map(({ component: Component, link }) => <Route key={link} path={link} element={<Component />} />)
                }
                <Route
                    path={"/video_player"}
                    element={
                        <VideoPlayer
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                            description="
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem exercitationem commodi fuga iste a, nulla officiis nesciunt expedita molestiae illum ipsa enim architecto possimus, quos voluptate corrupti labore rerum.
                            " />}
                />
            </Route>
        </Routes >
    );
}
