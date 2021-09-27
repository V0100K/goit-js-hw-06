// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const textResize = document.querySelector("#font-size-control");

const outputText = document.querySelector("#text");

textResize.addEventListener("input", (event) => {
  outputText.style.fontSize = `${event.target.value}px`;
});
