// ===================================================================
// Synchronous vs Asynchronous
// ===================================================================
// - Synchronous programming → Executes line by line.
// - Asynchronous programming → Execution is not strictly line by line;
//   tasks can finish later depending on delays.
// ===================================================================

// setTimeout(function, delay, arguments...)
// Example of asynchronous execution
function greet(name) {
  setTimeout(() => { console.log(`hello ${name}`); }, 3000);
}
greet("Pranamya");

// ===================================================================
// Callback Functions
// ===================================================================
// - A callback is a function passed as an argument to another function.
// - Useful for handling async or delayed tasks.
// ===================================================================

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, callback) {
  callback(a, b);
}
calculator(2, 3, sum);

// Alternative way using default parameter with arrow function
const addition = (a, b, add = (a, b) => { console.log(a + b); }) => {
  add(a, b);
};
addition(4, 5);

// Note: setTimeout is also an example of a callback function.

// ===================================================================
// Callback Hell
// ===================================================================
// - Happens when multiple callbacks are nested inside each other.
// - Leads to messy and hard-to-read code.
// ===================================================================

function getData(dataId, callback) {
  setTimeout(() => console.log(`Data ${dataId}`), 2000);
  if (callback) {
    callback();
  }
}

// Example of callback hell (nested structure)
getData(2, () => { getData(3, () => getData(4)); });

// ===================================================================
// Promises
// ===================================================================
// - Promises help solve callback hell by providing a cleaner way
//   to handle async operations.
// - Syntax: const promise = new Promise((resolve, reject) => {...})
// - States: pending → fulfilled (resolved) OR rejected.
// ===================================================================

const promise = new Promise((resolve, reject) => {
  const data = 123;
  if (data) {
    resolve("success");
  } else {
    reject();
  }
});

promise
  .then(() => { console.log("success"); })
  .catch(() => { console.log("failure"); });
// finally → always runs regardless of success or failure

console.log(promise);

// Another example with setTimeout inside a promise
function getData() {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      let abcd = 123;
      if (abcd ) {
        resolve("Task is done");
      } else {
        reject("Task is not done");
      }
    }, 2000);
  });
}

getData()
  .then(() => { console.log("Task is done "); })
  .catch(() => { console.log("Task is not done ") });

console.log(getData());

// ===================================================================
// Promise Chaining
// ===================================================================
// - Each .then() can return a value or another promise.
// - The next .then() receives that return value, allowing sequential
//   async execution without nesting (solves callback hell).
// ===================================================================

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = 123;
    if (data) {
      resolve("Promise1 success");
    } else {
      reject("Promise1 failure");
    }
  }, 4000);
});

function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let abcd = 123;
      if (abcd) {
        resolve("Task is done");
      } else {
        reject("Task is not done");
      }
    }, 3000);
  });
}

// Chaining the promises
getData1()
  .then(() => {
    console.log("The task is done");
    return promise1;
  })
  .then((data) => {
    console.log(data);
  });
// i am returning the promise1, the next then is of the promise1
// and is equivalent to promise1.then, but the return syntax works in the chain
// [the return statement is the most important part]

// Parameterized promises

function makeDough() {
  return new Promise((resolve, reject) => {
    console.log("Making the pizza dough...");
    let bakingTime = Math.floor(Math.random() * 4000) + 1000; // random 1-5s

    setTimeout(() => {
      if (bakingTime <= 3000) {
        console.log("✅ Pizza dough is ready");
        resolve("Dough");
      } else {
        reject("❌ Pizza dough is burnt");
      }
    }, bakingTime);
  });
}

function addToppings(dough) {
  return new Promise((resolve, reject) => {
    console.log("Adding toppings...");
    let success = Math.random() > 0.2; // 80% chance success

    setTimeout(() => {
      if (success) {
        console.log("✅ Toppings added");
        resolve(dough + " with toppings");
      } else {
        reject("❌ Failed to add toppings");
      }
    }, 2000);
  });
}

function bakePizza(preparedDough) {
  return new Promise((resolve, reject) => {
    console.log("Baking pizza...");
    let bakingTime = Math.floor(Math.random() * 3000) + 1000;

    setTimeout(() => {
      if (bakingTime <= 3500) {
        console.log("🔥 Pizza is baked!");
        resolve(preparedDough + " → Ready Pizza 🍕");
      } else {
        reject("❌ Pizza burnt in oven");
      }
    }, bakingTime);
  });
}

// Chain them together
makeDough()
  .then(dough => addToppings(dough))
  .then(preparedDough => bakePizza(preparedDough))
  .then(finalPizza => console.log("🎉 Final Result:", finalPizza))
  .catch(error => console.error(error));

// here make dough is resolved first and it returns the addToppings(dough)
// the dough passed is the resolved of the makeDough and in the same way the preparedDough
// function is passed and it works in the same way


/*
Promise Chain Diagram:

makeDough()
   |
   | resolve("Dough")
   v
addToppings(dough)
   |
   | resolve("Dough with toppings")
   v
bakePizza(preparedDough)
   |
   | resolve("Ready Pizza 🍕")
   v
.then(finalPizza => console.log(finalPizza))

Step-by-step explanation:
1. makeDough() starts baking dough.
   - When done, it resolves "Dough".
2. The resolved "Dough" is passed to addToppings(dough).
   - When toppings are added, it resolves "Dough with toppings".
3. "Dough with toppings" is passed to bakePizza(preparedDough).
   - When baked, it resolves "Ready Pizza 🍕".
4. The final .then() prints the final result.

Reject/Error flow:
- If any step fails (reject), the .catch(error) handles it.
*/
// if there was parameters to be passed then you can do 


/* makeDough(1000, 5000)
  .then((dough) => {
    return addCheese(dough, 1000, 3000);
  })
  .then((cheesyDough) => {
    return bakePizza(cheesyDough, 2000, 4000);
  })
  .then((pizza) => {
    console.log("✅ Final result:", pizza);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });



  for the fucntion makedough (it takes two parameters) bake pizza (it takes 3 parameters) add cheese(it takes 3 parameters)
  */

  