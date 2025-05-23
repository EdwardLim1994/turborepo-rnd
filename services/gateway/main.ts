import { Elysia } from "elysia";
import { yoga } from "@elysiajs/graphql-yoga";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(
    cors({
      origin: "*",
      credentials: false,
    }),
  )
  .use(
    yoga({
      typeDefs: /*GraphQL*/ `
      type Query{
        hi: String
      }
  `,
      resolvers: {
        Query: {
          hi: () => "Hello from gateway",
        },
      },
    }),
  )
  .listen({ port: 3001, hostname: "0.0.0.0" });

console.log("Listen to 3001");
