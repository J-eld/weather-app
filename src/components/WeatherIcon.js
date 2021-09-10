import React from 'react'

export default function WeatherIcon({ logo }) {
    return (
        <img src={`https://openweathermap.org/img/wn/${logo}@2x.png`} alt="weather icon" />
    )
}
