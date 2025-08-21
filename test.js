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

class Dessert {
  constructor(calories = 250) {
    this.calories = calories;
  }
}

class IceCream extends Dessert {
  constructor(flavor="Vanilla", calories=250, toppings = []) {
    super(calories);
    this.flavor = flavor;
    this.toppings = toppings;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
   listToppings() {
    return this.toppings.join(", ");
  }
}

const choco = new IceCream({ flavor: "Chocolate", calories: 300, toppings: ["nuts"] });
console.log(choco.flavor);    // "Chocolate"
console.log(choco.calories);  // 300
console.log(choco.toppings);  // ["nuts"]

const vanilla = new IceCream({ flavor: "Vanilla" });
console.log(vanilla.flavor);    // "Vanilla"
console.log(vanilla.calories);  // 250 (default)
console.log(vanilla.toppings);  // []

const plain = new IceCream();
console.log(plain.flavor);    // undefined (no default given)
console.log(plain.calories);  // 250
console.log(plain.toppings);  // []



console.log(vanilla.listToppings());
