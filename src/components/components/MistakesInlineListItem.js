import React, {Component} from 'react';

const ListItemInline = ({props}) => {
    return (
            <label>
                <input type="checkbox" name="Mistakes" value={props.value} onChange={props.handleChange}/>
                {props.text}
            </label>
    )
};

export default ListItemInline;