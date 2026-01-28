import { isValidEmail } from "@/lib/utils";
import { NextResponse } from "next/server";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  message: string;
}

function validateFormData(data: ContactFormData): {
  isValid: boolean;
  error?: string;
} {
  if (!data.firstName?.trim() || data.firstName.trim().length < 2) {
    return { isValid: false, error: "Valid first name is required" };
  }

  if (!data.lastName?.trim() || data.lastName.trim().length < 2) {
    return { isValid: false, error: "Valid last name is required" };
  }

  if (!data.email?.trim() || !isValidEmail(data.email)) {
    return { isValid: false, error: "Valid email address is required" };
  }

  if (!data.phoneNumber?.trim()) {
    return { isValid: false, error: "Phone number is required" };
  }

  if (!data.businessName?.trim()) {
    return { isValid: false, error: "Business name is required" };
  }

  if (!data.message?.trim() || data.message.trim().length < 10) {
    return {
      isValid: false,
      error: "Message is required (minimum 10 characters)",
    };
  }

  return { isValid: true };
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate form data
    const validation = validateFormData(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 },
      );
    }

    // Prepare email content
    const emailContent = `
New Contact Support Request

From: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phoneNumber}
Business: ${data.businessName}

Message:
${data.message}

---
Submitted at: ${new Date().toISOString()}
    `.trim();

    // Send email using Resend, SendGrid, or other email service
    // For now, we'll use a simple SMTP approach or third-party service

    // Option 1: Using Resend (if configured)
    const emailApiKey = process.env.EMAIL_API_KEY;

    if (emailApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${emailApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Mentera Contact Form <noreply@mentera.ai>",
          to: ["support@mentera.ai"],
          reply_to: data.email,
          subject: `Contact Support Request from ${data.firstName} ${data.lastName} - ${data.businessName}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4d28df;">New Contact Support Request</h2>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>From:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Phone:</strong> ${data.phoneNumber}</p>
                <p><strong>Business:</strong> ${data.businessName}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #374151;">Message:</h3>
                <p style="white-space: pre-wrap; color: #4b5563;">${data.message}</p>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
              <p style="color: #9ca3af; font-size: 12px;">
                Submitted at: ${new Date().toLocaleString()}
              </p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { success: false, error: "Failed to send email. Please try again." },
          { status: 500 },
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    }

    // Fallback: Log the submission and return success
    // In production, you should configure an email service
    console.log("Contact form submission received:");
    // console.log(emailContent);
    // console.log("---");
    // console.log(
    //   "Note: Configure RESEND_API_KEY environment variable to enable email sending.",
    // );

    // For development/demo purposes, we'll return success
    // In production without email configured, you might want to store in database instead
    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will contact you shortly!",
    });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 },
    );
  }
}
