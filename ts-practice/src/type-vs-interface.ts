type UserRole = "admin" | "editor" | "viewer";
type PublishStatus = "draft" | "published" | "archived";

interface Author {
  id: number;
  name: string;
  role: UserRole;
}

interface Article {
  id: number;
  title: string;
  status: PublishStatus;
  author: Author;
}

const article: Article = {
  id: 1,
  title: "TypeScriptガイド",
  status: "published",
  author: {
    id: 10,
    name: "田中一郎",
    role: "editor",
  },
};

console.log(`記事：${article.title}`);
console.log(`ステータス：${article.status}`);
console.log(`著者：${article.author.name}（${article.author.role}）`);
