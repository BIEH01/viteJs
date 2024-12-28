import "./style.css";
import buttonStyle from "./button.module.css";
// import imageStyle from "./image.module.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import img from "./vite-logo.png";
import { user } from "./data.json";
import addition from "./addition.js";

console.log(`addition 2 + 3 = ${addition(2, 3)}`);

const modules = import.meta.glob("./modules/*.js");

console.log(modules);

for (const path in modules) {
	modules[path]().then((module) => {
		module.load();
	});
}

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <button id="btn">Click!</button>
  <img id="img">
  <pre>${JSON.stringify(user)}</pre>
`;

setupCounter(document.querySelector("#counter"));
document.getElementById("btn").className = buttonStyle.btn;

const imagen = document.getElementById("img");
imagen.src = img;
// imagen.className = imageStyle.img;
