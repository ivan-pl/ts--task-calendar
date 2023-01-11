/* eslint-disable no-param-reassign */

export default function updateHref(
  href: string,
  year: number,
  month: number
): string {
  const [path, paramString] = href.split("?");
  const params = new URLSearchParams(paramString);
  if (month === 12) {
    year += 1;
    month = 0;
  }
  if (month === -1) {
    year -= 1;
    month = 11;
  }

  params.set("year", year.toString());
  params.set("month", month.toString());
  return `${path}?${params.toString()}`;
}
