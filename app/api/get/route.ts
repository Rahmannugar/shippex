import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const shipment_url = process.env.SHIPMENT_URL!;

  try {
    // Construct the filters object like in your Postman example

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

    console.log("Formatted Cookies: ", cookiesString);
    // Send the request as a POST request with the body data
    const response = await axios.post(
      shipment_url,
      { doctype, filters },
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookiesString, // Add the cookies if necessary
          Origin: "http://localhost:3000",
        },
        withCredentials: true, // Ensure credentials are sent along with the request
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
    return NextResponse.json(
      { error: error.response?.data || "Tracking search failed" },
      { status: error.response?.status || 500 }
    );
  }
}
