import React from 'react';

const BasicCard = (props) => {
    return (
        <div className='card col text-center m-3'>
            <img src={props.data.imgLink} className='my-3' alt={props.data.id} ></img>
            <div className='card-body'>
                <h5 className='card-title'>{props.data.title}</h5>
                <p className='card-text'>{props.data.text}</p>
            </div>
        </div>
    )
}

export default BasicCard;