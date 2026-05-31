import { NextRequest, NextResponse } from "next/server";

const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "1308440096";

// Multiple endpoints for reliability — the API route runs server-side on Vercel,
// so standard api.telegram.org works. Mirror endpoints serve as fallbacks.
const TELEGRAM_ENDPOINTS = [
  "https://api.telegram.org",
  "https://api.telegram-mirror.org",
];

async function sendTelegramMessage(
  token: string,
  payload: Record<string, unknown>
): Promise<Response> {
  let lastError: unknown;

  for (const endpoint of TELEGRAM_ENDPOINTS) {
    try {
      const res = await fetch(`${endpoint}/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) return res;
      // Non-2xx from this endpoint — try next
      lastError = await res.text();
    } catch (err) {
      lastError = err;
    }
  }

  throw new Error(`All Telegram endpoints failed: ${String(lastError)}`);
}

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Bot token not configured" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, goal, reason, format, timing } = body as {
    name?: string;
    phone?: string;
    goal?: string;
    reason?: string;
    format?: string;
    timing?: string;
  };

  const date = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

  const text = [
    `🌊 *Новая заявка — Океан ощущений*`,
    ``,
    `👤 *Имя:* ${name || "—"}`,
    `📲 *Контакт:* ${phone || "—"}`,
    ``,
    `🎯 *Цель визита:* ${goal || reason || "Не указана"}`,
    `📋 *Формат:* ${format || "С сайта"}`,
    `⏰ *Время:* ${timing || "Как можно скорее"}`,
    ``,
    `🗓 _${date}_`,
  ].join("\n");

  try {
    const res = await sendTelegramMessage(token, {
      chat_id: CHAT_ID,
      text,
      parse_mode: "Markdown",
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
