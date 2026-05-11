const scores: number[] = [72, 88, 56, 95, 51];

const boosted = scores.map((n) => n + 10);
console.log("加点後", scores);

const passed = scores.filter((n) => n >= 80);
console.log("合格スコア", passed);

scores.forEach((n, index) => {
  console.log(`${index + 1}番:${n}点`);
});
