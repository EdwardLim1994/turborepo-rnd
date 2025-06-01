import { Query, Resolver } from "@nestjs/graphql";
import { Blog } from "../models/blog.model";
import BlogService from "../services/blog.service";

@Resolver(() => Blog)
export class BlogResolver {
	constructor(private readonly blogService: BlogService) {}

	@Query(() => Blog)
	async getBlog(): Promise<Blog> {
		// const response = await this.blogService.getBlog().catch((error) => {
		// 	console.error("Error fetching blog data:", error);
		// 	throw new Error("Failed to fetch blog data");
		// });

		// if (response.status !== 200) {
		// 	throw new Error("Failed to fetch blog data");
		// }

		const blog = new Blog();
		blog.hi = "Hello, World!"; // Placeholder for blog content
		// blog.hi = response.data;

		return blog;
	}
}
