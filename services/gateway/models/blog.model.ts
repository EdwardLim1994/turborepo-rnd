import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Blog {
	@Field({ nullable: true })
	hi?: string;
}
