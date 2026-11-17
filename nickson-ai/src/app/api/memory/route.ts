import { NextResponse } from "next/server";
import {
  saveMemory,
  getMemories,
  searchMemories,
  deleteMemory,
} from "@/lib/memory";

export const runtime = "nodejs";

function authorized(request: Request) {
  const token = process.env.NICKSON_MEMORY_TOKEN;

  return Boolean(
    token &&
    request.headers.get("authorization") === `Bearer ${token}`
  );
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const query = new URL(request.url).searchParams.get("q");

  return NextResponse.json({
    memories: query ? searchMemories(query) : getMemories(),
  });
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    if (
      typeof body.content !== "string" ||
      !body.content.trim() ||
      body.content.length > 5000
    ) {
      return NextResponse.json(
        { error: "Memory must contain 1–5000 characters." },
        { status: 400 }
      );
    }

    const memory = saveMemory(
      body.content.trim(),
      typeof body.category === "string"
        ? body.category.slice(0, 50)
        : "general"
    );

    return NextResponse.json({ memory }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    if (typeof body.id !== "string") {
      return NextResponse.json(
        { error: "A memory ID is required." },
        { status: 400 }
      );
    }

    const deleted = deleteMemory(body.id);

    return NextResponse.json({ deleted });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
