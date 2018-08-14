// **Instructions**

// * Remember Tamagotchis? They were those little toys that contained "digital pets" which you could feed, pet, play with, and care for. Kind of like Furbies but a whole lot less terrifying. Over the next thirty minutes or so, you are going to create your own basic Tamagotchi clone using constructors.

// * Create a constructor called "DigitalPal" which will create four properties and four methods...

function DigitalPal () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = false;
    this.age = 0;
    
    this.feed = function (){
        if (this.hungry === true){
            console.log('That was yummy!');
        }
        else {
            console.log('No thanks, I am full!');
        }
    };
    this.sleep = function () {
        if (this.sleepy === true){
            console.log('zzzzzzzz');
            this.increaseAge();
        } else {
            console.log('No way i am not tired!')
        }
    };
    this.play = function () {
        if (this.bored === true){
            console.log(`yay let's play!`);
        } 
        else {
            console.log(`not rn, later?`);
        }
    };
    this.increaseAge = function () {
        this.age += 1;
        console.log(`Happy birthday to me! I am ${this.age} years old!`);
    };
}

const newFriend = new DigitalPal ();
//console.log(newFriend);
newFriend.hungry = false;
//newFriend.feed();
// newFriend.feed();
// newFriend.sleep();
// newFriend.play();

//  * The first property is "hungry" and it initially starts out as false

//  * The second property is "sleepy" and it initially starts out as false

//  * The third property is "bored" and it initially starts out as true

//  * The fourth property is "age" and it initially starts out at 0

// * The first method is "feed()" - If hungry is true, print "That was yummy!", set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."

// * The second method is "sleep()" - If sleepy is true, print "Zzzzzzzz", set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."

// * The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"

// * The fourth method is "increaseAge()" - This method is called by the sleep() method when 
//the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing 
//"Happy Birthday to me! I am "+age+" old!"


// * Create a variable named "dog" that is set to a new DigitalPal before adding the following unique properties/methods to it...

const dog = new DigitalPal (true, false, true, 5);
    dog.outside = false;
    dog.bark = function (){
        console.log('woof woof!');
};

//dog.bark();

dog.goOutside = function () {
    if (this.outside === false){
        console.log('Yay! I love the outdoors!');
    }
}
    //dog.goOutside();

dog.outside = true;

dog.goInside = function () {
    if (this.outside === true){
        console.log('Do we have to??')
    }
}
//dog.goInside();
//  * outside - Initially set to false

//  * bark() - Prints out "Woof! Woof!" when run

//  * goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs bark(). If outside is true, prints "We're already outside though..."

//  * goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."

// * Make a second variable named "cat" that is set to a new DigitalPal and add the following methods to it:

const cat = new DigitalPal (true, true, true, 6);
//  * houseCondition - Initially set to 100... But not for long...
cat.houseCondition = 100;
// console.log(cat);
//  * meow() - prints out "Meow! Meow!" when run
cat.meow = function () {
    console.log('meow meow');
};
//  * destroyFurniture() - Decreases houseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. Also sets bored to false and sleepy to true. If houseCondition is equal to 0, then this should not run anymore.
cat.destroyFurniture = function () {
    this.houseCondition -= 10;
    console.log('HAHHAH SUCKERS');
}

//cat.destroyFurniture();


//  * buyNewFurniture() - Increases houseCondition by 50 and prints "Are you sure about that?" to the screen.
cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log('Are you sure about that?')
}

//cat.buyNewFurniture();
// * Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!

// * BONUS: Make it so your Tamagotchis run off of user-input from the command line. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.