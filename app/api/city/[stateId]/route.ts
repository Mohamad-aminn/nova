import db from "@/app/db/db";
import { cities, states } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ stateId: string }> }
) => {
  try {
    const stateId = (await params).stateId;
    const result = await db.query.states.findFirst({
      where: eq(states.stateId, Number(stateId)),
      with: { cities: true },
    });

    return Response.json(result?.cities, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
};
