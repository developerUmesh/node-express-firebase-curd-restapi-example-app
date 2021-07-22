import config from "./config";
import express, { json, urlencoded } from "express";
import cors from "cors";
import route from "./routes/router";

const app=express();
 
app.use(json());
app.use(cors({origin:true}));
app.use(urlencoded({extended: true}));
app.use("/api",route); 






 
app.listen(config.port,()=>console.log("Connected to this port "+config.port));
