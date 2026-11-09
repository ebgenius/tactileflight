(function () {
  // On narrow screens the tab strip scrolls sideways: keep the current tab visible.
  var current = document.querySelector('.tabs a[aria-current="page"]');
  var strip = document.querySelector(".nav nav");
  if (current && strip && strip.scrollWidth > strip.clientWidth) {
    var tab = current.getBoundingClientRect(), box = strip.getBoundingClientRect();
    strip.scrollLeft += (tab.left + tab.width / 2) - (box.left + box.width / 2);
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var targets = document.querySelectorAll(".section-head, .prose, .timeline > li, .panel, .pub, .outlet, .news li, .pi-card, .placeholder");
  targets.forEach(function (el) { el.classList.add("reveal"); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  targets.forEach(function (el) { io.observe(el); });
})();
