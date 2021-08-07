const typePubDict = {
  sms: (notification, user) => {
    /* handle real sms sender service like twilio */
    return {
      title: notification.title,
      body: notification.body,
      publish_method: "sms",
      userId: user.id,
    };
  },
  email: (notification, user) => {
    /* handle real email sending service like nodemailer */
    return {
      title: notification.title,
      body: notification.body,
      publish_method: "email",
      userId: user.id,
    };
  },
  app: (notification, user) => {
    /* handle app push notification service like firebase cloud messeging */
    return {
      title: notification.title,
      body: notification.body,
      publish_method: "app",
      userId: user.id,
    };
  },
};

const selectPublicherAndPublish = (type) => typePubDict[type];

export const publish = (notification, users) =>
  users.map((user) =>
    notification.types.map((type) =>
      selectPublicherAndPublish(type)(notification, user)
    )
  );
