import {
	ApolloClient as OgApolloClient,
	InMemoryCache,
	HttpLink,
} from "@apollo/client";

export default class ApolloClient {
	private static instance: OgApolloClient<any> | null = null;

	private constructor() {}

	public static getInstance(uri: string): OgApolloClient<any> {
		if (!ApolloClient.instance) {
			console.log("Initialing....");
			ApolloClient.instance = new OgApolloClient({
				link: new HttpLink({ uri }),
				cache: new InMemoryCache(),
			});
		}
		return ApolloClient.instance;
	}
}
