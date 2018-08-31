import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';


const AudioPlayer = ({path}) => {
    return(
        <ReactAudioPlayer
            src={path}
        />
    )
}

export default AudioPlayer