import { gql, useQuery } from "@apollo/client";

const countriesQuery = gql`
  query CountriesQueryInCountries {
    countries {
      name
      code
      emoji
    }
  }
`;

export const useGetCountriesQuery = () => {
  const {
    data,
    loading: isLoading,
    error: hasError,
  } = useQuery(countriesQuery);

  const countriesData: {
    name: string;
    code: string;
    emoji: string;
  }[] = data?.countries ?? [];

  return { countriesData, hasError, isLoading };
};
