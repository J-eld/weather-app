import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import LoadingIcon from './assets/loadingIcon.svg'
import clsx from 'clsx'

function App() {

  const [weatherData, setWeatherData] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [units, setUnits] = useState(true);
  const [noLocation, setNoLocation] = useState(false);
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  function changeUnits() {
    setWeatherData('')
    setUnits(!units)
  }

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setLat(res.data.latitude)
    setLon(res.data.longitude)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (lat && lon) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=${units ? 'metric' : 'imperial'}`)
      .then((res) => {
        setWeatherData(res.data)
        setDescription(res.data.weather[0].description)
        setLogo(res.data.weather[0].icon)
      })
      .catch((err) => console.log(err))
    }
  }, [lat, lon, units])

  if (lat && lon) return (
    <div className="App">
      <div className={clsx({['hidden']: !weatherData})}>
        <div className="city-name">
          {weatherData ? weatherData.name : 'q'}
        </div>
        <div className="dateTime">
          {new Date().toDateString() + '\xa0\xa0' + new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        </div>
        <div className="temperature">
          {weatherData ? weatherData && Math.round(weatherData.main.temp) + '\xB0' + (units ? 'C' : 'F') : 'q'}
        </div>
        <img src={`https://openweathermap.org/img/wn/${logo}@2x.png`} />
        <div className="weather-description">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </div>
      </div>
      <label className="switch">
        <input value={units} checked={units} onChange={changeUnits} type="checkbox" />
        <span className="slider round"><span className={clsx({['CelsiusText']: units, ['FahrenheitText']: !units})}>{units ? '\xB0C' : '\xB0F'}</span></span>
      </label>
      <div className={clsx({['loading']: !weatherData})}></div>
    </div>
  );

  return (<div className="App" ></div>)
}

export default App;
