import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // MySQL のパスワード（設定していない場合は空文字）
  database: "node_db",
  connectionLimit: 10, // プールに保持する最大接続数
});

export default pool;
