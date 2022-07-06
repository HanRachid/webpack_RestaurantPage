function contact(element) {
  const blockun = document.createElement("div");
  const blockdeux = document.createElement("div");
  const blocktrois = document.createElement("div");
  blockun.className = "blok un";
  blockun.textContent = "call me on facebook";
  blockdeux.className = "blok deux";
  blockdeux.textContent = "call me on instagram";
  blocktrois.className = "blok trois";
  blocktrois.textContent = "call me on twiteur";
  element.appendChild(blockun);
  element.appendChild(blockdeux);
  element.appendChild(blocktrois);
}

function contactremove(e) {
  const contactAll = document.querySelectorAll(".blok");
  contactAll.forEach((element) => {
    e.removeChild(element);
  });
}

export { contact, contactremove };
