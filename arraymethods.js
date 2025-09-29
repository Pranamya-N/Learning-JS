// ---------------------------------------------------------  map  -----------------------------------------------------------------
// Before: [1, 2, 3, 4]
// After: [2, 4, 6, 8] (each number doubled)

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled = [2, 4, 6, 8]

// Convert names to uppercase
const names = ['john', 'jane', 'mike'];
const upperNames = names.map(name => name.toUpperCase());
// ['JOHN', 'JANE', 'MIKE']

// Add currency symbol to prices
const prices = [100, 200, 300];
const pricesWithSymbol = prices.map(price => `$${price}`);
// ['$100', '$200', '$300']

// parameters of the map
// .map(element, index, array) -> they are the default parameters of the method 

const tripled = numbers.map((element, index, array) => {
    return element * element * element;
});
console.log("Tripled Cubes:", tripled);
// output: [1, 8, 27, 64] -> map creates a NEW array 

// ---------------------------------------------------------- filter -------------------------------------------------------------------
const abcd = [1, 2, 3, 4, 5, 6];
const evenNumbers = abcd.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4, 6]

const even = numbers.filter((num, index, array) => {
    const isEven = num % 2 === 0;
    console.log(`Number: ${num}, isEven: ${isEven}, index: ${index}`);
    return isEven; // only keep if true
});
console.log("Even (from numbers):", even);

// Filter with objects
const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 800, inStock: false },
  { id: 3, name: "Tablet", price: 500, inStock: true },
  { id: 4, name: "Headphones", price: 100, inStock: true },
  { id: 5, name: "Monitor", price: 300, inStock: false }
];

const appliedFilter = products.filter((item) => {
    if (item.inStock === true && item.price > 500) {
        console.log(`Product name: ${item.name}\tProduct price: ${item.price}`);
        return true;
    }
    return false;
});
console.log("Filtered Products:", appliedFilter);

// Chaining filter + map
const addDiscount = products
    .filter((item) => item.price >= 500)
    .map((item) => 0.15 * item.price);
console.log("Discounted prices (15% of original):", addDiscount);

// ---------------------------------------------------------- forEach -------------------------------------------------------------------
// forEach does NOT return anything, only used for side-effects

const animals = ["dog", "cat", "elephant"];
animals.forEach((animal, index, array) => {
    console.log(`Animal: ${animal}, Index: ${index}`);
});

// ---------------------------------------------------------- reduce -------------------------------------------------------------------
// reduce combines array elements into ONE single value

const bill = [100, 2000, 400, 50, 50000, 600, 70];
let initialVal = 0;

let finalbill = bill.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialVal); // Initial Value = 0

console.log("Final Bill (sum of all):", finalbill); // 30

// 🔑 Dry run note:
// With initial value → acc starts at 0
// Iteration 1: 0 + 1 = 1
// Iteration 2: 1 + 2 = 3
// Iteration 3: 3 + 4 = 7
// Iteration 4: 7 + 5 = 12
// Iteration 5: 12 + 5 = 17
// Iteration 6: 17 + 6 = 23
// Iteration 7: 23 + 7 = 30
// ✅ Final result = 30

