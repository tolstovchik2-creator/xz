class PiggyBank {
    #balance = 0;

    put(amount) {
        if (amount <= 0) {
            console.log("Сумма некоретная чет братух");
            return;
        }
        this.#balance += amount;
    }

    take(amount) {
        if (amount > this.#balance) {
            console.log("голды нетю");
            return;
        }
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

console.log("Зодачко намбер ван");
const bank = new PiggyBank();

bank.put(100);
bank.put(50);
bank.put(30);
console.log(bank.getBalance());

bank.take(1000);
bank.put(-5);

class Animal {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " издает звук");
    }
}

class Cat extends Animal {
    speak() {
        console.log(this.name + " делоит: meow");
    }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " говорит: Гав");
  }

  fetch() {
    console.log(this.name + " принёс палку");
  }
}

console.log("Задача 2");
const animals = [
  new Animal("Неизвестный зверь"),
  new Cat("вася"),
  new Cat("игорь"),
  new Dog("бобян")
];

for (const animal of animals) {
  animal.speak();
}

const dog = animals.find(animal => animal instanceof Dog);
if (dog) {
  dog.fetch();
}