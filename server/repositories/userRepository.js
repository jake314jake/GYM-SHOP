import prisma from "../config/prismaConfig.js";  

export const findAllUsers = async () => {
  return await prisma.users.findMany();
};

export const findUserById = async (id) => {
  return await prisma.users.findUnique({ where: { user_id: id } });
};
