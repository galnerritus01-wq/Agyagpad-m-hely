const menuButton = document.querySelector('.menu-toggle');
if (menuButton) {
  const menu = document.getElementById(menuButton.getAttribute('aria-controls'));
  const closeMenu = () => menuButton.setAttribute('aria-expanded', 'false');

  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  menuButton.closest('header').addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  const mobile = window.matchMedia('(max-width: 700px)');
  mobile.addEventListener('change', closeMenu);
}