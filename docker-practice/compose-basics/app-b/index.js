const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from App B! \n");
});

server.listen(3000, () => {
  console.log("APP B is running on port 3000");
});
