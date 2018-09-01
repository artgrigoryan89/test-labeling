import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';


const AudioPlayer = ({props}) => {
    return (
        <div className="form-group">
            <div className="text-center">
                <ReactAudioPlayer
                    src={"https://www.robus.io/admin/uploads/utterances-mp3" + props}
                    autoplay
                    controls
                />
            </div>
        </div>
    )
}

export default AudioPlayer