import RestClient from "@learning/clients/clients/RestClient";
import { BlogModel } from "@learning/clients/models/blog.model";
import { Injectable } from "@nestjs/common";
import type { AxiosResponse } from "axios";

@Injectable()
export default class BlogService {
  constructor(private restClient: RestClient) {
    this.restClient.domain = "http://100.105.32.95:4000";
  }

  getBlog(): Promise<AxiosResponse<BlogModel>> {
    console.log("Fetching blog data from http://localhost:4000/blog");
    return this.restClient.get("blog");
  }
}
