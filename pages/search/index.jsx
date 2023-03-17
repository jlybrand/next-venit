import React, { useState } from "react";

export default function SearchForm() {
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [radius, setRadius] = useState(5);
  const [businessType, setBusinessType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          streetAddress,
          zipCode,
          radius,
          businessType,
        }),
      });

      const searchResults = await res.json();
      console.log("DATA :", searchResults);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-form__row">
        <label>
          Your Business Address
          <input
            type="text"
            value={streetAddress}
            onChange={(event) => setStreetAddress(event.target.value)}
            pattern="[A-Za-z0-9\s]+"
            placeholder="ex. 127 Maple Street"
            required
          />
        </label>
      </div>
      <div className="search-form__row">
        <label>
          Your Business Zip Code
          <input
            type="text"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            pattern="\d{5}"
            placeholder="ex. 12345"
            required
          />
        </label>
      </div>
      <div className="search-form__row">
        <label>
          {" "}
          Select a Search Radius
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
}
