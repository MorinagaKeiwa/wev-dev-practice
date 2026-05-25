export function getDiscountRate(memberType) {
  if (memberType === "gold") {
    return 0.3;
  } else if (memberType === "silver") {
    return 0.15;
  }
  return 0;
}
export function getAgeMessage(age) {
  if (age < 0) {
    return "エラー：年齢が無効です";
  } else if (age < 18) {
    return "ジュニア会員として登録できます";
  } else if (age >= 65) {
    return "シニア会員として登録できます";
  }
  return "一般会員として登録できます";
}
