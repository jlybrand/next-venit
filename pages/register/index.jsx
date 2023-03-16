import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration form submitted');
    // Add logic to handle form submission here
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="register-form__row">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </div>
      <div className="register-form__row">
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      />
      </div>
      <div className="register-form__row">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      </div>
      <div className="register-form__row">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      </div>
      <div className="register-form__row">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      </div>
      <div className="register-form__row">
      <label htmlFor="passwordMatch">Confirm Password:</label>
      <input
        type="password"
        id="passwordMatch"
        value={passwordMatch}
        onChange={(event) => setPasswordMatch(event.target.value)}
        required
      />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
