import express from "express";
import cors from "cors";
import { PORT } from "./helpers.mjs";
import saveAndSendNotification from "./handlers.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/notification", saveAndSendNotification);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
