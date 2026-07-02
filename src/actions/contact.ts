"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: { 
  fullName: string; 
  email: string; 
  phone: string; 
  message: string 
}) {
  try {
    const { data, error } = await resend.emails.send({
      // The 'from' address must be a domain you verified in Resend, 
      // or use their testing address: 'onboarding@resend.dev'
      from: "Jiya JR Contact Form <onboarding@resend.dev>", 
      to: ["support@jiyajr.com"], // Your actual email where you want to receive messages
      replyTo: formData.email, // Allows you to hit "Reply" in your email client directly to the customer
      subject: `New Message from ${formData.fullName}`,
      text: `
        New Contact Request:
        
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        Message:
        ${formData.message}
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Internal server error" };
  }
}
