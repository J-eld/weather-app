import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import LocationTitle from './components/LocationTitle'
import DateTime from './components/DateTime'
import Temperature from './components/Temperature'
import WeatherIcon from './components/WeatherIcon'
import WeatherDescription from './components/WeatherDescription'
import UnitSwitcher from './components/UnitSwitcher'
import LocationSearch from './components/LocationSearch'

function App() {

  const [weatherData, setWeatherData] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [units, setUnits] = useState(true);
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

  const setSearchLocation = (lat, lon) => {
    setLat(lat)
    setLon(lon)
  }

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

  return (
    <div className="App">
      <LocationSearch setSearchLocation={setSearchLocation} />
      {(lat && lon) && (
        <>
          <div className={clsx({'hidden': !weatherData})}> {/* only show this section if weatherData has loaded */}
            <LocationTitle weatherData={weatherData} />
            <DateTime />
            <Temperature weatherData={weatherData} units={units} />
            <WeatherIcon logo={logo} />
            <WeatherDescription description={description} />
          </div>
          <UnitSwitcher units={units} changeUnits={changeUnits} />
          <div className={clsx({'loading': !weatherData})}></div>
        </>
      )}
    </div>
  );
}

export default App;
