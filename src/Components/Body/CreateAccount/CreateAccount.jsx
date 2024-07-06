import React, { useState } from 'react';
import './CreateAccount.css';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validMobileNumber, setValidMobileNumber] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    // Basic validation: allow only digits and maximum length of 10
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setValidMobileNumber(true);
    } else {
      setValidMobileNumber(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Passwords match, proceed with account creation
      // You can add your logic here
      console.log('Passwords match!');
    } else {
      // Passwords do not match, handle accordingly
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="form-body">
      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
            />
            {!validMobileNumber && (
              <p style={{ color: 'red' }}>Invalid mobile number!</p>
            )}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {!passwordsMatch && (
            <p style={{ color: 'red' }}>Passwords do not match!</p>
          )}
          <Link to="/Login">
            <p>Already Have an Account? Login</p>
          </Link>
          <button type="submit" className="btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
