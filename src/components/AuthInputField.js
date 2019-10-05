import React from 'react';

const AuthInputField = props => {
    return (
        <div className='form-group'>
            <label>{props.data.label}</label>
            <input type={props.data.type} name={props.data.name} className='form-control' placeholder={props.data.placeholder} required onChange={e => props.func(e)}></input>
        </div>
    )
}

export default AuthInputField;