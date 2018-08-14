// **Instructions**

// * Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
// * Each character created using your constructor should have the following properties...
//  * Name: The character's name --> String
//  * Profession: What the character does for a living --> String
//  * Gender: The character's gender --> String
//  * Age: The character's age --> Integer
//  * Strength: Abstraction for how strong the character is --> Integer
//  * HitPoints (HP): Abstraction for how much health the character has --> Integer
//  * PrintStats: Function which prints all of a character's properties to the screen
//  * Once you have created your constructor, create two new characters and print their properties to the screen

function Character (name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printstats = function() {
        console.log(`Name: ${this.name}, Profession: ${this.profession}, Gender: ${this.gender}, Age: ${this.age}, Strength: ${this.strength}, HP: ${this.hp}`);
    }
    this.IsAlive = function (){
        if (this.hp > 0){
            console.log(`${this.name} is alive!`)
            return true;
        } else if (this.hp === 0) {
            console.log(`${this.name} is dead!`)
            return false;
        }
    };

    this.Attack = function (character2){
        character2.hp -= this.strength;
    };

    this.LevelUp = function (character){
        console.log(character.age += 1);
        console.log(character.strength +=5);
        console.log(character.hp +=25);
    };
};

const char1 = new Character('Misty', 'Sorceress', 'F', 25, 5, 10);
const char2 = new Character ('Ash', 'the very best', 'M', 10, 3, 10);

// char1.IsAlive();
// char2.printstats();

// char1.LevelUp(char1);
// char2.Attack(char1);

//  * Fool around and get comfortable with your constructor before moving onto the next parts of the activity
// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...
//  * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
//  * Attack: Function which takes in a second character's hitpoints and subtracts 
//this character's strength from it.
//  * LevelUp: Function which increases this character's Age by 1, 
//their Strength by 5, and their HitPoints by 25.


while (char1.IsAlive && char2.IsAlive){
    char1.Attack(char2);
    char2.Attack(char1);
    char1.printstats();
    char2.printstats();
}
// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!