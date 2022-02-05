import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import {useMutation} from '@apollo/react-hooks'
import { AuthContext } from '../context/auth'
import gql from 'graphql-tag'
import Input from '../components/Input';
import Button from '../components/Button';
import classes from './styles/SignIn.module.css'


const SignIn = () => {
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(proxy, result){
            context.login(result.data.login)
            navigate('/home')
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors)
        },
        variables: values
    })

    const logInHandler = (e) => {
        e.preventDefault();
        navigate('/home')
        // loginUser()
    }
    const onChangeHandler = () => {
        console.log('change')
    }
  return (
    //   add errors somewhere
    // {errors && <div>
    //     <ul style={{'listStyle': 'none'}}>
    //        {Object.values(errors).map((value, i)=> (
    //            <li key={i}>{value}</li>
    //        ))}
    //     </ul>
    //     </div>}
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

const LOGIN_USER = gql`
mutation login(
    $username: String!
    $password: String!
){
    login(
            username: $username
            password: $password
    ){
        id email username createdAt token
    }
}
`

export default SignIn;
