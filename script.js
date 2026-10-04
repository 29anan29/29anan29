(function () {
  var root = document.documentElement;
  var done = false;

  function reveal() {
    if (done) return;
    done = true;
    root.classList.remove('locked');
    root.classList.add('revealed');
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('click', reveal);
    window.removeEventListener('touchstart', reveal);
    window.removeEventListener('keydown', onKey);
  }

  function onWheel(e) {
    if (e.deltaY > 0) reveal();
  }

  function onKey(e) {
    if (['ArrowDown', 'PageDown', 'End', ' '].indexOf(e.key) > -1) reveal();
  }

  window.addEventListener('wheel', onWheel, { passive: true });
  window.addEventListener('click', reveal);
  window.addEventListener('touchstart', reveal, { passive: true });
  window.addEventListener('keydown', onKey);
})();