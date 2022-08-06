import express from "express";
import dotenv from "dotenv";
import morgan from "morgan"
import bodyParser from "body-parser";


const app = express();

app.use(express.json())



//dotenv configuration starts

dotenv.config();

const DBC_URL = process.env.DBC;
const PORT = process.env.PORT || 3000;

//---------------------ends

//--------- global routes

app.use("/", (req, res) => {
  res.send("Modern Real Estates");
});

