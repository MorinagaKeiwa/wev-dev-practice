// import http from "node:http";

// const server = http.createServer((req, res) => {
//   console.log(`${req.method}${req.url}`);

//   if (req.url === "/") {
//     req.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
//     res.end('<h1>ホームページ</h1><p><a href = "/about">概要ページ</a></p>');
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
//     res.end("<h1>このサイトについて</h1><p>Node.jsで構築されています</p>");
//   } else {
//     res.writeHead(404, { "Content-type": "text/html;charset=utf-8" });
//     res.end("<h1>404 Not Found</h1><p>ページが見つかりません</p>");
//   }
// });

// server.listen(3000, () => {
//   console.log("http://localhost:3000");
// });

// import http from "node:http";

// const server = http.createServer((req, res) => {
//   console.log(`${req.method} ${req.url}`);

//   if (req.url === "/") {
//     // ホームページ
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     res.end('<h1>ホームページ</h1><p><a href="/about">概要ページへ</a></p>');
//   } else if (req.url === "/about") {
//     // 概要ページ
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     res.end("<h1>このサイトについて</h1><p>Node.js で構築されています</p>");
//   } else {
//     // ページが見つからない
//     res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
//     res.end("<h1>404 Not Found</h1><p>ページが見つかりません</p>");
//   }
// });

// server.listen(3000, () => {
//   console.log("http://localhost:3000");
// });

import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/time") {
    const now = new Date().toLocaleString("ja-JP");

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>現在の時刻</h1><p>${now}</p><a href="/">ホームへ戻る</a>`);
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end('<h1>ホーム</h1><p><a href="/time">時刻を表示</a></p>');
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
