import React, {Component} from 'react';

const Bookmark = ({handleChange}) => {
    return(
        <div className="form-group">
            <div className="col-lg-9 col-lg-offset-3">
                <label>
                    <input type="checkbox" name="IsBookmarked" value="1" onChange={handleChange}/>
                        Помітити запис, щоб його легше було знайти пізніше
                </label>
            </div>
        </div>
    )
};

export default Bookmark