(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var targets = document.querySelectorAll(".section-head, .prose, .card, .pub, .people li, .anatomy li, .wide");
  targets.forEach(function (el) { el.classList.add("reveal"); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });

  // count-up for the headline figures
  var counters = document.querySelectorAll("[data-count]");
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      co.unobserve(e.target);
      var el = e.target, end = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec || "0", 10);
      var start = performance.now(), dur = 1100;
      (function tick(now) {
        var t = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - t, 3);
        el.textContent = (end * eased).toFixed(dec);
        if (t < 1) requestAnimationFrame(tick);
      })(start);
    });
  }, { threshold: 0.6 });
  counters.forEach(function (el) { co.observe(el); });
})();
