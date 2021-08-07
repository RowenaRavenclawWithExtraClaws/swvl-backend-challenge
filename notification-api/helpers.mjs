import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const mqURL = process.env.MQ_URL;

export const constructDate = () => {
  const today = new Date();

  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  return date;
};
