function parseDate(
  dateStr: string,
): [year: number, month: number, day: number] {
  const [y, m, d] = dateStr.split("-").map(Number);
  return [y, m, d];
}

function findWord(text: string, word: string): [found: boolean, index: number] {
  const index = text.indexOf(word);
  return [index !== -1, index];
}

const [year, month, day] = parseDate("2024-03-15");
console.log(`${year}年${month}月${day}日`);

const [y2, m2, d2] = parseDate("1999-12-31");
console.log(`${y2}年${m2}月${d2}日`);

const sentence = "TypeScript は JavaScript に型を追加したものです";

const [found1, idx1] = findWord(sentence, "JavaScript");
if (found1) {
  console.log(`"JavaScript" は ${idx1} 文字目にあります`);
}

const [found2] = findWord(sentence, "Python");
console.log(`"Python" は存在する: ${found2}`);

type RGBA = [r: number, g: number, b: number, alpha?: number];

function formatColor(color: RGBA): string {
  const [r, g, b, a] = color;
  if (a !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

const red: RGBA = [255, 0, 0];
const semiBlue: RGBA = [0, 0, 255, 0.5];

console.log(formatColor(red));
console.log(formatColor(semiBlue));

type SubjectScores = [subject: string, ...scores: number[]];

function calcAverage(entry: SubjectScores): string {
  const [subject, ...scores] = entry;
  if (scores.length === 0) return `${subject}: データなし`;
  const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
  return `${subject}: 平均 ${avg.toFixed(1)}点（${scores.length}回）`;
}

const math: SubjectScores = ["数学", 85, 92, 78, 90];
const english: SubjectScores = ["英語", 70, 88];
const science: SubjectScores = ["理科"];

console.log(calcAverage(math));
console.log(calcAverage(english));
console.log(calcAverage(science));
