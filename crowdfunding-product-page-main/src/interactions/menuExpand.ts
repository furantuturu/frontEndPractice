const menuBar = document.querySelector('#menu_bar') as HTMLButtonElement;
const menuClose = document.querySelector('#menu_close') as HTMLButtonElement;
const mobilePanel = document.querySelector(
  '#mobile_nav_links',
) as HTMLUListElement;
const menuOpenTab = document.querySelector('.menu-open-tab') as HTMLDivElement;

function menuExpand() {
  mobilePanel.style.display = 'block';
  menuOpenTab.style.display = 'none';
  mobilePanel.setAttribute('aria-expanded', 'true');
}

function menuCollapse() {
  mobilePanel.style.display = 'none';
  menuOpenTab.style.display = 'flex';
  mobilePanel.setAttribute('aria-expanded', 'false');
}

menuBar.addEventListener('click', menuExpand);
menuClose.addEventListener('click', menuCollapse);
