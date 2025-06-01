import { NestFactory } from "@nestjs/core";
import AppModule from "./api.module";

(async () => {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: "*",
		allowedHeaders: "Content-Type, Accept",
		credentials: false,
	});
	await app.listen(3001);
})();
