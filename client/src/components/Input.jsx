import React from 'react';
import classes from './styles/Input.module.css'

const Input = ({type, placeHolder, value, onChange, name}) => {
  return <input name={name} className={classes.input} type={type} placeholder={placeHolder} value={value} onChange={onChange} />;
};

export default Input;
