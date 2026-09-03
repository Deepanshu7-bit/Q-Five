
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, services, budget, timeline, message, botcheck } = body;

    // Anti-spam botcheck trap
    if (botcheck) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "Please provide your name and a valid email address." },
        { status: 400 }
      );
    }

    // In a production server, here we would integrate Resend/SendGrid/GoHighLevel webhook
    console.log("Inbound project inquiry received:", {
      name,
      email,
      services,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. We will review your project and reply within 24 hours.",
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please email hello@qfive.in directly." },
      { status: 500 }
    );
  }
}
