import express from "express";
import cors from "cors";
import { PORT } from "./helpers.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/notification/:id", () => {});
app.post("/notification/:id/publishers", () => {});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
