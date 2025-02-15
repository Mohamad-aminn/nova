import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import db from "@/app/db/db";
import { eq } from "drizzle-orm";
import { users } from "@/app/db/schema";
import { sleep } from "@/app/utils/utils";

export const GET = async (req: NextRequest) => {
  try {
    const access_token = req.headers.get("token");

    if (!access_token) {
      return Response.json({ error: "unauthorized" }, { status: 401 });
    }

    const result = jwt.verify(access_token, process.env.JWT_SECRET!) as {
      id: number;
    };

    if (!result) {
      return Response.json({ error: "invalid token!" }, { status: 400 });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.id, result.id),
    });

    await sleep(2000);

    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json({ error: "server error" }, { status: 500 });
  }
};
