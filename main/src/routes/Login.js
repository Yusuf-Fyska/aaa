import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInSide from '../component/SignInSide';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const enteredEmail = data.get('email');
    const enteredPassword = data.get('password');

    
    if (enteredEmail === 'doğruEmail' && enteredPassword === 'doğruŞifre') {
      
      navigate('/admins'); 
    } else {
      
      console.log('Hatalı giriş');
    }
  };

  return (
   
      <SignInSide handleSubmit={handleSubmit} />
    
  );
}

export default Login;
