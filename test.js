// const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const index of digits) {
//   console.log(digits[index]);
// }


// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const digit in digits) {
//   if (digit % 2 === 0) {
//     continue;
//   }
//   console.log(digit);
// }


// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


// for (const day of days){
//     var upperDay = day.charAt(0).toUpperCase() + day.slice(1)
//     console.log(upperDay)
// }

// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
//   name => name.toUpperCase()
// );
// console.log(upperizedNames)

// constructor
// function IceCream() {
//   this.scoops = 0;
// }

// // adds scoop to ice cream
// IceCream.prototype.addScoop = function() {
//   setTimeout(function() {
//     this.scoops++;
//     console.log('scoop added!');
//   }, 500);
// };

// const dessert = new IceCream();
// dessert.addScoop();
// console.log(scoops)

// function createGrid([width = 5, height = 5] = []) {
//   return `Generates a ${width} x ${height} grid`;
// }

// console.log(createGrid([])); 
// console.log(createGrid([2])); 
// console.log(createGrid([2, 3])); 
// console.log(createGrid([undefined, 3]));
// console.log(createGrid());

// function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
//   return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
// }

// console.log(houseDescriptor(['green']))

// function buildHouse({floors: 1, color: 'red', walls: 'brick'} = {}){
    
//     return `Your house has ${floors} floor(s) with ${color} ${walls} walls`
// }

// /* tests */
// console.log(buildHouse()); 
// console.log(buildHouse({}))
// console.log(buildHouse({floors: 3, color: 'yellow'}))

// class Dessert {
//   constructor(calories = 250) {
//     this.calories = calories;
//   }
// }

// class IceCream extends Dessert {
//   constructor(flavor="Vanilla", calories=250, toppings = []) {
//     super(calories);
//     this.flavor = flavor;
//     this.toppings = toppings;
//   }
//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
//    listToppings() {
//     return this.toppings.join(", ");
//   }
// }

// const choco = new IceCream({ flavor: "Chocolate", calories: 300, toppings: ["nuts"] });
// console.log(choco.flavor);    // "Chocolate"
// console.log(choco.calories);  // 300
// console.log(choco.toppings);  // ["nuts"]

// const vanilla = new IceCream({ flavor: "Vanilla" });
// console.log(vanilla.flavor);    // "Vanilla"
// console.log(vanilla.calories);  // 250 (default)
// console.log(vanilla.toppings);  // []

// const plain = new IceCream();
// console.log(plain.flavor);    // undefined (no default given)
// console.log(plain.calories);  // 250
// console.log(plain.toppings);  // []



// console.log(vanilla.listToppings());



// class Plane {
//   constructor(numEngines) {
//     this.numEngines = numEngines;
//     this.enginesActive = false;
//   }

//   startEngines() {
//     console.log('starting engines…');
//     this.enginesActive = true;
//   }
// }

// console.log(Plane.prototype); 

// const sym1 = Symbol('apple');
// console.log(sym1);

// const bowl = {
//   [Symbol('apple')]: { color: 'red', weight: 136.078 },
//   [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
//   [Symbol('orange')]: { color: 'orange', weight: 170.097 },
//   [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
// };
// console.log(bowl);




// const arr = [1, 2, 2, 3];
// const unique = new Set(arr);

// const s=new Set ([...unique,...[4,5,6,6]])
// console.log(s)

// const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
// const iterator = months.values();
// console.log(iterator.next());

// const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
// for (const color of colors) {
//   console.log(color);
// }


// let person = {name: "John"};

// const weak = new Set();
// weak.add(person);

// console.log(weak.has(person)); // true

// person = null;
// console.log(person)
// console.log(weak)

// const employees = new Map();

// employees.set('james.parkes@udacity.com', { 
//     firstName: 'James',
//     lastName: 'Parkes',
//     role: 'Content Developer' 
// });
// employees.set('julia@udacity.com', {
//     firstName: 'Julia',
//     lastName: 'Van Cleve',
//     role: 'Content Developer'
// });
// employees.set('richard@udacity.com', {
//     firstName: 'Richard',
//     lastName: 'Kalehoff',
//     role: 'Content Developer'
// });

// let iteratorObjForValues = employees.values()
// console.log(iteratorObjForValues.next())
// console.log(iteratorObjForValues.next())
// console.log(iteratorObjForValues.next())
// console.log(employees)
// let book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
// let book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
// let book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

// const library = new WeakMap();

// library.set(book1, true);
// library.set(book2, false);
// library.set(book3, true);
// book1 = null
// console.log(library);

// function talk(lang, isPolite){
//     if (isPolite){
//     if (lang === 'en'){
//         return `Hello, I am ${this.name}`
//     } else if (lang === 'it'){
//         return `Ciao bella, sono ${this.name}`
//     }
//    }
//    if (!isPolite)  {
//         if (lang === 'en'){
//         return `${this.name}, what you want?`
//         } else if (lang === 'it'){
//         return `Sono ${this.name}`
//     }
//    } 
// }
// const me = {
//     name: 'Sina'
// }

// console.log(talk.call(me, 'it', true))
// console.log(talk.call(me, 'en', true))
// console.log(talk.call(me, 'it', false))
// console.log(talk.call(me, 'en', false))
// console.log(talk.apply(me, ['en', true]))

// function Person(n) {
//     this.name = n
//     this.talk = function(){
//             console.log(this)
//     }
//     setTimeout(() => {
//         console.log(this)
//     }, 100)
// }
// const me = new Person('Sina')
// // console.log(me.talk())

// 

// const myPromiseObj = new Promise(function (resolve, reject) {
  
// myPromiseObj.then(function(sundae) {
//     console.log(`Time to eat my delicious ${sundae}`);
// }, function(msg) {
//     console.log(msg);
//     self.goCry(); // not a real method
// });
// });

// console.log(myPromiseObj)

// const delayedMessage = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello after 1 seconds!");
//   }, 1000);
// });

// delayedMessage.then(msg => console.log(msg));

// const person = {};

// const proxyPerson = new Proxy(person, {
//   set(target, prop, value) {
//     if (prop === "age" && typeof value !== "number") {
//       throw new TypeError("Age must be a number!");
//     }
//     target[prop] = value;
//     return true;
//   }
// });

// proxyPerson.age = 25;   // works
// proxyPerson.age = "hi"; // throws error

// const person = { name: "Cynthia", age: 20 };

// const proxy = new Proxy(person, {
//   get(target, property) {
//     console.log(`Getting ${property}`);
//     return target[property];
//   },
//   set(target, property, value) {
//     console.log(`Setting ${property} to ${value}`);
//     target[property] = value;
//     return true; // must return true for success
//   }
// });

// console.log(proxy.name);     // "Getting name" → "Cynthia"
// console.log(proxy.age)       //"Getting age" → "21"  
// proxy.name = 'Umubyeyi '       //"Setting name to Umubyeyi"
// proxy.age = 21;              // "Setting age to 21"
// console.log(proxy.name);     // "Getting name" → "Umubyeyi"
// console.log(proxy.age)       //"Getting age" → "21"

// const richard = {status: 'looking for work'};
// const handler = {
//     set(target, propName, value) {
//         if (propName === 'payRate') { // if the pay is being set, take 15% as commission
//             value = value * 0.85;
//         }
//         target[propName] = value;
//     }
// };
// const agent = new Proxy(richard, handler);
// agent.payRate = 1000; // set the actor's pay to $1,000
// console.log(agent.payRate); // $850 the actor's actual pay

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = numbers();

// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }
// console.log(gen.next()); // { value: undefined, done: true }

// function* conversation() {
//   const name = yield "What’s your name?";
//   yield `Hello, ${name}!`;
// }

// const chat = conversation();
// console.log(chat.next().value);     // "What’s your name?"
// console.log(chat.next("Cynthia").value); // "Hello, Cynthia!"

// function* colors() {
//   yield "red";
//   yield "green";
//   yield "blue";
// }

// for (const color of colors()) {
//   console.log(color);
// }
// red, green, blue

// function* smallNumbers() {
//   yield 1;
//   yield 2;
// }

// function* bigNumbers() {
//   yield 100;
//   yield 200;
// }

// function* allNumbers() {
//   yield* smallNumbers(); // delegate
//   yield* bigNumbers();
// }

// for (const num of allNumbers()) {
//   console.log(num);
// }
// // 1, 2, 100, 200

// function* displayResponse() {
//     const response = yield;
//     console.log(`Your response is "${response}!"`);
// }

// const iterator = displayResponse();

// iterator.next();  // starts running the generator function
// iterator.next('Hello Udacity Student'); // send data into the generator
// // the line

// function* getEmployee() {
//     const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
//     const facts = [];

//     for (const name of names) {
//         // yield *out* each name AND store the returned data into the facts array
//         facts.push(yield name); 
//     }

//     return facts;
// }

// const generatorIterator = getEmployee();

// // get the first name out of the generator
// let name = generatorIterator.next().value;
 
// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is cool!`).value; 

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is awesome!`).value; 

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is stupendous!`).value; 

// // you get the idea
// name = generatorIterator.next(`${name} is rad!`).value; 
// name = generatorIterator.next(`${name} is impressive!`).value;
// name = generatorIterator.next(`${name} is stunning!`).value;
// name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// // pass the last data in, generator ends and returns the array
// const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// // displays each name with description on its own line
// console.log(positions.join('\n')); 

// if (!Array.prototype.includes) {
//   Array.prototype.includes = function(value) {
//     return this.indexOf(value) !== -1;
//   };
// }

// console.log(Array)

// new Promise((resolve) => {
//   console.log(1)
//   resolve(2)
// }).then(result => console.log(result))

// console.log(4)

// const promise = new Promise((resolve, reject) => {
//   console.log('Cythia')
//   let result = false;
//   if(result)
//     resolve('Done')
//   else
//     reject('Fail')
// })

// .then((message) => console.log(message))
// .catch((message) => console.log('ERROR! ' + message))
// .finally(() => console.log('Operation closed'))

// console.log('Theos')

// Creating a promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed successfully!");
//   } else {
//     reject("Something went wrong...");
//   }
// });

// // Using a promise
// myPromise
//   .then(result => {
//     console.log(result);
//     return "Next step!";
//   })
//   .then(step => {
//     console.log(step);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// console.log('A');

// const p = new Promise((res) => {
//   console.log('B');     // executor runs now
//   res('ok');            // settle now, but handlers queue
// });

// p.then(v => console.log('C', v));

// setTimeout(() => console.log('D'), 0);

// console.log('E');
// // Order: A, B, E, C ok, D

// function orderPizza() {
//   return new Promise((resolve, reject) => {
//     console.log("You placed a pizza order...");
    
//     setTimeout(() => {
//       const success = Math.random() > 0.3; // 30% chance success
//       if (success) {
//         resolve("🍕 Pizza is ready!");
//       } else {
//         reject("❌ Oven broke, no pizza...");
//       }
//     }, 2000); // takes 2 sec to "cook"
//   });
// }

// // Use the promise
// orderPizza()
//   .then(pizza => console.log("Customer:", pizza))
//   .catch(error => console.log("Customer:", error))
//   .finally(() => console.log("Customer: Leaving the restaurant"));

//   Promises from udacity

// new Promise(function(resolve) {
//   console.log('first');
//   resolve();
//   console.log('second');
// }).then(function() {
//   console.log('third');
// });

// main.js
// import describe, { circleArea, squareArea } from './lib.js';

// console.log(describe("circle"));      // "This is a circle."
// console.log(circleArea(3));           // 28.27...
// console.log(squareArea(4));           // 16

// new Promise((resolve, reject) => {
//   reject(2);  // start with 2
// })
// .catch(num => {
//   console.log("Step 1:", num);
//   return num * 2;  // pass 4
// })
// .catch(num => {
//   console.log("Step 2:", num);
//   return num + 3;  // pass 7
// })
// .catch(num => {
//   console.log("Step 3:", num); // final result 7
// });

// new Promise((resolve, reject) => {
//   resolve(2);  // start with 2
// })
// .then(num => {
//   console.log("Step 1:", num);
//   return num * 2;  // pass 4
// })
// .then(num => {
//   console.log("Step 2:", num);
//   return num + 3;  // pass 7
// })
// .then(num => {
//   console.log("Step 3:", num); // final result 7
// });


// const person = { name: "Cynthia", age: 21, country: "Rwanda", career: "Web development", hobby:'Poetry' };

// for (let [key,value] of Object.entries(person)){
//   console.log (`${key}: ${value}`)
// }
// const myMap = new Map(Object.entries(person))

// console.log(myMap)

// Write a function that takes an array of objects, where each object has a category property and a value property (which is a number). The function should return a new object where the keys are the categories and the values are the sum of the value properties for that category.
// const data = [
//   { category: 'A', value: 10 },
//   { category: 'B', value: 20 },
//   { category: 'A', value: 15 },
//   { category: 'C', value: 5 },
//   { category: 'B', value: 25 },
// ];

// const aggregated = aggregateByCategory(data);
// console.log(aggregated); // Output: { A: 25, B: 45, C: 5 }


// function totalCategories() {

// const data = [
//   { category: 'A', value: 10 },
//   { category: 'B', value: 20 },
//   { category: 'A', value: 15 },
//   { category: 'C', value: 5 },
//   { category: 'B', value: 25 },
// ];

// const totals = data.reduce((acc, { category, value }) => (
//   acc[category] = (acc[category] || 0) + value, acc
// ), {});

// return Object.entries(totals)


// }

// console.log(totalCategories())


// function sumByCategory(){


// const data = [
//   { category: 'A', value: 10 },
//   { category: 'B', value: 20 },
//   { category: 'A', value: 15 },
//   { category: 'C', value: 5 },
//   { category: 'B', value: 25 },
// ];


// const obj = {}


// for (const {category, value} of data){

//   obj[category] = (obj[category] || 0) + value

// }
//   return obj

// }
// console.log(sumByCategory())


// Write a function that takes an array of objects, where each object has an id and a name property. The function should return a new object where the keys are the id values and the values are the corresponding name values.
// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];

// const transformed = transformToObject(users);
// console.log(transformed); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }

// function transfromToObject(){
//   const transform = {}
//   const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];
//  for (const {id, name} of users){
//   transform[id] = name
//  }
//  return transform
// }
// console.log(transfromToObject())

// function groupByAndCount(){

//   const count = {}

// const items = [
//   { type: 'fruit' },
//   { type: 'vegetable' },
//   { type: 'fruit' },
//   { type: 'fruit' },
//   { type: 'vegetable' },
//   { type: 'grain' },
// ];

// for (const {type} of items){

//  count[type] = (count[type] || 0) + 1

// }
  
//  return count

// }


// console.log(groupByAndCount())


// Write a function that takes an array of objects, where each object has a name (string) and an age (number) property. The function should return a new array containing the names of all people older than 18, transformed to uppercase.
// const people = [
//   { name: 'Alice', age: 16 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 17 },
//   { name: 'David', age: 25 },
// ];

// const adults = filterAndMap(people);
// console.log(adults); // Output: ['BOB', 'DAVID']

// function filterAndMap(){
  
//   const people = [
//   { name: 'Alice', age: 16 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 17 },
//   { name: 'David', age: 25 },
// ];
//    return people.filter((people) => people.age > 18).map((people) => people.name.toUpperCase())
// }

// console.log(filterAndMap())

// Write a function that takes a nested array of numbers and returns a new array that is flattened (one level deep) and contains only the unique numbers, in ascending order.
// const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
// const result = flattenAndUnique(nestedArray);
// console.log(result); // Output: [1, 2, 3, 4, 5]

// function flattenAndUnique(){
//  const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3] 
//  return [...new Set(nestedArray.flat(Infinity))].sort((a, b) => a - b)
// }

// console.log(flattenAndUnique())

// function compare(){
//   const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];
//   return JSON.stringify(array1) === JSON.stringify(array2)
// }
// console.log(compare())

// const user = { id: 1, name: "Alice", age: 25, country: "Rwanda" };

// // Rest collects, Spread rebuilds
// const { id, ...restProps } = user;
// const clone = { ...restProps, id };

// console.log(restProps); 
// console.log(clone);     


// function tag(strings, ...values) {
//   console.log(strings); // array of literal strings
//   console.log(values);  // array of interpolated values
//   return "Processed string!";
// }

// const name = "Alice";
// const age = 25;

// const result = tag`My name is ${name} and I am ${age} years old.`;
// console.log(result); 


// const set = new Set([1,2,3,5,8]);

// console.log(set.delete(9)); // Set(2) {1, 3}

// const map = new Map();
// map.set("a", 1);
// map.set({x: 1}, 2); // object as key
// console.log(map);

 class Product{
  constructor(name, price){
    this.name = name
    this.price = price
  }
    getDetails(){
      return `${this.name} buys ${this.price}`
    }

    applyDiscount(discount, newAmount){
      newAmount = this.price - (this.price * discount)
      return newAmount
    }

  }

  const p1 = new Product("Chocolate", 7500)
  console.log(p1.getDetails())
  console.log(p1.applyDiscount(0.15))


 

