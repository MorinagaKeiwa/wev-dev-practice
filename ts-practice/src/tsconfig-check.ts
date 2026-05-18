// function add(a, b) { return a + b; }

// function getLength(value: string | null) {
//   return value.length;
// }

function add(a: number, b: number): number {
  return a + b;
}

function getLength(value: string | null): number {
  if (value === null) return 0;
  return value.length;
}

console.log(add(3, 7));
console.log(getLength("TypeScript"));
console.log(getLength(null));
