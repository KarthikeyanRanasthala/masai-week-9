import React from 'react';

import { connect } from 'react-redux';

const Invoice = (props) => {
    let x = props.selectedCar.price.split(',');
    x = x[0] + x[1];
    return (
        <div className='container my-5'>
            <div className='border border-secondary p-3 mt-5'>
                <h4>Invoice Details</h4>
                <p></p>
                <div className='row'>
                    <div className='col-md-5 m-3 border border-secondary'>
                        <h5>Bill To</h5>
                        <p></p>
                        <p>{props.currentUser.name}, {props.currentUser.age}</p>
                        <p>License No. {props.currentUser.license}</p>
                        <p>Aadhaar No. {props.currentUser.aadhaar}</p>
                    </div>
                </div>
                <table className='container text-center mt-3'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Selected Car</th>
                            <th scope="col">Seater</th>
                            <th scope="col">Cost Per Day</th>
                            <th scope="col">Excess Charge</th>
                        </tr>
                    </thead>
                    <tbody className='mt-3'>
                        <tr>
                            <td>1</td>
                            <td>{props.selectedCar.title}</td>
                            <td>{props.selectedCar.seater}</td>
                            <td>{props.selectedCar.price}</td>
                            <td>{props.selectedCar.excess}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='row mt-5'>
                    <div className='col-md-2 offset-md-10 text-center'>
                        <h6>Sub Total</h6>
                        <p>{props.currentUser.days} * {props.selectedCar.price}</p>
                        <hr></hr>
                        <h5>Total</h5>
                        <p>Rs.{Number(props.currentUser.days) * Number(x)} /-</p>
                    </div>
                </div>
                <h3 className='text-center'>Thank you for booking with us.</h3>
            </div>
        </div>


    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUserDetails,
        selectedCar: state.availableCars[state.inCart]
    }
}

export default connect(mapStateToProps, null)(Invoice);