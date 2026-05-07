import http from "node:http";

let products = [
  { id: 1, name: "MacBook Pro", category: "laptop", price: 1500, stock: 10 },
  { id: 2, name: "iPad", category: "tablet", price: 800, stock: 25 },
  { id: 3, name: "MacBook Air", category: "laptop", price: 1200, stock: 15 },
  { id: 4, name: "iPhone", category: "phone", price: 1000, stock: 0 },
];

const server = http.createServer((req, res) => {
  const { method } = req;
  const urlObj = new URL(req.url, "http://localhost:3000");
  const path = urlObj.pathname;
  const query = urlObj.searchParams;

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  try {
    if (method === "GET" && path === "/products") {
      let result = products;

      if (query.has("category")) {
        const category = query.get("category");
        result = result.filter((p) => p.category === category);
      }

      if (query.has("maxPrice")) {
        const maxPrice = parseFloat(query.get("maxPrice"));
        result = result.filter((p) => p.price <= maxPrice);
      }

      if (query.get("inStock") === "true") {
        result = result.filter((p) => p.stock > 0);
      }

      res.writeHead(200);
      res.end(JSON.stringify(result, null, 2));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(3000, () => {
  console.log("Search API 起動: http://localhost:3000");
});
