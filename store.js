(() => {
  const list = document.getElementById('store-list');
  if (!list) return;
  const stores = [
    {name:'온결 성수 라운지',region:'서울',district:'성동구',address:'서울특별시 성동구 연무장길 18 (가상 주소)',phone:'02-0000-1001',hours:'매일 11:00–20:00',services:['전 제품 체험','피부 루틴 상담']},
    {name:'온결 북촌 스튜디오',region:'서울',district:'종로구',address:'서울특별시 종로구 북촌로 42 (가상 주소)',phone:'02-0000-1002',hours:'매일 10:30–19:30',services:['전 제품 체험','선물 포장']},
    {name:'온결 여의도 팝업',region:'서울',district:'영등포구',address:'서울특별시 영등포구 국제금융로 22 (가상 주소)',phone:'02-0000-1003',hours:'평일 10:00–20:00 · 주말 11:00–19:00',services:['시즌 팝업','전 제품 체험']},
    {name:'온결 판교 스토어',region:'경기',district:'성남시',address:'경기도 성남시 분당구 판교로 155 (가상 주소)',phone:'031-000-2001',hours:'매일 10:30–21:00',services:['전 제품 체험','피부 루틴 상담']},
    {name:'온결 해운대 스튜디오',region:'부산',district:'해운대구',address:'부산광역시 해운대구 달맞이길 31 (가상 주소)',phone:'051-000-3001',hours:'매일 11:00–20:00',services:['전 제품 체험','선물 포장']},
    {name:'온결 대전 은행동',region:'대전',district:'중구',address:'대전광역시 중구 중앙로 88 (가상 주소)',phone:'042-000-4001',hours:'매일 10:30–20:00',services:['전 제품 체험']},
    {name:'온결 제주 애월',region:'제주',district:'제주시',address:'제주특별자치도 제주시 애월읍 해안로 210 (가상 주소)',phone:'064-000-5001',hours:'매일 11:00–19:00',services:['전 제품 체험','여행 키트']}
  ];
  const queryInput = document.getElementById('store-query');
  const regionSelect = document.getElementById('store-region');
  const count = document.getElementById('store-result-count');
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const render = () => {
    const query = queryInput.value.trim().toLowerCase();
    const region = regionSelect.value;
    const found = stores.filter(store => (region === 'all' || store.region === region) && `${store.name} ${store.region} ${store.district} ${store.address}`.toLowerCase().includes(query));
    count.textContent = `검색 결과 ${found.length}개`;
    list.innerHTML = found.length ? found.map((store,index) => `<article class="store-card"><div class="store-card-index">${String(index+1).padStart(2,'0')}<span>${escapeHtml(store.region)}</span></div><div class="store-card-info"><p class="eyebrow">ONGYEOL / ${escapeHtml(store.district.toUpperCase())}</p><h2>${escapeHtml(store.name)}</h2><p class="store-address">${escapeHtml(store.address)}</p><dl><div><dt>운영 시간</dt><dd>${escapeHtml(store.hours)}</dd></div><div><dt>문의</dt><dd><a href="tel:${escapeHtml(store.phone)}">${escapeHtml(store.phone)}</a></dd></div></dl><div class="store-services">${store.services.map(service=>`<span>${escapeHtml(service)}</span>`).join('')}</div></div><a class="store-directions" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}" target="_blank" rel="noopener noreferrer">길찾기 <span aria-hidden="true">↗</span></a></article>`).join('') : '<div class="store-empty"><strong>검색 결과가 없습니다.</strong><p>지역이나 매장명을 다시 확인해 주세요.</p></div>';
  };
  document.getElementById('store-search-form').addEventListener('submit', event => { event.preventDefault(); render(); });
  queryInput.addEventListener('input', render);
  regionSelect.addEventListener('change', render);
  document.getElementById('store-reset').addEventListener('click', () => { queryInput.value=''; regionSelect.value='all'; render(); queryInput.focus(); });
  render();
})();
