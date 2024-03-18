import React from 'react';
import { useState } from 'react';

function Login({setIsLoggedIn}) {
    const [driverLogIn, setDriverLogIn] = useState(false)
    const handleStudentLogIn = () => {
        setIsLoggedIn(true)
        setDriverLogIn(false)
    }
    const handleDriverLogIn = () => {
      //alert("Function not available yet")
      setDriverLogIn(true)
    }

  return (
    <>
        <button onClick={handleStudentLogIn}>Student</button>
        <button onClick={handleDriverLogIn}>Bus Driver</button>
        {driverLogIn && <h2>Feature not available yet! Please log in as Student</h2>}
    </>
  );
}

export default Login