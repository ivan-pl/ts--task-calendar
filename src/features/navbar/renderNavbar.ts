/* eslint no-param-reassign: ["error", { "props": false }] */

function renderNavbar(root: HTMLElement): void {
  const innerHTML = `
  <nav class="nav">
    <a href="/calendar" class="nav__link">Calendar</a>
    <a href="/list" class="nav__link">List</a>
    <a href="/about" class="nav__link">About</a>
  </nav>
  `;
  root.innerHTML = innerHTML;
}

export default renderNavbar;
