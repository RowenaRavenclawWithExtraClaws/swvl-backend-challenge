import amqp from "amqplib/callback_api.js";
import getAndPublishNotification from "./handlers.mjs";
import { mqURL } from "./helpers.mjs";

const initQueueAndReveiveMsg = () =>
  amqp.connect(mqURL, (error0, connection) => {
    if (error0) {
      console.log(error0);
    }

    connection.createChannel((error1, channel) => {
      if (error1) {
        console.log(error1);
      }

      const queue = "notification queue";

      channel.assertQueue(queue, {
        durable: false,
      });

      console.log(`"Waiting for notification ID messages in ${queue}`);

      channel.consume(
        queue,
        (msg) => {
          const notificationId = msg.content.toString();

          console.log(`Received ${notificationId}`);

          getAndPublishNotification(notificationId);
        },
        {
          noAck: true,
        }
      );
    });
  });

export default initQueueAndReveiveMsg;
