/* eslint no-param-reassign: ["error", { "props": false }] */

function renderCalendar(root: HTMLElement): void {
  const innerHtml = `<section class="calendar">Calendar page</section>`;
  root.innerHTML = innerHtml;
}

export default renderCalendar;
