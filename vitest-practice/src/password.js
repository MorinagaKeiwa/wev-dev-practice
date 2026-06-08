const RULES = [
  { check: (p) => p.length >= 8, reason: "8文字以上であること" },
  { check: (p) => /[A-Z]/.test(p), reason: "大文字を含むこと" },
  { check: (p) => /[0-9]/.test(p), reason: "数字を含むこと" },
  { check: (p) => /[!@#$%^&*]/.test(p), reason: "記号を含むこと" },
];

export function isStrongPassword(password) {
  return RULES.every((rule) => rule.check(password));
}
