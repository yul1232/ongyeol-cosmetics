const helpFaqs=[
  {category:'order',name:'주문·결제',q:'주문 후 취소나 옵션 변경이 가능한가요?',a:'상품이 출고되기 전에는 주문 내역에서 취소를 요청할 수 있습니다. 옵션 변경은 기존 주문 취소 후 다시 주문해 주세요. 이미 출고가 시작된 주문은 수령 후 교환·반품 절차를 이용해 주세요.'},
  {category:'delivery',name:'배송',q:'배송은 얼마나 걸리나요?',a:'결제 완료 후 영업일 기준 1~3일 이내 출고를 목표로 합니다. 택배사 사정이나 주문량, 도서산간 지역에 따라 배송이 더 걸릴 수 있으며 출고 후에는 주문 내역에서 배송 상태를 확인할 수 있습니다.'},
  {category:'delivery',name:'배송',q:'배송비와 무료배송 기준이 어떻게 되나요?',a:'기본 배송비는 3,000원이며, 30,000원 이상 구매 시 무료배송입니다. 쿠폰과 할인 적용 후 결제 금액을 기준으로 하며, 도서산간 지역은 추가 배송비가 발생할 수 있습니다.'},
  {category:'delivery',name:'배송',q:'배송지를 잘못 입력했어요. 수정할 수 있나요?',a:'상품이 출고되기 전이라면 고객센터 1:1 문의에 주문번호와 올바른 배송지를 남겨주세요. 이미 출고된 뒤에는 배송지 변경이 어려울 수 있으니 가능한 한 빠르게 문의해 주세요.'},
  {category:'order',name:'주문·결제',q:'결제가 완료되었는지 어디에서 확인하나요?',a:'로그인 후 주문배송 메뉴에서 주문 상태를 확인할 수 있습니다. 비회원 주문은 주문 시 사용한 이메일과 주문번호를 준비해 1:1 문의로 확인을 요청해 주세요.'},
  {category:'return',name:'교환·반품',q:'교환이나 반품은 어떻게 신청하나요?',a:'상품 수령일로부터 7일 이내에 1:1 문의로 주문번호와 신청 사유를 남겨주세요. 안내를 받기 전에 상품을 임의로 보내지 말아 주세요. 단순 변심에 따른 왕복 배송비는 고객 부담이며 상품 상태에 따라 접수가 제한될 수 있습니다.'},
  {category:'return',name:'교환·반품',q:'개봉한 화장품도 반품할 수 있나요?',a:'상품의 포장이나 밀봉을 훼손했거나 사용 흔적이 있는 경우에는 단순 변심 반품이 제한될 수 있습니다. 상품 하자나 오배송은 상태를 확인할 수 있도록 사진과 함께 문의해 주세요.'},
  {category:'return',name:'교환·반품',q:'반품 배송비는 누가 부담하나요?',a:'단순 변심이나 주문 착오로 인한 교환·반품은 왕복 배송비가 발생할 수 있습니다. 상품 하자 또는 오배송으로 확인된 경우에는 온결이 배송비를 부담합니다. 접수 전에 고객센터 안내를 확인해 주세요.'},
  {category:'product',name:'제품·성분',q:'제품 성분과 전성분은 어디서 확인하나요?',a:'각 상품 상세 페이지의 성분 정보 영역에서 주요 성분과 전성분을 확인할 수 있습니다. 제품에 따라 최신 패키지 표기와 상세 페이지 내용이 다를 수 있으니 사용 전 실제 제품의 표시사항도 확인해 주세요.'},
  {category:'product',name:'제품·성분',q:'민감한 피부도 사용할 수 있나요?',a:'피부 반응은 개인마다 다르므로 특정 피부 타입에 모두 적합하다고 단정할 수 없습니다. 성분과 사용 방법을 먼저 확인하고, 처음 사용하는 제품은 작은 부위에 시험한 뒤 사용해 주세요. 불편함이 지속되면 사용을 중단하고 전문가와 상담해 주세요.'},
  {category:'product',name:'제품·성분',q:'제품의 사용 순서는 어떻게 되나요?',a:'일반적으로 세안 후 묽은 제형부터 사용하고 보습 제품을 이어 바릅니다. 제품별 권장 사용 순서와 주의사항은 상품 상세 페이지를 확인해 주세요. 새로운 제품을 여러 개 동시에 시작하기보다 하나씩 사용해 보는 편이 좋습니다.'},
  {category:'account',name:'회원·혜택',q:'첫 구매 쿠폰은 어떻게 사용하나요?',a:'첫 구매 쿠폰은 주문서의 쿠폰 선택 영역에서 적용할 수 있습니다. 쿠폰별 최소 주문 금액과 사용 기한, 적용 제외 상품이 다를 수 있으니 쿠폰 안내를 확인해 주세요.'},
  {category:'account',name:'회원·혜택',q:'쿠폰이 주문서에서 보이지 않아요.',a:'쿠폰의 사용 기한이 지났거나 주문 금액·상품 조건을 충족하지 않으면 표시되지 않을 수 있습니다. 로그인 상태와 쿠폰 상세 조건을 확인한 뒤에도 적용되지 않으면 쿠폰명과 함께 1:1 문의를 남겨주세요.'},
  {category:'order',name:'주문·결제',q:'장바구니에 담은 상품은 얼마나 보관되나요?',a:'장바구니 상품은 브라우저에 저장되어 같은 기기와 브라우저에서 다시 확인할 수 있습니다. 브라우저 데이터 삭제나 기기 변경 시 장바구니가 유지되지 않을 수 있으며, 재고와 가격은 주문 시점에 따라 달라질 수 있습니다.'},
  {category:'account',name:'회원·혜택',q:'회원 정보를 변경하거나 탈퇴하고 싶어요.',a:'가입한 계정으로 로그인한 뒤 마이페이지에서 회원 정보를 확인해 주세요. 정보 변경이나 탈퇴 메뉴를 찾기 어려운 경우 본인 확인에 필요한 이메일과 요청 내용을 1:1 문의로 보내주시면 안내드리겠습니다.'}
];

const helpNotices=[
  {date:'2026.10.21',title:'[안내] 온결 온라인몰 상품 정보 확인 방법',body:'상품 상세 페이지에서 제품의 특징, 사용 순서, 성분 정보와 주의사항을 확인하실 수 있도록 안내 항목을 정리했습니다. 상품별 자세한 내용은 각 제품 페이지를 확인해 주세요.'},
  {date:'2026.10.18',title:'[배송] 출고 및 배송 일정 안내',body:'주문은 결제 완료 순서로 확인되며, 영업일 기준 1~3일 이내 출고를 목표로 합니다. 주말과 공휴일에는 출고 업무가 진행되지 않으며, 택배사 사정에 따라 배송 일정이 달라질 수 있습니다.'},
  {date:'2026.10.10',title:'[안내] 교환·반품 접수 전 확인사항',body:'교환·반품을 원하시면 상품 수령일로부터 7일 이내에 고객센터 1:1 문의로 신청해 주세요. 접수 안내를 받기 전에 상품을 보내면 처리가 지연될 수 있습니다. 상품 상태와 신청 사유를 함께 남겨주세요.'},
  {date:'2026.09.30',title:'[혜택] 첫 구매 쿠폰 이용 안내',body:'첫 구매 쿠폰은 주문서에서 적용할 수 있습니다. 쿠폰별 최소 결제 금액, 사용 기한 및 적용 제외 조건을 쿠폰 안내에서 확인해 주세요. 쿠폰은 주문 완료 후 소급 적용되지 않습니다.'},
  {date:'2026.09.18',title:'[제품] 성분 및 사용 정보 확인 안내',body:'제품별 전성분과 사용 방법은 상품 상세 페이지에서 확인할 수 있습니다. 사용 전 제품의 포장에 표시된 사용상 주의사항을 확인해 주세요. 사용 중 불편함이 생기면 사용을 중단하고 고객센터로 문의해 주세요.'},
  {date:'2026.09.02',title:'[고객센터] 1:1 문의 답변 운영 안내',body:'1:1 문의는 접수 순서에 따라 영업일 기준으로 확인하고 있습니다. 주문 관련 문의는 주문번호를, 제품 관련 문의는 상품명과 문의 내용을 함께 남겨주시면 확인에 도움이 됩니다.'},
  {date:'2026.08.20',title:'[서비스] 장바구니 및 최근 본 상품 이용 안내',body:'장바구니와 최근 본 상품은 현재 사용 중인 브라우저에 저장됩니다. 브라우저 데이터 삭제, 시크릿 모드 사용 또는 다른 기기 이용 시 목록이 이어지지 않을 수 있습니다.'}
];

const faqCategoryNames={all:'전체',order:'주문·결제',delivery:'배송',return:'교환·반품',product:'제품·성분',account:'회원·혜택'};
const helpState={category:'all',query:'',page:1,perPage:8,noticePage:1,noticePerPage:5};
const inquiriesStorageKey='ongyeol-customer-inquiries';
let helpMemoryInquiries=[];

function helpEscapeHtml(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function helpLoadInquiries(){try{const saved=JSON.parse(localStorage.getItem(inquiriesStorageKey)||'[]');return Array.isArray(saved)?saved:[]}catch{return helpMemoryInquiries}}
function helpSaveInquiries(items){helpMemoryInquiries=items;try{localStorage.setItem(inquiriesStorageKey,JSON.stringify(items))}catch{}}
function helpReadQuery(){const params=new URLSearchParams(location.search);return params.get('tab')||'faq'}
function helpSetTab(name,writeUrl=true){
  const valid=['faq','inquiry','notice'].includes(name)?name:'faq';
  document.querySelectorAll('[data-help-tab]').forEach(button=>{const active=button.dataset.helpTab===valid;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1});
  document.querySelectorAll('.help-panel').forEach(panel=>{panel.hidden=panel.id!==`panel-${valid}`});
  if(writeUrl){const params=new URLSearchParams(location.search);if(valid==='faq')params.delete('tab');else params.set('tab',valid);const query=params.toString();history.replaceState(null,'',`${location.pathname}${query?`?${query}`:''}${location.hash}`)}
}
function helpGetFaqs(){const query=helpState.query.trim().toLocaleLowerCase('ko');return helpFaqs.filter(faq=>(helpState.category==='all'||faq.category===helpState.category)&&(!query||`${faq.q} ${faq.a} ${faq.name}`.toLocaleLowerCase('ko').includes(query)))}
function helpRenderFaqs(){
  const filtered=helpGetFaqs(),pages=Math.max(1,Math.ceil(filtered.length/helpState.perPage));helpState.page=Math.min(helpState.page,pages);
  const start=(helpState.page-1)*helpState.perPage;const visible=filtered.slice(start,start+helpState.perPage);
  document.querySelector('#faq-result-count').textContent=`총 ${filtered.length}개의 FAQ`;
  document.querySelector('#faq-list').innerHTML=visible.length?visible.map((faq,index)=>`<article class="faq-item"><button type="button" class="faq-question" aria-expanded="false"><span class="faq-number">${String(start+index+1).padStart(2,'0')}</span><span class="faq-category-label">${faq.name}</span><strong>${faq.q}</strong><span class="faq-chevron" aria-hidden="true">⌄</span></button><div class="faq-answer" hidden><p>${faq.a}</p><button type="button" class="faq-answer-inquiry" data-open-inquiry>답변이 도움이 되지 않았나요? 1:1 문의하기 <span>↗</span></button></div></article>`).join(''):'<p class="help-empty">검색 결과가 없습니다. 다른 검색어나 분류를 선택해 주세요.</p>';
  const buttons=[];buttons.push(`<button type="button" data-page="${helpState.page-1}" aria-label="이전 페이지" ${helpState.page===1?'disabled':''}>‹</button>`);for(let page=1;page<=pages;page++)buttons.push(`<button type="button" data-page="${page}" aria-label="${page}페이지" aria-current="${page===helpState.page?'page':'false'}" class="${page===helpState.page?'is-active':''}">${page}</button>`);buttons.push(`<button type="button" data-page="${helpState.page+1}" aria-label="다음 페이지" ${helpState.page===pages?'disabled':''}>›</button>`);document.querySelector('#faq-pagination').innerHTML=buttons.join('');
  document.querySelectorAll('[data-faq-category]').forEach(button=>{const active=button.dataset.faqCategory===helpState.category;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active))});
}
function helpRenderNotices(){
  const pages=Math.max(1,Math.ceil(helpNotices.length/helpState.noticePerPage));helpState.noticePage=Math.min(helpState.noticePage,pages);const start=(helpState.noticePage-1)*helpState.noticePerPage;const visible=helpNotices.slice(start,start+helpState.noticePerPage);
  document.querySelector('#notice-list').innerHTML=visible.map((notice,index)=>`<article class="notice-item"><button type="button" class="notice-question" aria-expanded="false"><span class="notice-number">${String(start+index+1).padStart(2,'0')}</span><strong>${notice.title}</strong><time>${notice.date}</time><span class="faq-chevron" aria-hidden="true">⌄</span></button><div class="notice-answer" hidden><p>${notice.body}</p></div></article>`).join('');
  const buttons=[];buttons.push(`<button type="button" data-notice-page="${helpState.noticePage-1}" aria-label="이전 페이지" ${helpState.noticePage===1?'disabled':''}>‹</button>`);for(let page=1;page<=pages;page++)buttons.push(`<button type="button" data-notice-page="${page}" aria-label="${page}페이지" aria-current="${page===helpState.noticePage?'page':'false'}" class="${page===helpState.noticePage?'is-active':''}">${page}</button>`);buttons.push(`<button type="button" data-notice-page="${helpState.noticePage+1}" aria-label="다음 페이지" ${helpState.noticePage===pages?'disabled':''}>›</button>`);document.querySelector('#notice-pagination').innerHTML=buttons.join('');
}
function helpRenderInquiryList(){
  const items=helpLoadInquiries();document.querySelector('#my-inquiry-count').textContent=String(items.length);
  const panel=document.querySelector('#my-inquiries');panel.innerHTML=items.length?`<h3>접수 내역 ${items.length}건</h3>${items.slice().reverse().map(item=>`<details class="my-inquiry-item"><summary><span>${helpEscapeHtml(item.category)}</span><strong>${helpEscapeHtml(item.title)}</strong><time>${helpEscapeHtml(item.date)}</time><b>접수 완료</b></summary><div><p>${helpEscapeHtml(item.message)}</p><small>문의번호 ${helpEscapeHtml(item.id)} · 답변 안내: ${helpEscapeHtml(item.email)}</small></div></details>`).join('')}`:'<p class="my-inquiries-empty">아직 접수한 문의가 없습니다.</p>';
}

helpRenderFaqs();helpRenderNotices();helpSetTab(helpReadQuery(),false);helpRenderInquiryList();
document.querySelectorAll('[data-help-tab]').forEach(button=>button.addEventListener('click',()=>helpSetTab(button.dataset.helpTab)));
document.querySelector('.help-tabs').addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const tabs=[...document.querySelectorAll('[data-help-tab]')];const current=tabs.indexOf(document.activeElement);const next=(current+(event.key==='ArrowRight'?1:tabs.length-1))%tabs.length;tabs[next].focus();helpSetTab(tabs[next].dataset.helpTab)});
document.querySelector('#faq-search-form').addEventListener('submit',event=>{event.preventDefault();helpState.query=document.querySelector('#faq-search-input').value;helpState.page=1;helpRenderFaqs()});
document.querySelector('#faq-search-input').addEventListener('search',()=>{helpState.query=document.querySelector('#faq-search-input').value;helpState.page=1;helpRenderFaqs()});
document.querySelectorAll('[data-keyword]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#faq-search-input').value=button.dataset.keyword;helpState.query=button.dataset.keyword;helpState.page=1;helpRenderFaqs()}));
document.querySelectorAll('[data-faq-category]').forEach(button=>button.addEventListener('click',()=>{helpState.category=button.dataset.faqCategory;helpState.page=1;helpRenderFaqs()}));
document.querySelector('#faq-pagination').addEventListener('click',event=>{const button=event.target.closest('[data-page]');if(!button||button.disabled)return;helpState.page=Number(button.dataset.page);helpRenderFaqs()});
document.querySelector('#faq-list').addEventListener('click',event=>{const button=event.target.closest('.faq-question');if(!button)return;const answer=button.nextElementSibling;const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));answer.hidden=!open});
document.querySelector('#notice-list').addEventListener('click',event=>{const button=event.target.closest('.notice-question');if(!button)return;const answer=button.nextElementSibling;const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));answer.hidden=!open});
document.querySelector('#notice-pagination').addEventListener('click',event=>{const button=event.target.closest('[data-notice-page]');if(!button||button.disabled)return;helpState.noticePage=Number(button.dataset.noticePage);helpRenderNotices()});
document.querySelector('#inquiry-form [name="message"]').addEventListener('input',event=>{document.querySelector('#inquiry-char-count').textContent=String(event.target.value.length)});
document.querySelector('#inquiry-form').addEventListener('submit',event=>{
  event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const items=helpLoadInquiries();
  const inquiry={id:`OG-${Date.now().toString(36).toUpperCase()}`,category:data.get('category'),orderId:data.get('orderId'),name:data.get('name'),email:data.get('email'),title:data.get('title'),message:data.get('message'),date:new Intl.DateTimeFormat('ko-KR').format(new Date()),status:'접수 완료'};
  items.push(inquiry);helpSaveInquiries(items);helpRenderInquiryList();document.querySelector('#my-inquiries').hidden=false;form.reset();document.querySelector('#inquiry-char-count').textContent='0';
  const receipt=document.createElement('p');receipt.className='inquiry-receipt';receipt.setAttribute('role','status');receipt.textContent=`문의가 접수되었습니다. 문의번호 ${inquiry.id} · 이 브라우저의 ‘내 문의’에서 확인할 수 있습니다.`;form.insertBefore(receipt,form.querySelector('.inquiry-submit'));setTimeout(()=>receipt.remove(),8000);
});
document.querySelector('#show-inquiries').addEventListener('click',()=>{const panel=document.querySelector('#my-inquiries');panel.hidden=!panel.hidden;if(!panel.hidden)panel.scrollIntoView({behavior:'smooth',block:'nearest'})});
document.addEventListener('click',event=>{const button=event.target.closest('[data-open-inquiry]');if(!button)return;helpSetTab('inquiry');document.querySelector('#inquiry-form').scrollIntoView({behavior:'smooth',block:'start'})});
