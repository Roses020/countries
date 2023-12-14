import React, { useEffect, useState } from "react";
import { useGetCountriesQuery } from "../Countries/useGetCountriesQuery";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import CountryCardLoading from "../CountryCardLoading";

export const Countries = () => {
  const navigate = useNavigate();
  const { countriesData, hasError, isLoading } = useGetCountriesQuery();
  const [filteredCountries, setFilteredCountries] = useState(countriesData);

  useEffect(() => {
    const fetchData = async () => {
      if (isLoading) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFilteredCountries(countriesData);
    };
    fetchData();
    return () => {};
  }, [countriesData, isLoading]);

  if (isLoading) return <CountryCardLoading />;
  if (hasError) return <div>Sorry There is an Error</div>;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    const filteredCountries = countriesData.filter((country) => {
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredCountries(filteredCountries);
  };

  return (
    <div>
      <Input
        className="SearchInput"
        name="search"
        label=""
        placeholder="SEARCH HERE FOR A COUNTRY!"
        onChange={handleSearch}
      />
      {filteredCountries && (
        <div className="countriesContainer">
          {filteredCountries.map((country) => (
            <div
              key={country.name}
              className="countryCard"
              onClick={() => navigate(`/country/${country.code}`)}
            >
              <h2>{country.name}</h2>
              {country.code && (
                <p>
                  {country.code}
                  {country.emoji}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
