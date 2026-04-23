const user = {
  name: "Taro",
  age: 25,
  email: "Taro@example.com",
};

console.log(user.name);
console.log(user.age);
console.log(user["email"]);
console.log(user.phone);

const product = { name: "りんご", price: 120 };
console.log(product);

product.price = 150;
product.stock = 30;
console.log(product);

delete product.stock;
console.log(product);

const book = {
  title: "JavaScript",
  author: "山田太郎",
  year: 2024,
  Describe: function () {
    console.log(`${this.title}(${this.author})、${this.year}年`);
  },
};

book.Describe();

const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(`カウント:${this.count}`);
  },
};

counter.increment();
counter.increment();
counter.increment();

const book1 = {
  title: "JavaScript 入門",
  author: "山田太郎",
  year: 2024,
  Describe: function () {
    console.log(`${title} ${author}、${year}年`);
  },
};
book.Describe();

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name}が${this.sound}と鳴いた`);
  }
}
const dog = new Animal("犬", "ワン");
const cat = new Animal("猫", "ニャー");
const cow = new Animal("牛", "モー");

dog.speak();
cat.speak();
cow.speak();

console.log(dog.name);
console.log(cat.name);

dog.name = "シロ";
console.log(dog.name);
console.log(cat.name);

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  run() {
    console.log(`${this.brand}が時速${this.speed}kmで走っています`);
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, speed, range) {
    super(brand, speed);
    this.range = range;
  }
  charge() {
    console.log(`${this.brand}を充電中...走行可能距離${this.range}km`);
  }
}

const tesla = new ElectricCar("Tesla", 200, 500);

tesla.run();
tesla.charge();
