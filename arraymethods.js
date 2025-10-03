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

// ---------------------------------------------------------- find ⭐ -------------------------------------------------------------------
// Purpose: returns the FIRST element that matches condition OR undefined if not found
// Parameters: (element, index, array)
// Returns: single element OR undefined

const fruits = ["apple", "banana", "cherry", "banana"];

const foundFruit = fruits.find((fruit, index, array) => {
    return fruit === "banana";
});
console.log("Find first banana:", foundFruit); // "banana"


// ---------------------------------------------------------- some ⭐ -------------------------------------------------------------------
// Purpose: checks if ANY element matches condition
// Parameters: (element, index, array)
// Returns: boolean (true/false)

const marks = [40, 55, 80, 90];

const hasPassed = marks.some((mark, index, array) => {
    return mark >= 50;
});
console.log("Has any student passed?", hasPassed); // true


// ---------------------------------------------------------- every ⭐ -------------------------------------------------------------------
// Purpose: checks if ALL elements match condition
// Parameters: (element, index, array)
// Returns: boolean (true/false)

const allPassed = marks.every((mark, index, array) => {
    return mark >= 50;
});
console.log("Did all students pass?", allPassed); // false


// ---------------------------------------------------------- includes ⭐ -------------------------------------------------------------------
// Purpose: checks if array contains a given value
// Parameters: (searchElement, fromIndex [optional])
// Returns: boolean (true/false)

const pets = ["dog", "cat", "parrot"];

const hasCat = pets.includes("cat");
const hasRabbit = pets.includes("rabbit");

console.log("Includes cat?", hasCat); // true
console.log("Includes rabbit?", hasRabbit); // false


// ---------------------------------------------------------- indexOf -------------------------------------------------------------------
// Purpose: finds the index of an element (first match), -1 if not found
// Parameters: (searchElement, fromIndex [optional])
// Returns: number (index or -1)

const catIndex = pets.indexOf("cat");
const rabbitIndex = pets.indexOf("rabbit");

console.log("Index of 'cat':", catIndex); // 1
console.log("Index of 'rabbit':", rabbitIndex); // -1


// ---------------------------------------------------------- slice ⭐ -------------------------------------------------------------------
// Purpose: extracts a portion of array, does NOT modify original
// Parameters: (startIndex, endIndex [not included])
// Returns: NEW array

const colors = ["red", "green", "blue", "yellow"];

const slicedColors = colors.slice(1, 3);
console.log("Sliced colors:", slicedColors); // ["green", "blue"]
console.log("Original colors:", colors); // ["red", "green", "blue", "yellow"]


// ---------------------------------------------------------- splice -------------------------------------------------------------------
// Purpose: removes/replaces/adds items, modifies original array
// Parameters: (startIndex, deleteCount, item1, item2, ...)
// Returns: array of removed elements

const letters = ["a", "b", "c", "d"];

const removed = letters.splice(1, 2, "z"); 
// remove 2 from index 1 → "b", "c"
// insert "z" at index 1
console.log("Spliced letters:", letters); // ["a", "z", "d"]
console.log("Removed items:", removed); // ["b", "c"]


// ---------------------------------------------------------- concat ⭐ -------------------------------------------------------------------
// Purpose: merges arrays, does NOT modify originals
// Parameters: (array1, array2, ...)
// Returns: NEW array

const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = arr1.concat(arr2);
console.log("Concatenated:", combined); // [1, 2, 3, 4]


// ---------------------------------------------------------- sort ⭐ -------------------------------------------------------------------
// Purpose: sorts array elements, modifies original array
// Parameters: (compareFunction)
// Returns: sorted array (same reference as original)

const nums = [5, 1, 10, 2];

nums.sort((a, b) => {
    return a - b; // ascending order
});
console.log("Sorted numbers:", nums); // [1, 2, 5, 10]


// ---------------------------------------------------------- reverse -------------------------------------------------------------------
// Purpose: reverses order of array, modifies original
// Parameters: none
// Returns: reversed array (same reference as original)

const days = ["Mon", "Tue", "Wed"];

const reversedDays = days.reverse();
console.log("Reversed days:", reversedDays); // ["Wed", "Tue", "Mon"]


// ---------------------------------------------------------- spread operators ------------------------------------------------------------

const even_number = [2,4,6,8,10]
const odd_number = [1,3,5,7,9]
const all_numbers = [...even_number,...odd_number,500] // we can also add numbers like this in the spread operator which makes it more usable then the concat  l
console.log("spread opertor works in this way ",all_numbers);
console.log(typeof(all_numbers))


//-------------------------------------------------------------------------------------------------------------------------------------------------