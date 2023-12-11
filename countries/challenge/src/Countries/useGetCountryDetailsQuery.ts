import { gql, useQuery } from "@apollo/client";

const CountryDetails = gql`
  query GetCountryDetails($Code: ID!) {
    country(code: $Code) {
      continent {
        name
      }
      name
      emoji
      currency
      code
      languages {
        code
        name
      }
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
    continent: {
      name: string;
    };
    name: string;
    currencies: string;
    emoji: string;
    currency: {
      code: string;
    };
    languages: {
      code: string;
      name: string;
    };
  } = data?.country ?? {};
  return { countryDetailsData, hasError, isLoading };
};
