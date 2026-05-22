export const runtime = 'edge';

import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "FORJA <onboarding@resend.dev>",
      to: "forjadiseno.26@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,

      html: `
        <div>
          <h2>Nuevo mensaje desde FORJA & DISEÑO</h2>

          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Mensaje:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return Response.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}