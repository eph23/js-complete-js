'use strict';
const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.latest);
console.log(account.movements);

('use strict');

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`Given name is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const eph = new PersonCl('Ephraim S', 1988);
console.log(eph);
eph.calcAge();

console.log(eph.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this._fullName}!`);
};
eph.greet();

console.log(eph.age);
eph.fullName = 'Ephraim S';
console.log(eph);

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.fullName);

const walter = new PersonCl('Walter White', 1965);
console.log(walter);
