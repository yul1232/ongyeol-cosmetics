const bulkInquiryStorageKey='ongyeol-bulk-purchase-inquiries';
let bulkInquiryMemory=[];
const bulkProductLabels={
  'daily-routine':'데일리 루틴 구성',
  'gift-set':'선물 세트 구성',
  custom:'제품 선택형 구성',
  'mild-cleanser':'약산성 젤 클렌저',
  'daily-toner':'수분 밸런싱 토너',
  'calm-serum':'카밍 리페어 세럼',
  'barrier-cream':'세라마이드 장벽 크림',
  'travel-set':'민감 피부 첫 루틴 3종 세트'
};

function bulkEscape(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function bulkLoadInquiries(){try{const saved=JSON.parse(localStorage.getItem(bulkInquiryStorageKey)||'[]');return Array.isArray(saved)?saved:[]}catch{return bulkInquiryMemory}}
function bulkSaveInquiries(items){bulkInquiryMemory=items;try{localStorage.setItem(bulkInquiryStorageKey,JSON.stringify(items))}catch{}}
function bulkUpdateCount(){document.querySelector('#bulk-inquiry-count').textContent=String(bulkLoadInquiries().length)}
function bulkSyncCustomOptions(){const isCustom=document.querySelector('input[name="products"][value="custom"]').checked;const panel=document.querySelector('#bulk-custom-products');panel.hidden=!isCustom;if(!isCustom)panel.querySelectorAll('input[type="checkbox"]').forEach(input=>input.checked=false)}
function bulkRenderHistory(){
  const items=bulkLoadInquiries();const panel=document.querySelector('#bulk-inquiries');bulkUpdateCount();
  panel.innerHTML=items.length?`<h3>상담 신청 내역 ${items.length}건</h3>${items.slice().reverse().map(item=>`<details class="bulk-inquiry-record"><summary><span>${bulkEscape(item.date)} · ${bulkEscape(item.purpose)}</span><strong>${bulkEscape(item.organization)} · ${bulkEscape(item.quantity)}개</strong><b>접수 완료</b></summary><div><p>선택 구성: ${item.products.map(value=>bulkEscape(bulkProductLabels[value]||value)).join(', ')||'선택 없음'}</p><p>${bulkEscape(item.message||'추가 상담 내용 없음')}</p><small>상담 번호 ${bulkEscape(item.id)} · 안내 이메일 ${bulkEscape(item.email)}</small></div></details>`).join('')}`:'<p class="bulk-history-empty">아직 신청한 상담이 없습니다.</p>';
}
document.querySelectorAll('input[name="products"]').forEach(input=>input.addEventListener('change',bulkSyncCustomOptions));
const bulkDateInput=document.querySelector('#bulk-inquiry-form input[name="date"]');
const bulkDatePicker=document.querySelector('#bulk-date-picker');
const bulkCalendarDays=document.querySelector('#bulk-calendar-days');
const bulkCalendarMinYear=2026,bulkCalendarMaxYear=2027;
let bulkCalendarYear=2026,bulkCalendarMonth=new Date().getFullYear()===2026?new Date().getMonth():0;
function bulkRenderCalendar(){
  document.querySelector('#bulk-calendar-month').textContent=`${bulkCalendarYear}년 ${bulkCalendarMonth+1}월`;
  const previous=document.querySelector('[data-month-shift="-1"]'),next=document.querySelector('[data-month-shift="1"]');
  previous.disabled=bulkCalendarYear===bulkCalendarMinYear&&bulkCalendarMonth===0;
  next.disabled=bulkCalendarYear===bulkCalendarMaxYear&&bulkCalendarMonth===11;
  const startDay=new Date(bulkCalendarYear,bulkCalendarMonth,1).getDay();
  const daysInMonth=new Date(bulkCalendarYear,bulkCalendarMonth+1,0).getDate();
  bulkCalendarDays.innerHTML=`${Array.from({length:startDay},()=>'<span class="bulk-calendar-blank" aria-hidden="true"></span>').join('')}${Array.from({length:daysInMonth},(_,index)=>{const day=index+1;const value=`${bulkCalendarYear}-${String(bulkCalendarMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;const selected=bulkDateInput.value===value;return `<button type="button" data-calendar-date="${value}" aria-pressed="${selected}" class="${selected?'is-selected':''}">${day}</button>`}).join('')}`;
}
function bulkOpenCalendar(){bulkRenderCalendar();bulkDatePicker.hidden=false;bulkDateInput.setAttribute('aria-expanded','true')}
function bulkCloseCalendar(){bulkDatePicker.hidden=true;bulkDateInput.setAttribute('aria-expanded','false')}
bulkDateInput.closest('.bulk-date-wrap').addEventListener('click',event=>{if(event.target.closest('.bulk-date-picker'))return;bulkOpenCalendar()});
bulkDatePicker.querySelectorAll('[data-month-shift]').forEach(button=>button.addEventListener('click',()=>{if(button.disabled)return;bulkCalendarMonth+=Number(button.dataset.monthShift);if(bulkCalendarMonth<0){bulkCalendarMonth=11;bulkCalendarYear--}if(bulkCalendarMonth>11){bulkCalendarMonth=0;bulkCalendarYear++}bulkRenderCalendar()}));
bulkCalendarDays.addEventListener('click',event=>{const button=event.target.closest('[data-calendar-date]');if(!button)return;bulkDateInput.value=button.dataset.calendarDate;bulkCloseCalendar()});
document.addEventListener('click',event=>{if(!bulkDateInput.closest('.bulk-date-wrap').contains(event.target))bulkCloseCalendar()});
bulkDateInput.addEventListener('keydown',event=>{if(event.key==='Escape')bulkCloseCalendar();if(event.key==='Enter'||event.key===' '){event.preventDefault();bulkOpenCalendar()}});
document.querySelector('#bulk-inquiry-form [name="message"]').addEventListener('input',event=>{document.querySelector('#bulk-char-count').textContent=String(event.target.value.length)});
document.querySelector('#bulk-inquiry-form').addEventListener('submit',event=>{
  event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
  const data=new FormData(form);const products=[...data.getAll('products'),...data.getAll('customProducts')];
  const inquiry={id:`OG-B2B-${Date.now().toString(36).toUpperCase()}`,date:new Intl.DateTimeFormat('ko-KR').format(new Date()),purpose:data.get('purpose'),quantity:Number(data.get('quantity')),products,requestedDate:data.get('date'),organization:data.get('organization'),contact:data.get('contact'),phone:data.get('phone'),email:data.get('email'),message:data.get('message')};
  const items=bulkLoadInquiries();items.push(inquiry);bulkSaveInquiries(items);bulkRenderHistory();document.querySelector('#bulk-inquiries').hidden=false;
  form.reset();document.querySelector('#bulk-char-count').textContent='0';document.querySelector('#bulk-custom-products').hidden=true;
  const receipt=document.createElement('p');receipt.className='bulk-receipt';receipt.setAttribute('role','status');receipt.textContent=`상담 신청이 접수되었습니다. 접수 번호 ${inquiry.id} · ‘내 상담 내역’에서 확인할 수 있습니다.`;form.insertBefore(receipt,form.querySelector('.bulk-submit'));setTimeout(()=>receipt.remove(),9000);
});
document.querySelector('#show-bulk-inquiries').addEventListener('click',()=>{const panel=document.querySelector('#bulk-inquiries');panel.hidden=!panel.hidden;if(!panel.hidden)panel.scrollIntoView({behavior:'smooth',block:'nearest'})});
bulkRenderHistory();
