// This is all about strings
const aString ='The quick brown fox jumped over the moon';

//what is the length of the string?
const stringLength = aString.length; //this is property access
console.log ('String Length: ', stringLength);

//what is the first character in the stringLength
const firstChar = aString.charAt(0); //this is a method call
console.log('The first letter: ', firstChar);

//what is another way to find the first in the string?
const firstCharAnotherWay = aString[0];
console.log('The first letter another way: ', firstCharAnotherWay);

//What is the seventh letter of the string?
const seventhChar = aString[6]; //not that you can use char at
console.log ('The seventh letter: ', seventhChar);

// how do I put strings together / (concatenation)
const stringsTogether = aString.concat('!');
const stringsTogetherAgain = aString + '!';
console.log ('String togehter: ', stringsTogether);
console.log ('Strings together again: ',stringsTogetherAgain);
console.log ('aString: ', aString);

//FACT!!!: Strings are imutable. You can get new ones, but you can't modify existing ones

//I want part of a string, how do I do that?
const firstFiveChars = aString.substr(0,5);
console.log ('First five chars : ', firstFiveChars);
const firstFiveChar = aString.slice(0,5);//endIndesc is not included overshoot by one
console.log ('firstFiveChar: ', firstFiveChar);

// How do I split a sentence into the words?
const words = aString.split(' ');
console.log('Words: ', words);

//how many words in my string?
const howManyWords =words.length;
console.log ('how many words; ', howManyWords);

//What are the number of words in the string?
const numberOfWords = aString.split(' ').length;
console.log ('Number of words: ', numberOfWords);


//How many spaces are in the string?
const numberOfSpaces = numberOfWords - 1;
console.log ('Number of spaces: ', numberOfSpaces);

//what is the longest word in the string?
const startingWords = aString.split(' ');
//console.log('startingWords is: ',startingWords)
const lengthOfWords = startingWords.map(word => word.length);
//console.log('lengthOfWords is: ',lengthOfWords);
const maximumWordLength = max(lengthOfWords);
//console.log('maximumWordLength is: ',maximumWordLength);
const whereIsTheMax = lengthOfWords.indexOf(maximumWordLength);
//console.log('where is the max: ', whereIsTheMax);
console.log('longest string: ',startingWords[whereIsTheMax]);
 
function max(listOfNums){
  let maximum = listOfNums[0];
  for(let num of listOfNums){
    if(num > maximum){
      maximum = num;
    }
  }
  return maximum;
}

//How do I reverse a string>=?
//NOT A SPACE in the spit@ NOT A SPACE!
//const splitString = aString.split('');
//console.log ('splitstring is: ',splitString);
const reverseString = aString.split('').reverse().join('');
console.log('Reverse string',reverseString);

//Alternative
const arr = [];
//console.log('last letter is: ',aString[aString.length]);

for (let i=aString.length - 1; i>=0; i -= 1){
  //console.log('i is: ',i);
  //console.log('aString[i] is: ',aString[i]);
  arr.push(aString[i]);
}
console.log('alternative way for reverse: ',arr.join(''));
