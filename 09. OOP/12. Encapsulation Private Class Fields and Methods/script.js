'use strict';

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved of ${val}`);
    }
  }
}

const acc1 = new Account('Ephraim', 'USD', 1111, []);
console.log(acc1);
console.log(acc1.deposit(1000));
console.log(acc1.withdraw(50));
console.log(acc1.deposit(500));
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.#movements);
// console.log(acc1.#requestLoan);
