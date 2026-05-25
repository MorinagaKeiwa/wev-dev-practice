export const logger = {
  info: (message) => console.log(`[INFO] ${message}`),
  error: (message) => console.error(`[ERROR] ${message}`),
};

export function processOrder(order, log = logger) {
  if (!order.item || order.quantity <= 0) {
    log.error(`無効な注文: ${JSON.stringify(order)}`);
    return { success: false };
  }

  log.info(`注文処理完了: ${order.item} × ${order.quantity}`);
  return { success: true, total: order.price * order.quantity };
}
