// PRODUCT & CART DATA
const products = {
  apple: {
    price: 2.0,
    inventory: 2,
  },

  banana: {
    price: 1.5,
    inventory: 1,
  },
};

const cart = [
  ["apple", 2],
  ["banana", 1],
  ["banana", 2],
];

// JAVASCRIPT + DOM 
const storeItems = document.getElementById("store-items");
const shoppingCart = document.getElementById("cart");
const cartTotal = document.getElementById("cart-total");

let sum = 0;

for (let keys in products) {
  const product = document.createElement("button");
  const productInfo = products[keys];

  product.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = keys;
    shoppingCart.appendChild(li);

    sum += productInfo.price
    cartTotal.textContent = sum;
  });

  product.textContent = keys;
  storeItems.appendChild(product);
}

// FUNCTIONS FOR TERMINAL-BASED 
/**
 * Loop through cart items. Cart is represented as a nested tuples ( array inside array).
 * For each item inside the cart ,check if that product exist and check if the inventory has enough amount
 * @param {[[string, number]]} cart cart full of items to purchase
 * @returns
 */
function totalCost(cart) {
  let sum = 0;

  for (const items in cart) {
    const item = cart[items];
    const itemName = item[0];
    const itemAmount = item[1];

    if (products[itemName]) {
      if (products[itemName].inventory >= itemAmount) {
        sum += products[itemName].price * itemAmount;
        console.log("Purchasing - " + itemName + " Current Sum = " + sum);
        updateInventory(itemName, products[itemName].inventory - itemAmount);
      } else {
        console.log(
          `You are attempting to purchase, ${itemName} , more than what's available in stock`
        );
      }
    } else {
      console.log("Product " + itemName + " is out of stock");
    }
  }
  return sum;
}

/**
 * Updates the inventory of products. Deletes the products if inventory reaches 0 amount.
 * @param {string} itemName name of the item
 * @param {number} newAmount new inventory amount of the item
 */
function updateInventory(itemName, newAmount) {
  if (newAmount === 0) {
    delete products[itemName];
  } else {
    products[itemName][inventory] = newAmount;
  }
}

// TESTING
const total = totalCost(cart);
console.log("Your Cart total: ", total);
console.log("Current Products In Stock: ", products);
