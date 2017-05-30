/*jshint esversion: 6 */

//lets' talk about functions
//it is a way of bundling a piece of repetiiive code into a reusable chunk

//Named function declarations - available anywere in this file - don't atter where, vaiables top, functions bottome, guts between
function launchTheMissles(){
  console.log('Launching the missiles');
}

//our first functions
function square(num){
  // launchTheMissles();//this is bad! application might explode!
  return num * num;
}
const squareOfTwo = square(2);

//console.log(num); //doesn't exist outside functions
                  //variables are encased in functions

console.log('squareOfTwo ',squareOfTwo);

//console.log('Cube of 2 before: ', cube(2)); //BROKE!!!Variable not defined here

//assign functions to variables
//const cube = function(num){//anonymous
const cube = function cube(num){
  return num * num * num;
};


//fat arrow syntax
// const cubeFatArrow = (num) =>{
//   return num * num * num;
// };
//Alternatively
const cubeFatArrow = num => num * num * num;


console.log('Cube of 2 afer: ', cube(2));
console.log('cubeFatArrow of 2: ', cubeFatArrow(2));
