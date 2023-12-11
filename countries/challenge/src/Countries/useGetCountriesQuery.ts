import { gql, useLazyQuery } from "@apollo/client";

const countriesQuery = gql`
  query CountriesQueryInCountries {
    countries {
      name
      code
    }
  }
`;

export const useGetCountriesQuery = () => {
  const [getCountries, { data, loading: isLoading, error: hasError }] =
    useLazyQuery(countriesQuery);

  const countriesData: {
    name: string;
    code: string;
  }[] = data?.countries ?? [];

  return { getCountries, countriesData, hasError, isLoading };
};
