import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const message = body?.message ?? "";

  // Şimdilik demo cevap (API key ekleyince OpenAI'ye bağlayacağız)
  return NextResponse.json({
    ok: true,
    reply: `Demo cevap: "${message}"`,
  });
}
