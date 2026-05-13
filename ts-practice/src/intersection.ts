type User = {
  id: number;
  name: string;
  email: string;
};

type Profile = {
  age: number;
  bio: string;
  webSite?: string;
};

type UserWithProfile = User & Profile;

const users: UserWithProfile = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 30,
    bio: "エンジニアです",
    website: "https://alice.dev",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 25,
    bio: "デザイナーです",
  },
];

users.forEach((u) => {
  console.log(`[${u.id}] ${u.name} (${u.age}歳)`);
  console.log(`  ${u.bio}`);
  if (u.website !== undefined) {
    console.log(`  Web: ${u.website}`);
  }
});
