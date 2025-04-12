import { whiteListURL } from "../constants/constant.cors.js";
import { APIError } from "../utils/util.api-error.js";

export const corsOptions = {
    origin: function (origin, callback) {
        console.log("Incoming Origin:", origin);

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
