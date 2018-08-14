//Require the Animal class
const Animal = require('./Animal.js')

// When we use the 'extends' keyword in our class declation, this class inherits 
// the methods and properties from the class it extends 
class Dog extends Animal {
  // This class takes different arguments because we know a Dog will normally be a 
  // type of 'dog', 4 legs, a tail and say 'Woof!' so we can hardcode these into the
  // Dog class constructor. 'Weight', 'name' and 'breed' would be different for each
  // individual dog or what we would call the 'Dog instance'
  constructor(weight, name, breed) {
    // This super() allows us to access the class we are extending(try to delete it an run it!)
    super();
    this.type = 'dog';
    this.legs = 4;
    this.tail = true;
    this.sound = 'Woof!';
    // New properties specific to our Dog class
    this.weight = weight;
    this.name = name;
    this.breed = breed;
  }

  // New method specific to our Dog class 
  goFetch() {
    console.log(`Whose a good boy?!`)
  }
  // Here we reassign the haveBabies method to be specific to the Dog class
  haveBabies() {
    const count = Math.floor(Math.random() * 10) + 4
    console.log(`Awe look at those ${count} ${this.breed} puppies!!`)
  }
}

// Create a new instance od the Dog class
const fido = new Dog(55, 'Fido', 'mastiff')
// These two methods were inherited form the parent we extended
fido.makeSound()
fido.eatFood()
// This method is specific to the Dog class
fido.goFetch()
// This method is inherited from the parent but hen we reassigned it to be
// specific to the Dog class
fido.haveBabies()