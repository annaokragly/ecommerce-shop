import React from 'react';

import Form from '../form/form.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <Form 
                    name='email' 
                    type='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    label='email' 
                    required 
                />
                <Form
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    label='password'
                    required 
                />
                <div>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </div>
        )
    }
}

export default Signin;