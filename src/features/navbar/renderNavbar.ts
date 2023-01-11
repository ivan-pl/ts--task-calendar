/* eslint no-param-reassign: ["error", { "props": false }] */
import "./navbar.scss";

function renderNavbar(root: HTMLElement): void {
  const innerHTML = `
  <nav class="nav">
    <a href="/calendar" class="nav__link" id="calendar-link">Calendar</a>
    <a href="/list" class="nav__link" id="list-link">List</a>
    <a href="/about" class="nav__link" id="about-link">About</a>
  </nav>
  `;
  root.innerHTML = innerHTML;
}

export default renderNavbar;
