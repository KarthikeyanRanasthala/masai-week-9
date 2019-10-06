import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userSignUp } from '../redux/carStore';

import AuthInputField from '../components/AuthInputField';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmedPassword: ''
        }
        
    }  

    handleInput = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.confirmedPassword) {
            this.props.signup({email: this.state.email, password: this.state.password, orders: []});
        }
        else alert('Please Recheck Your Password')
    }

    render() {
        let data = [
            {
                name: 'email',
                placeholder: 'Enter Email',
                type: 'email',
                label: 'Email'
            },
            {
                name: 'password',
                placeholder: 'Enter Password',
                type: 'password',
                label: 'Password'
            },
            {
                name: 'confirmedPassword',
                placeholder: 'Re-Enter Password',
                type: 'password',
                label: 'Confirm Password'
            }
        ]
        return (
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4 offset-md-4 p-5 my-5' style={{backgroundColor: '#f8f9fa'}}>
                        <h2 className='text-center mb-5'>Sign Up</h2>
                        <form className='needs-validation' no-validate='true' onSubmit={(e) => this.handleSubmit(e)}>
                            {data.map((ele, i) => <AuthInputField data={ele} func={this.handleInput} key={i} />)}
                            <button type='submit' className='btn btn-primary mt-3' style={{width: '100%', marginBottom: '30px'}}>Submit</button>
                            <Link to='/login' style={{marginLeft: '55px'}}>Have An Account Already?</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (cred) => {
            dispatch(userSignUp(cred))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignUp);