class Person {
  constructor(name, age, eyecolor) {
    this.name = name;
    this.age = age;
    this.eyecolor = eyecolor;
  }

  user() {
    return this.name + " " + this.age + " " + this.eyecolor;
  } //Funktion för att logga personen finns inuti klassen
}

const Emelie = new Person("Emelie", 31, "brown");
const Johanna = new Person("Johanna", 36, "blue");
const Jonas = new Person("Jonas", 30, "green");

console.log(Emelie.user());
console.log(Johanna.user());
console.log(Johanna.eyecolor);

Johanna.favoritefood = "pasta";

console.log(Emelie, Johanna);

class Dog {
  constructor(name, hasLegs, furcolor) {
    this.name = name;
    this.hasLegs = hasLegs;
    this.furcolor = furcolor;
  }

  printDogs() {
    return this.name + " " + this.hasLegs + " " + this.furcolor;
  }
}

const Labradoodle = new Dog("Doodlie", true, "turtle");
console.log(Labradoodle);
