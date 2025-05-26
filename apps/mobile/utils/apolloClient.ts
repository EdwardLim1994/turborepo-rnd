import ApolloClient from "@learning/clients/utils/ApolloClient";

export const client = ApolloClient.getInstance(
  "http://100.105.32.95:3001/graphql",
);
