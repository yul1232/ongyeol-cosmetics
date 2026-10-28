const footerMarkup = `<footer class="site-footer">
  <nav class="footer-topbar" aria-label="회사 메뉴"><div class="footer-topbar-inner">
    <a href="company.html#about">회사소개</a><a href="newsroom.html">뉴스룸</a><a href="careers.html">채용안내</a><a href="partnership.html">제휴 제안</a><a href="vendors.html">상품 입점 문의</a><a href="bulk.html">대량 구매</a><a href="help.html">고객센터</a>
  </div></nav>
  <div class="container footer-main">
    <div class="footer-brand"><a class="logo" href="index.html" aria-label="온결 홈">온결<span>ONGYEOL</span></a></div>
    <section class="footer-company" aria-label="회사 정보"><h2>온결 주식회사</h2><p>대표자: 한온결 <span class="footer-divider">|</span> 사업자등록번호: 000-00-00000</p><p>주소: 서울특별시 성동구 샘플로 24, 3층</p><p>이메일: <a href="mailto:hello@ongyeol.example">hello@ongyeol.example</a></p><a class="footer-underlined" href="company.html#business-info">사업자 정보 확인 &gt;</a></section>
    <section class="footer-policies" aria-label="정책 및 안내"><p>이용약관 <span class="footer-divider">·</span> 법적고지</p><a href="#privacy"><strong>개인정보처리방침</strong></a><a href="#youth">청소년보호정책</a><a href="#marketing">이메일 수신거부</a></section>
    <section class="footer-service" aria-label="하나은행 구매안전 서비스"><h2>하나은행 구매안전 서비스</h2><p>올리브영은 현금 결제한 금액에 대해</p><p>하나은행과 채무지급보증 계약을 체결</p><p>하여 안전한 거래를 보장하고 있습니다</p><span class="footer-underlined">서비스 가입사실 확인 &gt;</span></section>
  </div>
  <div class="footer-bottom"><div class="container footer-bottom-inner"><span>개인정보 보호 안내</span><span>본 사이트의 회사·상품 정보는 화면 시안을 위한 가상 정보입니다.</span><small>© 2026 ONGYEOL. ALL RIGHTS RESERVED.</small></div></div>
</footer>`;

document.querySelectorAll('.site-footer,.auth-footer').forEach(footer => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = footerMarkup;
  footer.replaceWith(wrapper.firstElementChild);
});
