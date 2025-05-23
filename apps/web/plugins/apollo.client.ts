import { defineNuxtPlugin } from "#app";
import { ApolloClient as OgApolloClient } from "@apollo/client";
import ApolloClient from "@learning/clients/utils/ApolloClient";

export default defineNuxtPlugin((nuxtApp) => {
  const client: OgApolloClient<any> = ApolloClient.getInstance(
    "http://100.105.32.95:3001/graphql",
  );

  return {
    provide: {
      apollo: client,
    },
  };
});
