import React, {Component} from 'react';
import ListItem from './PronounceListItem';

const PronounceCheckBox = ({handleChange, props}) => {
    const numbers = [{value: 1, title: "Дуже погана", onChange: handleChange}, {value: 2, title: "Погана", onChange: handleChange}, {value: 3, title: "Добра", onChange: handleChange}, {value: 4, title: "Дуже хороша", onChange: handleChange}, {value: 5, title: "Ідеальна", onChange: handleChange}];
    const listItem = numbers.map((number) =>
        <ListItem key={"RecordingQuality_Radio" + number.value} props={number}/>
    )
    return (
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