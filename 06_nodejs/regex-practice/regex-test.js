console.log("--- \\d(数字一文字）---");
console.log(/\d/.test(5));
console.log(/\d/.test("a"));

console.log("--- \\d+ ---");
console.log(/\d+/.test("34256"));
console.log(/\d+/.test("io"));

console.log("--- \\^と$ ---");
console.log(/^abc+$/.test("abc"));
console.log(/^abc+$/.test("abc321"));
console.log(/^abc$/.test("aasdbc"));

console.log("---URL---");
const userPattern = /^\/users\/\d+$/;
console.log(userPattern.test(123));
console.log(userPattern.test("/users/1"));
console.log(userPattern.test("/users/123"));
console.log(userPattern.test("/users/abc"));
console.log(userPattern.test("/posts/123"));

console.log("match");
const url = "/users/456";
const result = url.match(/^\/users\/(\d+)$/);
console.log(result[0]);
console.log(result[1]);

const parts = url.split("/");
console.log(parts);
const id = parts[2];
console.log(`ユーザーID:${id}`);
