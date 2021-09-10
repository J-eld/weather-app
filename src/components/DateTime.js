import React from 'react'

export default function DateTime() {
    return (
        <div className="dateTime">
          {new Date().toDateString() + '\xa0\xa0' + new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        </div>
    )
}
