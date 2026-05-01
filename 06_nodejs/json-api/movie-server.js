import http from "node:http";

const movies = [
  { id: 1, title: "The Matrix", year: 1999, rating: 8.7 },
  { id: 2, title: "Inception", year: 2010, rating: 8.8 },
  { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0 },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // GET /api/movies - 全映画一覧
  if (method === "GET" && url === "/api/movies") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(movies, null, 2));
  }
  // GET /api/movies/:id - 個別映画
  else if (method === "GET" && /^\/api\/movies\/\d+$/.test(url)) {
    const id = parseInt(url.split("/")[3]);
    const movie = movies.find((m) => m.id === id);

    if (movie) {
      // 200: 見つかった
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(movie, null, 2));
    } else {
      // 404: 見つからない
      res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "Movie not found", id }));
    }
  }
  // POST /api/movies - 新規作成
  else if (method === "POST" && url === "/api/movies") {
    // 201: 作成成功
    res.writeHead(201, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ message: "映画を追加しました" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
