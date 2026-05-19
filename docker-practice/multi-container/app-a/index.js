const http = require("http");

const server = http.createServer((req, res) => {
  http
    .get("http://app-b:3000", (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("App A received: " + data);
      });
    })
    .on("error", (err) => {
      res.writeHead(500);
      res.end("Error: " + err.message);
    });
});

server.listen(3000, () => {
  console.log("App A is running on port 3000");
});
