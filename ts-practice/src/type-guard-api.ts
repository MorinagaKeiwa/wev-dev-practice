type ApiSuccess<T> = {
  ok: true;
  data: T;
};

type ApiError = {
  ok: false;
  code: number;
  message: string;
};

type ApiResponse<T> = ApiSuccess<T> | ApiError;

type User = { id: number; name: string; email: string };

function handleUserResponse(res: ApiResponse<User>): void {
  if (res.ok) {
    const { id, name, email } = res.data;
    console.log(`ユーザー取得成功`);
    console.log(`   ID: ${id}, 名前: ${name}, メール: ${email}`);
  } else {
    console.log(`エラー (${res.code}): ${res.message}`);
  }
}

type Item = { id: number; title: string };

function handleItemListResponse(res: ApiResponse<Item[]>): void {
  if (res.ok) {
    console.log(`アイテム一覧 (${res.data.length}件)`);
    res.data.forEach((item) => console.log(`   - [${item.id}] ${item.title}`));
  } else {
    console.log(`エラー (${res.code}): ${res.message}`);
  }
}

const successRes: ApiResponse<User> = {
  ok: true,
  data: { id: 1, name: "Alice", email: "alice@example.com" },
};

const errorRes: ApiResponse<User> = {
  ok: false,
  code: 404,
  message: "ユーザーが見つかりません",
};

const listRes: ApiResponse<Item[]> = {
  ok: true,
  data: [
    { id: 1, title: "TypeScript 入門" },
    { id: 2, title: "React 実践ガイド" },
  ],
};

handleUserResponse(successRes);
handleUserResponse(errorRes);
handleItemListResponse(listRes);
