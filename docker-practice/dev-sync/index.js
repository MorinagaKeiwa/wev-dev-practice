const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Version 2\n");
});

server.listen(3000, () => {
  console.log("Server started");
});
