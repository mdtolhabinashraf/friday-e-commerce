// copy menu for mobile start
function copyMenu() {
  // copy inside .dpt-cat to departments start
  var dptCategory = document.querySelector('.dpt-cat');
  var dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;
  // copy inside .dpt-cat to departments end
  // copy inside nav to nav start
  var mainNav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;
  // copy inside nav to nav end
  // copy .header-top .wrapper to .thetop-nav start
  var topNav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;
  // copy .header-top .wrapper to .thetop-nav end
}
copyMenu();
// copy menu for mobile end

// show mobile menu start
const menuButton = document.querySelector('.trigger'),
  closeButton = document.querySelector('.t-close'),
  addclass = document.querySelector('.site');
menuButton.addEventListener('click', function () {
  addclass.classList.toggle('showmenu');
});
closeButton.addEventListener('click', function () {
  addclass.classList.remove('showmenu');
});
// show mobile menu end

// show sub menu on mobile start
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest('.has-child').classList.remove('expand') : null
  );
  if (this.closest('.has-child').classList != 'expand');
  this.closest('.has-child').classList.toggle('expand');
}
// show sub menu on mobile end

// slider install start
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});
// slider install end

// show search start
const searchButton = document.querySelector('.t-search'),
  tClose = document.querySelector('.search-close'),
  showClass = document.querySelector('.site');
searchButton.addEventListener('click', function () {
  showClass.classList.toggle('showsearch');
});
tClose.addEventListener('click', function () {
  showClass.classList.remove('showsearch');
});
// show search end
