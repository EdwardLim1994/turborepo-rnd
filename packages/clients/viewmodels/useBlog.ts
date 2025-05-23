import { GET_BLOG } from "../models/blog";
import { ApolloClient } from "@apollo/client";

export const useBlog = async (client: ApolloClient<any>) => {
  console.log(client);
  return await client.query({
    query: GET_BLOG,
  });
};
