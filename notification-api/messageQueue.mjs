import amqp from "amqplib/callback_api.js";
import { mqURL } from "./helpers.mjs";

const initQueueAndSendMsg = (msg) =>
  amqp.connect(mqURL, (error0, connection) => {
    if (error0) {
      console.log(error0);
    }

    console.log("message queue connection established\n");

    connection.createChannel((error1, channel) => {
      if (error1) {
        console.log(error1);
      }

      const queue = "notification queue";

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.sendToQueue(queue, Buffer.from(msg.toString()));

      console.log(
        "Notification sent to the notification service through the message queue\n"
      );
    });

    setTimeout(() => {
      connection.close();
    }, 500);
  });

export default initQueueAndSendMsg;
