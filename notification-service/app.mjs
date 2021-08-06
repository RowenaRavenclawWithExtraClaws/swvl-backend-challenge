import express from "express";
import cors from "cors";
import { PORT } from "./helpers.mjs";
import { getAndPublishNotification } from "./handlers.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/notification", getAndPublishNotification);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
