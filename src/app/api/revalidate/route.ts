import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  // Revalidate sitemap and blog pages
  revalidatePath("/sitemap.xml");
  revalidatePath("/blog");

  return NextResponse.json({ revalidated: true, timestamp: Date.now() });
}
