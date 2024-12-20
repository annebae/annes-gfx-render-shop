// script.js
const cart = [];
const products = document.querySelectorAll('.product');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Show Product Details
products.forEach(product => {
  product.querySelector('.details-btn').addEventListener('click', () => {
    document.getElementById('product-image').src = product.dataset.image;
    document.getElementById('product-name').textContent = product.dataset.name;
    document.getElementById('product-description').textContent = product.dataset.description;
    document.getElementById('product-price').textContent = product.dataset.price;
    productModal.classList.remove('hidden');

    document.getElementById('add-to-cart').onclick = () => {
      cart.push({
        name: product.dataset.name,
        price: Number(product.dataset.price)
      });
      updateCart();
      productModal.classList.add('hidden');
    };
  });
});

// Update Cart
function updateCart() {
  cartItems.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
}

// Show/Hide Cart
document.getElementById('view-cart').addEventListener('click', () => cartModal.classList.remove('hidden'));
document.getElementById('close-cart').addEventListener('click', () => cartModal.classList.add('hidden'));

// Hide Product Details
document.getElementById('close-details').addEventListener('click', () => productModal.classList.add('hidden'));

// Checkout
document.getElementById('checkout').addEventListener('click', () => alert('Thank you for your purchase!'));
