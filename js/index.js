import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

function handleLinks() {
  const home = document.querySelector("#home");
  const universe = document.querySelector("#universe");
  const exploration = document.querySelector("#exploration");
  const body = document.querySelector("body");

  home.addEventListener("click", () => {
    home.classList.add("focus");
    universe.classList.remove("focus");
    exploration.classList.remove("focus");

    if (home.classList.contains("focus")) {
      body.classList.add("bg-home");
      body.classList.remove("bg-universe");
      body.classList.remove("bg-exploration");
    }
  });

  universe.addEventListener("click", () => {
    universe.classList.toggle("focus");
    home.classList.remove("focus");
    exploration.classList.remove("focus");

    if (universe.classList.contains("focus")) {
      body.classList.add("bg-universe");
      body.classList.remove("bg-home");
      body.classList.remove("bg-exploration");
    }
  });

  exploration.addEventListener("click", () => {
    exploration.classList.toggle("focus");
    home.classList.remove("focus");
    universe.classList.remove("focus");

    if (exploration.classList.contains("focus")) {
      body.classList.add("bg-exploration");
      body.classList.remove("bg-home");
      body.classList.remove("bg-universe");
    }
  });
}
handleLinks();
