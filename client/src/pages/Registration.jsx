import React from 'react';
import { useNavigate } from 'react-router'
import Input from '../components/Input';
import Button from '../components/Button';
import useRegister from '../hooks/useRegister'; 
import { validateInfo } from '../hooks/useRegister';
import classes from './styles/Registration.module.css'

const Registration = () => {
  const {handleChange, values, handleSubmit, errors, success} = useRegister(validateInfo)

    const navigate = useNavigate()

    const registerHanlder= () => {
    }

    const signInHandler = () => {
        navigate('/signIn')
    }

  return (
    <div className={classes.container}>
      {success && <div className={classes.success}>Success! Try signing in</div>}
        <h1 className={classes.title}>Register</h1>
      <form action="" onSubmit={handleSubmit} className={classes.register}>
          <div className={`${classes.input__container}`}>
            <Input type='text' name='username' placeHolder="Username" value={values.username} onChange={handleChange} />
            {errors?.username ? <p className={classes.error}>{errors?.username}</p> : <p></p>}
          </div>
          <div className={`${classes.input__container}`}>
            <Input type='email' name='email' placeHolder="E-mail" value={values.email} onChange={handleChange} />
            {errors?.email ? <p className={classes.error}>{errors?.email}</p> : <p></p>}
          </div>
          <div className={`${classes.input__container}`}>
            <Input type='email' name='confirmEmail' placeHolder="Confirm E-mail" value={values.confirmEmail} onChange={handleChange}/>    
            {errors?.confirmEmail ? <p className={classes.error}>{errors?.confirmEmail}</p> : <p></p>}
          </div>
          <div className={`${classes.input__container}`}>
            <Input type='password' name='password' placeHolder='Password' value={values.password} onChange={handleChange}/>
            {errors?.password ? <p className={classes.error}>{errors?.password}</p> : <p></p>}
          </div>
          <div className={`${classes.input__container}`}>
            <Input type='password' name='confirmPassword' placeHolder='Confirm Password' value={values.confirmPassword} onChange={handleChange} />
            {errors?.confirmPassword ? <p className={classes.error}>{errors?.confirmPassword}</p> : <p></p>}
          </div>
          <div className={`${classes.btn__container}`}>
              <Button className='' onClick={registerHanlder}>Register</Button>
              <Button className='' onClick={signInHandler}>Sign In</Button>
          </div>
      </form>
    </div>
      );
};

export default Registration;
