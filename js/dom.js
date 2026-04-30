const mainTitle = document.querySelector("#mainTitle");
console.log("h1の内容:", mainTitle.textContent);

const sections = document.querySelectorAll("section");
console.log("sectionの数", sections.length);

sections.forEach((sec, i) => {
  console.log(`section[${i}]:sec.querySelector("h2")textContent`);
});

const title = document.querySelector("#mainTitle");
title.textContent = "こんにちはDOM!";

const box = document.querySelector("#message");
box.innerHTML = "<strong>太字テキスト</strong>";

const btn = document.querySelector("#changeTextBtn");
btn.style.backgroundColor = "crimson";
btn.style.fontsize = "20px";
btn.style.display = "none";

const message = document.querySelector("#message");
const changeTextBtn = document.querySelector("#changeTextBtn");
const toggleClassBtn = document.querySelector("#toggleClassBtn");
const highlightStyle = document.createElement("style");
highlightStyle.textContent =
  ".highlight { color: crimson; font-weight: bold; font-size: 1.2em; }";
document.head.appendChild(highlightStyle);

changeTextBtn.addEventListener("click", () => {
  message.textContent =
    "テキストが書き変わりました！（" + new Date().toLocaleTimeString() + "）";
});

toggleClassBtn.addEventListener("click", () => {
  message.classList.toggle("highlight");
  console.log(
    "highlight クラスを持っているか:",
    message.classList.contains("highlight"),
  );
});

const fruitsList = document.querySelector("#fruitsList");
const addItemBtn = document.querySelector("#addItemBtn");
const removeItemBtn = document.querySelector("#removeItemBtn");

const fruits = ["みかん", "ブドウ", "もも", "いちご"];
let fruitIndex = 0;

addItemBtn.addEventListener("click", () => {
  if (fruitIndex >= fruits.length) {
    console.log("追加できる果物がなくなりました");
    return;
  }
  const li = document.createElement("li");
  li.textContent = fruits[fruitIndex];
  fruitList.appendChild(li);
  fruitIndex++;
});

removeItemBtn.addEventListener("click", () => {
  const lastItem = fruitList.querySelector("li:last-child");
  if (lastItem) {
    lastItem.remove();
    fruitIndex = Math.max(0, fruitIndex - 1);
  }
});

const hoverBox = document.querySelector("#hoverBox");
const mouseLog = document.querySelector("#mouseLog");

hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "eee";
  hoverBox.textContent = "マウスを乗せてみて";
  mouseLog.textContent = "mouseleave 発火";
});

hoverBox.addEventListener("click", () => {
  mouseLog.textContent = "click 発火";
});

hoverBox.addEventListener("dblclick", () => {
  mouseLog.textContent = "dblclick, 発火(ダブルクリック)";
});

const keyLog = document.querySelector("#keyLog");

document.addEventListener("keydown", (event) => {
  keyLog.textContent = `keydown: "${event.key}"(押し中)`;
});

document.addEventListener("keyup", (event) => {
  keyLog.textContent = `keyup: "${event.key}"(離した）)`;
});

const nameInput = document.querySelector("#nameInput");
const myForm = document.querySelector("#myForm");
const formLog = document.querySelector("#formLog");

nameInput.addEventListener("focus", () => {
  formLog.textContent = "focus:入力欄がアクティブになりました";
});

nameInput.addEventListener("blur", () => {
  formLog.textContent = `blur: フォーカスが外れました（値:"${nameInput.value}"）`;
});

nameInput.addEventListener("input", (event) => {
  formLog.textContent = `input:現在の入力値→"${event.target.value}"`;
});

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formLog.textContent = `submit: 送信されました！ 名前 = "${nameInput.value}"`;
});

const windowLog = document.querySelector("#windowLog");
const scrollIndicator = document.querySelector("#scrollIndicator");

function updateWindowLog() {
  windowLog.textContent = `scroll: ${Math.round(window.scrollY)}px / width: ${window.innerWidth}px`;
}

window.addEventListener("scroll", () => {
  const scrollRate =
    window.scrollY / (document.body.scrollHeight - window.InnerHeight);
  scrollIndicator.style.width = scrollRate * 100 + "%";
  updateWindowLog();
});

window.addEventListener("resize", updateWindowLog);

updateWindowLog();
