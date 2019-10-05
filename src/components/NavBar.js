import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const NavBar = (props) => {
    return (
        <div className='bg-primary'>
            <div className='container-fluid'>
                <nav className='navbar'>
                    <Link to='/' className='navbar-brand text-white'>Car-Rentals</Link>
                    <form className='form-inline'>
                        {props.isAuth ? (<button className='text-white btn btn-success mx-2'>Log Out</button>) 
                        : 
                        (
                            <>
                            <Link to='/signup' className='text-white btn btn-success mx-2'>SignUp</Link>
                            <Link to='/login' className='text-white btn btn-success mx-2'>LogIn</Link>
                            </>
                        )}
                    </form>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps, null)(NavBar);