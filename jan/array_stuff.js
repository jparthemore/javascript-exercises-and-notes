// All about arrays! (okay  that may be  an overpromise)

//How do I create an array?
//Empty?
const empty = [];

// Numbers
const numbers = [1, 2, 3];

// Strings
const strings = ['a','b','c'];

//Objects
const objects = [{}, {}, {}];

//Array of arrays?
const arrays = [[], [], []];

//the above are examples of creating arrays using the array literal syntax

//how many elements(things)are in teh array?
const emptyLength = empty.length;
console.log('Empty length: ', emptyLength);
const numbersLength = numbers.length;
console.log('numbers length: ', numbersLength);

//How can I access an element of an array?
const firstString = strings[0];
console.log('First string from Strings array: ', firstString);

const thirdObject = objects[2];
console.log('The third object from objects: ', thirdObject);
console.log ('Use and index that is greater than the length: ', objects[3]);
