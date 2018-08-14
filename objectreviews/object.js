// //object literal
// const human = {
//     name: 'maddy',
//     age: 25,
//     learn: function() {
//     console.log('cool beans')
//     }
// };

// //dot notation to access values inside of object
// console.log(human.name);
// human.learn();
// let first = 33;

// //copy by value
// let second = first
// second = 44;
// console.log(first,second);

// //copy by reference - what arrays and objects do
// let human = {
//     name: 'maddy',
//     age: 25,
//     learn: function() {
//     console.log('cool beans')
//     }
// };

// let boop = human;

// boop.age = 56;

// //NOT two separate objects - only one just two vars pointing
// //at the same object
// console.log(human,boop)

//Object.assign()
//allows to only mutate the second object (or newly created object)
const object1 = {
    a: 1,
    b:2
}

//pass in values from object 1 to new object2
// const object2 = Object.assign({}, object1)
//OR spread method
let object2 = {...object1}
object2.a = 34;
console.log(object1, object2)