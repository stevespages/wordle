import { dom } from "../../../shared/js/dom.js";
import { home_d } from "./d/home_d.js";

dom.createElVars();
dom.consoleLogEls();

home_d(dom);

dom.changeDivTo("home_d", "START");
