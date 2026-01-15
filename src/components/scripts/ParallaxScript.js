export default `<script>
  function initParallax() {
    if (window.innerWidth < 768) return;

    const heroImages = document.querySelectorAll('.parallax-image');
    const upImages = document.querySelectorAll('.parallax-image-up');

    function updateParallax() {
      const scrollY = window.scrollY;

      heroImages.forEach((img) => {
        const speed = parseFloat(img.dataset.speed) || 0.3;
        const yOffset = scrollY * speed;
        img.style.transform = \`translateY(-\${yOffset}px)\`;
      });

      upImages.forEach((img) => {
        const speed = parseFloat(img.dataset.speed) || 0.4;
        const startOffset = parseFloat(img.dataset.startOffset) || 100;
        const yOffset = startOffset - scrollY * speed;
        img.style.transform = \`translateY(\${yOffset}px)\`;
      });
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);
    updateParallax();
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initParallax();
      document.addEventListener('astro:after-swap', initParallax);
    });
  } else {
    setTimeout(() => {
      initParallax();
      document.addEventListener('astro:after-swap', initParallax);
    }, 200);
  }
</script>`;
