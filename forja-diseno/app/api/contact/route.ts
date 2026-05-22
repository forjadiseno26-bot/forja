import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const {
      name,
      email,
      project,
      message,
    } = body;

    await resend.emails.send({
      from: "FORJA <onboarding@resend.dev>",

      to: "forjadiseno.26@gmail.com",

      subject: `Nuevo Proyecto — ${project}`,

      html: `
        <div style="background:#000;padding:40px;font-family:Arial;color:#fff;">
          
          <h1 style="color:#FF6600;margin-bottom:30px;">
            Nuevo Lead — FORJA & Diseño
          </h1>

          <p>
            <strong>Nombre:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Proyecto:</strong> ${project}
          </p>

          <div style="margin-top:30px;">
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