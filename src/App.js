import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1ab9254d49ba454403b57d7a58b001dc`

  //search function
  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }

  }

  return (
    <div className='app'>
       <p className='txt1'>Weather<span className='txt'>App</span></p>
      <div className='search'>
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder='Enter Location'
          onKeyPress={searchLocation}
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}F</h1> : null}

          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&

          <div className='bottom'>
            <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like} F</p> : null}
              <p>Feels like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind ? <p className='bold'>{data.main.speed}MPH</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default App
