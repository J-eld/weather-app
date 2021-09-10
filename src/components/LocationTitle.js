import React from 'react'

export default function LocationTitle({ weatherData }) {
    return (
        <div className="city-name">
          {weatherData ? weatherData.name : 'placeholder'}
        </div>
    )
}
