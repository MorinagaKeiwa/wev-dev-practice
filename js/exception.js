try {
  console.log("処理を開始します");
  console.log(null.name);
  console.log("この行は表示されない");
} catch (error) {
  console.log("エラーを捕まえました");
  console.log("種類:", error.name);
  console.log("内容:", error.message);
}

console.log("プログラムは続行されます");

function divide(a, b) {
  if (b === 0) {
    throw new Error("0 で割ることはできません");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("結果", result);
} catch (error) {
  console.log("エラー", error.massage);
}

function validateAge(age) {
  if (typeof age !== "number") {
    throw new Error("年齢は数値で入力してください");
  }
  if (age < 0 || age > 150) {
    throw new Error("年齢は 0〜150 の範囲で入力してください");
  }
  return `${age} 歳は有効な年齢です`;
}

try {
  console.log(validateAge(25));
} catch (error) {
  console.log("エラー:", error.massage);
}

try {
  console.log(validateAge("twenty"));
} catch (error) {
  console.log("エラー", error.massage);
}

try {
  console.log(validateAge(200));
} catch (error) {
  console.log("エラー", error.massage);
}

function fetchData(url) {
  console.log(`[開始]${url}へ接続します`);

  try {
    if (!url.startsWith("https")) {
      throw new Error("https で始まる URL を指定してください");
    }
    console.log("[成功] データを取得しました");
  } catch (error) {
    console.log("[エラー]", error.message);
  } finally {
    console.log("[終了] 接続を閉じます"); // ← 必ず実行される
  }
}

fetchData("https://example.com");

fetchData("http://example.com");

function processOrder(item) {
  console.log(`--- ${item} の注文処理を開始 ---`);

  try {
    if (item === "") {
      throw new Error("商品名が空です");
    }
    console.log(`${item} の注文を受け付けました`);
  } catch (error) {
    console.log("注文エラー:", error.message);
  } finally {
    console.log("注文処理ログを記録しました\n");
  }
}

processOrder("りんご");
processOrder("");
processOrder("バナナ");

function validateUsername(name) {
  if (!name || name.trim() === "") {
    throw new Error("ユーザー名を入力してください");
  }
  if (name.length > 20) {
    throw new Error("ユーザー名は 20 文字以内にしてください");
  }
  return name.trim();
}

function createUser(name, age) {
  const validName = validateUsername(name);
  return { name: validName, age: age };
}

function register(name, age) {
  try {
    const user = createUser(name, age);
    console.log("登録成功:", user);
  } catch (error) {
    console.log("登録失敗:", error.message);
  }
}

register("Taro", 25);
register("", 25);
register("A".repeat(25), 25);
