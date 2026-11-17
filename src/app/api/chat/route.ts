import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "NICKSON AI",
    version: "1.0.0",
    status: "backend_ready",
    capabilities: [
      "conversation",
      "education",
      "business",
      "research",
      "personal_management",
      "automation"
    ]
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      assistant: "NICKSON AI",
      status: "awaiting_ai_connection",
      message: "Your message has reached the NICKSON AI backend.",
      received: message
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 400 }
    );
  }
}
