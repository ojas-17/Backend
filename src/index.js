import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB()
.then(() => {
    app.listen(precess.env.PORT || 8000, () => {
        console.log(`MONGO DB connected on port: ${precess.env.PORT || 8000}`);
    });
})
.catch((error) => {
    console.log("MONGO DB connection failed", error);
});