export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function addAsync(a, b) {
  await wait(100);
  return a + b;
}

export async function fetchUserMock(id) {
  await wait(100);
  if (id === 1) {
    return { id: 1, name: "Alice", email: "alice@example.com" };
  }
  throw new Error(`ユーザーIDの${id}は存在しません`);
}
