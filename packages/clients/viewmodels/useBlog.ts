import { GET_BLOG } from "../models/blog.model";
import { ApolloClient } from "@apollo/client";

export const useBlog = async (client: ApolloClient<any>) => {
  return await client
    .query({
      query: GET_BLOG,
    })
    .catch((error) => {
      throw new Error(`Failed to fetch blog data: ${error.message}`);
    });
};
