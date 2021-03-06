// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
console.log(widgetButton);
console.log(spanColor);

widgetButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  document.body.style.background = color;
});
