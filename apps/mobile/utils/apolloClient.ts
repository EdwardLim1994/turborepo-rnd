import { InMemoryCache, HttpLink, ApolloClient } from "@apollo/client";
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://100.105.32.95:3001/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
