(function () {
  // On narrow screens the tab strip scrolls sideways: keep the current tab visible.
  var current = document.querySelector('.tabs a[aria-current="page"]');
  var strip = document.querySelector(".nav nav");
  if (current && strip && strip.scrollWidth > strip.clientWidth) {
    var tab = current.getBoundingClientRect(), box = strip.getBoundingClientRect();
    strip.scrollLeft += (tab.left + tab.width / 2) - (box.left + box.width / 2);
  }

  // Every link opens in a new tab, including links added later (in-page #anchors and mailto: excepted).
  document.querySelectorAll("a[href]").forEach(function (a) {
    var h = a.getAttribute("href");
    if (!h || h.charAt(0) === "#" || /^(mailto|tel):/i.test(h) || a.hasAttribute("download")) return;
    a.target = "_blank";
    var rel = (a.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
    if (rel.indexOf("noopener") < 0) rel.push("noopener");
    a.setAttribute("rel", rel.join(" "));
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var targets = document.querySelectorAll(".section-head, .prose, .timeline > li, .pub, .outlet, .news li, .pi-card, .placeholder");
  targets.forEach(function (el) { el.classList.add("reveal"); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  targets.forEach(function (el) { io.observe(el); });
})();
