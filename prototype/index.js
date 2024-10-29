function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.greet = function () {
  console.log(`Hey ${this.getFullName()}, how have you been ? `);
};

const person = new Person("sunil", "kumar");
console.log(person.greet()); // Person instance is created
