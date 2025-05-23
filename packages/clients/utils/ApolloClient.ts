import { ApolloClient as OgApolloClient, InMemoryCache } from "@apollo/client";

export default class ApolloClient {
  private static instance: OgApolloClient<any>;

  private constructor() {}

  public static getInstance(uri: string): OgApolloClient<any> {
    if (ApolloClient.instance == null) {
      ApolloClient.instance = new OgApolloClient({
        uri: uri,
        cache: new InMemoryCache(),
      });
    }
    return ApolloClient.instance;
  }
}
