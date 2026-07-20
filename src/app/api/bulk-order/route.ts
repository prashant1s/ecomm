import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, email, requirement } = body;

    // Validate required fields
    if (!name || !mobile) {
      return NextResponse.json(
        { error: "Name and Mobile are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Bulk Orders <onboarding@resend.dev>", // Replace with your verified Resend domain if you have one
      to: ["godigital74@gmail.com"], // 👈 PUT YOUR STORE EMAIL HERE
      subject: `New Bulk Order Enquiry from ${name}`,
      html: `
        <h2>New Bulk Order Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> +91 ${mobile}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Order Requirement:</strong></p>
        <p>${requirement || "Not provided"}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Bulk Order API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
