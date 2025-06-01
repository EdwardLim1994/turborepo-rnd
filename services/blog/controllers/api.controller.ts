import { Controller, Get } from "@nestjs/common";

@Controller("/blog")
export default class ApiController {
	@Get()
	getBlog() {
		return "Hello from Blog API!";
	}
}
