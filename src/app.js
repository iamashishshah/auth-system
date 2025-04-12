import express from "express";
import { healthcheck } from "./controllers/controller.healthcheck.js";
import cors from "cors";
import { corsOptions } from "./middlewares/middleware.cors.js";

const app = express();

app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => res.send("Home page"));
app.post("/user", (req, res) => res.send("User page"));
app.use("/api/v1/healthcheck", healthcheck);

export default app;
