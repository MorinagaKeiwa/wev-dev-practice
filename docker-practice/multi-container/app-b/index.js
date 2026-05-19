const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from app B!\n");
});

server.listen(3000, () => {
  console.log("App B is running on port 3000");
});
