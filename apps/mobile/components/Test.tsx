import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { useApolloClient } from "@apollo/client";
import { useBlog } from "@learning/clients/viewmodels/useBlog";

export default function Test() {
  const client = useApolloClient();

  const [blog, setBlog] = useState("");

  useEffect(() => {
    const getBlog = async () => {
      const result = await useBlog(client).catch((e) => console.error(e));

      setBlog(result.data.hi);
    };

    getBlog();
  }, []);

  if (blog === "") return <Text>Loading...</Text>;
  else return <Text>{blog}</Text>;
}
