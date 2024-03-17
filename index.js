import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import rutas from "./src/routes/tareas.routes.js";
import "./src/database/database.js";

const app = express();
app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en puerto " + app.get("port"));
});

app.use("/api", rutas);
