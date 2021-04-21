import express, { response } from "express";
import "./database";
import { routes } from "./routes"

const app = express();

app.use(express.json());

app.use(routes);

app.listen(4747, () => console.log("server is running on port 4747"));