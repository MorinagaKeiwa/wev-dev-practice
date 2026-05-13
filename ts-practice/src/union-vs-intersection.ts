type StringOrNumber = string | number;

const a: StringOrNumber = "hello";
const b: StringOrNumber = 42;

type Cat = { name: string; meow: () => void };
type Dog = { name: string; bark: () => void };

type Pet = Cat | Dog;

function greetPet(pet: Pet): void {
  console.log(`ペットの名前:${pet.name}`);
}

type Named = { name: string };
type Aged = { age: number };

type NamedAndAged = Named & Aged;

const person: NamedAndAged = { name: "Alice", age: 30 };
console.log(`${person.name}、${person.age}歳`);
