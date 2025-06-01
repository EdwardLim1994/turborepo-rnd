import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { BlogResolver } from "./resolvers/blog.resolver";
import { HttpModule } from "@nestjs/axios";
import BlogService from "./services/blog.service";

@Module({
	providers: [BlogService, BlogResolver],
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: "schema.gql",
			playground: true,
			// status400ForVariableCoercionErrors: true,
		}),
		HttpModule,
	],
})
export default class AppModule {}
