// import http from "node:http";

// let todos = [
//     {id:1,title:"node.jsを学ぶ",done:false},
//     {id:2,title:"APIを構築する",done:false}
// ];

// const server = http.createServer((req,res)=>{
//     const {method,url}=req;

//     res.setHeader("Content-Type","application/json;charset=utf-8");

//     try{
//         if(method==="GET" && url ==="/todos"){
//             res.writeHead(200);
//             res.end(JSON.stringify(todos,null,2));
//         }else if(method === "GET" && /^\/todos\/\d+$/.test(url)){
//             const id = parseInt(url.split("/"[2]));
//             const todo = todos.find(t => t.id === id);
//         }
//     }
// })

import http from "node:http";

let todos = [
  { id: 1, title: "Node.js を学ぶ", done: false },
  { id: 2, title: "API を構築する", done: false },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // あらかじめ Content-Type を指定しておく
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  try {
    // GET /todos - 全件取得
    if (method === "GET" && url === "/todos") {
      res.writeHead(200);
      res.end(JSON.stringify(todos, null, 2));
    }
    // GET /todos/:id - 個別取得
    else if (method === "GET" && /^\/todos\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        res.writeHead(200);
        res.end(JSON.stringify(todo, null, 2));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Todo not found" }));
      }
    }
    // POST /todos - 新規作成
    else if (method === "POST" && url === "/todos") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        const newTodo = {
          id: Math.max(...todos.map((t) => t.id), 0) + 1,
          title: data.title,
          done: false,
        };
        todos.push(newTodo);
        res.writeHead(201);
        res.end(JSON.stringify(newTodo));
      });
    }
    // PUT /todos/:id - 更新
    else if (method === "PUT" && /^\/todos\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const todo = todos.find((t) => t.id === id);
      if (!todo) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Todo not found" }));
        return;
      }
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        Object.assign(todo, data);
        res.writeHead(200);
        res.end(JSON.stringify(todo));
      });
    }
    // DELETE /todos/:id - 削除
    else if (method === "DELETE" && /^\/todos\/\d+$/.test(url)) {
      const id = parseInt(url.split("/")[2]);
      const index = todos.findIndex((t) => t.id === id);
      if (index === -1) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Todo not found" }));
        return;
      }
      todos.splice(index, 1);
      res.writeHead(204);
      res.end();
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  } catch (err) {
    res.writeHead(500);
    res.end(
      JSON.stringify({ error: "Internal Server Error", message: err.message }),
    );
  }
});

server.listen(3000, () => {
  console.log("サーバー起動: http://localhost:3000");
});
