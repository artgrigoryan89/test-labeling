import React, {Component} from 'react';

const ListItem = ({value}) => {
    return(
        <label className="radio-inline" data-toggle="tooltip" data-container="body" title={value.title}>
            <input type="radio" name="RecordingQuality"/> {value.value}
        </label>
    )
};

const QualCheckBox = ({handleChange}) => {
    let number;
    const numbers = [{value:1, title:"Взагалі нічого не розібрати"}, {value:2, title:"Треба дуже вслуховуватись"},{value:3, title:"Треба вслуховуватись"}, {value:4, title:"Незначні шуми"}, {value:5, title:"Взгалі без шумів"}];
    const listItem = numbers.map((number) =>
            <ListItem key={"RecordingQuality_Radio" + number.value} value={number} onChange={handleChange}/>
    )
    return(
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Якість запису</label>
            </div>
            <div className="col-lg-9">
                {listItem}
            </div>
        </div>
    )
}

export default QualCheckBox