 //constructor  -- lay out blueprints of what object will look like
//  function Animal (raining, noise) {
//      this.raining = raining;
//      this.noise = noise;
//      this.makeNoise = function (){
//          if (this.raining === true){
//              console.log(this.noise);
//          }
//      }
//  };

// const dogs = new Animal (true, 'woof!');
// const cats = new Animal (false, 'meow!');
// const bird = new Animal (true, 'cheep!');


// bird.raining = true;
// console.log(bird);

// dogs.makeNoise();
// bird.makeNoise();

function Vehicle (color, sound, engineNumbers) {
    this.color = color;
    this.sound = sound;
    this.engineNumbers = engineNumbers;
    this.go = function(){
        if(this.engineNumbers > 1){
            console.log(this.sound);
        }
    }
}

const car = new Vehicle ('red', 'vrooommm', 1);
const helicopter = new Vehicle ('black', 'whoosh', 4);
const boat = new Vehicle ('blue', 'brhhhhh', 3);

car.engineNumbers = 5;
boat.engineNumbers = 1;
car.sound = 'beep bepp';

car.go();
helicopter.go();
boat.go();