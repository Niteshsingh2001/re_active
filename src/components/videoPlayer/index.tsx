import { useRef, RefObject, useState, ChangeEvent, KeyboardEvent, useEffect, MouseEvent } from "react"
import DefaultControls from "./controls/default"
import { PlayerProperties, VideoPlayerProps } from "./types"
import "./player.css"

export default function VideoPlayer(props: VideoPlayerProps) {

    const { src, name, description } = props
    const player: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null)
    const container: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const [playerProperties, setPlayerProperties] = useState<PlayerProperties>({
        startTime: 0,
        currentTime: 0,
        duration: 0,
        isFullScreen: false,
        isvideoPlaying: false,
        volume: 1
    })

    const [videoSize, setVideoSize] = useState<"contain" | "cover">("contain")

    const [showControls, setShowControls] = useState(true)
    const [showControlsTimeout, setShowControlsTimeout] = useState<number | null>(null)

    function handlePlayPause() {
        if (player.current) {
            if (player.current.paused) {
                player.current.play()
                setPlayerProperties(
                    {
                        ...playerProperties,
                        isvideoPlaying: true
                    }
                )
            }
            else {
                player.current.pause()
                setPlayerProperties(
                    {
                        ...playerProperties,
                        isvideoPlaying: false
                    }
                )
            }
        }
    }

    function loadInfo() {
        if (player.current) {
            setPlayerProperties(
                {
                    ...playerProperties,
                    startTime: player.current.currentTime,
                    currentTime: player.current.currentTime,
                    duration: player.current.duration ?? 0
                })
        }
    }

    function handleFullscreen() {
        if (container.current && player.current) {
            if (!playerProperties.isFullScreen) {
                container.current.requestFullscreen()
                setPlayerProperties({ ...playerProperties, isFullScreen: true })
            }
            else {
                document.exitFullscreen()
                setPlayerProperties({ ...playerProperties, isFullScreen: false })
            }
        }
    }

    function handleSeek(event: ChangeEvent<HTMLInputElement>) {
        event.currentTarget
        if (player.current) {
            player.current.currentTime = Number(event.target.value)
            setPlayerProperties({
                ...playerProperties,
                currentTime: Number(event.target.value)
            })
        }

    }

    function handleTimeUpdate() {
        if (player.current) {
            setPlayerProperties(
                {
                    ...playerProperties,
                    currentTime: player.current.currentTime
                })

            if (player.current.ended) {
                setPlayerProperties({
                    ...playerProperties,
                    isvideoPlaying: false
                })
            }
        }

    }

    function handleVolume(event: ChangeEvent<HTMLInputElement>) {
        if (player.current) {

            player.current.volume = Number(event.target.value)
            setPlayerProperties({
                ...playerProperties,
                volume: Number(event.target.value)
            })
        }

    }

    function handleMute() {
        if (player.current) {
            if (player.current.muted) {
                setPlayerProperties({
                    ...playerProperties,
                    volume: 1
                })
            }
            else {
                setPlayerProperties({
                    ...playerProperties,
                    volume: 0
                })
            }
            player.current.muted = !player.current.muted
        }
    }

    const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === " " || event.key === "k") {
            handlePlayPause()
        }
        else if (event.key === "f") {
            handleFullscreen()
        }
        else if (event.key === "m") {
            handleMute()
        }
        else if (event.key === "ArrowRight") {
            if (player.current) player.current.currentTime += 5
        }
        else if (event.key === "ArrowLeft") {
            if (player.current) player.current.currentTime -= 5
        }
    }


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowControls(false)
        }, 3000);
        return () => clearTimeout(timeoutId)
    }, []);



    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (showControlsTimeout) {
            clearTimeout(showControlsTimeout)
        }
        setShowControlsTimeout(
            setTimeout(() => {
                setShowControlsTimeout(null)
                setShowControls(false)
            }, 3000)
        )
        setShowControls(true)
    }

    function handleFitVideo() {
        if (videoSize == "contain") {
            setVideoSize("cover")
        }
        else {
            setVideoSize("contain")
        }
    }



    return (
        <div
            className='relative w-full h-full  select-none outline-none'
            ref={container}
            onDoubleClick={handleFullscreen}
            onKeyDown={handleKeys}
            tabIndex={0}
            onMouseMove={handleMouseMove}
        >

            {/* Player Controls */}
            {

                showControls && <div className="absolute h-full w-full controls_bg z-10">
                    <DefaultControls
                        name={name ? name : src.substring(src.lastIndexOf('/') + 1).split('.')[0]}
                        description={description}
                        playerProperties={playerProperties}
                        handlePlayPause={handlePlayPause}
                        handleSeek={handleSeek}
                        handleVolume={handleVolume}
                        handleFullscreen={handleFullscreen}
                        handleMute={handleMute}
                        handleFitVideo={handleFitVideo}

                    />
                </div>

            }
            {/* Player */}
            <video
                src={src}
                className={`w-full h-full ${videoSize}`}
                style={{ objectFit: videoSize }}
                ref={player}
                onTimeUpdate={handleTimeUpdate}
                onLoadedData={loadInfo}

            />
        </div >
    )
}

