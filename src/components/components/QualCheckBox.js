import React, {Component} from 'react';
import ListItem from './QualListItem';

const QualCheckBox = ({handleChange}) => {
    const numbers = [{value: 1, title: "Взагалі нічого не розібрати", onChange: handleChange}, {value: 2, title: "Треба дуже вслуховуватись", onChange: handleChange}, {value: 3, title: "Треба вслуховуватись", onChange: handleChange}, {value: 4, title: "Незначні шуми", onChange: handleChange}, {value: 5, title: "Взгалі без шумів", onChange: handleChange}];
    const listItem = numbers.map((number) =>
        <ListItem key={"RecordingQuality_Radio" + number.value} props={number}/>
    )
    return (
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