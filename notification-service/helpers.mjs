import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const mqURL = process.env.MQ_URL;

export const translate = (lang, titleText, bodyText) => {
  // handle translation through a translation service or a json file
  return [titleText, bodyText];
};
