import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './signin-signup.styles.scss';

const SigninSignup = () => (
  <div className='signin-signup'>
    <SignIn />
    <SignUp />
  </div>
);

export default SigninSignup;