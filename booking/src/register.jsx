import React from 'react';
import './signUp.css'; // Assuming the CSS file is in the same folder

const SignUp = () => {
  return (
    <>
      <header className="header"></header> {/* Blue header added */}
      <div className="wrapper">
        <form>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
            <i className="bx bxs-user"></i> {/* Icon for name */}
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email Address" required />
            <i className="bx bxs-envelope"></i> {/* Icon for email */}
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i> {/* Icon for password */}
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
            <i className="bx bxs-lock-alt"></i> {/* Icon for confirm password */}
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <div className="login-link">
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
