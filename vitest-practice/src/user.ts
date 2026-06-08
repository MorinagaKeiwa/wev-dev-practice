export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "member";
}

export interface CreateUserInput {
  name: string;
  email: string;
  role?: "admin" | "member";
}

let nextId = 1;

export function createUser(input: CreateUserInput): User {
  if (!input.name.trim()) {
    throw new Error("名前は必須です");
  }
  if (!input.email.includes("@")) {
    throw new Error("メールアドレスの形式が正しくありません");
  }

  return {
    id: nextId++,
    name: input.name,
    email: input.email,
    role: input.role ?? "member",
  };
}

export function isAdmin(user: User): boolean {
  return user.role === "admin";
}

export function formatUserName(user: User): string {
  return `[${user.role}] ${user.name}`;
}
