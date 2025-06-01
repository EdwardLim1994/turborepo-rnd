import { gql } from "@apollo/client";

export const GET_BLOG = gql`
	query GET_BLOG {
		getBlog {
			hi
		}
	}
`;
