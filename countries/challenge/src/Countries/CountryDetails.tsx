import { useGetCountryDetailsQuery } from "./useGetCountryDetailsQuery";
import { useParams } from "react-router-dom";

export const CountryDetails = () => {
  const { countryCode } = useParams();
  const { countryDetailsData, hasError, isLoading } =
    useGetCountryDetailsQuery(countryCode);

  console.log(countryDetailsData);
  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error</div>;

  return (
    <div>
      {countryDetailsData && (
        <p key={countryDetailsData.name}>
          {countryDetailsData.name}
          {countryDetailsData.emoji}
          {/* {countryDetailsData.currency} */}
          {/* {countryDetailsData.languages} */}
          {countryDetailsData.continent.name}
        </p>
      )}
    </div>
  );
};
