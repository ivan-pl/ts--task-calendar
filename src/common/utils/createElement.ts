export default function createElement<T extends keyof HTMLElementTagNameMap>(
  htmlTag: T,
  className?: string | null,
  attributes?: { [attr: string]: string } | null,
  innerHTML?: string
): HTMLElementTagNameMap[T] {
  const el = document.createElement(htmlTag);
  if (className) {
    el.classList.add(className);
  }
  if (attributes) {
    for (const [attr, val] of Object.entries(attributes)) {
      el.setAttribute(attr, val);
    }
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }

  return el;
}
