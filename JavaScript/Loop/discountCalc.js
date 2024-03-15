// Write a JavaScript function that calculates discounts based on promo codes inputs: a promo code and an amount, and calculates the discounted amount based on the 
// promo code entered. There are two promo codes: "KARIBU" and "NAIROBI".
// If the promo code is "KARIBU", a 40% discount is applied, and if the promo code is "NAIROBI", a 25% discount is applied. If any other promo code is entered, no 
// discount is applied. The function should update the output on the webpage with the discounted amount.



function calculateDiscount(originalAmount, promoCode) {
    let discountedAmount = originalAmount;
  
    if (promoCode === "KARIBU") {
      discountedAmount = originalAmount * 0.6; 
    } else if (promoCode === "NAIROBI") {
      discountedAmount = originalAmount * 0.75;
    } else{
    document.getElementById("originalAmount").innerHTML = originalAmount
    }
    document.getElementById("discountedPrice").innerHTML = `Discounted Price: ${discountedAmount.toFixed(2)}`;
  }
  
  const applyDiscountButton = document.getElementById("applyDiscount");

  applyDiscountButton.onclick = function() {
    const promoCode = document.getElementById("promoCodeInput").value;
    const originalAmount = parseFloat(document.getElementById("originalAmount").value); 
    calculateDiscount(originalAmount, promoCode); 
  };
  
  


