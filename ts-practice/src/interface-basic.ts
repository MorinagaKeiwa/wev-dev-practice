interface book {
  readonly id: number;
  title: string;
  author: string;
  price: number;
  genre?: string;
}

const books: book = [
  {
    id: 1,
    title: "TypeScript入門",
    author: "山田太郎",
    price: 2400,
    genre: "プログラミング",
  },
  { id: 2, title: "デザインパターン", author: "鈴木花子", price: 3200 },
  {
    id: 3,
    title: "アルゴリズム図鑑",
    author: "佐藤次郎",
    price: 1980,
    genre: "アルゴリズム",
  },
];

books.forEach((b) => {
  const genreLabel = b.genre !== undefined ? `[${b.genre}]` : "";
  console.log(
    `[${b.id}] ${b.title} / ${b.author} - ${b.price.toLocaleString()}円${genreLabel}`,
  );
});
