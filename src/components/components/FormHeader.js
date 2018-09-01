import React, {Component} from 'react';

const FormHeader = ({props}) => {
    return (
        <div className="panel-heading">Запис {props.TaskId} користувача {props.UttId}
            ({props.SpeakerGender},{props.SpeakerAge})</div>
    )
};

export default FormHeader