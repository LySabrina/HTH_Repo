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
