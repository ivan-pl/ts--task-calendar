/* eslint no-param-reassign: ["error", { "props": false }] */

function renderAbout(root: HTMLElement): void {
  const innerHtml = `<section class="about">About page</section>`;
  root.innerHTML = innerHtml;
}

export default renderAbout;
