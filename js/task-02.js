const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItenInLi = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("iltem");
  return li;
});
document.querySelector("#ingredients").append(...ingredientsItenInLi);
console.log(ingredients);
