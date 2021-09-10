import React from 'react'

export default function WeatherDescription({ description }) {
    return (
        <div className="weather-description">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </div>
    )
}
