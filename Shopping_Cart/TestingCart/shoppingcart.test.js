const { totalCost } = require("./shoppingcart");
/**
 * Test Case:
 *  - Valid existing products + in stock products
 *  - Non-exiting product
 *  - Sold Out product
 */

const cart = [
  ["apple", 2],
  ["banana", 1],
];

test("Shopping Cart Valid Items", () => {
    const total = totalCost(cart);
  expect(total).toBe(5.5);
});

const cartNonExistent = [
    ["shoe", 1]
];


test("Shopping Cart Non Existent", ()=>{
    const total = totalCost(cartNonExistent);
    expect(total).toBe(0);
});

const soldOutCart = [
    ["apple", 1]
]

test("Shopping Cart with Sold out", ()=>{
    const total = totalCost(soldOutCart);
    expect(total).toBe(0);
});