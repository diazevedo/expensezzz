import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/name.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string().min(6).required(),
});

function SignUp() {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ name, email, password }) =>
    dispatch(signUpRequest(name, email, password));

  return (
    <>
      <img src={logo} alt="Expensezzz" />
      <Form onSubmit={handleSubmitForm} schema={schema}>
        <Input name="name" type="text" placeholder="Your name" />

        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          formNoValidate
        />

        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">Sign up</button>
        <Link to="/">Have an account? Login</Link>
      </Form>
    </>
  );
}

export default SignUp;
