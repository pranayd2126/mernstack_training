import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
    const cartItems = getCartItems();
    const cartTotal = getCartTotal();
  // 2. Apply discount if coupon provided
    let discountDetails = {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: "No coupon applied",
    };
  // 3. Validate payment method (card/upi/cod)
    const validMethods = ["card", "upi", "cod"];
    if (!validMethods.includes(paymentMethod)) {
      return {  
        status: "failed",
        message: "Invalid payment method",
      };
    }
  // 4. Process payment (simulate)
    let finalAmount = cartTotal;
    if (couponCode) {   
        discountDetails = applyDiscount(cartTotal, couponCode, cartItems);
        finalAmount = discountDetails.finalTotal;
    }
    

  // 5. Reduce stock for all items
    cartItems.forEach((item) => {
        reduceStock(item.productId, item.quantity);
    });

  // 6. Clear cart
    clearCart();
  // 7. Generate order summary
    const orderId = generateOrderId();
    return {
      orderId,
      items: cartItems,
      subtotal: discountDetails.originalTotal,
      discount: discountDetails.discount,
      total: finalAmount,
      paymentMethod,
      status: "success",
      message: "Payment processed successfully",
    };
  // Return order summary:
  // {
  //   orderId: ...,
  //   items: [...],
  //   subtotal: ...,
  //   discount: ...,
  //   total: ...,
  //   paymentMethod: ...,
  //   status: 'success/failed',
  //   message: '...'
  // }

}

export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
    const validMethods = ["card", "upi", "cod"];
    return validMethods.includes(method);

}

function generateOrderId() {
  // Generate random order ID
  
  return "ORD" + Date.now();
}
