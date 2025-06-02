import { defineNuxtPlugin } from "#app";
import ApolloClient from "@learning/clients/clients/ApolloClient";

export default defineNuxtPlugin((nuxtApp) => {
  const client = ApolloClient.getInstance("http://100.105.32.95:3001/graphql");

  return {
    provide: {
      apollo: client,
    },
  };
});
