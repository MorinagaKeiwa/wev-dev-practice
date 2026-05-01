import http from "node:http";

const server = http.createServer((req, res) => {
  const url = req.url;

  try {
    if (url === "/api/data") {
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ success: true, data: [1, 2, 3] }));
    } else if (url === "/api/error") {
      // 意図的にエラーを発生させる
      throw new Error("Something went wrong!");
    } else {
      res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
      res.end(
        JSON.stringify({
          success: false,
          error: "Not Found",
          path: url,
        }),
      );
    }
  } catch (err) {
    // エラーをキャッチして JSON で返す
    res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        success: false,
        error: "Internal Server Error",
        message: err.message,
      }),
    );
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
