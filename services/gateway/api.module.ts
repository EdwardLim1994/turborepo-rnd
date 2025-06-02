import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { BlogResolver } from "./resolvers/blog.resolver";
import { HttpModule } from "@nestjs/axios";
import BlogService from "./services/blog.service";
import RestClient from "@learning/clients/clients/RestClient";

@Module({
  providers: [BlogService, BlogResolver, RestClient],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      playground: true,
    }),
    HttpModule,
  ],
})
export default class AppModule {}
