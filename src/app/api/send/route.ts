import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log("RESEND_API_KEY is", process.env.RESEND_API_KEY ? "loaded ✅" : "missing ❌");

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // 👈 must be a verified sender
      to,
      subject,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
