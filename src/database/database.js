import "dotenv/config";
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

mongoose.connect(uri);

const dataConection = mongoose.connection;
dataConection.once("open", () => {
    console.log("bd conection success");
});
