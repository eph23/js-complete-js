'use strict';
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

  static hey() {
    console.log(`Hey there 👋🏻`);
    console.log(this);
  }
}

PersonCl.hey();

const eph = new PersonCl('Ephraim S', 1988);
console.log(eph);
eph.calcAge();
// eph.hey();

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
