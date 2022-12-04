/* eslint no-param-reassign: ["error", { "props": false }] */

function renderList(root: HTMLElement): void {
  const innerHtml = `<section class="list">List page</section>`;
  root.innerHTML = innerHtml;
}

export default renderList;
