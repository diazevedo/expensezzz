import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/name.png';
import history from '../../services/history';

const SignIn = () => {
  const handleSubmitForm = () => history.push('debits');

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

        <button type="submit">Log in</button>
        <Link to="/register">Create your account</Link>
      </Form>
    </>
  );
};

export default SignIn;
