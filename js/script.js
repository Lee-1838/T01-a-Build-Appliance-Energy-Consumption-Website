const PAGE_URLS = {
  home: 'index.html',
  televisions: 'televisions.html',
  about: 'about.html'
};

function showPage(pageId) {
  const url = PAGE_URLS[pageId];
  if (url) {
    window.location.href = url;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const currentPage = Object.keys(PAGE_URLS).find(
    key => PAGE_URLS[key] === currentFile
  );

  document.querySelectorAll('.nav-btn').forEach(btn => {
    const isActive = btn.dataset.page === currentPage;
    btn.classList.toggle('active', isActive);
  });
});