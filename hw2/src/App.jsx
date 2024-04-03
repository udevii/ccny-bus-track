import React, { useState } from 'react';
import { Coords125, CoordsCCNY, Coords145 } from './Coordinates';
import Login from './Login';
import './App.css';
import Home from './Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [coordinates, setCoordinates] = useState('')
  const [selectedStop, setSelectedStop] = useState('')
  const [registerPage, setRegisterPage] = useState(false)

  const handleClick = (busStop) => {
    if (busStop === '125 Street') {
      setCoordinates(`Latitude: ${Coords125.lat}, Longitude: ${Coords125.lng}`)
    } else if (busStop === '145 Street') {
      setCoordinates(`Latitude: ${Coords145.lat}, Longitude: ${Coords145.lng}`)
    }
    else {
      setCoordinates(`Latitude: ${CoordsCCNY.lat}, Longitude: ${CoordsCCNY.lng}`)
    }
    setSelectedStop(busStop)
  };


  return (
    <>
      {isLoggedIn ? (
          <Home></Home>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn}/>
        )
      }
    </>
    
  );
}

export default App