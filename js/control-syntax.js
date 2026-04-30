const score = 85;

if (score >= 90) {
  console.log("s");
} else if (score >= 80) {
  console.log("a");
} else if (score >= 70) {
  console.log("b");
} else if (score >= 60) {
  console.log("c");
} else {
  console.log("不合格");
}

const age = 25;
const hasLicense = true;

if ((age) => 18 && hasLicense) {
  console.log("運転できます");
} else {
  console.log("運転できません");
}

const day = 9;
switch (day) {
  case 1:
    dayName = "月曜日";
    break;
  case 2:
    dayName = "火曜日";
    break;
  case 3:
    dayName = "水曜日";
    break;
  case 4:
    dayName = "木曜日";
    break;
  case 5:
    dayName = "金曜日";
    break;
  default:
    dayName = "不明、または週末";
}
console.log(dayName);

const myAge = 19;
const ageStatus = myAge >= 18 ? "成人" : "未成年";

console.log(ageStatus);

const myScore = 45;

console.log(`点数${myScore}点:${myScore >= 60 ? "合格" : "不合格"}`);
