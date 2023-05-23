import express from "express";

import { NotFoundError } from "./errors/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js"
import { chatRouter } from "./routes/chatRoute.js"

const app = express();

app.set("trust proxy", true);
app.use(express.json())

app.use(chatRouter)

app.all("*", () => {
    throw new NotFoundError("Route not found")
})

app.use(errorHandler)

export { app }