// 얼리버드 신청 폼 처리
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('form-message');
  form.style.display = 'none';
  msg.style.display = 'block';
}

// 스크롤 시 nav 그림자 강화
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// 카드 진입 애니메이션 (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .step, .space-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
