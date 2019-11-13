import React, { useState } from 'react';

const Locations = () => {
  const [error, setError] = useState('');
  const [city, setCity ] = useState('');
  const [country, setCountry] = useState('')
  const [locations, setLocations] = useState([])
  const [myName, setMyName] = useState({
    firstName: '',
    lastName: ''
  })

  const updateMyCountry = location => {
    setCountry(location)
  }

  const updateLocations = event => {
    event.preventDefault();

    if(city === '' || country === '') {
      setError('Please fill in all the fields.')
    } else {
      setError('');

      setLocations([
        ...locations,
        [city, country]
      ])

      setCity('');
      setCountry('');
    }
  }

  const updateMyName = (name, value) => {
    setMyName(prevState => ({
      ...prevState,
      [`${name}`]: value
    }))
  }

  return (
    <div>
      Locations<br/>
      <form onSubmit={updateLocations}>
        <input type='text' name='city' id='city' placeholder='city name' value={city} onChange={e => setCity(e.target.value)} /><br/>
        <input type='text' name='country' id='country' placeholder='country name' value={country} onChange={e => updateMyCountry(e.target.value)} /><br/>
        <input type='submit' value='update locations' /><br />
        <span id='locationsError' className='error'>{error}</span>
      </form>
      
      <p>
        Your current location is {country}.
      </p>
      <br/>
      Most Recent Location: {locations.length === 0 ? 'no locations recorded' : `${locations.slice(-1)[0][0]}, ${locations.slice(-1)[0][1]}` }<br />
      Total Number of Locations: {locations.length}
      <hr />
      <input type='text' name='firstName' value={myName.firstName} onChange={e => updateMyName(e.target.name, e.target.value)} /><br/>
      <input type='text' name='lastName' value={myName.lastName} onChange={e => updateMyName(e.target.name, e.target.value)} />
      <p>
        Hello from {myName.firstName} {myName.lastName}!
      </p>
    </div>
  )
}

export default Locations;