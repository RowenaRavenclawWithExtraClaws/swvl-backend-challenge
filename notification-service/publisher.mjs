import { translate } from "./helpers.mjs";

const typePubDict = {
  sms: (notification, user) => {
    const [title, body] = translate(
      user.prefered_lang,
      notification.title,
      notification.body
    );
    /* handle real sms sender service like twilio */
    return {
      title: title,
      body: body,
      publish_method: "sms",
      userId: user.id,
    };
  },
  email: (notification, user) => {
    const [title, body] = translate(
      user.prefered_lang,
      notification.title,
      notification.body
    );
    /* handle real email sending service like nodemailer */
    return {
      title: title,
      body: body,
      publish_method: "email",
      userId: user.id,
    };
  },
  app: (notification, user) => {
    const [title, body] = translate(
      user.prefered_lang,
      notification.title,
      notification.body
    );
    /* handle app push notification service like firebase cloud messeging */
    return {
      title: title,
      body: body,
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
