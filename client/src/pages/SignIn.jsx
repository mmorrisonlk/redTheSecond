import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import Input from '../components/Input';
import Button from '../components/Button';
import classes from './styles/SignIn.module.css'


const SignIn = () => {
    const navigate = useNavigate()
    const logInHandler = () => {
        navigate('/home')
    }
    const onChangeHandler = () => {
        console.log('change')
    }
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>Log In</h1>
        <form action="" onSubmit={(e) => {e.preventDefault(); console.log('submitted')}} className={classes.signIn}>
            <Input type='text' placeHolder='Username/E-mail' value='' onChange={onChangeHandler}/>
            <Input type='password' placeHolder='Password' value='' onChange={onChangeHandler}/>
            <Button onClick={logInHandler}>Log In</Button>
            <Link className={classes.link} to='/'>Forgot password / e-mail</Link>
        </form>
    </div>
    );
};

export default SignIn;
