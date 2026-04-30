const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

const number = [1, 2, 3];

console.log(number);

number.push(4);
console.log(number);

number.pop();
console.log(number);

const items = ["b", "c"];
console.log(items);

items.unshift("a");
console.log(items);

items.shift();
console.log(items);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const fruits1 = ["apple", "banana", "orange"];

for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}

const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(`${i}:${colors[i]}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

let n = 1;

while (n <= 5) {
  console.log(n);
  n++;
}

const fruits2 = ["apple", "banana", "orange"];

for (const fruit of fruits2) {
  console.log(fruit);
}

const scores1 = [40, 70, 90];
for (const scores2 of scores1) {
  console.log(`点数: ${scores2}点`);
}
