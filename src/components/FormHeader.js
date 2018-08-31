import React, {Component} from 'react';

const FormHeader = (props) => {
    return(
        <div className="header">
            <div className="col-lg-8 col-lg-offset-2">
                <div className="panel panel-info">
                    <div className="panel-heading">Запис {props.TaskId} користувача {props.UttId} ({props.SpeakerGender},{props.SpeakerAge})</div>
                </div>
            </div>
        </div>
    )
};

export default FormHeader