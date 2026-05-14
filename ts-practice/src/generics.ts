function getFirst<T>(arr: T[]): T {
  return arr[0];
}

function getLast<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

function identify<T>(value: T): T {
  return value;
}

console.log(getFirst([10, 20, 30]));
console.log(getFirst(["apple", "banana"]));
console.log(getLast([1, 2, 3, 4, 5, 6]));
console.log(getLast(["apple", "banana"]));

console.log(identify<string>("typescript"));
console.log(identify<number>(2222));
