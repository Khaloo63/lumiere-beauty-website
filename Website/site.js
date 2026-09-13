/* Lumière Beauty Atelier — small progressive enhancements */
(function () {
  "use strict";

  /* Mobile navigation ---------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  /* Scroll reveals ------------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");

  function revealAll() {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("in"); });
  }

  if (!("IntersectionObserver" in window)) {
    revealAll();
  } else {
    /* Only now is it safe to hide anything — the observer exists to undo it. */
    document.documentElement.classList.add("js-reveal");

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

    Array.prototype.forEach.call(reveals, function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 90) + "ms";
      io.observe(el);
    });

    /* Failsafe: if the observer never fires (background tab, odd browser),
       show everything rather than leave the page blank. */
    window.setTimeout(revealAll, 2500);
  }

  /* Looping video -------------------------------------------------------- */
  /* Autoplay is a motion effect, so anyone who asked their system for less
     motion gets the poster frame instead of a moving clip. */
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  var clips = document.querySelectorAll("video[autoplay]");

  function applyMotionPreference() {
    Array.prototype.forEach.call(clips, function (clip) {
      if (reduced && reduced.matches) {
        clip.pause();
        clip.removeAttribute("autoplay");
      } else {
        var attempt = clip.play();
        if (attempt && attempt.catch) { attempt.catch(function () { /* poster stands in */ }); }
      }
    });
  }

  if (clips.length) {
    applyMotionPreference();
    if (reduced && reduced.addEventListener) {
      reduced.addEventListener("change", applyMotionPreference);
    }
  }

  /* Footer year ---------------------------------------------------------- */
  var yr = document.getElementById("yr");
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
