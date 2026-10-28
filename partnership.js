(() => {
  const form = document.getElementById('partnership-form');
  if (!form) return;
  const result = document.getElementById('partnership-result');
  const noticeCheck = document.getElementById('partnership-notice-check');
  const content = document.getElementById('partnership-content');
  const count = document.getElementById('partnership-count');
  const allowedExtensions = new Set(['pdf', 'doc', 'docx', 'ppt', 'pptx', 'zip']);
  const storageKey = 'ongyeol-partnership-submissions';

  content.addEventListener('input', () => { count.textContent = content.value.length; });
  form.querySelectorAll('input[type="file"]').forEach((input) => {
    input.addEventListener('change', () => {
      const file = input.files?.[0];
      const output = form.querySelector(`[data-file-name="${input.name}"]`);
      if (!file) { output.textContent = '선택된 파일이 없습니다.'; return; }
      const ext = file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.has(ext) || file.size > 50 * 1024 * 1024) {
        window.alert('PDF, DOC, DOCX, PPT, PPTX, ZIP 파일만 첨부할 수 있으며, 파일 크기는 50MB 이하여야 합니다.');
        input.value = '';
        output.textContent = '선택된 파일이 없습니다.';
        return;
      }
      output.textContent = `${file.name} · ${(file.size / (1024 * 1024)).toFixed(2)}MB`;
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.textContent = '';
    if (!noticeCheck.checked) {
      noticeCheck.focus();
      result.textContent = '제출 전 유의사항 확인에 동의해 주세요.';
      return;
    }
    if (!form.reportValidity()) return;
    const fields = [...form.querySelectorAll('input[name="fields"]:checked')].map((item) => item.value);
    if (!fields.length) {
      form.querySelector('input[name="fields"]').focus();
      result.textContent = '제휴 희망 분야를 하나 이상 선택해 주세요.';
      return;
    }
    const values = Object.fromEntries(new FormData(form).entries());
    const ticket = `OG-P-${Date.now().toString(36).slice(-5).toUpperCase()}${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
    const record = {
      ticket,
      fields,
      title: values.title,
      organizationType: values.organizationType,
      organization: values.organization,
      contact: values.contact,
      phone: values.phone,
      email: values.email,
      website: values.website,
      content: values.content,
      files: [...form.querySelectorAll('input[type="file"]')].filter((input) => input.files?.[0]).map((input) => input.files[0].name),
      savedAt: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
      localStorage.setItem(storageKey, JSON.stringify([record, ...existing]));
    } catch {
      result.textContent = '브라우저에 접수 내역을 저장하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.';
      return;
    }
    result.innerHTML = `<strong>작성 내용이 이 브라우저에 저장되었습니다.</strong><span>확인 번호: <b>${ticket}</b></span><small>시안에서는 제안 내용과 첨부 파일이 온결 담당자에게 실제 전송되지 않습니다.</small>`;
    form.reset();
    noticeCheck.checked = false;
    count.textContent = '0';
    form.querySelectorAll('.partnership-file-name').forEach((node) => { node.textContent = '선택된 파일이 없습니다.'; });
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
