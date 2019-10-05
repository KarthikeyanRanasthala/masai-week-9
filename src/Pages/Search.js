import React from 'react';

import { connect } from 'react-redux';

import Vehicle from '../components/Vehicle';
import { addToCart } from '../redux/carStore';

const Search = (props) => {
    return (
        <div className='container'>
            {props.carDetails.map((ele, i) => <Vehicle data={ele} id={i} key={i} func={index => props.addToCart(index)} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        carDetails: state.availableCars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (index) => {
            dispatch(addToCart(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);