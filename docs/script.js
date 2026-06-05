// import "./content/information";

import { SITE_DATA } from "./content/information.js";

const TITLE = document.getElementById("title");
const CONTENT = document.getElementById("content");
const DOWNLOAD = document.getElementById("download");
const REPO = document.getElementById("repository");

function main() {
  try {
    TITLE.textContent = SITE_DATA.title;

    for (const line of SITE_DATA.content) {
      const p = document.createElement("p");
      p.textContent = line;
      CONTENT.appendChild(p);
    }

    REPO.href = SITE_DATA.repository;
    DOWNLOAD.href = SITE_DATA.repository + "/releases";
  } catch (err) {
    console.log(err);
  }
}
main();
