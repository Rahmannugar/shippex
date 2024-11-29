import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const cookies = request.cookies;

    const sessionCookie = cookies.get("sid");
    const systemUserCookie = cookies.get("system_user");
    const userIdCookie = cookies.get("user_id");
    const fullNameCookie = cookies.get("full_name");

    if (
      !sessionCookie ||
      !systemUserCookie ||
      !userIdCookie ||
      !fullNameCookie
    ) {
      return NextResponse.json({ isAuthenticated: false }, { status: 200 });
    }

    return NextResponse.json({ isAuthenticated: true }, { status: 200 });
  } catch (error) {
    console.error("Error checking auth status:", error);
    return NextResponse.json(
      { error: "Authentication check failed" },
      { status: 500 }
    );
  }
}
