import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const shipment_url = process.env.SHIPMENT_URL!;

  try {
    const { doctype, filters } = await request.json();

    if (!doctype || !filters?.name) {
      return NextResponse.json(
        { error: "doctype and trackingId are required" },
        { status: 400 }
      );
    }
    const cookies = request.cookies.getAll();

    // Format cookies properly as a string for the 'Cookie' header
    const cookiesString = cookies
      .map((cookie) => `${cookie.name}=${cookie.value}`) // Format as "name=value"
      .join("; "); // Join all cookies with "; "

    // console.log("Formatted Cookies: ", cookiesString);
    // Send the request as a POST request with the body data
    const response = await axios.post(
      shipment_url,
      { doctype, filters },
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookiesString,
          Origin: "http://localhost:3000",
        },
        withCredentials: true,
      }
    );

    const nextResponse = NextResponse.json(response.data, {
      status: response.status,
    });

    return nextResponse;
  } catch (error: any) {
    console.error(
      "Error fetching shipment data:",
      error.response?.data || error.message
    );
    if (error.response) {
    }
    return NextResponse.json(
      { error: error.response?.data || "Error fetching shipment data:" },
      { status: error.response?.status || 500 }
    );
  }
}
