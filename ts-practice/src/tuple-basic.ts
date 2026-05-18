type point = [x: number, y: number];
type point3D = [x: number, y: number, z: number];

const p2d: point = [3, 7];
const p3d: point3D = [1, 2, 5];

const [x2, y2] = p2d;
const [x3, y3, z3] = p3d;

console.log([x2, y2]);
console.log([x3, y3, z3]);

type UserEntry = [name: string, age: number, isActive: boolean];

const users: UserEntry[] = [
  ["Alice", 30, true],
  ["Bob", 25, false],
  ["Carol", 28, true],
];

users.forEach(([name, age, isActive]) => {
  const status = isActive ? "有効" : "無効";
  console.log(`${name}（${age}歳）: ${status}`);
});
