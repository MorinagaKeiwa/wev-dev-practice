type Address = {
  prefecture: string;
  city: string;
};

type Company = {
  readonly id: number;
  name: string;
  address: Address;
  employeeCount: number;
};

const companies = [
  {
    id: 1,
    name: "株式会社サンプル",
    address: { prefecture: "東京都", city: "渋谷区" },
    employeeCount: 150,
  },
  {
    id: 2,
    name: "テスト合同会社",
    address: { prefecture: "大阪府", city: "北区" },
    employeeCount: 32,
  },
];

companies.forEach((c) => {
  console.log(
    `[${c.id}] ${c.name}（${c.address.prefecture}${c.address.city}）`,
  );
  console.log(`    従業員：${c.employeeCount}名`);
});
