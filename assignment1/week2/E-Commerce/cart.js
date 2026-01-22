import { getProductById, checkStock } from "./product.js";

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {

  // 1. Get product details
   const product= getProductById(productId);
  // 2. Check stock availability
  if(!checkStock(productId,quantity)){
    return 'Insufficient stock';
  }
  // 3. Check if product already in cart
  const existingItem = cartItems.find((item) => item.productId === productId);

  if (existingItem) {
    
    cartItems = cartItems.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    );
  } else {
    cartItems.push({
      productId,
      name: product.name,
      price: product.price,
      quantity,
    });
  }
}

export function removeFromCart(productId) {
  const index = cartItems.findIndex((item) => item.productId === productId);

  if (index === -1) {
    return "Error: Item not found in cart";
  }

  cartItems.splice(index, 1); 
  return "Success: Item removed from cart";
}


export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating


   const item = cartItems.find((item) => item.productId === productId);

   if (!item) {
     return "Error: Item not found in cart";
   }

    if (!checkStock(productId, newQuantity)) {
      return " Insufficient stock";
    }
     item.quantity = newQuantity;
     return "  Quantity updated";
}

export function getCartItems() {
  // Return all cart items with product details
    return cartItems;
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

export function clearCart() {
  // Empty the cart
    cartItems = [];
}
