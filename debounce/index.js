const textBoxContainer = document.querySelector("#text-box");
const inputElement = document.querySelector("#custom-input-to-check-debounce-fn")

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const clearInput = (input) => {
  input.value = ""
}

function printInput() {
  const newTextHolder = document.createElement("p")
  newTextHolder.textContent = inputElement.value
  textBoxContainer.append(newTextHolder)
  clearInput(inputElement)
}

const processChange = debounce(() => printInput());
