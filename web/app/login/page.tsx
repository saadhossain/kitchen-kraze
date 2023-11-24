import React from 'react'
import { metadata } from '../layout';
import { AppName } from '../config/config';

const Login = () => {
  metadata.title= `Login | ${AppName}`;
  metadata.description = `Login | Login your Account to Enjoy More Feature.`
  return (
    <div>Login</div>
  )
}

export default Login