"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VidioPlayer = ({ youtubeID }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: '250'
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoButton}
                    className="text-color-primary float-right"
                >
                    <XCircle size={32} />
                </button>
                <YouTube
                    videoId={youtubeID}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Vidio is broken, please try another")} 
                />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
        <button
            onClick={handleVideoButton}
            className="fixed bottom-5 right-5 w-32  bg-color-secondary  text-color-primary hover:text-color-dark hover:bg-color-accent transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110  hover:text-1xl duration-300"
        >
            Tonton Trailer
        </button>
        )
    }


    return isOpen ? <Player/> : <ButtonOpenTrailer/>
}

export default VidioPlayer

