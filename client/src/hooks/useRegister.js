import { useState, useEffect } from "react";

const initialState = {
  username: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

export const validateInfo = (values) => {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.confirmEmail) {
    errors.confirmEmail = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.confirmEmail)) {
    errors.confirmEmail = "Email address is invalid";
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = "Emails do not match";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

const useRegister = (validateInfo) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setValues(initialState);
  };
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useRegister;
