import dayjs from "dayjs";

const now = dayjs();
console.log("現在の日時:", now.format("YYYY年MM月DD日 HH:mm:ss"));

const nextWeek = now.add(7, "day");
console.log("7日後:", nextWeek.format("YYYY年MM月DD日"));

const startDate = dayjs("2025-04-01");
const today = dayjs();
const diff = today.diff(startDate, "day");
console.log(`2025年から${startDate}日経過しています`);
