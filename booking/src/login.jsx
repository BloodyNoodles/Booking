import React from 'react';
import './login.css'; // Assuming you have a CSS file

const Login = () => {
  return (
    <>
      <header className="header"></header> {/* Blue header added */}
      <div className="wrapper">
        <img src="Alogo.png" alt="Company Logo" className="logo" /> {/* Logo added here */}
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't Have an Account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
