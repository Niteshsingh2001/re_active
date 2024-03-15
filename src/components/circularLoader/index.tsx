import "./circular.css";

export default function CircularLoader() {
    return (
        <div className="flex items-center justify-center">
            <svg width="100px" height="100px" viewBox="-25 -25 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient gradientUnits="objectBoundingBox" x1="0%" x2="100%" y1="0%" y2="0%" id="gradient_1">
                        <stop offset="80%" stop-color="#000000" />
                        <stop offset="80%" stop-color="#FFFFFF" stop-opacity="0" />
                        <animateTransform
                            attributeName="gradientTransform"
                            attributeType="XML"
                            type="rotate"
                            from="0 0.5 0.5"
                            to="360 0.5 0.5"
                            dur="0.5s"
                            repeatCount="indefinite"
                        />
                    </linearGradient>
                </defs>
                <circle cx="0" cy="0" r="20" stroke="url(#gradient_1)" stroke-width="2" fill="none" />
                <text x="-15%" y="5" >100%</text>

            </svg>
        </div>
    );
}


