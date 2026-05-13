interface Account {
  id: number;
  email: string;
  createdAt: string;
}

interface UserAccount extends Account {
  name: string;
  age: number;
}

interface PremiumAccount extends UserAccount {
  plan: "gold" | "platinum";
  expiresAt: string;
}

const user: UserAccount = {
  id: 1,
  email: "user@example.com",
  createdAt: "2024-01-10",
  name: "田中太郎",
  age: 25,
};

const premium: PremiumAccount = {
  id: 2,
  email: "premium@example.com",
  createdAt: "2023-06-01",
  name: "鈴木二郎",
  age: 35,
  plan: "platinum",
  expiresAt: "2025-05-31",
};

console.log(`一般ユーザー：${user.name}（${user.email}）`);
console.log(
  `プレミアム：${premium.name} - プラン：${premium.plan}（有効期限：${premium.expiresAt}）`,
);
