import { sendEmail } from "./mailer.js";

export async function submitContactForm(name, email, message) {
  if (!name || !email || !message) {
    throw new Error("すべての項目を入力してください");
  }

  await sendEmail({
    to: "support@example.com",
    subject: `お問い合わせ: ${name}`,
    body: message,
  });

  return { success: true };
}
