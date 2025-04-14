import { whiteListURL } from "../constants/cors.constant.js";
import { APIError } from "../utils/api-error.util.js";

export const corsOptions = {
    origin: function (origin, callback) {
        console.log("Incoming Origin:", origin);
        console.log(callback)

        if (!origin || whiteListURL.includes(origin)) {
            return callback(null, true);
        }
        console.warn(`Blocked by CORS: ${origin}`);
        return callback(new APIError(401, `CORS error: ${origin} not allowed`));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    exposedHeaders: ["Authorization", "Set-Cookie"],
    credentials: true,
};
