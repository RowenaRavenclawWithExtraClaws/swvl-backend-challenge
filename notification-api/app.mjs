import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json())

app.post("/notification", (req, res) => {});

app.listen(3000, () => console.log("listening on port 3000"));