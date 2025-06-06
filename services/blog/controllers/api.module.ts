import { Module } from "@nestjs/common";
import ApiController from "./api.controller";

@Module({
	controllers: [ApiController],
	providers: [],
})
export default class AppModule {}
