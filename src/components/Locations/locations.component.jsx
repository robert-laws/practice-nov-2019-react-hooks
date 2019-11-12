import React, { useState } from 'react';

const Locations = () => {
  const [city, setCity ] = useState('');
  const [country, setCountry] = useState('')
  const [locations, setLocations] = useState([])

  const updateLocations = event => {
    event.preventDefault();

    setLocations([
      ...locations,
      [city, country]
    ])

    setCity('');
    setCountry('');
  }

  return (
    <div>
      Locations<br/>
      <form onSubmit={updateLocations}>
        <input type='text' name='city' id='city' placeholder='city name' value={city} onChange={e => setCity(e.target.value)} /><br/>
        <input type='text' name='country' id='country' placeholder='country name' value={country} onChange={e => setCountry(e.target.value)} /><br/>
        <input type='submit' value='update locations' />
      </form>
      <br/>
      Most Recent Location: {locations.length === 0 ? 'no locations recorded' : `${locations.slice(-1)[0][0]}, ${locations.slice(-1)[0][1]}` }<br />
      Total Number of Locations: {locations.length}
    </div>
  )
}

export default Locations;