// ✅ فعل الوضع المحفوظ مباشرة قبل تحميل باقي الصفحة
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}

// ✅ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  // ✅ زر تغيير الثيم
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  // ✅ Mobile Sidebar Menu
  const menuBtn = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // ✅ Typing Animation
  const typing = document.querySelector('.typing');
  if (typing) {
    const text = typing.getAttribute('data-text');
    let index = 0;
    function type() {
      typing.textContent = text.slice(0, index++);
      if (index <= text.length) setTimeout(type, 100);
    }
    type();
  }

  // ✅ Animated Counters
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.textContent = '0';
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.textContent;
      const increment = target / 200;
      if (count < target) {
        counter.textContent = `${Math.ceil(count + increment)}`;
        setTimeout(updateCount, 15);
      } else {
        counter.textContent = target;
      }
    };
    updateCount();
  });
});
// ✅ شغل الكود مباشرة قبل ما الصفحة تترسم
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}




