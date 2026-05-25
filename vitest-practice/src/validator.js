export function greet(name) {
  return `こんにちは、${name}さん！`;
}

export function isAdult(age) {
  return age >= 18;
}

export function getScoreLabel(score) {
  if (score >= 80) return "excellent";
  if (score >= 60) return "good";
  return "needs_improvement";
}

export function getEvenNumbers(numbers) {
  return numbers.filter((n) => n % 2 === 0);
}

export function parsePositiveInt(value) {
  const num = parseInt(value, 10);
  if (isNaN(num) || num <= 0) {
    throw new Error(`"${value}" は正の整数ではありません`);
  }
  return num;
}
