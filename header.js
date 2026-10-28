const utilityToggle = document.querySelector('.utility-toggle');
const utilityNav = document.querySelector('.utility-nav');
const headerShortcuts = document.querySelector('.header-shortcuts');

headerShortcuts?.querySelectorAll('a').forEach(link => {
  const mobileLink = link.cloneNode(true);
  mobileLink.classList.add('mobile-shortcut');
  utilityNav?.append(mobileLink);
});

utilityToggle?.addEventListener('click', () => {
  const isOpen = utilityToggle.getAttribute('aria-expanded') !== 'true';
  utilityToggle.setAttribute('aria-expanded', String(isOpen));
  utilityToggle.setAttribute('aria-label', isOpen ? '사이트 바로가기 메뉴 닫기' : '사이트 바로가기 메뉴 열기');
  utilityNav?.classList.toggle('is-open', isOpen);
});

document.addEventListener('click', event => {
  if (!utilityNav?.classList.contains('is-open')) return;
  if (event.target.closest('.utility-row')) return;
  utilityNav.classList.remove('is-open');
  utilityToggle?.setAttribute('aria-expanded', 'false');
  utilityToggle?.setAttribute('aria-label', '사이트 바로가기 메뉴 열기');
});
