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


const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


for (const day of days){
    var upperDay = day.charAt(0).toUpperCase() + day.slice(1)
    console.log(upperDay)
}