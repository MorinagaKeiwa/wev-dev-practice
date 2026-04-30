function greet(name, callback) {
  console.log(`こんにちは${name}さん`);
  callback();
}

greet("hanako", function () {
  console.log("関数を引数として渡しています");
});

greet("taro", () => {
  console.log("アロー関数も同じです");
});

const colors = ["red", "green", "blue", "yellow"];

colors.forEach((color) => {
  console.log(color);
});

const menu = ["パスタ", "ピザ", "サラダ"];

menu.forEach((item, index) => {
  console.log(`${index + 1}: ${item}`);
});

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((num) => num * 2);

console.log(numbers);
console.log(double);

const prices = [100, 200, 300, 400];

const pricesWithTax = prices.map((price) => Math.round(price * 1.1));

console.log("税抜き", prices);
console.log("税込み", pricesWithTax);

const books = [
  { title: "JavaScript入門", author: "山田花子" },
  { title: "CSSデザイン", author: "鈴木花子" },
  { title: "HTML基礎", author: "佐藤二郎" },
];

const titles = books.map((title) => title.title);
console.log(titles);

const students = [
  { name: "Taro", score: 85 },
  { name: "Hanako", score: 92 },
  { name: "Jiro", score: 60 },
  { name: "Misaki", score: 74 },
];

const passing = students.filter((student) => student.score >= 80);
console.log(passing);

const scores = [55, 72, 88, 43, 95, 61, 80];

const highScore = scores.filter((score) => score >= 70);
console.log("全スコア", scores);
console.log("70以上", highScore);

const products = [
  { name: "りんご", category: "fruit", price: 120 },
  { name: "にんじん", category: "vegetable", price: 80 },
  { name: "バナナ", category: "fruit", price: 90 },
  { name: "キャベツ", category: "vegetable", price: 150 },
];

const fruits = products.filter((product) => product.category === "fruit");
console.log(fruits);

const members = [
  { id: 101, name: "Taro", role: "admin" },
  { id: 102, name: "Hanako", role: "user" },
  { id: 103, name: "Jiro", role: "user" },
];

const found = members.find((m) => m.id === 102);
console.log(found);

const missing = members.find((m) => m.id === 999);
console.log(missing);

const products1 = [
  { name: "りんご", category: "fruit", price: 120 },
  { name: "にんじん", category: "vegetable", price: 80 },
  { name: "バナナ", category: "fruit", price: 90 },
  { name: "キャベツ", category: "vegetable", price: 150 },
];

const fruitPrices = products1
  .filter((p) => p.category === "fruit")
  .map((p) => ({ name: p.name, priceWithTax: Math.round(p.price * 1.1) }));
console.log(fruitPrices);

const employees = [
  { name: "Taro", department: "engineering", salary: 400000 },
  { name: "Hanako", department: "design", salary: 350000 },
  { name: "Jiro", department: "engineering", salary: 420000 },
  { name: "Misaki", department: "design", salary: 380000 },
];

const engineers = employees
  .filter((e) => e.department === "engineering")
  .map((e) => ({ name: e.name, salary: e.salary }));

console.log(engineers);
