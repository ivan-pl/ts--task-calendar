import "normalize.css";
import "./app/styles/index.scss";

import { initApp } from "./app";

const header = document.getElementById("header")!;
const app = document.getElementById("app")!;

initApp(header, app);
