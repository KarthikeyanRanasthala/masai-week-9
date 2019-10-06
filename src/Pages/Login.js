import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { userLogin } from '../redux/carStore';
import AuthInputField from '../components/AuthInputField';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login({email: this.state.email, password: this.state.password});
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
            }
        ]
        return (
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4 offset-md-4 p-5 my-5' style={{backgroundColor: '#f8f9fa'}}>
                        <h2 className='text-center mb-5'>Login</h2>
                        <form className='needs-validation' no-validate='true' onSubmit={(e) => this.handleSubmit(e)}>
                            {data.map((ele, i) => <AuthInputField data={ele} func={this.handleInput} key={i} />)}
                            <button type='submit' className='btn btn-primary mt-3' style={{width: '100%', marginBottom: '30px'}}>Submit</button>
                            <Link to='/signup' style={{marginLeft: '55px'}}>Don't Have An Account?</Link>
                        </form>
                    </div>
                </div>
                {this.props.isAuth ? (<Redirect to={{pathname: '/'}} />) : (<></>)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (cred) => {
            dispatch(userLogin(cred))
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);