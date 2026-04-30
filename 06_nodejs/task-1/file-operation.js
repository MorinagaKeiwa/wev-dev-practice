import fs from "node:fs";

const content = "node.jsで作成したファイルです¥n日時:+ new Date()";

fs.writeFile("message.txt", content, "utf8", (err) => {
  if (err) {
    console.log("エラー:", err);
    return;
  }
  console.log("message.txtを作成しました");
  fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
      console.log("エラー:", err);
      return;
    }
    console.log("¥n---ファイルの内容---");
  });
});
