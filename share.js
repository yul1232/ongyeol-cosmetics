// Set this to your Kakao Developers JavaScript key after registering the served site domain.
const KAKAO_JAVASCRIPT_KEY = '';

const shareMarkup = `<section class="social-share" aria-label="페이지 공유">
  <div class="social-share-inner">
    <div class="social-share-actions">
      <button class="share-button share-instagram" type="button" data-share="instagram" aria-label="Instagram 링크 복사" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></button>
      <button class="share-button share-x" type="button" data-share="x" aria-label="X에 공유" title="X"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.49h2.04L6.49 3.24H4.3z"/></svg></button>
      <button class="share-button share-facebook" type="button" data-share="facebook" aria-label="Facebook에 공유" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V10H7v3h2.8v8z"/></svg></button>
      <button class="share-button share-naver" type="button" data-share="naver" aria-label="네이버 블로그에 공유" title="네이버 블로그"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M5 3h4.4l5.2 8V3H19v18h-4.2L9.4 12.7V21H5z"/></svg></button>
      <button class="share-button share-kakao" type="button" data-share="kakao" aria-label="카카오톡으로 공유" title="카카오톡"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.48 3 2 6.55 2 10.93c0 2.79 1.9 5.24 4.76 6.62l-.98 3.6a.35.35 0 0 0 .53.39l4.37-2.9c.43.06.87.09 1.32.09 5.52 0 10-3.55 10-7.93S17.52 3 12 3Z"/><text x="12" y="13.3" text-anchor="middle" font-size="5.4" font-family="Arial,sans-serif" font-weight="700" fill="#381e1f">TALK</text></svg></button>
    </div>
  </div>
  <p class="share-status" aria-live="polite"></p>
</section>`;

document.querySelector('.brand-promise-copy')?.insertAdjacentHTML('afterend', shareMarkup);

let kakaoSdkPromise;
function loadKakaoSdk() {
  if (window.Kakao) return Promise.resolve(window.Kakao);
  if (!kakaoSdkPromise) kakaoSdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.8.4/kakao.min.js';
    script.integrity = 'sha384-BGX7Wb16GmRFagri4bLJV2DgipVZaU2AI812GZtHtHzzDQJnfDXN5houxv45w';
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve(window.Kakao);
    script.onerror = () => reject(new Error('카카오 SDK를 불러오지 못했습니다.'));
    document.head.append(script);
  });
  return kakaoSdkPromise;
}

document.querySelectorAll('[data-share]').forEach(button => button.addEventListener('click', async () => {
  const platform = button.dataset.share;
  const url = window.location.href;
  const title = document.title;
  const status = button.closest('.social-share').querySelector('.share-status');
  const copyLink = async message => {
    try { await navigator.clipboard.writeText(url); status.textContent = message; }
    catch { window.prompt('페이지 링크를 복사해 공유해 주세요.', url); status.textContent = '링크를 복사한 뒤 앱에서 공유해 주세요.'; }
  };
  if (platform === 'instagram') { await copyLink('페이지 링크를 복사했어요. Instagram 앱에서 붙여넣어 공유해 주세요.'); return; }
  if (platform === 'x') { window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer'); return; }
  if (platform === 'facebook') { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer'); return; }
  if (platform === 'naver') { window.open(`https://share.naver.com/web/shareView?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer'); return; }
  if (platform === 'kakao') {
    if (!KAKAO_JAVASCRIPT_KEY) { await copyLink('카카오 JavaScript 키를 설정하면 카카오톡 공유가 활성화됩니다. 우선 링크를 복사했어요.'); return; }
    try {
      const Kakao = await loadKakaoSdk();
      if (!Kakao.isInitialized()) Kakao.init(KAKAO_JAVASCRIPT_KEY);
      Kakao.Share.sendDefault({ objectType: 'text', text: `${title} 페이지를 확인해 보세요.`, link: { mobileWebUrl: url, webUrl: url } });
    } catch (error) { status.textContent = error.message || '카카오톡 공유를 시작하지 못했습니다.'; }
  }
}));
