import { ArrowsPointingInIcon, PauseIcon, PlayIcon, ArrowsPointingOutIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ViewfinderCircleIcon } from "@heroicons/react/24/solid"
import { Controls } from "../types"
import { formatVideoTime } from "../utils"
import "../player.css"



export default function DefaultControls({ name, description, playerProperties, handleFullscreen, handlePlayPause, handleSeek, handleVolume, handleMute, handleFitVideo }: Controls) {
    const { isFullScreen, currentTime, duration, isvideoPlaying, startTime, volume } = playerProperties

    return (
        <div className="flex flex-col justify-end h-full ">
            <div className="hover:controls_bg w-full justify-center items-center flex flex-col px-2 py-1">
                <div className="text-white w-full flex flex-col gap-2 py-2">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    {
                        description
                        &&
                        <p className="text-sm overflow-hidden">
                            {description}
                        </p>
                    }
                </div>


                <div className="flex w-full  justify- justify-between text-white">
                    <span className="drop-shadow-2xl">{formatVideoTime(currentTime)}</span>
                    <span className="drop-shadow-2xl">{formatVideoTime(duration)}</span>

                </div>

                <div className="w-full">
                    <input
                        aria-label="slider"
                        type="range"
                        min={startTime}
                        value={currentTime}
                        step="0.01"
                        max={duration}
                        onSeeking={handleSeek}
                        onChange={handleSeek}
                        className="w-full bg-blue-200"
                    />
                </div>
                <div className="flex w-full justify-between text-white">

                    <button
                        type="button"
                        className='text-white '
                        onClick={handlePlayPause}

                    >
                        {
                            isvideoPlaying ?
                                <PauseIcon className="h-8 w-8" />
                                :
                                <PlayIcon className="h-8 w-8" />
                        }
                    </button>

                    <div className="flex gap-2 ">
                        <div
                            className="flex gap-1  items-center justify-center"
                        >
                            <button
                                aria-label="volume"
                                className=" bg-transparent"
                                onClick={handleMute}
                            >
                                {
                                    volume > 0 ?
                                        <SpeakerWaveIcon className="h-5 w-5 fill-white" />
                                        :
                                        <SpeakerXMarkIcon className="h-5 w-5 fill-white" />
                                }



                            </button>
                            <input
                                aria-label="volume control"
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolume}
                            />
                        </div>



                        <button
                            aria-label="fullscreen"
                            type="button"
                            className='rounded text-white px-5 py-1'
                            onClick={handleFullscreen}
                        >

                            {
                                isFullScreen ?
                                    <ArrowsPointingInIcon className="h-5 w-5" />
                                    :
                                    <ArrowsPointingOutIcon className="h-5 w-5" />
                            }
                        </button>

                        <button aria-label="fit video" type="button" onClick={handleFitVideo}>
                            <ViewfinderCircleIcon className="text-white h-5 w-5" />
                        </button>
                    </div>

                </div>


            </div>




        </div>
    )
}
