type User1 = { id: number; name: string; role: "admin" | "user" };

const rawData: any = JSON.parse('{"id": 1, "name": "Alice", "role": "admin"}');

const user1 = rawData as User1;
console.log(`${user1.name}(${user1.role})`);

type payload = string | number;

function process(value: payload): string | number {
  if (typeof value === "string") {
    return `${value}`;
  } else {
    return `${value}`;
  }
}

console.log(process("hello"));
console.log(process(12345));
