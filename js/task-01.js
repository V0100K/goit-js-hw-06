"use strict";

const CountCategry = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${CountCategry} `);

document.querySelectorAll(".item").forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);

  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
