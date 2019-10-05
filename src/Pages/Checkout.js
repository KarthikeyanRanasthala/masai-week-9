import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { placeOrder } from '../redux/carStore'

import CheckoutCard from '../components/CheckoutCard';
import CheckoutInputField from '../components/CheckoutInputField';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            license: '',
            aadhaar: '',
            days: '1'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        let data = [
            {
                label: 'Name',
                name: 'name',
                placeholder: 'Enter Your Name'
            },
            {
                label: 'Age',
                name: 'age',
                placeholder: 'Enter Your Age'
            },
            {
                label: 'Aadhaar No.',
                name: 'aadhaar',
                placeholder: 'Enter Your Aadhaar Number'
            },
            {
                label: 'License',
                name: 'license',
                placeholder: 'Enter Your License'
            },
        ]

        return (
            <div className='container my-5'>
                <div className='row'>
                    <form className='col-md-9 needs-validation' no-validate='true'>
                        {data.map(ele => <CheckoutInputField data={ele} key={ele.name} func={e => this.handleChange(e)} />)}
                        <div className='form-group'>
                            <label>Number of Days</label>
                            <select className='custom-select' name='days' onChange={(e) => this.handleChange(e)} value={this.state.days}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <Link className='btn btn-success' to='/invoice' onClick={() => this.props.completeOrder(this.state)}>Finish Booking</Link>
                    </form>
                    <div className='col-md-3'>
                        <CheckoutCard data={this.props.availableCars[Number(this.props.selectedCar)]} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedCar: state.inCart,
        availableCars: state.availableCars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        completeOrder: (details) => {
            dispatch(placeOrder(details))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);