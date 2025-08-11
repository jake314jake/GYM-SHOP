import * as userRepo from "../repositories/userRepository.js";

export const getAllUsers = async () => {
  return await userRepo.findAllUsers();
};

export const getUser = async (id) => {
  const user = await userRepo.findUserById(id);
  if (!user) throw new Error("User not found");
  return user;
};
