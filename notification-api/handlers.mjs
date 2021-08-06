import { saveNotification } from "./queries.mjs";

export const pushNotification = async (req, res) => {
  const users = await saveNotification(req.body);
  res.send("saved");
};
