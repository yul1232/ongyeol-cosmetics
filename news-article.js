const articleParams = new URLSearchParams(location.search);
const currentArticle = (window.ongyeolNewsroomArticles || []).find(article => article.id === articleParams.get('id'));
const articleRoot = document.querySelector('#news-article-content');
const newsroomReturn = articleParams.get('from');
if(newsroomReturn !== null){
  const backUrl = `newsroom.html${newsroomReturn ? `?${new URLSearchParams(newsroomReturn.replace(/^\?/,'')).toString()}` : ''}`;
  document.querySelectorAll('.news-back-link').forEach(link=>link.href=backUrl);
}

if(currentArticle && articleRoot){
  document.title = `${currentArticle.title} — 온결 뉴스룸`;
  document.querySelector('#article-breadcrumb').textContent = currentArticle.title;
  document.querySelector('#article-category').textContent = `${currentArticle.categoryLabel} · ${currentArticle.tag}`;
  document.querySelector('#article-title').textContent = currentArticle.title;
  document.querySelector('#article-deck').textContent = currentArticle.summary;
  document.querySelector('#article-date').textContent = currentArticle.date;
  document.querySelector('#article-reading-time').textContent = `${Math.max(2,Math.ceil(currentArticle.body.join('').length/450))}분 읽기`;
  document.querySelector('#article-art-label').textContent = currentArticle.categoryLabel;
  document.querySelector('#article-art').classList.add(`news-art-${Number(currentArticle.id.slice(1))%5}`);
  document.querySelector('#article-body').innerHTML = currentArticle.body.map(paragraph=>`<p>${paragraph}</p>`).join('');
  const recommendations = (window.ongyeolNewsroomArticles || []).filter(article=>article.id!==currentArticle.id).sort((a,b)=>Number(b.category===currentArticle.category)-Number(a.category===currentArticle.category)||b.time-a.time).slice(0,3);
  document.querySelector('#related-articles').innerHTML = recommendations.map(article=>`<a class="news-related-card" href="news-article.html?id=${encodeURIComponent(article.id)}"><span>${article.categoryLabel} · ${article.date}</span><strong>${article.title}</strong><small>${article.summary}</small><b aria-hidden="true">↗</b></a>`).join('');
}else if(articleRoot){
  articleRoot.innerHTML = '<div class="news-article-missing"><p class="eyebrow">STORY NOT FOUND</p><h1>요청하신 이야기를 찾을 수 없습니다.</h1><p>뉴스룸 목록에서 다른 이야기를 골라 읽어보세요.</p><a class="button button-dark" href="newsroom.html">뉴스룸으로 돌아가기</a></div>';
  document.querySelector('#related-title').closest('.news-related').hidden = true;
}
