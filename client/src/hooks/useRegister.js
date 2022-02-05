import { useState } from "react";

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
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetValuesProper = (errorState, values) => {
    let newValues = {
      username: errorState?.username ? "" : values.username,
      email: errorState?.email ? "" : values.email,
      confirmEmail: errorState?.confirmEmail ? "" : values.confirmEmail,
      password: errorState?.password ? "" : values.password,
      confirmPassword: errorState?.confirmPassword
        ? ""
        : values.confirmPassword,
    };
    if (!errorState || Object.keys(errorState).length < 1) {
      setValues(initialState);
      setSuccess(true);
    } else {
      setValues(newValues);
      setSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    resetValuesProper(validateInfo(values), values);
  };
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    success,
  };
};

export default useRegister;
