"use server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        console.log(name, email, message);
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Missing fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "artiomkronik@gmail.com",
                pass: "Artiom100",
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: "arttemkron@gmail.com",
            subject: `פנייה חדשה מהאתר: ${name}`,
            text: `
        שם: ${name}
        אימייל: ${email}
        הודעה: ${message}
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("Email error:", err.message);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}
