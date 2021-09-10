import React, { useState } from 'react'
import axios from 'axios'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

export default function LocationSearch({setSearchLocation}) {
    const [searchQuery, setSearchQuery] = useState('')


      const handleSelect = address => {
          setSearchQuery(address)
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => setSearchLocation(latLng.lat, latLng.lng))
          .catch(error => console.error('Error', error));
      };


    return (
        <div>
            <PlacesAutocomplete
                value={searchQuery}
                onChange={setSearchQuery}
                onSelect={handleSelect}
                ref={(c) => {
                    if (!c) return;
                    c.handleInputOnBlur = () => {};
                }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="dropdownDiv">
                    <input
                    {...getInputProps({
                        placeholder: 'Search',
                        className: 'search',
                    })}
                    />
                    <div className="dropdownRoot">
                    {suggestions.map(suggestion => {
                        return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                            className: suggestion.active ? "activeDropdown" : "dropdownStyles",
                            })}
                        >
                            <div className="dropdownDescription">{suggestion.description}</div>
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </div>
    )
}
