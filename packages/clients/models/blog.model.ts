import { gql } from "@apollo/client";
import { ObjectType, Field, Int } from "@nestjs/graphql";

export const GET_BLOG = gql`
  query GET_BLOG {
    getBlog {
      id
      title
    }
  }
`;

@ObjectType()
export class Blog {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  title?: string;
}

export class BlogModel {
  constructor(
    private id: number,
    private title: string,
  ) {}

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }
}

export class BlogDTO {}
