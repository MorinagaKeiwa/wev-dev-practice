function greet() {
  console.log("Hello!");
}

greet();
greet();

function greetName(name) {
  console.log(`こんにちは${name}さん`);
}
greetName("Hanako");
greetName("Tarou");

function add(a, b) {
  console.log(a + b);
}

add(3, 5);
add(20, 400);

function add(a, b) {
  return a + b;
}

const result1 = add(3, 5);
const result2 = add(10, 20);

console.log(result1);
console.log(result2);
console.log(add(1, 2) + add(3, 4));

function noReturn(name) {
  console.log(`こんにちは${name}さん`);
}

const value = noReturn("Taro");
console.log(value);

const multiply = (a, b) => {
  return a * b;
};

const square = (n) => n * n;

const getHello = () => "hello!";

console.log(multiply(3, 4));
console.log(square(5));
console.log(getHello());

function greetUser(name) {
  return `こんにちは${name}さん`;
}

const greetUser2 = (name) => `こんにちは${name}さん`;

console.log(greetUser("taro"));
console.log(greetUser2("taro"));

const globalVar = "グローバル";

function myFunc() {
  console.log(globalVar);
}

myFunc();
console.log(globalVar);

const globalMessage = "グローバル変数";

function showScope() {
  const localMessage = "ローカル変数";
  console.log(globalMessage);
  console.log(localMessage);
}

showScope();
console.log(globalMessage);
// console.log(localMessage);

const score = 75;

if (score >= 70) {
  const message = "合格";
  console.log(message);
}

// console.log(message);

function outer() {
  const count = 0;
}

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();

counter();
counter();
counter();

const counterA = makeCounter();
const counterB = makeCounter();

counterA();
counterA();
counterB();
counterA();
counter();
counter();
