const recentStorageKey = 'ongyeol-recent-products';
if (selected.image) {
  const detailVisual = document.querySelector('#detail-visual');
  if (detailVisual) {
    detailVisual.removeAttribute('role');
    detailVisual.removeAttribute('aria-label');
    detailVisual.classList.add('has-product-photo');
    detailVisual.innerHTML = `<img class="detail-product-photo" src="${selected.image}" alt="${selected.name} 제품 사진">`;
  }
}
let recentProductIds = [];
try {
  const saved = JSON.parse(localStorage.getItem(recentStorageKey) || '[]');
  if (Array.isArray(saved)) recentProductIds = saved;
} catch {}
recentProductIds = [selected.id, ...recentProductIds.filter(id => id !== selected.id)].slice(0, 12);
try { localStorage.setItem(recentStorageKey, JSON.stringify(recentProductIds)); }
catch { try { sessionStorage.setItem(recentStorageKey, JSON.stringify(recentProductIds)); } catch {} }

const productTabs = [...document.querySelectorAll('.detail-tabs a')];
const descriptionPanel = document.querySelector('#description');
if (descriptionPanel && productTabs.length) {
  const ingredientsPanel = document.createElement('div');
  ingredientsPanel.id = 'ingredients';
  ingredientsPanel.className = 'description-copy product-tab-panel';
  ingredientsPanel.hidden = true;
  ingredientsPanel.innerHTML = `<p class="eyebrow">INGREDIENTS</p><h2>주요 성분 안내</h2><p class="ingredient-name" id="tab-ingredients"></p><p id="tab-concern"></p><p class="disclaimer">성분과 피부 고민 정보는 기획 시안을 위한 예시이며 실제 상품 정보로 교체해야 합니다.</p>`;
  const reviewsPanel = document.createElement('div');
  reviewsPanel.id = 'reviews';
  reviewsPanel.className = 'description-copy product-tab-panel review-panel';
  reviewsPanel.hidden = true;
  reviewsPanel.innerHTML = `<p class="eyebrow">CUSTOMER REVIEWS</p><h2>구매 후기</h2><p class="review-summary"><strong>★★★★★</strong> <span id="tab-rating"></span> · 후기 <span id="tab-review-count"></span></p><p class="review-demo-note">아래 리뷰는 화면 구성을 위한 예시 콘텐츠이며 실제 구매자 후기가 아닙니다.</p><div id="review-list" class="review-list"></div><button id="more-reviews" class="more-reviews" type="button">리뷰 더 보기</button>`;
  descriptionPanel.insertAdjacentElement('afterend', ingredientsPanel);
  ingredientsPanel.insertAdjacentElement('afterend', reviewsPanel);
  document.querySelector('#tab-ingredients').textContent = selected.ingredients;
  document.querySelector('#tab-concern').textContent = `피부 고민: ${selected.concern}`;
  document.querySelector('#tab-rating').textContent = selected.rating;
  document.querySelector('#tab-review-count').textContent = selected.reviews;
  document.querySelector('.detail-info .rating span').textContent = `${selected.rating} · 후기 ${selected.reviews}`;
  productTabs[2].textContent = `리뷰 (${selected.reviews})`;
  const reviewOpeners = ['배송받고 며칠 사용해본 뒤 남기는 후기예요.', '아침저녁 루틴에 넣어 꾸준히 사용 중이에요.', '민감한 편이라 성분을 확인하고 골랐어요.', '첫 구매라 기대 반 걱정 반으로 써봤어요.', '계절이 바뀌면서 관리가 필요해 주문했어요.', '일주일 정도 사용해보고 적어봅니다.', '평소 쓰던 제품과 비교해보려고 구매했어요.', '패키지가 깔끔하고 사용하기 편하네요.', '자극이 걱정돼 처음에는 소량만 사용했어요.', '피부가 건조하게 느껴져 루틴을 바꿔봤어요.', '사용감이 궁금해서 주문해봤습니다.'];
  const reviewExperiences = {
    'calm-serum': ['발림성이 가볍고 금방 흡수되는 편이에요.', '겉돌지 않고 촉촉하게 마무리돼서 손이 자주 가요.', '한 번에 많이 바르지 않아도 충분히 펴 발려요.', '끈적임이 적어서 아침에도 부담이 덜해요.', '향이 강하지 않아 편하게 사용하고 있어요.', '세안 후 첫 단계에 바르기 좋은 제형이에요.', '건조한 부위에 덧발라도 무겁지 않았어요.', '용기 입구가 깔끔해서 양 조절하기 쉬워요.', '흡수가 빨라 다음 단계 제품을 바르기 편해요.', '며칠 써보니 사용감이 마음에 들어 계속 써보려 해요.', '촉촉하지만 번들거림이 적은 점이 좋았어요.', '민감한 날에도 부담 없이 손이 가는 편이에요.', '가벼운 세럼을 찾고 있었는데 제 취향에 맞아요.'],
    'barrier-cream': ['부드럽게 펴 발리고 마무리감이 편안해요.', '생각보다 무겁지 않아 낮에도 잘 쓰고 있어요.', '건조한 부분에 바르기 좋고 보습감이 오래 가요.', '크림이 부드러워 소량으로도 넓게 펴 발려요.', '끈적임이 적어 잠들기 전 사용하기 괜찮아요.', '피부에 얇게 밀착되는 느낌이 마음에 들어요.', '향이 은은하거나 거의 느껴지지 않아 편해요.', '환절기 보습용으로 두고 쓰기 좋네요.', '용기에서 덜어 쓰기 편하고 제형도 깔끔해요.', '아침에 발라도 메이크업 전에 밀리지 않았어요.', '보습 제품을 찾다가 골랐는데 사용감이 무난해요.', '건조함이 느껴질 때 덧발라 쓰고 있어요.', '촉촉한 마무리를 좋아하는 분께 잘 맞을 것 같아요.'],
    'mild-cleanser': ['거품이 부드럽고 세안할 때 자극이 덜한 느낌이에요.', '물로 헹군 뒤 미끌거림이 많이 남지 않아 좋아요.', '세안 후 당김이 덜해서 아침에도 쓰고 있어요.', '젤 제형이라 양 조절이 쉬운 편이에요.', '향이 강하지 않아 매일 사용하기 편해요.', '세정력이 과하게 느껴지지 않아 만족합니다.', '조금만 덜어도 거품이 잘 나서 오래 쓸 것 같아요.', '아침 세안용으로 사용하기 무난해요.', '튜브가 단단히 닫혀 보관하기 편합니다.', '세안 후 바로 보습제를 찾게 되는 느낌이 덜해요.', '가벼운 메이크업 잔여감 정리용으로 쓰고 있어요.', '헹굼이 빨라 바쁜 아침에 편합니다.', '순한 젤 클렌저를 찾던 중이라 잘 고른 것 같아요.'],
    'daily-toner': ['물처럼 가벼워 여러 번 덧바르기 편해요.', '세안 후 피부에 산뜻하게 발려서 좋았습니다.', '화장솜이나 손으로 모두 사용하기 괜찮아요.', '끈적임이 거의 없어 다음 단계로 넘어가기 편해요.', '용기가 깔끔하고 양 조절도 쉬운 편이에요.', '아침저녁으로 부담 없이 사용하고 있어요.', '향이 진하지 않아 편안하게 느껴져요.', '건조할 때 한 번 더 덧발라 쓰기 좋아요.', '흡수가 빠른 토너를 찾고 있었는데 마음에 듭니다.', '피부에 겉도는 느낌이 적어 만족해요.', '매일 쓰기 무난한 기본 토너 같아요.', '산뜻한 마무리라 여름에도 잘 쓸 것 같아요.', '세안 뒤 첫 단계로 두고 쓰고 있습니다.'],
    'calming-pad': ['패드가 부드러워 피부에 문지를 때 부담이 적어요.', '한 장씩 꺼내기 편하고 에센스도 충분한 편이에요.', '볼에 잠깐 올려두기 좋은 크기라 편해요.', '사용 후 끈적임이 적어 아침에도 괜찮아요.', '뚜껑이 잘 닫혀 보관하기 편합니다.', '세안 후 간편하게 정돈하는 단계로 쓰고 있어요.', '패드 표면이 거칠지 않아 마음에 들어요.', '에센스가 과하게 흐르지 않아 사용하기 편해요.', '바쁜 날 간단한 루틴으로 쓰기 좋네요.', '한 장으로 얼굴 전체를 닦기 충분했어요.', '향이 강하지 않아 매일 쓰기 부담이 덜해요.', '냉장고에 넣어뒀다가 사용하면 산뜻해요.', '패드 제품을 찾다가 골랐는데 사용감이 무난해요.'],
    'daily-sunscreen': ['부드럽게 펴 발리고 백탁이 도드라지지 않아요.', '촉촉한 편이라 건조한 날에도 쓰기 편했습니다.', '끈적임이 적어 출근 전에 바르기 좋아요.', '향이 강하지 않아 데일리로 사용하고 있어요.', '메이크업 전에 발라도 밀림이 적은 편이에요.', '튜브형이라 가방에 넣고 다니기 편합니다.', '덧발라도 답답함이 크지 않아 마음에 들어요.', '마무리가 번들거리지 않아 사용하기 괜찮아요.', '눈가에 가까이 바를 때도 크게 불편하지 않았어요.', '가벼운 선크림을 찾고 있었는데 잘 맞아요.', '바르는 과정이 편해서 매일 손이 가네요.', '촉촉한 사용감을 선호하는 분께 잘 맞을 것 같아요.', '여러 번 덧바르기 편한 제형이라 만족합니다.'],
    'soothing-gel': ['젤 제형이라 산뜻하고 흡수가 빠른 편이에요.', '끈적임이 적어 더운 날에도 잘 쓰고 있어요.', '가볍게 펴 발려 아침 루틴에 넣기 좋습니다.', '수분감은 있으면서 무겁지 않은 점이 마음에 들어요.', '향이 강하지 않아 편하게 사용할 수 있어요.', '메이크업 전에 써도 부담이 적었어요.', '피부에 얇게 발리는 느낌이 산뜻합니다.', '크림이 무겁게 느껴지는 날 사용하기 좋아요.', '튜브형이라 위생적으로 덜어 쓰기 편해요.', '흡수가 빨라 다음 단계로 넘어가기 수월합니다.', '가벼운 보습 제품을 찾던 중 잘 고른 것 같아요.', '끈적한 마무리를 싫어하는 편이라 만족해요.', '여름철 데일리 보습용으로 두고 쓰려 합니다.'],
    'travel-set': ['구성품을 한 번에 사용해볼 수 있어 편해요.', '여행이나 외박할 때 챙기기 좋은 구성이네요.', '제품별 사용 순서가 직관적이라 시작하기 쉬웠어요.', '기본 루틴을 맞춰볼 수 있어 만족합니다.', '세 가지 제품을 함께 써볼 수 있어 좋았어요.', '선물용으로도 부담 없는 깔끔한 구성이에요.', '제품 크기가 적당해 보관하기 편합니다.', '처음 온결 제품을 써보는 분께 괜찮을 것 같아요.', '세안부터 보습까지 순서대로 써보기 편했어요.', '여러 제품을 따로 고르지 않아도 돼서 좋네요.', '구성이 깔끔하고 포장도 단정하게 도착했어요.', '하나씩 써보며 제형을 비교하기 좋았습니다.', '평소 간단한 스킨케어를 선호해 잘 맞았어요.']
  };
  const reviewClosings = ['다 쓰면 재구매도 생각해볼게요.', '제형과 향 모두 무난해서 잘 쓰고 있어요.', '개인적으로 데일리 제품으로 마음에 듭니다.', '더 사용해보고 피부 상태도 살펴보려고 해요.', '기대했던 것보다 사용감이 괜찮았어요.', '저처럼 가벼운 사용감을 좋아하면 잘 맞을 듯해요.', '현재까지는 만족하며 사용 중입니다.', '꾸준히 써보고 다음에도 후기 남길게요.', '다른 제품도 함께 살펴보려 합니다.'];
  const reviewNames = ['김*은', '이*현', '박*진', '최*윤', '정*민', '강*서', '윤*아', '장*우', '임*연', '한*희', '조*원'];
  const reviewSeed = selected.id.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const reviewItems = Array.from({ length: selected.reviews }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - ((index * 11 + reviewSeed) % 365));
    const dateText = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
    const experiences = reviewExperiences[selected.id] || reviewExperiences['calm-serum'];
    const body = `${reviewOpeners[(index + reviewSeed) % reviewOpeners.length]} ${experiences[(index * 5 + reviewSeed) % experiences.length]} ${reviewClosings[(index * 7 + reviewSeed) % reviewClosings.length]}`;
    const rating = index % 8 === 0 ? '★★★★☆' : '★★★★★';
    return `<article class="review-card"><div class="review-card-top"><strong>${reviewNames[(index + reviewSeed) % reviewNames.length]}</strong><time>${dateText}</time></div><p class="review-card-stars" aria-label="${index % 8 === 0 ? 4 : 5}점">${rating}</p><p class="review-card-body">${body}</p></article>`;
  });
  const reviewList = document.querySelector('#review-list');
  const moreReviews = document.querySelector('#more-reviews');
  let visibleReviews = 0;
  const addReviewBatch = (showAll = false) => {
    const batch = reviewItems.slice(visibleReviews, showAll ? reviewItems.length : visibleReviews + 6);
    reviewList.insertAdjacentHTML('beforeend', batch.join(''));
    visibleReviews += batch.length;
    moreReviews.hidden = visibleReviews >= reviewItems.length;
    if (!moreReviews.hidden) moreReviews.textContent = `리뷰 더 보기 (${reviewItems.length - visibleReviews}개 남음)`;
  };
  addReviewBatch();
  moreReviews.addEventListener('click', () => addReviewBatch(true));
  const panels = [descriptionPanel, ingredientsPanel, reviewsPanel];
  productTabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    tab.setAttribute('aria-selected', String(index === 0));
    tab.tabIndex = index === 0 ? 0 : -1;
    panels[index].classList.add('product-tab-panel');
    if (index !== 0) panels[index].hidden = true;
    tab.addEventListener('click', event => {
      event.preventDefault();
      productTabs.forEach((item, itemIndex) => {
        const active = itemIndex === index;
        item.classList.toggle('is-current', active);
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
        panels[itemIndex].hidden = !active;
      });
    });
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? productTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + productTabs.length) % productTabs.length;
      productTabs[next].focus();
      productTabs[next].click();
    });
  });
}
