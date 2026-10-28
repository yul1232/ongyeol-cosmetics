const recentContainer = document.querySelector('#recent-products');
if (recentContainer) {
  let recentIds = [];
  try {
    const saved = JSON.parse(localStorage.getItem('ongyeol-recent-products') || 'null');
    if (Array.isArray(saved)) recentIds = saved;
  } catch {}
  if (!recentIds.length) {
    try {
      const saved = JSON.parse(sessionStorage.getItem('ongyeol-recent-products') || '[]');
      if (Array.isArray(saved)) recentIds = saved;
    } catch {}
  }
  const viewedProducts = recentIds.map(id => products.find(product => product.id === id)).filter(Boolean);
  const renderRecent = () => {
    recentContainer.innerHTML = viewedProducts.length
      ? viewedProducts.map(cardMarkup).join('')
      : '<div class="recent-empty"><p>최근 본 상품이 아직 없어요.</p><a class="button button-dark" href="search.html">제품 둘러보기</a></div>';
  };
  renderRecent();
  document.querySelector('#clear-recent')?.addEventListener('click', () => {
    try { localStorage.removeItem('ongyeol-recent-products'); } catch {}
    try { sessionStorage.removeItem('ongyeol-recent-products'); } catch {}
    viewedProducts.length = 0;
    renderRecent();
  });
}
