// import { describe, it, expect, vi, afterEach } from "vitest";
// import { processOrder, logger } from "./order.js";

// describe("processOrder", () => {
//   afterEach(() => {
//     vi.restoreAllMocks();
//   });

//   if("正常な注文の時infoログが記録される",()=>{
//     const infoSpy = vi.spyOn(logger,"info");

//     const order = {item:"りんご",quantity:3,price:100};
//     const result = processOrder({order,logger});

//   })
// });

import { describe, it, expect, vi, afterEach } from "vitest";
import { processOrder, logger } from "./order.js";

describe("processOrder", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("正常な注文のとき info ログが記録される", () => {
    // logger.info にスパイを仕掛ける
    const infoSpy = vi.spyOn(logger, "info");

    const order = { item: "りんご", quantity: 3, price: 100 };
    const result = processOrder(order, logger);

    // 処理結果が正しいか
    expect(result).toEqual({ success: true, total: 300 });

    // スパイで「info が呼ばれたか」を確認
    expect(infoSpy).toHaveBeenCalledTimes(1);
    expect(infoSpy).toHaveBeenCalledWith("注文処理完了: りんご × 3");
  });

  it("無効な注文のとき error ログが記録される", () => {
    // logger.error にスパイを仕掛ける
    const errorSpy = vi.spyOn(logger, "error");

    const order = { item: "", quantity: -1, price: 0 };
    const result = processOrder(order, logger);

    expect(result).toEqual({ success: false });

    // error が呼ばれたか確認
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });
});
