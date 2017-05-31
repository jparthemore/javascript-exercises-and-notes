/* jshint esversion: 6*/
//let's create a Car

//properties
//color, make, model, hasAC

const Car ={
  color: 'green',  //; semicolons recks your life!! indide of objects
  make: 'Dodge',
  model: 'Dart',
  'hasAC': false, //technically all the left side is a string
  paint: function(newColor){  //functions on objects are called methods
    //Car.color = newColor;
    this.color = newColor; //inside of the objects 'this' refers to the object
  } , //blue - behavoir
  fixAC: function(){
    this.hasAC = true;
  }
};

console.log ('Car: ', Car);
//I want to fix the AC
Car['hasAC'] = true;
console.log ('Car: ', Car);
//Alternatively
Car['hasAC'] = false;  //use this syntax for variables
console.log ('Car: ', Car);

//I want to check the color;
console.log('Color of car: ', Car.color);  //Car.color is access

//Paint the Car
Car.paint('orange');
console.log ('Car: ', Car);

//Fix the AC
Car.fixAC();
console.log('The Car after AC fix', Car);

//shirt objects
//you need at least 3 properties
//you need at least 3 methods from your plan
//one of your methods should modify a property such as 'paint ' above

//you need to demonstrate the usage of each method
const Shirt = {
    color: 'blue',
    size: 'Medium',
    price: 15.44,
    hasCollar: false,
    sellShirt: function(amount){
      this.price = amount;
    },
    canAffordShirt: function(money){  //functions on objects are called methods
       return ((money >= this.price) ?  true :  false);
    } ,
    dyeShirt(clr){
      this.color = clr;
    }
  };

  //var canIBuyIt = Shirt.canAffordShirt(13.00);
  console.log(Shirt);
//  var canIBuyIt = Shirt.canAffordShirt(143.00);
  console.log('if I haveonly $13 do I have enough money to buy a shirt: ', Shirt.canAffordShirt(13.00));
  Shirt.dyeShirt('purple');
  console.log('Shirt coler is now ', Shirt.color);
  Shirt.sellShirt(44.44);
  console.log('shirt is now worth: ',Shirt.price);
