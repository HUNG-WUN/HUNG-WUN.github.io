// 1. 手機版導覽列開關
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', function() {
    const nav = document.querySelector('nav.main-nav ul');
    if (nav) {
      nav.classList.toggle('active');
    }
  });
}

// 2. 自動檔名備援機制 (JPG <-> PNG 自動切換)
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('error', function handlingError() {
      // 避免無窮迴圈重試
      if (this.dataset.hasRetried) {
        return;
      }
      this.dataset.hasRetried = 'true';

      const currentSrc = this.src;

      if (currentSrc.endsWith('.jpg')) {
        // 原本是 .jpg 載入失敗時，自動替換為 .png
        this.src = currentSrc.replace(/\.jpg$/, '.png');
      } else if (currentSrc.endsWith('.png')) {
        // 原本是 .png 載入失敗時，自動替換為 .jpg
        this.src = currentSrc.replace(/\.png$/, '.jpg');
      }
    });
  });
});