export default function createElement<T extends keyof HTMLElementTagNameMap>(
  htmlTag: T,
  className?: string | string[] | null,
  attributes?: { [attr: string]: string } | null,
  innerHTML?: string | null,
  id?: string
): HTMLElementTagNameMap[T] {
  const el = document.createElement(htmlTag);
  if (className) {
    if (Array.isArray(className)) {
      className.forEach((name) => el.classList.add(name));
    } else {
      el.classList.add(className);
    }
  }

  if (attributes) {
    for (const [attr, val] of Object.entries(attributes)) {
      el.setAttribute(attr, val);
    }
  }

  if (innerHTML) {
    el.innerHTML = innerHTML;
  }

  if (id) {
    el.id = id;
  }

  return el;
}
