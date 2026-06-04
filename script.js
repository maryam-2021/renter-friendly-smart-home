// The Reversible Home — small interactions

// Mobile menu toggle
document.addEventListener('click', function (e) {
  if (e.target.closest('#nav-toggle')) {
    var menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
  }
  // Close mobile menu when a link inside it is clicked
  if (e.target.closest('#mobile-menu a')) {
    var m = document.getElementById('mobile-menu');
    if (m) m.classList.add('hidden');
  }
});

// Add a subtle shadow to the navbar once the user scrolls
window.addEventListener('scroll', function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  if (window.scrollY > 10) {
    nav.classList.add('shadow-md');
  } else {
    nav.classList.remove('shadow-md');
  }
});
