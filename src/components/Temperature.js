import React from 'react'

export default function Temperature({ weatherData, units }) {
    return (
        <div className="temperature">
          {weatherData ? weatherData && Math.round(weatherData.main.temp) + '\xB0' + (units ? 'C' : 'F') : 'q'}
        </div>
    )
}
