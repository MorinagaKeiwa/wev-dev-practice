let selectedColor: string | undefined;
console.log("color:", selectedColor);

selectedColor = "赤";
console.log("color:", selectedColor);

let couponCode: string | null = null;
console.log("coupon:", couponCode);

couponCode = "SALE2024";
console.log("coupon:", couponCode);

let message: string | null = null;

if (message !== null) {
  console.log(message.toUpperCase());
} else {
  console.log("メッセージがありません");
}
