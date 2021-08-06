import Prisma from "@prisma/client";

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
    userIdList.map(async (userId) => await getSingleUser(parseInt(userId)))
  );

  return users;
};

export const getSingleNotification = async (notificationId) => {
  const notification = await prisma.notifications.findUnique({
    where: {
      id: notificationId,
    },
  });

  return notification;
};
