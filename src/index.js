import { menu, menuremove } from "./menu";

import { init, initremove } from "./init";
import { contact, contactremove } from "./contact";
let isMenu = false;
let isContact = false;
let isHome = true;

//query selectors

const content = document.querySelector("#content");
const home = document.querySelector(".Home");
const menuu = document.querySelector(".Menu");
const contacte = document.querySelector(".Contact");
const leftrect = document.querySelector(".leftrectangle");
const rightrect = document.querySelector(".rightclass");

init(leftrect);
menuu.addEventListener("click", () => {
  if (!isMenu) {
    if (isHome) {
      menu(rightrect);
      initremove(leftrect);

      isMenu = true;
      isHome = false;
    }
    if (isContact) {
      menu(rightrect);

      contactremove(rightrect);
      isMenu = true;
      isContact = false;
    }
  }
});

home.addEventListener("click", () => {
  if (!isHome) {
    if (isMenu) {
      init(leftrect);
      menuremove(rightrect);

      isHome = true;
      isMenu = false;
    }
    if (isContact) {
      init(leftrect);

      contactremove(rightrect);
      isHome = true;
      isContact = false;
    }
  }
});

contacte.addEventListener("click", () => {
  if (!isContact) {
    if (isMenu) {
      contact(rightrect);
      menuremove(rightrect);

      isContact = true;
      isMenu = false;
    }
    if (isHome) {
      contact(rightrect);

      initremove(leftrect);
      isContact = true;
      isHome = false;
    }
  }
});
