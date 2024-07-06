import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setFormError('Please fill in all fields.');
    } else {
      // Here you can add your login logic
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div className="form-body">
      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <h1>Hotel Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username/Email"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <i className='bx bx-user'></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <i className='bx bx-lock-open-alt'></i>
          </div>

          <div className="recordar">
            <div className="create_account">
              <Link to="/CreateAccount">Create an Account</Link>
            </div>

            <a href="#">Forgot Password?</a>
          </div>

          {formError && <p style={{ color: 'red' }}>{formError}</p>}

          {/* <button type="submit" className="btn">
            Login
          </button> */}

          <Link to="/BookingHotel"><button className="btn">Login</button></Link>
          
        </form>
      </div>
    </div>
  );
}
