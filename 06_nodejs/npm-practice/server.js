import http from "node:http";
import dayjs from "dayjs";

const server = http.createServer((req, res) => {
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  console.log(`[${now}]${req.method}${req.url}`);

  res.writeHead(200, { "content-Type": "text/plain;charset=utf-8" });
  res.end(`現在時刻:${now}\nHello from npm scripts!`);
});

server.listen(3000, () => {
  console.log("サーバーが起動しました: http://localhost:3000");
});
