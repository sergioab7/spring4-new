import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import tareasRutas from "./routes/tareas.js";

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

app.use("/api", tareasRutas);

app.listen(process.env.PORT, () => {
    console.log("[+] Puerto en escucha en: "+ process.env.PORT);
})