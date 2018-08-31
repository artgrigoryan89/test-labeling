import React, {Component} from 'react';

const ListItem = ({value}) => {
    return(
        <label className="radio-inline" data-toggle="tooltip" data-container="body" title={value.title}>
            <input type="radio" name="PronunciationQuality"/> {value.value}
        </label>
    )
};

const PronounceCheckBox = ({handleChange, props}) => {
    let number;
    const numbers = [{value:1, title:"Дуже погана"}, {value:2, title:"Погана"},{value:3, title:"Добра"}, {value:4, title:"Дуже хороша"}, {value:5, title:"Ідеальна"}];
    const listItem = numbers.map((number) =>
        <ListItem key={"RecordingQuality_Radio" + number.value} value={number} onChange={handleChange}/>
    )
    return(
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Правильність вимови <span className="badge">{props}</span></label>
            </div>
            <div className="col-lg-9">
                {listItem}
                <div className="checkbox">
                    <label className="radio-inline">
                        <input type="radio" name="PronunciationQuality" id="PronunciationQuality_RadioNA" value="-1" onChange={handleChange}/> неможливо оцінити
                    </label>
                </div>
            </div>
        </div>
    )
};

export default PronounceCheckBox