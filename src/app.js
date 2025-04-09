import express from "express";
import { healthcheck } from "./controllers/controller.healthcheck.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home page");
});

app.post("/user", (req, res) =>{})

app.use("/api/v1/healthcheck", healthcheck);

export default app;
