import React from 'react';

import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='card text-white'>
            <img src='https://www.zoomcar.com/build/img/intro_bg.59b15d84c75cf310e76cc40155b90dc6.jpg' style={{width:'100%'}} alt='banner'></img>
            <div className='card-img-overlay text-center mt-5'>
                <h1 className='card-title mt-4'>Car Rentals</h1>
                <h4>DRIVE IN THE CITY & OUTSTATION</h4>
                <Link to='/search' className='text-white btn btn-primary mt-5' style={{width: '70%'}}>Start</Link>
            </div>
        </div>
    )
}

export default Banner;