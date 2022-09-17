import React , {useState, useEffect}from 'react';
import FormSignIn from '../forms/FormSignIn.component';

const SignIn = () => {
    console.log('SignIKn')
  
    return ( 
        <div>
            <p>Login</p>
            <FormSignIn></FormSignIn>
        </div>
     );
}
 
export default SignIn;
