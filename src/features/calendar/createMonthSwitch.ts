import { format } from "date-fns";
import createElement from "../../common/utils/createElement";
import updateHref from "./utils/updateHref";

export default function createMonthSwitch(
  year: number,
  month: number
): HTMLElement {
  const monthSwitch = createElement("div", "month-switch");
  const prevMonthLink = createElement("a", "prev-month", {
    href: updateHref(window.location.hash, year, month - 1),
  });

  const nextMonthLink = createElement("a", "next-month", {
    href: updateHref(window.location.hash, year, month + 1),
  });

  const details = createElement(
    "h2",
    "month-details",
    null,
    format(new Date(year, month), "MMMM yyyy")
  );

  monthSwitch.append(prevMonthLink);
  monthSwitch.append(details);
  monthSwitch.append(nextMonthLink);

  return monthSwitch;
}
