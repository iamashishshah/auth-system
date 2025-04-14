import express from "express";
import { healthcheck } from "./controllers/healthcheck.controller.js";
import cors from "cors";
import { corsOptions } from "./middlewares/cors.middleware.js";
import { attachAshishData } from "./middlewares/getAshishData.middleware.js";
import userRoutes from "./routes/auth.route.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Home page"));
app.get("/user", (req, res) => res.send("User page"));
app.get("/ashish", attachAshishData, (req, res) => {
    const parsedData = JSON.parse(req.customData);
    const str = `Hello, I'm ${parsedData.fname} ${parsedData.lname}, and my age is: ${parsedData.age} years.`;
    res.send(str);
});
app.use("/api/v1/healthcheck", healthcheck);
app.use("/api/v1/users/", userRoutes)

export default app;
