//other times with dots: 
//methods on objects 
//promises .then
//arrays (.push, .length)
//string methods 
// anything that uses a dot is an object

//store by reference vs value
//primitive values stored by value
// non prims stored by reference
// string, int, bool, null, undef
// non prims: object, arr, func, prom

var person = {}

person.name = "mrs. white";
var who = person.name;

console.log(who) // Mrs.White

person.name = "mr. white";

console.log(who) // Mrs. White
console.log(person.name) //Mr. White

