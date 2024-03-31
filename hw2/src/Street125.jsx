import React, { useState } from 'react';
import { Coords125, CoordsCCNY, Coords145 } from './Coordinates';
// import './Street125.module.css';
import './App.css'

function Street125() {
  const [currPage, setCurrPage] = useState('Home')
  const [coordinates, setCoordinates] = useState('')
  const [selectedStop, setSelectedStop] = useState('')

  const handleClick = (busStop) => {
    if (busStop === '125 Street') {
      setCoordinates(`Latitude: ${Coords125.lat}, Longitude: ${Coords125.lng}`)
      setCurrPage('125')
    } else if (busStop === '145 Street') {
      setCoordinates(`Latitude: ${Coords145.lat}, Longitude: ${Coords145.lng}`)
      setCurrPage('145')
    }
    else {
      setCoordinates(`Latitude: ${CoordsCCNY.lat}, Longitude: ${CoordsCCNY.lng}`)
      setCurrPage('CCNY')
    }
    setSelectedStop(busStop)
  };


  return (
    <>
        {currPage === 'Home' &&(
            <>
                <div className="App">
                    <div className='input-container'>
                        <h2>Your current location is 125 Street Station</h2>
                        <div className="Street125Container">
                          <img src="https://www.ccny.cuny.edu/sites/default/files/styles/600px_wide/public/2023-06/ColinPowellSchool_CCNY_Economics%26Business_GuestFaculty_DemetriosPapacostasNoPhoto.png?itok=5r-pw_fF" alt="Street 125" />
                          <h3>4 minutes away</h3>
                        </div>
                        <button>Back to home</button>
                    </div>
                </div>
            </>
        )}
        {currPage === '125' &&(
            <>
                {/* <h1>{selectedStop}</h1> */}
                <Street125></Street125>
            </>
        )}
         {currPage === '145' &&(
            <>
                <h1>{selectedStop}</h1>
            </>
        )}
         {currPage === 'CCNY' &&(
            <>
                <h1>{selectedStop}</h1>
            </>
        )}
    </>
  )
}

export default Street125