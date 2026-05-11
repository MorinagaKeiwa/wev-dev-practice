const fruits: string[] = ["りんご", "ブドウ", "みかん"];
const prices: number[] = [300, 500, 400];
const inStock: boolean[] = [true, true, false];

console.log("果物", fruits);
console.log("価格", prices);
console.log("在庫", inStock);

fruits.push("もも");
prices.push(250);

console.log("追加後", fruits);
console.log("追加後", prices);

const ids: (string | number)[] = ["u001", 1002, "u003", 2040];
console.log("IDs", ids);

ids.push("u1002");
ids.push(1003);
console.log("追加後", ids);

const nicknames: (string | null)[] = ["Alice", null, "Bob", null, "Carol"];
console.log("ニックネーム", nicknames);

const activeNicknames = nicknames.filter((n) => n !== null);
console.log("有効なニックネーム", activeNicknames);
