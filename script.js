// 搜尋欄功能
document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('searchInput').value.toLowerCase();
  const posts = document.querySelectorAll('.blog-post');
  posts.forEach(post => {
    const title = post.getAttribute('data-title').toLowerCase();
    if (title.includes(query)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});

// 手機版導覽列切換
document.querySelector('.nav-toggle').addEventListener('click', function() {
  const nav = document.querySelector('nav.main-nav ul');
  nav.classList.toggle('active');
});
