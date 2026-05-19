CREATE TABLE IF NOT EXISTS todos (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  title      VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO todos (title) VALUES
  ('Docker を学ぶ'),
  ('Node.js API を実装する'),
  ('データベースを設計する');

  INSERT INTO todos (title) VALUES
  ('Docker を学ぶ'),
  ('Node.js API を実装する'),
  ('データベースを設計する');