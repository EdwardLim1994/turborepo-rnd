import { Elysia } from "elysia";

const app = new Elysia()
	.group("/blog", (app) => {
		return app.get("/", () => "Hello from Blog Service!");
	})
	.listen({
		port: 4000,
		hostname: "0.0.0.0",
	});

console.log("Listen to 4000");
