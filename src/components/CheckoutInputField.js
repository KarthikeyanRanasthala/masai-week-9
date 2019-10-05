import React from 'react';

const CheckoutInputField = props => {
    return (
        <div className='form-group'>
            <label>{props.data.label}</label>
            <input type='text' name={props.data.name} className='form-control' placeholder={props.data.placeholder} required onChange={e => props.func(e)}></input>
        </div>
    )
}

export default CheckoutInputField;