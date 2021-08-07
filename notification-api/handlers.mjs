import initQueueAndSendMsg from "./messageQueue.mjs";
import { saveNotification } from "./queries.mjs";

const saveAndSendNotification = async (req, res) => {
  const notification = await saveNotification(req.body);

  initQueueAndSendMsg(notification.id);

  res.send("Notification is on the way");
};

export default saveAndSendNotification;
