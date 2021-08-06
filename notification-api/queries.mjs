import Prisma from "@prisma/client";
import { constructDate } from "./helpers.mjs";

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

const getSingleUser = async (userId) => {
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

export const getUsers = async (userIdList) => {
  const users = await Promise.all(
    userIdList.map(async (userId) => await getSingleUser(userId))
  );

  return users;
};

export const saveNotification = async (notificationData) => {
  await prisma.notifications.create({
    data: { ...notificationData, date_created: constructDate() },
  });
};
