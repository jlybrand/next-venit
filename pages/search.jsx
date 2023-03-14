import React, { useState } from 'react';

export default function Form() {
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState(5);
  const [businessType, setBusinessType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-form__row">
        <label>
          Street Address
          <input
            type="text"
            value={streetAddress}
            onChange={(event) => setStreetAddress(event.target.value)}
            pattern="[A-Za-z0-9\s]+"
            required
          />
        </label>
      </div>
      <div className="search-form__row">
        <label>
          Zip Code
          <input
            type="text"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            pattern="\d{5}"
            required
          />
        </label>
      </div>
      <div className="search-form__row">
        <label>
          Radius
          <select
            value={radius}
            onChange={(event) => setRadius(event.target.value)}
          >
            {Array.from({ length: 40 }, (_, index) => (index + 1) * 5).map(
              (value) => (
                <option key={value} value={value}>
                  {value} miles
                </option>
              )
            )}
          </select>
        </label>
      </div>
      <div className="search-form__row">
        <label>
          Business Type
          <select
            value={businessType}
            onChange={(event) => setBusinessType(event.target.value)}
          >
            <option value="">Select a business type</option>
            <option value="dentists">Dentists</option>
            <option value="doctors">Doctors</option>
            <option value="opticians">Opticians</option>
            <option value="pharmacies">Pharmacies</option>
          </select>
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
