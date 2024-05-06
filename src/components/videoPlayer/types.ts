export interface PlayerProperties {
    startTime: number
    currentTime: number
    duration: number
    isFullScreen: boolean
    isvideoPlaying: boolean
    volume: number
}


export interface Controls extends VideoInfo {
    playerProperties: PlayerProperties
    handlePlayPause: () => void
    handleSeek: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleVolume: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleFullscreen: () => void
    handleMute: () => void
    handleFitVideo: () => void

}



export interface VideoInfo {
    name?: string
    description?: string
}

export interface VideoPlayerProps extends VideoInfo {
    src: string
}
