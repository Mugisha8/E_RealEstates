import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import { Sequelize } from "sequelize";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//dotenv configuration starts

dotenv.config();

//---------------------ends

//--------- global routes

app.use("/", (req, res) => {
  res.send("Modern Real Estates");
});

//----- start connection

const db = new Sequelize(process.env.DbC);
const testConnection = async () => {
  try {
    await db.authenticate();
    console.log("Good Job, Connected To Database...");
  } catch (error) {
    console.error("Unable", error);
  }
};
testConnection();
app.get("/", (req, res) => {
  res.send("index");
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server is running on  http://localhost:${PORT}`));
