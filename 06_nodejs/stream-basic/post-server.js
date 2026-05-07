// import http from "node:http";

// const server = http.createServer((req, res) => {
//   if (method === "POST" && url === "/api/echo") {
//     let body = "";

//     req.on("data", (chunk) => {
//       console.log(`チャンク受け取り${chunk.length}bytes`);
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       console.log("受け取り完了。body", body);
//       try {
//         const data = JSON.parse(body);
//         res.writeHead(200, { "Conten-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Invalid JSON" }));
//       } catch (err) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Invalid JSON" }));
//       }
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ error: "Not Found" }));
//   }
// });

// server.listen(3000, () => {
//   console.log("サーバー起動: http://localhost:3000");
// });

import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/echo") {
    let body = "";

    req.on("data", (chunk) => {
      console.log(`チャンク受け取り: ${chunk.length} bytes`);
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("受け取り完了。body:", body);
      try {
        const data = JSON.parse(body);
        res.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
        });
        res.end(JSON.stringify({ success: true, received: data }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
