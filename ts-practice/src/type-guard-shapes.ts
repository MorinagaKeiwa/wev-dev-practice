// type Circle = {
//   type: "circle";
//   radius: number;
// };

// type Triangle = {
//   type: "triangle";
//   base: number;
//   height: number;
// };

// type Rectangle = {
//   type: "rectangle";
//   width: number;
//   height: number;
// };

// type Shape = Circle | Triangle | Rectangle;

// function calcArea(value: Shape): number {
//   if (value.type === "circle") {
//     return Math.PI * value.radius ** 2;
//   } else if (value.type === "triangle") {
//     return (value.base * value.height) / 2;
//   } else {
//     value.width * value.height;
//   }
// }

// function describeShape(value: Shape): string {
//   const area = calcArea(value).toFixed(2);
//   if (value.type === "circle") {
//     return `円（半径 ${value.radius}）: 面積 ${area}`;
//   } else if (value.type === "rectangle") {
//     return `長方形（${value.width} × ${value.height}）: 面積 ${area}`;
//   } else {
//     return `三角形（底辺 ${value.base}、高さ ${value.height}）: 面積 ${area}`;
//   }
// }

// const shapes: Shape[] = [
//   { type: "circle", radius: 5 },
//   { type: "rectangle", width: 4, height: 6 },
//   { type: "triangle", base: 8, height: 3 },
// ];

// shapes.forEach((s) => console.log(describeShape(s)));

type Circle = {
  type: "circle";
  radius: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};

type Triangle = {
  type: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Rectangle | Triangle;

function calcArea(shape: Shape): number {
  if (shape.type === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.type === "rectangle") {
    return shape.width * shape.height;
  } else {
    return (shape.base * shape.height) / 2;
  }
}

function describeShape(shape: Shape): string {
  const area = calcArea(shape).toFixed(2);
  if (shape.type === "circle") {
    return `円（半径 ${shape.radius}）: 面積 ${area}`;
  } else if (shape.type === "rectangle") {
    return `長方形（${shape.width} × ${shape.height}）: 面積 ${area}`;
  } else {
    return `三角形（底辺 ${shape.base}、高さ ${shape.height}）: 面積 ${area}`;
  }
}

const shapes: Shape[] = [
  { type: "circle", radius: 5 },
  { type: "rectangle", width: 4, height: 6 },
  { type: "triangle", base: 8, height: 3 },
];

shapes.forEach((s) => console.log(describeShape(s)));
