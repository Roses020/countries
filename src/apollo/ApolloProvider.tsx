import type { ReactNode } from "react";
import {
  ApolloProvider as ApolloProv,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

interface ApolloProviderProps {
  children: ReactNode;
}

export const ApolloProvider = ({ children }: ApolloProviderProps) => {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });

  return <ApolloProv client={client}>{children}</ApolloProv>;
};
