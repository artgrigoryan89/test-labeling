import React, {Component} from 'react';

const ListItem = ({props}) => {
    return (
        <div className="checkbox">
            <label>
                <input type="checkbox" name="Mistakes" value={props.value} onChange={props.handleChange}/>
                {props.text}
            </label>
        </div>
    )
};

export default ListItem;