import { Elysia } from "elysia";
import BlogRouter from "../../packages/clients/routers/BlogRouter";

const app = new Elysia().use().listen(3002);

console.log(`Listening to port ${3002}`);
