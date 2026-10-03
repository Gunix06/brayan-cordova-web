import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro:content";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const BIN_ID = import.meta.env.BIN_ID_A;
const API_KEY = `$2a$10$${import.meta.env.BIN_ID_KEY_B}.${import.meta.env.BIN_ID_KEY_A}`;
const url = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
const headers = {
  "X-Master-Key": API_KEY,
  "Content-Type": "application/json",
};

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().nonempty(),
      email: z.string().email(),
      message: z.string().nonempty(),
      "cf-turnstile-response": z.string().nonempty(),
    }),
    handler: async (input) => {
      const formData = new FormData();
      formData.append("secret", import.meta.env.TURNSTILE_SECRET_KEY);
      formData.append("response", input["cf-turnstile-response"]);

      const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
      const result = await fetch(url, { body: formData, method: "POST" });
      const outcome = await result.json();

      if (!outcome.success) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: `Fallo en Turnstile: ${outcome["error-codes"]?.join(", ") ?? "desconocido"}`,
        });
      }

      const { data, error } = await resend.emails.send({
        from: "Portafolio <onboarding@resend.dev>",
        to: ["brayansmithcordovatasayco@gmail.com"],
        replyTo: [input.email],
        subject: "Confirmación de recepción - Brayan Cordova (Frontend Developer)",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #fb2c36; padding: 20px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0;">Mensaje Recibido</h2>
            </div>
            <div style="padding: 30px;">
              <p style="font-size: 16px;">Hola <strong>${input.name} (${input.email})</strong>,</p>
              <p style="font-size: 16px; line-height: 1.5;">Gracias por ponerte en contacto conmigo. Este correo es para confirmar que he recibido tu mensaje correctamente a través de mi portafolio web.</p>
              <p style="font-size: 16px; line-height: 1.5;">Revisaré la información y te responderé a la brevedad posible.</p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #fb2c36; padding: 15px; margin: 25px 0;">
                <p style="margin: 0; font-size: 14px; color: #64748b;"><strong>Resumen de tu mensaje:</strong></p>
                <p style="margin: 10px 0 0 0; font-style: italic;">"${input.message}"</p>
              </div>
              
              <p style="font-size: 16px;">Atentamente,</p>
              <p style="font-size: 16px; margin-bottom: 0;"><strong>Brayan Cordova</strong></p>
              <a href="https://brayan-cordova.vercel.app/" style="color: #3b82f6; text-decoration: none;">brayan-cordova.vercel.app</a></p>
            </div>
          </div>
        `,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),

  getClicks: defineAction({
    handler: async () => {
      try {
        const res = await fetch(url, { headers });

        if (!res.ok) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: `${res.status}`,
          });
        }

        const data = await res.json();

        if (data && data.record && typeof data.record.clicks !== "undefined") {
          return { clicks: data.record.clicks };
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  }),

  incrementClicks: defineAction({
    handler: async () => {
      try {
        const getRes = await fetch(url, { headers });

        if (!getRes.ok) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: `${getRes.status}`,
          });
        }

        const getData = await getRes.json();
        const currentClicks = getData && getData.record && typeof getData.record.clicks === "number" ? getData.record.clicks : 0;
        const newClicks = currentClicks + 1;

        const putRes = await fetch(url, {
          method: "PUT",
          headers,
          body: JSON.stringify({ clicks: newClicks }),
        });
        if (!putRes.ok) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: `${putRes.status}`,
          });
        }
        return { clicks: newClicks };
      } catch (error) {
        console.error(error);
      }
    },
  }),
};
