import Icon from "./ustensil.png";
function menu(element) {
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.className = "imaj";
  element.appendChild(myIcon);
}
function menuremove(e) {
  const menuAll = document.querySelector(".imaj");
  e.removeChild(menuAll);
}
export { menu, menuremove };
