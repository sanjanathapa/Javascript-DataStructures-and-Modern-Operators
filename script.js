'use strict';

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //enhanced object literals --> now we dont have to do craete method and then assign the func expression
  order(starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]; //as we gonna return an array
  },

  orderDelivery(
    { starterIndex = 1, mainMenuIndex = 0, time = '12:00', address } // 4 property name exactly that we have down there while calling the function , now in the function argument we //can do destructuring.
  ) {
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to 
   ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    //console.log(`Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
    return `Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`;
  },

  orderPizza(ingredient1, ...ingredients1) {
    console.log(ingredient1, ingredients1);
  },
};

restaurant.orderDelivery({
  time: '10:10', //passing in an object of options
  address: 'GNA house Kot Kalan',
  mainMenuIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'GNA house Kot Kalan',
  starterIndex: 2,
});

//so here we only passed in one object into this function. we did not pass 4 arguments. its only one argument one
//object. as we receive that object, we do immediately destructuring
//so many times in js, we have functions with lot of parameters. and then it can be hard to know the order
//of parameters for someone that is using this function. and so instead
//defining the params manually, we can just pass an object into the functions as an argument, and then function
//will then immediately destructure that object

//**************************************************************************************************************** */
//-----------------------------------------DESTRUCTURING OBJECTS----------------------------------------------------
//**************************************************************************************************************** */
//for object destructuring we use the curly braces {}.
//we usually give the variable name as exact of the property name in object destructuring
const { name, categories, openingHours } = restaurant;
//console.log(name, categories, openingHours);

//if i want to give different variable name
const {
  name: resataurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//console.log(resataurantName, hours, tags)

//we can also set default values in object just like in array. we use = sign to set default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating variables while destructuring the objects
//{} is a code block so js expects the code block and as we know that we cant assign any value to the code block. so
//trick is that , we wrap that code clock inside a () while mutating the variables of object.

let p1 = 11;
let q1 = 22;
const obj = {
  p1: 23,
  q1: 7,
  r1: 14,
};
({ p1, q1 } = obj);
console.log(p1, q1);

//Nested Objects destructuring
// const {
//   friday: {open, close},
//       } = openingHours;
//       console.log(open, close);

const {
  friday: { open: o, close: co },
} = openingHours;
console.log(o, co);

//**************************************************************************************************************** */
//-----------------------------------------DESTRUCTURING ARRAYS----------------------------------------------------
//**************************************************************************************************************** */

//So destructuring is an ES6 feature. and its basically a way of unpacking values from an array or an object into
//separate variables.

//so now if we want to retrieve elements into its own variable without destructuring. we would do it like this
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//so with destructuring method-> if we destructuring the array then we will use square bracket like this;
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//so we are not destroying the original array.

//so from above arrays (say categories)
let [first, second] = restaurant.categories;
console.log(first, second);
// const [first1, ,second1] = restaurant.categories ;
// console.log(first1, second1)

//******************************************* */
//------------Switching variables-------------

//if we want to switch the elements or variables. example 1.pizzeria and 2nd italian. then without destructuring it
//would be like this--  we need here the third variable temp.

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//but with destructuring ,we can do it easily. without need of any extra variables
[first, second] = [second, first];
console.log(first, second);

//if we have a function, return an array, and then we can immediately destruct the result into different variables.
//receive 2 return values from a functions
console.log(restaurant.order(2, 0));
const [a1, b1] = restaurant.order(2, 0);
console.log(a1, b1);

//Nested Destructuring----->>>>destructuring inside the destructuring
const nested = [1, 2, 3, [4, 5, 6], 7];
const [w, , , [l, k, j]] = nested;
console.log(w, l, k, j);

//we can also set default values for the variables when we are extracting them.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//**************************************************************************************************************** */
//---------------------------------------------SPREAD OPERATOR----------------------------------------------------
//**************************************************************************************************************** */
//we can use spread operator to basically expand an array into all its elements(its like taking all the elements out
//of the array and writing them manually) OR----to build new Arrays-----OR to Pass multiple values into a function

// 1. First scenerio where spread operator is used
const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

const goodArr = [1, 2, ...arr];
console.log(goodArr);
console.log(...goodArr);

const newMenu = [...restaurant.mainMenu, 'Samosa'];
console.log(newMenu);

//-->>>copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//--->merging two array
const rt = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(rt, 'UJWAL');

//Actually the spread operator works on the iterables(all arrays, string, maps or sets but not objects)
const str = 'sanjana';
const letters = [...str, ' ', 'U'];
console.log(letters);
console.log(...str);

//in template literals, it cant accept the multiple values separated by a comma. it usually only expected
//when we pass arguments into a function, or when we build a new array

//2.) second scenerio where spread operator is used, when we pass arguments into functions.
//real world example:-
const ingredients = [
  prompt("lets's make pasta! Ingredient 1?"),
  prompt("lets's make pasta! Ingredient 2?"),
  prompt("lets's make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
console.log(restaurant.orderPasta(...ingredients), 'SANJANANANANNA');

//the big difference btwn the spread operator and destructuring is that, it takes all the elements from the array and
//it also doesn't create new variables.

//spread operator with objects
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Kumar' };

//shallow copies of arrays using the spread operators, we can do same with the objects
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'SagarRatna';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//**************************************************************************************************************** */
//------------------------------------------REST PATTERNS AND REST PARAMETERS----------------------------------------
//**************************************************************************************************************** */
//it has same syntax as of the spread operator, but it actually does the opposite of the spread operator.
//it is used to pack the elements into a single array unlike spread operator.

///-------->> with DEstructuring
//SPREAD, because on right side of =
const arr12 = [1, 2, ...[3, 4, 5]];

//REST, because on left side of =   //the rest pattern basically collects the unused elements in the destructuring assignment
const [n, m, ...other] = [1, 2, 3, 4, 5, 6];
console.log(n, m, other);

//example of use of both operators together
const [pizza, , risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, others);

//Objects
const { saturday, ...weekdays } = restaurant.openingHours;
console.table(saturday, weekdays);

//-------> with Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    //sum = sum + number[i];
    sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
//so this function gonna be called 3 times.
const u = [1, 2, 3];
add(...u);

//created orderPizza method in above code
restaurant.orderPizza('Mashroom', 'onion', 'Cucumber', 'Tomato');
restaurant.orderPizza('Mashroom');

////Spread is used for "values" separated by comma and
////rest is used for "variables name" separated by comma.

//**************************************************************************************************************** */
//---------------------------------------------SHORT CIRCUITING (&& and ||)----------------------------------------
//**************************************************************************************************************** */

//so as before we were only using operators for boolean value. But there are 3 properties of logical operators
//They can Use ANY dataTypes, CAn return any dataType, and can do something called "short circuiting".

console.log('---------------------OR-----------------------------');
//It simply return the truthy values. For example
console.log(3 || 'Sanjanaj');
console.log(' ' || 'Jonas');
console.log(true || 0);
console.log(undefined || 8);
console.log(0 || null);
console.log(undefined || null);

//if the first opearns is truthy value in the OR operator then the other operand will not even be evaluated.this
//we mean is short circuit.
console.log(undefined || 0 || '' || 'Sanjana' || 12 || null);

//suppose we have method of number of guests in restaurant object and on the basis of that number. i want to
//define a varible name. so
//if:-
//2.
//restaurant.numOfGuests = 23;
restaurant.numOfGuests = 0; //0 is a truthy value in OR opeartor or any logical operator to overcome this trouble
//we have a nullish Coalescing operator.
//NCO basically works with the concept of nullish value instead of falsy values
//so if we not want 0 to treat as a falsy value then we can use NC operator ??(line no. 319)
//Nullish : null and undefined (It does NOT include  0 or '')
//so if it is 0 and '', then it not a falsy value and were instead truthy value.

//1.
// const guests = (restaurant.numOfGuests ? restaurant.numOfGuests : 10);
// console.log(guests);

//instead of this we can do now using the short circuit of OR operator
// const guests1 = (restaurant.numOfGuests || 10)
// console.log(guests1);

const guestsCorrect = restaurant.numOfGuests ?? 10;
console.log(guestsCorrect, '####');

console.log('---------------------AND-----------------------------');
console.log(0 && 'Ujjwal');
console.log('Sanjana' && 'Ujjwal');
console.log('Ujjwal' && 98); //when 1st opearns is truthy and it continues
//the evaluation and returned the last value
console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Onion');
}

//using AND operator
restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Onion');

//**************************************************************************************************************** */
//-------------------------------------------Logical Assignment Operator----------------------------------------
//**************************************************************************************************************** */
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Govinna',
};

//  rest1.numGuests = rest1.numGuests || 10 ;
//  rest2.numGuests = rest2.numGuests || 10 ;  //numGuests is undefined
// console.log(rest1, rest2);

//using OR assignment Operator
//assign a value to a variable, if it is currently falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;  //numGuests is undefined
// console.log(rest1, rest2);

//Nullish Assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10; //numGuests is undefined
console.log(rest1, rest2);

//AND Assignment operator
//assign a value to a variable, if it is currently truthy
// rest1.owner = rest1.owner && '<ZAYEKA>';
// rest2.owner = rest2.owner && '<ZAYEKA>';
// console.log(rest1, rest2);

rest1.owner &&= '<ZAYEKA>';
rest2.owner &&= '<ZAYEKA>';
console.log(rest1, rest2);

//Coding Challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Gnarby'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. create one array for each team
const [players1, players2] = game.players;
//console.log(players1, players2);

//2, in each of the array assume 1st player is goalkeeper and rest are the fieldplayers
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.create an array of allPlayers
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);

//4.create a new array containing all the players + "thiago", "miago", "Ciago"
const [...playersFinal] = [...players1, 'Thiago', 'Miago', 'Ciago'];
console.log(playersFinal);

//5.based on game.odds object, create one variable for each odd.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.create a printgoal function that receives an arbitrary number of player name(NOT an Array).
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored `);
};
printGoals('Davies', 'Muller', 'Lewan', 'Kimich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7. the team with lower odd is more likely to win
team1 < team2 && console.log('Team 1 is more likely to win');

//**************************************************************************************************************** */
//----------------------------------------Looping Arrays: The For-of Loop-------------------------------------------
//**************************************************************************************************************** */
//so this loop will automatically loop over the entire array and in each iteration, it will give access to the
//current array element

//const [...bigMenu] =[...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(bigMenu)

const bigMenu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(bigMenu1)

for (const food of bigMenu1) console.log(food);
//if we want to print its index no.

for (const [i, el] of bigMenu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log(bigMenu1.entries());

//*************************************************************************************************************** */
//-----------------------------------------OPTIONAL CHAINING (?.)------------------------------------------------
//*************************************************************************************************************** */
//when we hav edeeply nested object witj lots of optional properties
//suppose we want to check opening hours for monday.
//console.log(restaurant.openingHours.monday.open)

// if (restaurant.openingHours.monday)
// console.log(restaurant.openingHours.monday.open)

//if we have to check more than one property:
if (restaurant.openingHours && restaurant.openingHours.monday)
  console.log(restaurant.openingHours.monday.open);

//with Optional Chaining
console.log(restaurant.openingHours.mon?.open);
//so the properties before the ? (example mon) if not exist (i.undefined or null) then it immediately return the
//undefined(but will) work for (0 and '')Just like Nullish coalscing operator.

console.log(restaurant.openingHours?.monday?.open);
//console.log(restaurant.openingHours?.friday?.open);

//example
const days = [
  'sunday',
  'monday',
  'Tuesday',
  'Wednesday',
  'thursday',
  'friday',
  'saturday',
];

for (const day of days) {
  //console.log(day);
  const time = restaurant.openingHours[day]?.open || 'another 6 day';
  console.log(`on ${day} we open at ${time}`);
}

//Methods--> It does also works for calling methods. To check if a method actually exists before we call it.
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderTata?.(0, 1) ?? 'Method does not exist');

//Arrays--> It does also works for arrays that if array exist or not
const users = [
  { name: 'Ujjwal', age: 24 },
  { name: 'Sanjana', age: 22 },
  { name: 'Rohit', age: 23 },
];
console.log(users[6]?.name ?? 'User array is empty');

//**************************************************************************************************************** */
//-----------------------------------Looping Objects: Object keys, values and enteries------------------------------
//**************************************************************************************************************** */

//as we know that for-of loop works on th array. now we will try to use for-of loop on objects but in indirect way.
//ultimately we will still have to loop over the array, but in indirect way. means we are not actually looping over
//the object itself, instead we are gonna loop an array. see how

//*********Properties
const properties = Object.keys(openingHours);
console.log(properties);
//the result will come in an array form by(Object.keys)

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//******Property Values
const values = Object.values(openingHours);
console.log(values);

for (const { open: op } of values) {
  console.log(`we open at ${op}`);
}

//**********Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

//***Coding Challenge 2 */
//continuing the fotball app challenge

//1.) loop over the game.scored array and print each player name with the goal number
//console.log(game.scored.entries(), "Game ")
const entries1 = game.scored.entries();
console.log(entries1, 'Game 2');
for (const [index1, elements] of entries1) {
  console.log(`Goal ${index1 + 1} : ${elements}`);
}

//2.) use a loop to calculate the average odds and log it to the console
//console.log(game.odds,"WERTYU")
//const odd = Object.values(game.odds);
let average = 0;
for (const val of Object.values(game.odds)) 
average += val;
average = average/Object.values(game.odds).length;
console.log("Average Odd is: ", average);


//3.) Print the 3 odds like --> odd of Victory Bey..: 1.33
const oddd = Object.entries(game.odds)
//console.log(oddd)

for (const [team, odd] of oddd){
  const teamStr = team === 'x'? "draw" : `victory ${game[team]}`;
  //console.log(`${game[team]}`, "ASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
  console.log(`odd of ${teamStr} is: ${odd}`);
};


//Bonus Challenge---------------------------------------------------------------
//Create an object called 'scorers' which contains the names of the players who scored as properties, and the number 
//of goals as the value. 

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the 
//count as we encounter a new occurence of a certain element. it should look like this;
// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// };

const scorers = {};
for (const player of game.scored) {
  console.log(player)
  console.log(scorers[player], "##########################################")
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers,"++++++++++++++++++++++++++++++++++++++++")
  // console.log(scorers[player], "##########################################")
}



//**************************************************************************************************************** */
//---------------------------------------SETS------------------------------------
//**************************************************************************************************************** */
//sets is also a datastructure and it is basically just a collection of unique values. It means set can never
//have any duplicates. Just like arrays "Sets" are also iterable. so we pass the iterable things inside the Sets.
 const orderSet = new Set([
  'Pasta',
  "Pizza",
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza' ]);

  console.log(orderSet);

//String are also iterable
console.log(new Set("sanjana"));
//Set could also be empty
console.log(new Set());

console.log(orderSet.size);
//can check if a certain element is in a set. So
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
//it returns the True or False
//can also add new elements to a set. So
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");

//can also delete elements to a set. So
orderSet.delete('Risotto');
//to delete all the elements of the set
//orderSet.clear(orderSet);
console.log(orderSet);

//how do we actually retrieve values out of a set
//in sets there are actually no indexes, infact there is no way of getting values out of a set.
//as all values are unique, all we need to know is that whether a cetain value is in the set or
//not. thats why we have the "has" method. 
//As sets are iterable therefore, we can loop over them.

for (const orders of orderSet)
console.log(orders);
//normal use case of Sets is to remove the duplicates from the arrays.
//Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//now we are only interested to know that how many total positions are there. so set will work.

//const staffUnique = new Set(staff);
// console.log(staffUnique);

//conversion from set to an array is very easy as both are iterable. so
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//to check the size or no. of unique vaues
console.log(new Set (['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter', 'Reception']).size);



//**************************************************************************************************************** */
//---------------------------------------------Maps: Fundamentals---------------------------------------------------
//**************************************************************************************************************** */
//Maps Iteration

//Coding challenge
//1.)Create an array called events, which will contain all the game events(no duplicates game)
//String Methods
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log('Airline'.length);

//String also have some methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));


//why are they useful ?
//to extract the part of a string using the slice method. and  slice methods needs indexes as arguments.
console.log(airline.slice(4));
console.log(airline.slice(4,7));
//end value not included in the string. in console

//trying to extract the first word, but without knowing any of these indexes(indexOf and lastIndexOf will help in this case).
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));



//Js automatically behind the scenes converts that string primitive to a string object with the same content. and 
//then its on that object where the methods are called. this process is called boxing
//so javascript call this string functiion here and now this(Jonas) will become an object. and when the operation is done, the object is converted back to a regular string primitive.
console.log(new String ('Jonas'));
console.log(typeof new String('Jonas') );

//it (all string methods always returns the primitives , even if called on a string object.

console.log(typeof new String('Jonas').slice(1) );



const announcement = 'this is boarding door, and this is the second door';

console.log(announcement.replace('door', 'gate'));

console.log(announcement.replaceAll('door', 'gate'));



//3 simple methods that returns boolean.

//Booleans



const plane1  = 'Airbus A320neo';

console.log(plane1.includes('A320'));

console.log(plane1.includes('Boeing'));

console.log(plane1.startsWith('Air'));



if (plane1.startsWith('Air') && plane1.endsWith('neo')){

  console.log("It is the part of the Airbus.")

}



//Practic exercise
//we always need to do the lowecase whatever the input is coming from the userinterface. it becomes easy to compare.
const checkBaggage =  function (items){
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
  {
    console.log("You are not allowed on board")
  }else {
    console.log('Welcome Aboard')
  }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun');

//Split and Join
console.log("Sanjanaa Thapa qwerty".split(" "));

//we can destructure immediately
const [firstName1, lastName1] = "Sanjana Thapa".split(" ");
console.log(firstName1, lastName1);
const newName = ['Miss', firstName1, lastName1.toUpperCase()].join(' ');
console.log(newName);

const capitalization = function (name){
  const names = name.split(' ');
  const namesUpper = [];
  console.log(names);

  for (const n of names){
    namesUpper.push(n[0].toUpperCase() + n.slice(1))
  }
  console.log(namesUpper.join(' '));
}
capitalization('Jessica ann smith davis');
capitalization('sanjana thapa');

//Padding a string
const message1= "Go to gate 23"
console.log(message1.padStart(15, "=").padEnd(30, "+"));


//Example
const maskingCard = function(number){
  const str = number + '';
  console.log(str)
  const last = str.slice(-4);
  console.log(last)
  return last.padStart(str.length, '*')
}
console.log(maskingCard(78965412366));
console.log(maskingCard(222312154856148));


//Repeat method
const message2 = "Bad weather ";
console.log(message2.repeat(2));
const planesInLine = function(n)
{
  console.log(`There is ${n} planes in line ${'#'.repeat(n)}`);
}
planesInLine(4);
planesInLine(6);
planesInLine(8);


//

const getCode = str => str.slice(0,3).toUpperCase();
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  for (const flight of flights.split('+')){
    //console.log(flight.split(';'));
    const [type, from, to, time] = flight.split(';');
    //console.log(type)
    const output = `${type.startsWith('_Delayed') ? '*' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(38)
    console.log(output)
  }