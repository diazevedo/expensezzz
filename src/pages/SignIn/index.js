import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/name.png';
import history from '../../services/history';

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmitForm = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="Expensezzz" />

      <Form onSubmit={handleSubmitForm}>
        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          formNoValidate
        />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">{loading ? 'loading' : 'login'}</button>
        <Link to="/register">Create your account</Link>
      </Form>
    </>
  );
};

export default SignIn;
