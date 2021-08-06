import Prisma from "@prisma/client";
import { constructDate } from "./helpers.mjs";

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

export const saveNotification = async (notificationData) => {
  await prisma.notifications.create({
    data: { ...notificationData, date_created: constructDate() },
  });
};
