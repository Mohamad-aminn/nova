"use server";

import db from "../db/db";

export const findUser = async () => {
  const users = await db.query.users.findMany();
  console.log(users);
};
