import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div  className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Enter your name" required />
          )}
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        {currState === "Sign Up" && (
          <div className="terms-container">
            <input
              type="checkbox"
              id="terms"
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="#" className="terms-link">Terms &amp; Conditions</a>
            </label>
          </div>
        )}
        <button type="submit" className="primary-btn">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-toggle">
          {currState === "Sign Up" ? (
            <p>
              Already have an account?{' '}
              <span onClick={() => setCurrState('Login')} className="link">
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <span onClick={() => setCurrState('Sign Up')} className="link">
                Sign Up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
