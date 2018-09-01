import React, {Component} from 'react';
import ListItemInline from './MistakesInlineListItem';
import ListItem from './MistakesListItem';

const MistakeCheckBox = ({handleChange}) => {
    const firstDataInline = [{value: 'z_instead_of_theta', onChange: handleChange, text: '/z/ замість /θ/'},
        {value: "s_instead_of_theta", onChange: handleChange, text: '/s/ замість /θ/'}];
    const secondDataInline = [{value: 'z_instead_of_eth', onChange: handleChange, text: '/z/ замість /ð/'},
        {value: "s_instead_of_eth", onChange: handleChange, text: ' /s/ замість /ð/'}];
    const data = [{value: "other_not_in_th", onChange: handleChange, text: 'Помилка не в ⟨th⟩ (/θ/ або /ð/ звучать ок)'},
        {value: "other", onChange: handleChange, text: 'Типова, але жодна з перелічених раніше'}];
    const firstListItem = firstDataInline.map((number) =>
        <ListItemInline key={number.value} props={number}/>
    );
    const secondListItem = secondDataInline.map((number) =>
        <ListItemInline key={number.value} props={number}/>
    );
    const listItem = data.map((number) =>
        <ListItem key={number.value} props={number}/>
    );
    return (
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Якась типова помилка вимови?</label>
            </div>
            <div className="col-lg-9">
                <div className="checkbox my-checkbox-inline">{firstListItem}</div>
                <div className="checkbox my-checkbox-inline">{secondListItem}</div>
                {listItem}
            </div>
        </div>
    )
};

export default MistakeCheckBox