import { Controller, Get } from "@nestjs/common";
import { BlogModel } from "@learning/clients/models/blog.model";

@Controller("/blog")
export default class ApiController {
  @Get()
  getBlog(): BlogModel {
    const blog = new BlogModel(1, "hello from blog service");

    return blog;
  }
}
