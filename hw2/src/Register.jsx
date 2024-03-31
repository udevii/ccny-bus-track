import React from 'react';
import { useState } from 'react';
import styles from './Register.module.css';

function Register({testing, setTesting}) {
    const [studentId, setStudentId] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleIdInput = (e) => {
      setStudentId(e.target.value)
    }

    const handleEmailInput = (e) => {
      setStudentEmail(e.target.value)
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
        setError("Invalid account information")
      }
    }

    const handleRegisterClick = () => {
      setTesting(true)
    };


    return (
      // <>
      //   {testing === false && (
      //   <>
      //     <h1>Welcome back!</h1>
      //     <p>fogjod</p>
      //   </>
      //   )}
      // </>


      <>
        {!testing ? (
          <>
            <div className={styles.loginContainer}>
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
              <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={studentId} onChange={handleIdInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={studentEmail} onChange={handleEmailInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" value={studentPassword} onChange={handlePasswordInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="text" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordInput} />
                  </div>
                </div>
                {error && <div className={styles.errorMessage}>{error}</div>}
                <button type="submit">Register</button>
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

export default Register