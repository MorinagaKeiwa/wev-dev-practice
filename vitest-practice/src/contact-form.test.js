import { describe, it, expect, vi } from "vitest";
import { submitContactForm } from "./contact-form.js";

vi.mock("./mailer.js", () => ({
  sendEmail: vi.fn().mockResolvedValue({ sent: true }),
}));

import { sendEmail } from "./mailer.js";

describe("submitContactForm", () => {
  it("正常にフォームが送信される", async () => {
    const result = await submitContactForm(
      "山田太郎",
      "yamada@example.com",
      "お問い合わせ内容です",
    );

    expect(result).toEqual({ success: true });

    expect(sendEmail).toHaveBeenCalledWith({
      to: "support@example.com",
      subject: "お問い合わせ: 山田太郎",
      body: "お問い合わせ内容です",
    });
  });

  it("未入力の場合エラーを投げる", async () => {
    await expect(submitContactForm("", "", "")).rejects.toThrow(
      "すべての項目を入力してください",
    );

    // expect(sendEmail).not.toHaveBeenCalled();
  });
});
