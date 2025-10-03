// ---------------------------------------------------- shallow copy ----------------------------------------------------------------------------- 

// Shallow copy → top-level is copied, nested objects/arrays still share reference

// 1. Spread operator (most common in arrays & objects)
const arr1 = [1, 2, [3, 4]];
const arr2 = [...arr1]; 
arr2[2][0] = 99;
console.log(arr1); // [1, 2, [99, 4]] → inner array affected

const obj1 = { name: "John", details: { age: 25 } };
const obj2 = { ...obj1 }; 
obj2.details.age = 30;
console.log(obj1.details.age); // 30 → nested still linked


// --------------------------------------------------- deep copy ---------------------------------------------------------------------------------

// Deep copy → new memory, fully independent

// 1. JSON.parse + JSON.stringify (most common for plain objects/arrays)
const obj3 = { name: "Alice", details: { age: 22 } };
const obj4 = JSON.parse(JSON.stringify(obj3)); 
obj4.details.age = 50;
console.log(obj3.details.age); // 22 → original not affected

// 2. structuredClone (modern & recommended, if supported)
const obj5 = { name: "Bob", details: { age: 30 } };
const obj6 = structuredClone(obj5);
obj6.details.age = 40;
console.log(obj5.details.age); // 30 → safe

// -----------------------------------------------------------------------------------------------------------
// Quick Summary:
// - Shallow copy: spread (...) / Object.assign()
// - Deep copy: JSON.parse(JSON.stringify()) / structuredClone()
