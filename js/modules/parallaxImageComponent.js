window.loadParallaxImage = function () {
  const container = document.getElementById("parallaxImageComponent");
  if (!container) return;

  container.innerHTML = `
    <section class="parallax-image"></section>
  `;
};
