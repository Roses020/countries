import React, { useState, MouseEventHandler } from "react";
import { useGetCountriesQuery } from "../Countries/useGetCountriesQuery";

export const Countries = () => {
  const { getCountries, countriesData, hasError, isLoading } =
    useGetCountriesQuery();
  const [showCountries, setShowCountries] = useState(false);

  const handleButtonClick = () => {
    getCountries();
    setShowCountries(!showCountries);
  };

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error</div>;

  return (
    <div>
      <button className="Button" onClick={handleButtonClick}>
        {showCountries ? "Hide Countries" : "Load Countries"}
      </button>
      {showCountries && countriesData && (
        <div className="countriesContainer">
          {countriesData.map((country) => (
            <div
              key={country.name}
              className="countryCard"
              onClick={() => window.open(`/country/${country.code}`)}
            >
               <p>{country.name}</p>
              {country.code && <p>{country.code}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
