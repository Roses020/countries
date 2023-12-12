import { useGetCountryDetailsQuery } from "./useGetCountryDetailsQuery";
import { useParams } from "react-router-dom";

export const CountryDetails = () => {
  const { countryCode } = useParams();
  const { countryDetailsData, hasError, isLoading } =
    useGetCountryDetailsQuery(countryCode);

  console.log(countryDetailsData);
  if (isLoading) return <h1>Loading...</h1>;
  if (hasError) return <div>Error loading country details</div>;

  return (
    <div className="countryDetailsCard">
      {countryDetailsData && (
        <div>
          <h2>Name: {countryDetailsData.name}</h2>
          <h3>Continent: {countryDetailsData.continent.name}</h3>
          <h3>Emoji: {countryDetailsData.emoji}</h3>
          <h3>Currency: {String(countryDetailsData.currency)}</h3>
          <h3>Capital: {countryDetailsData.capital}</h3>
          <h3>native: {countryDetailsData.native}</h3>
          <h3>Phone: {countryDetailsData.phone}</h3>
          <h3>awsRegion: {countryDetailsData.awsRegion}</h3>
        </div>
      )}
    </div>
  );
};
