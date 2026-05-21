import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing API Key",
        },
        {
          status: 500,
        }
      );
    }

    const body = await req.json();

    const { name, email, project, message } = body;

    await resend.emails.send({
      from: "FORJA <onboarding@resend.dev>",

      to: "TUEMAIL@gmail.com",

      subject: `Nuevo Proyecto — ${project}`,

      html: `
        <div style="font-family:Arial;padding:40px;background:#000;color:#fff">
          <h1 style="color:#FF4500;">
            Nuevo Lead FORJA & Diseño
          </h1>

          <p><strong>Nombre:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Proyecto:</strong> ${project}</p>

          <div style="margin-top:20px">
            <strong>Mensaje:</strong>

            <p>${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}