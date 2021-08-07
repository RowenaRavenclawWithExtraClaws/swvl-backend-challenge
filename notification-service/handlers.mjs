import { publish } from "./publisher.mjs";
import { getUsers } from "./queries.mjs";
import { getSingleNotification } from "./queries.mjs";

const getAndPublishNotification = async (notificationId) => {
  const notification = await getSingleNotification(parseInt(notificationId));

  const users = await getUsers(notification.subscribers);

  const results = publish(notification, users);

  console.log("Notifications:", results);
};

export default getAndPublishNotification;
