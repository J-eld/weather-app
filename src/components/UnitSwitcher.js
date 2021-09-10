import React from 'react'
import clsx from 'clsx'

export default function UnitSwitcher( {units, changeUnits} ) {
    return (
        <label className="switch">
            <input value={units} checked={units} onChange={changeUnits} type="checkbox" />
            <span className="slider round"><span className={clsx({'CelsiusText': units, 'FahrenheitText': !units})}>{units ? '\xB0C' : '\xB0F'}</span></span>
        </label>
    )
}
