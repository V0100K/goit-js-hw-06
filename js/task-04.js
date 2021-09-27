// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue

let counterValue = 0;

const clickCount = {
  incrementButton: document.querySelector("[data-action='increment']"),
  decrementButton: document.querySelector("[data-action='decrement']"),
  value: document.getElementById("value"),
};

const increment = () => {
  counterValue += 1;
  clickCount.value.textContent = counterValue;
};
clickCount.incrementButton.addEventListener("click", increment);

const decrement = () => {
  counterValue -= 1;
  clickCount.value.textContent = counterValue;
};
clickCount.decrementButton.addEventListener("click", decrement);
