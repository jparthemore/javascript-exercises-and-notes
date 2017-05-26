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

// How can I change an element of an array?
numbers[2] = 4;
console.log('Numbers after changing 3 to 4', numbers);

//How can I add elements to an array on the right hand side?
console.log('strings before the push: ', strings);
strings.push('f');
console.log('strings after the push: ', strings);

//how xcan combine 2 arrays
const combined = numbers.concat(strings);
console.log('combined array of numbers and strings: ', combined);

//how can I find the position of an element in the array?
//warning: numbers and Strings work like you think they should. Objects and Arrays can do weird things
const postionOfB = strings.indexOf('b');
console.log('position of b: ', postionOfB);
const positionOfK = strings.indexOf('k');
console.log('position of k ', positionOfK);

//WarNING : IF the element appears more than once, you will get the FIRST index no all

//What if I want a piece of an array?
const lastTwoNumbers = numbers.slice(numbers.length -2);
console.log('The last 2 numbers of numbers: ', lastTwoNumbers);

//ForEach - I want to iterate through an array
const resultOfForEach = numbers.forEach(function logger(number, index){
  console.log('Numbers: ', number, index);
});
console.log('resultOfForEach', resultOfForEach);
console.log('  ');

//FOR EACH CHALLENG
const x = [4,5,6,7,8,9];
//write out a foreah statment that prints out each of the elements and its position for the array s
//const results = x.forEach(function getElementInfo(elem, index){
x.forEach(function getElementInfo(elem, index){
  console.log('Info: ', elem, index);
});
console.log('  ');

x.forEach(function logger(element, index){
  console.log('x: ', element, index);
});

//map - I want to get a new array w/changes to each element of original
const stringLengths = strings.map(function lengthGetter(string,index){
  return string.length; //return means spit out
});
console.log('stringLengths: ', stringLengths);

//MAP CHALLENGE
//What cna replace the_ with to get an array of lenghts of the strings contained in the y array?
const y = ['I', 'like', 'cheese','?'];
const yLengths = y.map(function getTheLength(string,index){
  return string.length;
});
console.log('Y lengths: ', yLengths);

//filter - I want only certain elements of an array that pass a test
const lengthOfOneStrings = y.filter(function test(string,index){
  return string.length === 1;
});
console.log('lengthOfOneStrings: ',lengthOfOneStrings);  //returned only the ones that met the criteria - that were T
console.log (' ');
//FILTER CHALLENGE
//use a filter statement and the y array
const stringsWithLengthBiggerThanOne = y.filter(function test(string,index){
  return string.length > 1;
});
console.log ('stringsWithLengthBiggerThanOne: ', stringsWithLengthBiggerThanOne);
console.log (' ');

//reduce - i want to take an array to something simpler
const sumOfNumbers = numbers.reduce(function adder(acc,next){
  console.log('acc: ', acc, 'next', next);
  return acc + next;
},0);// 0 - initial favlue
console.log('sum of numbers: ',sumOfNumbers);













//
