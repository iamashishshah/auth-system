import app from "./app.js";
import dbConnect from "./db/db.config.js";
import "dotenv/config";


const PORT = process.env.PORT || 9999;

dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`Error while connecting to database. ${error}`);
        process.exit(1);
    });

/** app.listen is telling from where will you take the request or response
 * 
 */