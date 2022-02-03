import React from 'react';
import { useNavigate } from 'react-router'
import Button from '../components/Button';
import classes from './styles/AuthHome.module.css'

const Registration = () => {
    const navigate = useNavigate()

    const signUpHandler = () => {
       navigate('/signIn')
    }

    const registrationHandler= () => {
        navigate('/register')
    }

  return (
  <div className={classes.container}>
      <div className={`${classes.btn__container}`}>
        <Button className={classes.btn} onClick={signUpHandler}>Sign Up</Button>
        <Button className={classes.btn} onClick={registrationHandler}>Registration</Button>
      </div>
  </div>
  );
};

export default Registration;
