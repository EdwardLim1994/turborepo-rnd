import RestClient from "@learning/clients/clients/RestClient";
import { Injectable } from "@nestjs/common";
import type { AxiosResponse } from "axios";

@Injectable()
export default class BlogService {
  q;
  constructor(private restClient: RestClient) {
    this.restClient.domain = "http//100.105.32.95:4000";
  }

  getBlog(): Promise<AxiosResponse<string>> {
    console.log("Fetching blog data from http://localhost:4000/blog");
    return this.restClient.get("blog");
  }
}
