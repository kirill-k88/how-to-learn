class User {
  constructor(name) {
    this.name = name;
  }
  message(msgText) {
    console.log(this.name + msgText);
    return;
  }
}

let newUser = new User("Kirill");
console.log(newUser);

class Person extends User {
  constructor(name, emale, surname) {
    super(name);
    this.emale = emale;
    this.surname = surname;
  }
  mess() {
    console.log(super.name);
    console.log(super.message(" Hi"));
    return;
  }
}

let newPerson = new Person("Kirill", "kirill-k88@ya.ru", "Katsnelson");
console.log(newPerson);

newPerson.mess();
