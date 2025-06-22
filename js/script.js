// Función para actualizar el carrito
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = cart.length > 0 
    ? cart.map((item, index) => `
        <div class="cart-item d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex align-items-center">
            <img src="${item.img}" width="40" class="rounded me-2" alt="${item.name}">
            <div>
              <h6 class="mb-0">${item.name}</h6>
              <small>$${item.price.toFixed(2)}</small>
            </div>
          </div>
          <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      `).join('')
    : '<p class="text-muted text-center">Tu carrito está vacío</p>';

  // Actualizar contador y total
  document.getElementById('cart-counter').textContent = cart.length;
  document.getElementById('cart-total').textContent = `$${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`;
}

// Manejar eliminación de items
document.addEventListener('click', (e) => {
  if (e.target.closest('.remove-item')) {
    const index = e.target.closest('.remove-item').dataset.index;
    cart.splice(index, 1);
    updateCartUI();
    
    // Mostrar notificación
    showToast('Producto eliminado del carrito');
  }
});