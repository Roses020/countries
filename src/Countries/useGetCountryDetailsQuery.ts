import { gql, useQuery } from "@apollo/client";
import { ReactNode } from "react";

const CountryDetails = gql`
  query GetCountryDetails($Code: ID!) {
    country(code: $Code) {
      continent {
        name
      }
      name
      emoji
      currency
      capital
      code
      languages {
        code
        name
      }
      native
      phone
      awsRegion
    }
  }
`;
export const useGetCountryDetailsQuery = (countryCode: string | undefined) => {
  const {
    data,
    loading: isLoading,
    error: hasError,
  } = useQuery(CountryDetails, {
    skip: !countryCode,
    variables: { Code: countryCode },
  });

  const countryDetailsData: {
    code: ReactNode;
    continent: {
      name: string;
    };
    name: string;
    currencies: string;
    emoji: string;
    currency: {
      code: string;
    };
    capital: string;
    native: String;
    phone: string;
    awsRegion: string;
  } = data?.country ?? {};

  return { countryDetailsData, hasError, isLoading };
};
