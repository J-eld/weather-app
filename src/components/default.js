// import React from 'react'

// export default function Default() {
//     return (
//         <>
//         <div className={clsx({['hidden']: !weatherData})}>
//             <div className="city-name">
//                 {weatherData ? weatherData.name : 'q'}
//             </div>
//             <div className="dateTime">
//                 {new Date().toDateString() + '\xa0\xa0' + new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
//             </div>
//             <div className="temperature">
//                 {weatherData ? weatherData && Math.round(weatherData.main.temp) + '\xB0' + (units ? 'C' : 'F') : 'q'}
//             </div>
//             <img src={`https://openweathermap.org/img/wn/${logo}@2x.png`} />
//             <div className="weather-description">
//                 {description.charAt(0).toUpperCase() + description.slice(1)}
//             </div>
//         </div>
//         <label className="switch">
//             <input value={units} checked={units} onChange={changeUnits} type="checkbox" />
//             <span className="slider round"><span className={clsx({['CelsiusText']: units, ['FahrenheitText']: !units})}>{units ? '\xB0C' : '\xB0F'}</span></span>
//         </label>
//         <div className={clsx({['loading']: !weatherData})}></div>
//         </>
//     )
// }
