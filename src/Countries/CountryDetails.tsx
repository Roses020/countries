import { useGetCountryDetailsQuery } from "./useGetCountryDetailsQuery";
import { useParams } from "react-router-dom";
import CountryCardLoading from "../CountryCardLoading";

export const CountryDetails = () => {
  const { countryCode } = useParams();
  const { countryDetailsData, hasError, isLoading } =
    useGetCountryDetailsQuery(countryCode);

  if (isLoading) return <CountryCardLoading />;
  if (hasError) return <div>Error</div>;

  return (
    <div className="countryDetailsCard">
      <button className="backButton" onClick={() => window.history.back()}>
        Go Back
      </button>

      {countryDetailsData && (
        <div className="detailsData">
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
