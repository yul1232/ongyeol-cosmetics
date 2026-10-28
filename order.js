const checkoutButton = document.querySelector('#checkout-button');
function updateCheckoutButton() {
  if (checkoutButton) checkoutButton.disabled = getCart().length === 0;
}
updateCheckoutButton();
document.addEventListener('ongyeol-cart-updated', updateCheckoutButton);
checkoutButton?.addEventListener('click', () => {
  if (getCart().length) window.location.href = 'checkout.html';
});

const checkoutItems = document.querySelector('#checkout-items');
if (checkoutItems) {
  const cart = getCart().filter(item => products.some(product => product.id === item.id));
  if (!cart.length) {
    checkoutItems.innerHTML = '<p class="checkout-empty">장바구니가 비어 있어요. <a href="search.html">제품 둘러보기</a></p>';
    const submitButton = document.querySelector('.checkout-submit');
    if (submitButton) submitButton.disabled = true;
  } else {
    const subtotal = cart.reduce((sum, item) => {
      const product = products.find(entry => entry.id === item.id);
      return sum + product.price * item.quantity;
    }, 0);
    checkoutItems.innerHTML = cart.map(item => {
      const product = products.find(entry => entry.id === item.id);
      return `<div class="checkout-item"><span>${product.name} <small>× ${item.quantity}</small></span><strong>${money(product.price * item.quantity)}</strong></div>`;
    }).join('');
    document.querySelector('#checkout-subtotal').textContent = money(subtotal);
    document.querySelector('#checkout-total').textContent = money(subtotal);
  }
}

const checkoutForm = document.querySelector('#checkout-form');
checkoutForm?.addEventListener('submit', event => {
  event.preventDefault();
  const message = document.querySelector('#checkout-message');
  if (!getCart().length) {
    message.textContent = '장바구니가 비어 있어 주문 정보를 확인할 수 없습니다.';
    return;
  }
  if (!checkoutForm.reportValidity()) return;
  message.textContent = '입력한 배송 정보를 확인했습니다. 시안 화면이므로 실제 주문·결제는 처리되지 않았습니다.';
  message.classList.add('is-success');
  checkoutForm.querySelector('.checkout-submit').textContent = '정보 확인 완료';
});
