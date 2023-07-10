import express from "express";
import cors from "cors";
import morgan from "morgan";
import v1 from "../api/routes/v1/index.js"

const app = express();

//log requests to the console
app.use(morgan("tiny"));
app.use(express.json());
app.disable("x-powered-by");
app.use(cors());

//Mount API v1 routes
app.use("/v1", v1);


export { app };