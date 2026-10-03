// Swap the hero poster for the animated Cobot Lab capture once the page has loaded,
// so the 3 MB GIF never competes with first paint. Skipped for reduced motion and Save-Data.
(function () {
  function start() {
    var img = document.querySelector("[data-hero-anim]");
    if (!img) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    if (reduce || saveData) return;
    var anim = new Image();
    anim.decoding = "async";
    anim.onload = function () {
      img.src = anim.src;
      img.classList.add("is-playing");
    };
    anim.src = img.getAttribute("data-hero-anim");
  }
  if (document.readyState === "complete") start();
  else window.addEventListener("load", function () { setTimeout(start, 150); });
})();
