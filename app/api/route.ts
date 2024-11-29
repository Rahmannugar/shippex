import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import FormData from "form-data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { usr, pwd } = body;

    if (!usr || !pwd) {
      return NextResponse.json(
        { error: "usr and pwd are required." },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append("usr", usr);
    formData.append("pwd", pwd);

    const response = await axios.post(
      "https://shippex-demo.bc.brandimic.com/api/method/login",
      formData,
      {
        headers: formData.getHeaders(),
        withCredentials: true,
      }
    );

    const nextResponse = NextResponse.json(response.data, {
      status: response.status,
    });

    if (response.headers["set-cookie"]) {
      response.headers["set-cookie"].forEach((cookieString) => {
        // Parse cookie string more comprehensively
        const parts = cookieString.split(";").map((part) => part.trim());
        const [nameValue, ...attributes] = parts;
        const [name, encodedValue] = nameValue.split("=");

        // Decode the value twice to handle double encoding
        const value = decodeURIComponent(decodeURIComponent(encodedValue));

        // Check for HttpOnly
        const isHttpOnly = attributes.some(
          (attr) => attr.toLowerCase() === "httponly"
        );

        nextResponse.cookies.set({
          name: name.trim(),
          value: value.trim(),
          path: "/",
          sameSite: "strict",
          httpOnly: isHttpOnly,
          secure: process.env.NODE_ENV === "production",
        });
      });
    }

    return nextResponse;
  } catch (error: any) {
    console.error("Login Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data || "Authentication failed" },
      { status: error.response?.status || 500 }
    );
  }
}