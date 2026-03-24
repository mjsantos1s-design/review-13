"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Michael Santos
   Date:   
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 
 

//4-6 are here

window.addEventListener("load", function() {
calcCart()
   cartForm.elements.modelQty.onchange = calcCart;

   var shippingOptions = document.querySelectorAll('input[name="shipping"]');
   for (var i = 0; i < shippingOptions.length; i++) {
      shippingnOptions[i].onclick = calcCart;
   }
});

function calcCart() {
   var cartForm = document.forms.cart;

   var mCost = cartForm.elements.modelCost.value;
   var qIndex = cartForm.elements.modelQty.selectedIndex;
   var quantity = cartForm.elements.modelQty[qIndex].value;


   var orderCost = mCost*quantity;
   cartForm.elements.orderCost.value = formatUSCurrency(orderCost);

   var shipCost = document.querySelector('input[name="shipping"]:checked').value*quantity;
   orderForm.elements.protectionCost.value = formatUSCurrency(pCost, 2);

      //Calculate the order subtotal
   orderForm.elements.subtotal.value = formatUSCurrency(orderCost + shipCost, 2);

   //Calculate the sales tax
   var salesTax = 0.05*(orderCost + shipCost);
   orderForm.elements.salesTax.value = formatUSCurrency(salesTax, 2);
   
   //Calculate the cost of the total order
   var totalCost = orderCost + shipCost + salesTax;
   orderForm.elements.totalCost.value = formatUSCurrency(totalCost);
}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
