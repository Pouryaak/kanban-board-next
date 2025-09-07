import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

export async function GET() {
  try {
    const rows = await db.select({ id: users.id, email: users.email }).from(users).limit(1);
    return NextResponse.json({ ok: true, sample: rows });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
