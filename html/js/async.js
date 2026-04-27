console.log("1最初に実行される");

setTimeout(() => {
  console.log("3 ２秒後に実行される（非同期）");
}, 2000);

console.log("2 すぐ実行される");

function fetchUser(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ name: "Taro", age: 25 });
      } else {
        reject("ユーザーが見つかりませんでした");
      }
    }, 1000);
  });
}

fetchUser(true)
  .then((user) => {
    console.log("取得成功", user.name);
  })
  .catch((error) => {
    console.log("取得失敗", error);
  });

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeout(() => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
    }, 1000);
  }, 1000);
}, 1000);

wait(1000)
  .then(() => {
    console.log("A");
    return wait(1000);
  })

  .then(() => {
    console.log("B");
    return wait(1000);
  })

  .then(() => {
    console.log("C");
    return wait(1000);
  });

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait(1000)
  .then(() => {
    console.log("1 秒後");
    return wait(1000);
  })
  .then(() => {
    console.log("2 秒後");
  });

async function run() {
  await wait(1000);
  console.log("1 秒後");

  await wait(1000);
  console.log("2 秒後");
}

run();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cooking() {
  console.log("コメを洗う");
  await wait(1000);

  console.log("コメを炊く");
  await wait(500);

  console.log("コメが炊き上がる");
}

cooking();
console.log("cookingを呼んだ直後に表示される");

function fetchProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = { 1: "りんご", 2: "バナナ" };
      if (products[id]) {
        resolve(products[id]);
      } else {
        reject(`ID ${id} の商品は存在しません`);
      }
    }, 800);
  });
}

async function showProduct(id) {
  try {
    const name = await fetchProduct(id);
    console.log(`商品: ${name}`);
  } catch (error) {
    console.log(`エラー: ${error}`);
  }
}

showProduct(1);
showProduct(99);

async function multiStep() {
  console.log("--- ステップ処理開始 ---");

  await wait(500);
  console.log("ステップ 1 完了");

  await wait(500);
  console.log("ステップ 2 完了");

  await wait(500);
  console.log("ステップ 3 完了");

  console.log("--- 全ステップ終了 ---");
}

multiStep();
