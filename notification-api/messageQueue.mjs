import amqp from "amqplib/callback_api.js";

const initQueueAndSendMsg = (msg) =>
  amqp.connect("amqp://localhost", (error0, connection) => {
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

      channel.sendToQueue(queue, Buffer.from(msg.toString()));

      console.log("Notification sent through the message queue");
    });

    setTimeout(() => {
      connection.close();
    }, 500);
  });

export default initQueueAndSendMsg;
