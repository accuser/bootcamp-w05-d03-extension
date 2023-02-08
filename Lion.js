class Lion {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // This is a private method.
  // It is internal to the class instance.
  #ageAppropriateSound() {
    if (this.age < 13) {
      return "roar.";
    } else {
      return "Roar!";
    }
  }

  // sound() {
  //   return "Roar!"
  // }

  sound() {
    return this.#ageAppropriateSound();
  }
}

module.exports = exports = Lion;
