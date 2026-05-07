import http from "node:http";

let books = [
  { id: 1, title: "Node.Js 入門", author: "太郎", year: 2020 },
  { id: 2, title: "WebApi 設計", author: "花子", year: 2021 },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  try {
    if (method === "GET" && url === "/books") {
      res.writeHead(200);
      res.end(JSON.stringify(books, null, 2));
    } else if (method === "GET" && /^\/books\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const books = books.find((b) => b.id === id);
      if (book) {
        res.writeHead(200);
        res.end(JSON.stringify(book, null, 2));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Book not found" }));
      }
    } else if (method === "POST" && url === "/books") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        const newBook = {
          id: Math.max(...books.map((b) => b.id), 0) + 1,
          title: data.title,
          author: data.author,
          year: data.year,
        };
        books.push(newBook);
        res.writeHead(201);
        res.end(JSON.stringify(newBook));
      });
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  } catch (err) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: err.massage }));
  }
});

server.listen(3000, () => {
  console.log("サーバー起動:http::/localhost3000");
});
