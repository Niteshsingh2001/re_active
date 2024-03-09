import { useEffect, useState } from 'react'


export default function WindowResizeHook() {

    const [winowSize, setWinowSize] = useState({
        height: 0,
        width: 0
    })

    function handleResize() {
        setWinowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })

    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return winowSize

}
