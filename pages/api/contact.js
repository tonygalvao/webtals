import { Resend } from "resend";

const SECRETS_API_URL =
  "https://webtals-site-webtals-secret-manager.xzeyg1.easypanel.host/api/secrets";

async function fetchSecrets() {
  const response = await fetch(SECRETS_API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch secrets: ${response.status}`);
  }
  const data = await response.json();
  if (!data.resend_key || !data.resend_to) {
    throw new Error("Secrets response is missing required fields.");
  }
  return { resendKey: data.resend_key, resendTo: data.resend_to };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes." });
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "E-mail inválido." });
  }

  let resendKey, resendTo;
  try {
    ({ resendKey, resendTo } = await fetchSecrets());
  } catch (error) {
    console.error("Secrets fetch error:", error);
    return res.status(500).json({ error: "Erro ao obter configurações. Tente novamente." });
  }

  const resend = new Resend(resendKey);

  try {
    await resend.emails.send({
      from: "Webtals.com.br <contato@webtals.com.br>",
      to: resendTo,
      replyTo: email,
      subject: `Nova mensagem de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Erro ao enviar mensagem. Tente novamente." });
  }
}
