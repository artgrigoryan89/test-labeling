import React, {Component} from 'react';
//TODO: refactor checkbox children to component like QualCheckBox.js
const MistakeCheckBox = ({handleChange}) => {
    return(
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Якась типова помилка вимови?</label>
            </div>
            <div className="col-lg-9">
                <div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="z_instead_of_theta" onChange={handleChange} />
                                /z/ замість /θ/
                        </label>
                    </div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="s_instead_of_theta" onChange={handleChange}/>
                                /s/ замість /θ/
                        </label>
                    </div>
                </div>
                <div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="z_instead_of_eth" onChange={handleChange}/>
                                /z/ замість /ð/
                        </label>
                    </div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="s_instead_of_eth" onChange={handleChange}/>
                                /s/ замість /ð/
                        </label>
                    </div>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="Mistakes" value="other_not_in_th" onChange={handleChange}/>
                            Помилка не в ⟨th⟩ (/θ/ або /ð/ звучать ок)
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="Mistakes" value="other" onChange={handleChange}/>
                            Типова, але жодна з перелічених раніше
                    </label>
                </div>
            </div>
        </div>
    )
};

export  default MistakeCheckBox