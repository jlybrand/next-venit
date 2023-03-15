import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sign in form submitted');
    // Add logic to handle form submission here
  };

  return (
    <form  className="signin-form" onSubmit={handleSubmit}>
        <div className="signin-form__row" >
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      </div>
      <div className="signin-form__row" >
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
