function reverse<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const nums = [1, 2, 3, 4, 5];
console.log("reverse:", reverse(nums));
console.log("chunk(2):", chunk(nums, 2));

const tags = ["ts", "js", "ts", "react", "js", "vue"];
console.log("unique:", unique(tags));
console.log("reverse:", reverse(tags));
console.log("chunk(3):", chunk(tags, 3));
