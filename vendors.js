(() => {
  const storageKey = 'ongyeol-vendor-inquiries';
  const form = document.getElementById('vendor-inquiry-form');
  const lookupForm = document.getElementById('vendor-lookup-form');
  const result = document.getElementById('vendor-lookup-result');
  const charCount = document.getElementById('vendor-char-count');
  if (!form || !lookupForm || !result) return;

  const readEntries = () => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); }
    catch { return []; }
  };
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const makeTicket = () => `OG-V-${Date.now().toString(36).slice(-5).toUpperCase()}${Math.random().toString(36).slice(2, 5).toUpperCase()}`;

  form.elements.message.addEventListener('input', () => { charCount.textContent = form.elements.message.value.length; });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const entry = { ...data, email: data.email.trim().toLowerCase(), ticket: makeTicket(), status: '접수 완료', createdAt: new Date().toISOString() };
    try {
      const entries = readEntries();
      entries.unshift(entry);
      localStorage.setItem(storageKey, JSON.stringify(entries));
    } catch {
      window.alert('브라우저 저장 공간에 접수 내역을 저장하지 못했습니다. 저장 공간 설정을 확인해 주세요.');
      return;
    }
    window.alert(`제안이 접수되었습니다.\n문의 번호: ${entry.ticket}\n결과 조회에 사용할 수 있도록 문의 번호를 보관해 주세요.`);
    form.reset();
    charCount.textContent = '0';
    document.getElementById('vendor-lookup-form').elements.ticket.value = entry.ticket;
    document.getElementById('vendor-lookup').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  lookupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!lookupForm.reportValidity()) return;
    const ticket = lookupForm.elements.ticket.value.trim().toUpperCase();
    const email = lookupForm.elements.email.value.trim().toLowerCase();
    const entry = readEntries().find((item) => item.ticket.toUpperCase() === ticket && item.email.toLowerCase() === email);
    if (!entry) {
      result.innerHTML = '<p class="vendor-result-empty">일치하는 접수 내역이 없습니다. 문의 번호와 이메일을 다시 확인해 주세요.</p>';
      return;
    }
    result.innerHTML = `<article class="vendor-result-card"><div><span>문의 번호</span><strong>${escapeHtml(entry.ticket)}</strong></div><div><span>접수 일시</span><strong>${escapeHtml(new Date(entry.createdAt).toLocaleString('ko-KR'))}</strong></div><div><span>진행 상태</span><strong class="vendor-status">${escapeHtml(entry.status)}</strong></div><p>${escapeHtml(entry.brand)} · ${escapeHtml(entry.proposalType)} 제안이 접수되어 검토를 기다리고 있습니다.</p></article>`;
  });
})();
