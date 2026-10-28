const careerOpenings = [
  {id:'c01',title:'온라인 커머스 운영 담당자',category:'commerce',categoryLabel:'커머스·MD',employment:'regular',employmentLabel:'정규직',career:'경력 2년 이상',location:'서울 성동구',posted:'2026-10-24',deadline:'2026-11-30',summary:'상품 정보와 프로모션 운영을 관리하고 온라인몰의 구매 경험을 개선합니다.',responsibilities:['상품 등록과 운영 일정 관리 및 정보 품질 점검','온라인 프로모션과 기획전 세팅, 진행 현황 모니터링','고객 문의와 판매 데이터를 바탕으로 운영 개선 과제 도출','유관 부서 및 파트너사와 일정·자료 조율'],requirements:['이커머스 운영 또는 온라인 MD 관련 경력 2년 이상','스프레드시트로 데이터를 정리하고 기본적인 분석이 가능한 분','여러 업무의 우선순위를 세우고 일정에 맞춰 실행할 수 있는 분'],preferred:['뷰티·라이프스타일 카테고리 운영 경험','상품 관리 시스템 또는 온라인몰 어드민 사용 경험'],process:['서류 전형','실무 인터뷰','컬처 인터뷰','처우 협의 및 입사']},
  {id:'c02',title:'브랜드 콘텐츠 에디터',category:'brand',categoryLabel:'브랜드·마케팅',employment:'regular',employmentLabel:'정규직',career:'경력 2~5년',location:'서울 성동구',posted:'2026-10-22',deadline:'2026-11-12',summary:'브랜드와 제품의 이야기를 고객 관점의 콘텐츠로 기획하고 제작합니다.',responsibilities:['브랜드 뉴스룸 및 제품 콘텐츠 기획·취재·작성','캠페인·상세 페이지·소셜 채널의 콘텐츠 메시지 정리','콘텐츠 발행 일정 관리와 결과 분석','디자인·상품·고객 경험 팀과 협업해 콘텐츠 완성도 향상'],requirements:['브랜드 콘텐츠 또는 에디토리얼 분야 경력 2년 이상','복잡한 정보를 읽기 쉬운 글로 정리하는 능력','기획부터 발행까지 프로젝트를 주도적으로 관리한 경험'],preferred:['뷰티·커머스 분야 콘텐츠 제작 경험','포트폴리오 제출 가능자'],process:['서류 및 포트폴리오 검토','실무 인터뷰','컬처 인터뷰','처우 협의 및 입사']},
  {id:'c03',title:'온라인몰 프로덕트 디자이너',category:'design',categoryLabel:'디자인·콘텐츠',employment:'regular',employmentLabel:'정규직',career:'경력 3년 이상',location:'서울 성동구',posted:'2026-10-20',deadline:'2026-11-25',summary:'고객이 제품을 탐색하고 비교하는 웹 경험을 설계하고 개선합니다.',responsibilities:['커머스 웹·모바일의 사용자 흐름과 화면 설계','사용자 의견과 이용 데이터를 분석해 개선안 도출','디자인 시스템과 컴포넌트 운영','기획·개발 팀과 협업해 디자인 구현과 품질 확인'],requirements:['디지털 프로덕트 디자인 경력 3년 이상','Figma 등 디자인 도구를 활용한 화면 설계 경험','사용자 문제를 정의하고 디자인 의사결정 근거를 설명할 수 있는 분'],preferred:['이커머스 또는 뷰티 서비스 디자인 경험','프로토타이핑과 사용성 테스트 경험'],process:['서류 및 포트폴리오 검토','직무 인터뷰','과제 또는 케이스 인터뷰','최종 인터뷰 및 처우 협의']},
  {id:'c04',title:'고객 경험 운영 매니저',category:'customer',categoryLabel:'고객 경험',employment:'regular',employmentLabel:'정규직',career:'경력 2년 이상',location:'서울 성동구',posted:'2026-10-18',deadline:'2026-11-03',summary:'고객 문의와 피드백을 분석해 더 편리한 서비스 운영 기준을 만듭니다.',responsibilities:['고객 문의 유형 분석 및 응대 정책·FAQ 관리','반복 문의의 원인을 파악해 서비스 개선 과제 제안','고객 응대 파트너사 운영 지표와 품질 관리','유관 부서에 고객 의견을 전달하고 개선 진행 상황 추적'],requirements:['고객 상담·CX 운영 관련 경력 2년 이상','문제 상황을 차분히 정리하고 명확하게 소통하는 분','데이터와 사례를 바탕으로 개선점을 도출할 수 있는 분'],preferred:['커머스 고객센터 운영 또는 협력사 관리 경험','상담 솔루션 및 VOC 분석 도구 사용 경험'],process:['서류 전형','실무 인터뷰','컬처 인터뷰','처우 협의 및 입사']},
  {id:'c05',title:'상품 정보 운영 어시스턴트',category:'commerce',categoryLabel:'커머스·MD',employment:'contract',employmentLabel:'계약직',career:'신입·경력',location:'서울 성동구',posted:'2026-10-16',deadline:'2026-11-15',summary:'상품 등록 자료를 확인하고 온라인몰의 정확한 상품 정보 관리를 지원합니다.',responsibilities:['상품명·옵션·이미지·상세 안내 자료 등록 및 검수','상품 정보 변경 요청 접수와 반영 일정 관리','프로모션 기간 상품 정보 점검','운영팀의 데이터 정리 및 업무 지원'],requirements:['꼼꼼하게 자료를 확인하고 반복 업무를 정확히 수행하는 분','기본적인 문서 작성과 스프레드시트 활용이 가능한 분','팀 내 진행 상황을 적극적으로 공유할 수 있는 분'],preferred:['온라인몰 상품 등록 또는 사무 보조 경험','뷰티 제품과 커머스에 관심이 있는 분'],process:['서류 전형','실무 인터뷰','최종 결과 안내']},
  {id:'c06',title:'브랜드 비주얼 디자이너',category:'design',categoryLabel:'디자인·콘텐츠',employment:'contract',employmentLabel:'계약직',career:'경력 1년 이상',location:'서울 성동구',posted:'2026-10-12',deadline:'2026-12-10',summary:'온결의 온라인 채널과 캠페인에 필요한 시각 콘텐츠를 제작합니다.',responsibilities:['온라인몰 배너·기획전·소셜 콘텐츠 디자인','캠페인 비주얼 아이디어 구체화와 제작 일정 관리','브랜드 디자인 가이드 유지·관리','디자인 결과물의 웹·모바일 노출 품질 확인'],requirements:['디지털 콘텐츠 디자인 경험 1년 이상 또는 이에 준하는 역량','Adobe 또는 Figma 등 디자인 도구 활용 능력','브랜드 톤에 맞춰 일관된 비주얼을 구현할 수 있는 분'],preferred:['뷰티·라이프스타일 브랜드 디자인 경험','간단한 모션 그래픽 또는 영상 편집 경험'],process:['서류 및 포트폴리오 검토','실무 인터뷰','최종 결과 안내']},
  {id:'c07',title:'물류 운영 기획 담당자',category:'operations',categoryLabel:'운영·물류',employment:'regular',employmentLabel:'정규직',career:'경력 3년 이상',location:'서울 성동구',posted:'2026-10-08',deadline:'2026-12-01',summary:'주문부터 출고까지의 운영 데이터를 살펴 배송 과정의 효율을 높입니다.',responsibilities:['주문·재고·출고 운영 현황 모니터링','배송 지연 및 재고 이슈 분석과 대응 프로세스 개선','물류 파트너사 운영 지표 관리 및 정기 커뮤니케이션','운영 데이터 리포트 작성과 개선 프로젝트 수행'],requirements:['이커머스 물류 또는 SCM 운영 경력 3년 이상','데이터를 기반으로 문제 원인을 분석하고 실행안을 만드는 분','내·외부 파트너와 원활하게 협업할 수 있는 분'],preferred:['뷰티·소비재 물류 운영 경험','재고·주문 관리 시스템 구축 또는 개선 경험'],process:['서류 전형','직무 인터뷰','최종 인터뷰','처우 협의 및 입사']},
  {id:'c08',title:'브랜드 파트너십 매니저',category:'brand',categoryLabel:'브랜드·마케팅',employment:'regular',employmentLabel:'정규직',career:'경력 3년 이상',location:'서울 성동구',posted:'2026-10-02',deadline:'2027-01-31',summary:'브랜드 파트너와 협업 기회를 발굴하고 함께 성장할 운영 체계를 만듭니다.',responsibilities:['신규 브랜드·파트너 발굴 및 제휴 제안','파트너 온보딩과 상품 정보 등록 프로세스 운영','공동 캠페인 및 프로모션 기획·실행','파트너 성과 분석과 정기 커뮤니케이션'],requirements:['브랜드 제휴·사업 개발·파트너 운영 경력 3년 이상','제안서와 협업 계획을 명확하게 작성할 수 있는 분','다양한 이해관계자와 일정을 조율하고 실행할 수 있는 분'],preferred:['뷰티·이커머스 업계 파트너십 경험','프로젝트 성과 분석과 리포팅 경험'],process:['서류 전형','실무 인터뷰','컬처 인터뷰','처우 협의 및 입사']}
];

const careerCategories={all:'전체 직무',commerce:'커머스·MD',brand:'브랜드·마케팅',design:'디자인·콘텐츠',customer:'고객 경험',operations:'운영·물류'};
const careerState={category:'all',employment:'all',sort:'latest',page:1,query:''};
const careerPerPage=6;
const careerList=document.querySelector('#career-job-list');
const careerDialog=document.querySelector('#career-dialog');
const careerFormatDate=value=>value.replaceAll('-','.');

function careerReadParams(){
  const params=new URLSearchParams(location.search);
  careerState.category=Object.hasOwn(careerCategories,params.get('category'))?params.get('category'):'all';
  careerState.employment=['regular','contract'].includes(params.get('type'))?params.get('type'):'all';
  careerState.sort=params.get('sort')==='closing'?'closing':'latest';
  careerState.page=Math.max(1,Number.parseInt(params.get('pg')||'1',10)||1);
  careerState.query=params.get('q')||'';
}

function careerWriteParams(){
  const params=new URLSearchParams();
  if(careerState.page>1)params.set('pg',String(careerState.page));
  if(careerState.category!=='all')params.set('category',careerState.category);
  if(careerState.employment!=='all')params.set('type',careerState.employment);
  if(careerState.sort!=='latest')params.set('sort',careerState.sort);
  if(careerState.query)params.set('q',careerState.query);
  const query=params.toString();history.replaceState(null,'',`${location.pathname}${query?`?${query}`:''}${location.hash}`);
}

function careerGetFiltered(){
  const query=careerState.query.trim().toLocaleLowerCase('ko');
  const items=careerOpenings.filter(job=>(careerState.category==='all'||job.category===careerState.category)&&(careerState.employment==='all'||job.employment===careerState.employment)&&(!query||`${job.title} ${job.summary} ${job.categoryLabel} ${job.career} ${job.location}`.toLocaleLowerCase('ko').includes(query)));
  if(careerState.sort==='closing')items.sort((a,b)=>a.deadline.localeCompare(b.deadline));else items.sort((a,b)=>b.posted.localeCompare(a.posted));
  return items;
}

function careerRender(){
  if(!careerList)return;
  const jobs=careerGetFiltered();const pageCount=Math.max(1,Math.ceil(jobs.length/careerPerPage));careerState.page=Math.min(careerState.page,pageCount);
  const offset=(careerState.page-1)*careerPerPage;const visible=jobs.slice(offset,offset+careerPerPage);
  document.querySelector('#career-result-count').textContent=`총 ${jobs.length}개의 공고`;
  document.querySelector('#career-search').value=careerState.query;document.querySelector('#career-category').value=careerState.category;document.querySelector('#career-type').value=careerState.employment;document.querySelector('#career-sort').value=careerState.sort;
  careerList.innerHTML=visible.length?visible.map(job=>`<article class="career-job"><div class="career-job-top"><span>${job.categoryLabel}</span><span class="career-job-status">접수 중</span></div><button type="button" class="career-job-title" data-job="${job.id}">${job.title}<span aria-hidden="true">↗</span></button><p class="career-job-summary">${job.summary}</p><div class="career-job-meta"><span>${job.career}</span><span>${job.employmentLabel}</span><span>${job.location}</span></div><div class="career-job-bottom"><time datetime="${job.deadline}">접수 마감 ${careerFormatDate(job.deadline)}</time><button type="button" data-job="${job.id}">공고 상세 <span aria-hidden="true">→</span></button></div></article>`).join(''):'<p class="career-empty">조건에 맞는 채용 공고가 없습니다. 검색어나 필터를 변경해 보세요.</p>';
  const pageButtons=[];
  pageButtons.push(`<button type="button" data-page="1" aria-label="첫 페이지" ${careerState.page===1?'disabled':''}>«</button>`);
  pageButtons.push(`<button type="button" data-page="${careerState.page-1}" aria-label="이전 페이지" ${careerState.page===1?'disabled':''}>‹</button>`);
  for(let page=1;page<=pageCount;page++)pageButtons.push(`<button type="button" data-page="${page}" aria-label="${page}페이지" aria-current="${page===careerState.page?'page':'false'}" class="${page===careerState.page?'is-active':''}">${page}</button>`);
  pageButtons.push(`<button type="button" data-page="${careerState.page+1}" aria-label="다음 페이지" ${careerState.page===pageCount?'disabled':''}>›</button>`);
  pageButtons.push(`<button type="button" data-page="${pageCount}" aria-label="마지막 페이지" ${careerState.page===pageCount?'disabled':''}>»</button>`);
  document.querySelector('#career-pagination').innerHTML=pageButtons.join('');careerWriteParams();
}

function careerShowJob(id){
  const job=careerOpenings.find(item=>item.id===id);if(!job)return;
  const list=(title,items)=>`<section class="career-detail-section"><h3>${title}</h3><ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul></section>`;
  document.querySelector('#career-dialog-content').innerHTML=`<p class="eyebrow">${job.categoryLabel} · ${job.employmentLabel}</p><h2 id="career-dialog-title">${job.title}</h2><div class="career-detail-meta"><span>${job.career}</span><span>${job.location}</span><span>접수 마감 ${careerFormatDate(job.deadline)}</span></div><p class="career-detail-summary">${job.summary}</p>${list('주요 업무',job.responsibilities)}${list('자격 요건',job.requirements)}${list('우대 사항',job.preferred)}${list('전형 절차',job.process)}<p class="career-detail-footnote">전형 일정과 방식은 직무에 따라 달라질 수 있으며, 각 단계 결과는 개별 안내합니다.</p>`;
  careerDialog.showModal();
}

if(careerList){
  careerReadParams();careerRender();
  document.querySelector('#career-category').addEventListener('change',event=>{careerState.category=event.target.value;careerState.page=1;careerRender()});
  document.querySelector('#career-type').addEventListener('change',event=>{careerState.employment=event.target.value;careerState.page=1;careerRender()});
  document.querySelector('#career-sort').addEventListener('change',event=>{careerState.sort=event.target.value;careerState.page=1;careerRender()});
  document.querySelector('#career-search-button').addEventListener('click',()=>{careerState.query=document.querySelector('#career-search').value;careerState.page=1;careerRender()});
  document.querySelector('#career-search').addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();document.querySelector('#career-search-button').click()}});
  document.querySelector('#career-search').addEventListener('search',()=>{careerState.query=document.querySelector('#career-search').value;careerState.page=1;careerRender()});
  document.querySelector('#career-pagination').addEventListener('click',event=>{const button=event.target.closest('button[data-page]');if(!button||button.disabled)return;careerState.page=Number(button.dataset.page);careerRender();document.querySelector('#career-list-title').scrollIntoView({behavior:'smooth',block:'start'})});
  careerList.addEventListener('click',event=>{const button=event.target.closest('[data-job]');if(button)careerShowJob(button.dataset.job)});
  document.querySelector('.career-dialog-close').addEventListener('click',()=>careerDialog.close());
  careerDialog.addEventListener('click',event=>{if(event.target===careerDialog)careerDialog.close()});
}
