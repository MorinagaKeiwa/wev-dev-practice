type UserProfile = {
  name: string;
  age: number;
  bio?: string;
  twitter?: string;
};

const profiles: UserProfile = [
  { name: "alice", age: 30, bio: "エンジニアです", twitter: "@Alice" },
  { name: "bob", age: 28, bio: "デザイナーです" },
  { name: "carol", age: 28 },
];

profiles.forEach((p) => {
  console.log(`---${p.name}(${p.age}歳)---`);
  if (p.bio !== undefined) {
    console.log(`自己紹介:${p.bio}`);
  }
  if (p.twitter !== undefined) {
    console.log(`twitter:${p.twitter}`);
  }
});
