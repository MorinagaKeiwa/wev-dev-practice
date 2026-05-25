export async function sendEmail({ to, subject, body }) {
  const response = await fetch("/api/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, subject, body }),
  });
  if (!response.ok) throw new Error("メール送信失敗");
  return { sent: true };
}
