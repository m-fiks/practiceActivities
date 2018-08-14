// Here is our base class for this exercise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Animal {
    // This is where the arguments to the class are declared
    constructor(type, legs, tail, sound, weight) {
      this.type = type
      this.legs = legs;
      this.tail = tail;
      this.sound = sound;
      this.weight = weight
    }
    // Notice the class method syntax is different(!not key: function(){}, just uniqueNAme(){})
    makeSound() {
      console.log(this.sound)
    }
    eatFood() {
      this.weight += this.weight/100;
      console.log(`Up to ${this.weight} pounds now!`)
    }
    haveBabies() {
      const count = Math.floor(Math.random() * 10) + 2
      console.log(`Awe look at those ${count} ${this.type} babies!!`)
    }
  }
  
  // Create an instance of the Animal Class
//   const genericAnimal = new Animal('horse', 4, true, 'neigh!!', 320)
//   // Invoke the class methods so the genericAnimal can live a happy life!
//   genericAnimal.makeSound();
//   genericAnimal.eatFood();
//   genericAnimal.haveBabies();
  
  // Export the Animal class constructor so we can use it elsewhere
  module.exports = Animal;