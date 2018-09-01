import React, {Component} from 'react';

const ListItem = ({props}) => {
    return(
        <label className="radio-inline" data-toggle="tooltip" data-container="body" title={props.title}>
            <input type="radio" name="RecordingQuality" onChange={props.onChange} value={props.value}/> {props.value}
        </label>
    )
};

export default ListItem