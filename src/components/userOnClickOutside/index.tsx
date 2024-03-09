import { RefObject, useEffect } from "react";

export default function UserOnClickOutside(ref: RefObject<HTMLDivElement>, handler: () => void) {
    useEffect(() => {
        function listner(event: TouchEvent | MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }
        document.addEventListener("mousedown", listner);
        document.addEventListener("touchstart", listner);
        return () => {
            document.removeEventListener("mousedown", listner);
            document.addEventListener("touchstart", listner);
        };
    }, [ref, handler]);
}
