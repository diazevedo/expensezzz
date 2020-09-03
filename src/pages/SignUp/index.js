import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/name.png';

function SignUp() {
  const handleSubmitForm = () => console.log('Clicked');

  return (
    <>
      <img src={logo} alt="Expensezzz" />
      <Form onSubmit={handleSubmitForm}>
        <Input name="name" type="text" placeholder="Your name" />

        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          formNoValidate
        />

        <Input name="password" type="password" placeholder="Your password" />

        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirm password"
        />

        <button type="submit">Sign up</button>
        <Link to="/">Have an account? Login</Link>
      </Form>
    </>
  );
}

export default SignUp;
