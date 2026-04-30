const num1 = 20;
const num2 = 7;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(1 + 2 + 3);
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

let count = 0;
count++;
console.log(count);

count++;
console.log(count);

count--;
console.log(count);

let score = 0;
score += 10;
console.log(score);

score += 5;
console.log(score);

score -= 3;
console.log(score);

const first = "Hello";
const last = "world";

console.log(first + "," + last + "!");

const firstName = "Taro";
const lastName = "Yamada";

console.log(lastName + "," + firstName);

const fullName = `${lastName} ${firstName}`;
console.log(fullName);

const lang = "JavaScript";

console.log(lang.length);
console.log(lang.toUpperCase());
console.log(lang.toLowerCase());
console.log(typeof lang.length);

const email = "taro@example.com";

console.log(email.includes("@"));
console.log(email.includes("gmail"));

const text = "JavaScript";

console.log(text.slice(0, 4));
console.log(text.slice(4));

const msg = "こんにちは、Taroさん";

console.log(msg.replace("Taro", "Hanako"));

const input = "  Taro  ";

console.log(input.trim());
console.log(input.trim().length);

const isLoggedIn = true;
const isCompleted = false;
const isStudent = true;
const isDarkMode = false;
const isWorking = false;

console.log(!isLoggedIn);
console.log(!false);

console.log(isStudent);
console.log(isWorking);
console.log(typeof isStudent);

console.log(!isStudent);
console.log(!isWorking);
console.log(!false);

console.log(!!1);
console.log(!!0);
console.log(!!"hello");
console.log(!!"");
console.log(!!null);

let city;
console.log(city);
console.log(typeof city);

let currentUser = null;

console.log(currentUser);
console.log(typeof currentUser);

console.log(undefined === null);
console.log(undefined == null);

console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

const big = 9007199254740991n + 2n;
console.log(big);
console.log(typeof big);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
console.log(typeof id1);
console.log(id1.toString());

console.log("10" - 3);
console.log("6" * 2);

console.log("10" + 2);
console.log(true + 1);

const inputStr = "1980";

console.log(inputStr + 100);
console.log(typeof inputStr);

const inputNum = Number(inputStr);

console.log(inputNum + 100);
console.log(typeof inputNum);

console.log(Number("hello"));
console.log(parseInt("42px"));

const price = 1900;
const label = String(price) + "円";

console.log(label);
console.log(typeof label);
