import { Text } from "react-native";
import { gql, useQuery } from "@apollo/client";

export default function Test() {
  const GET_DATA = gql`
    query blog {
      hi
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error.message}</Text>;

  return <Text>{data.hi}</Text>;
}
