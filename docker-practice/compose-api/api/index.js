// const http = require("http");
// const mysql = require("mysql2");

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: "root",
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// const server = http.createServer((req, res) => {
//   db.query("SELECT NOW() AS NOW", (err, results) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: err.message }));
//       return;
//     }
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ time: results[0].now }));
//   });
// });

// server.listen(3000, () => {
//   console.log("API server running on port 3000");
// });

const http = require("http");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const server = http.createServer((req, res) => {
  db.query("SELECT NOW() AS now", (err, results) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ time: results[0].now }));
  });
});

server.listen(3000, () => {
  console.log("API server running on port 3000");
});
