function double(value: string | number): string | number {
  if (typeof value === "string") {
    return value.repeat(2);
  } else {
    return value * 2;
  }
}

console.log(double("kontya"));
console.log(double(100));

function greet(name: string | null): string {
  if (typeof name === "string") {
    return `こんにちは${name}さん！`;
  } else {
    return `こんにちはゲストさん！`;
  }
}

console.log(greet("花子"));
console.log(greet(null));
