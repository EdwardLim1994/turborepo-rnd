import { NestFactory } from "@nestjs/core";
import AppModule from "./controllers/api.module";

(async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000, "0.0.0.0");
})();
