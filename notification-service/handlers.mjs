import { publish } from "./publisher.mjs";
import { getUsers } from "./queries.mjs";
import { getSingleNotification } from "./queries.mjs";

export const getAndPublishNotification = async (req, res) => {
  const notification = await getSingleNotification(parseInt(req.query.id));

  const users = await getUsers(notification.subscribers);

  const result = publish(notification, users);

  res.send(result);
};
