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

// Async/Await version
async function makePizza() {
  try {
    const dough = await makeDough();               // wait for dough
    const preparedDough = await addToppings(dough); // wait for toppings
    const pizza = await bakePizza(preparedDough);   // wait for baking
    console.log("🎉 Final Result:", pizza);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

makePizza();


/*✅ Reject → goes to catch block

  ✅ Resolve → goes to the variable and continues execution*/

// the dough will contain the resolved value and the resolved value will be passed to the addTopings and similarly the prepareDough will contain the resolved value of the addToppings and it will be passed to the another function in this way the code runs 