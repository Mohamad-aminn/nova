import db from "@/app/db/db";
import { cities } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ stateId: string }> }
) => {
  try {
    const stateId = (await params).stateId;
    const result = await db.query.cities.findFirst({
      where: eq(cities.state, Number(stateId)),
      columns: { cities: true },
    });
    console.log(result);
    return Response.json(result, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
};
