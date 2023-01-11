import "normalize.css";
import "./app/styles/index.scss";

import { initApp } from "./app";

const header = document.getElementById("header") as HTMLElement;
const app = document.getElementById("app") as HTMLElement;

initApp(header, app);
