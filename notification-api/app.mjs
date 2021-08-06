import express from "express";
import cors from "cors";
import { pushNotification } from "./handlers.mjs";
import { PORT } from "./helpers.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/notification", pushNotification);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
