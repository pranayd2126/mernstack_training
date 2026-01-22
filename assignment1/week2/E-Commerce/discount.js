// Available coupons
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  const coupon = coupons[couponCode];
  if (!coupon) {
    return"Invalid coupon code" ;
  }
  // 2. Check minimum amount requirement
    if (cartTotal < coupon.minAmount) {
        return `Cart total must be at least ₹${coupon.minAmount} to use this coupon`;
    }
  // 3. Check category requirement (if any)
    if (coupon.category) {
        const hasCategoryItem = cartItems.some(
            (item) => item.category === coupon.category
        );
  // Return { valid: true/false, message: '...' }
        if (!hasCategoryItem) {
            return `Coupon applicable only on ${coupon.category} products`;
        }       
    }
  return { valid: true, message: "Coupon is valid" };
}

export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
    const coupon = coupons[couponCode];
    if (coupon.type === "percentage") {
        return (cartTotal * coupon.value) / 100;
    } else if (coupon.type === "flat") {
        return coupon.value;
    }
  // Return discount amount
      return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  // 1. Validate coupon
    const validation = validateCoupon(couponCode, cartTotal, cartItems);
if (!validation.valid) {
  return {
    originalTotal: cartTotal,
    discount: 0,
    finalTotal: cartTotal,
    message: validation.message,
  };
}
  // 2. If valid, calculate discount
    const discount = calculateDiscount(couponCode, cartTotal);
      const finalTotal = Math.max(cartTotal - discount, 0);
  // 3. Return final amount and discount details
     return {
       originalTotal: cartTotal,
       discount,
       finalTotal,
       message: "Coupon applied successfully",
     };
  // Return {
  //   originalTotal: ...,
  //   discount: ...,
  //   finalTotal: ...,
  //   message: '...'
  // }

}
