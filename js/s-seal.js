 let cartItems = document.querySelector('.cart-items').children;

if (cartItems.length === 0) {
    document.querySelector('.empty-cart').style.display = 'block';
}

// Update total price based on cart items

let totalPrice = 0;
const prices = [100, 200]; // Example product prices
const quantities = [1, 2]; // Example quantities
for (let i = 0; i < cartItems.length; i++) {
    totalPrice += prices[i] * quantities[i];
}


document.querySelector('.total-price').textContent = `المجموع: ${totalPrice} ريال`;
document.querySelector('.total-price').textContent = `المجموع: ${totalPrice} ريال`;
