import React, {Component} from 'react';

const ComentField = ({handleChange, props}) => {
    const comentList = props.map((number) =>
        <li role="presentation" key={number}><a role="menuitem" href="#">{number}</a></li>
    );
    return (
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Коментар</label>
            </div>
            <div className="col-lg-9">
                <input id="utt_comment" className="form-control" type="text" name="Comment"
                       placeholder="Необов'язковий комментар" data-toggle="dropdown" onChange={handleChange}/>
                <ul id="utt_past_comments" className="dropdown-menu" role="menu" aria-labelledby="utt_comment">
                    {comentList}
                </ul>

            </div>
        </div>
    )
};

export default ComentField