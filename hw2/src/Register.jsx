import React from 'react';
import { useState } from 'react';
import Register from './Register'
import './Register.css'

function Login({testing, setTesting}) {
    const [studentId, setStudentId] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleIdInput = (e) => {
      setStudentId(e.target.value)
    }

    const handlePasswordInput = (e) => {
      setStudentPassword(e.target.value)
    }
    
    const handleConfirmPasswordInput = (e) => {
      setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (/^\d+$/.test(studentId) && studentId.length === 8 && studentPassword.length >=8){
        setTesting(true)
      }
      else {
        setError("Incorrect username and/or password")
      }
    }

    const handleRegisterClick = () => {
      setTesting(true)
      alert("Successful")
    };


    return (
      <>
      {!testing ? (
          <>
            <div className="login-container">
              <h2>
                <span
                  role="button"
                  onClick={handleRegisterClick}
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onKeyDown={handleRegisterClick}
                  tabIndex={0} // Make it focusable
                >
                  Login
                </span>
                {' or Register'}
              </h2>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={studentId} onChange={handleIdInput} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={studentPassword} onChange={handlePasswordInput} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="confirm-password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordInput} />
                  </div>
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Register</button> {/* Removed onClick here, using form's onSubmit instead */}
              </form>
            </div>
          </>
        ) : (
          <Register></Register>
        )
      }
    </>
    )
}

export default Login