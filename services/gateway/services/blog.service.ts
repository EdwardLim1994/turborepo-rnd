import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import type { AxiosResponse } from "axios";

@Injectable()
export default class BlogService {
	constructor(private readonly httpService: HttpService) {}

	getBlog(): Promise<AxiosResponse<string>> {
		console.log("Fetching blog data from http://localhost:4000/blog");
		return this.httpService.axiosRef.get("http://localhost:4000/blog", {
			headers: {
				Accept: "text/plain", // or remove this header if not needed
			},
		});
	}
}
