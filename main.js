const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="];
const operators = ["+", "-", "*", "/"];

createCalculator();

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display-text");
let number = "";
let operator = "";

calculator.addEventListener("click", (e) => {
  displayOnCalculator(e);
  const element = e.target;
  if (element.tagName === "BUTTON" && digits.includes(element.textContent)) {
    if (number === "" && element.textContent === "0") {
      return;
    }
    number += element.textContent;
    console.log(number);
  } else if (
    element.tagName === "BUTTON" &&
    operators.includes(element.textContent)
  ) {
    if (operator === "") {
      operator = element.textContent;
    }
    console.log(operator);
  }
});

function displayOnCalculator(e) {
  const element = e.target;
  const tagName = element.tagName;
  const elementText = element.textContent.toLowerCase();
  if (tagName === "BUTTON" && elementText === "clear") {
    display.textContent = "";
    number = "";
    operator = "";
  } else if (tagName === "BUTTON" && digits.includes(elementText)) {
    display.textContent += elementText;
  } else if (tagName === "BUTTON" && operators.includes(elementText)) {
    if (operator === "") {
      display.textContent += elementText;
    }
  }
}

function createCalculator() {
  const digitsElement = document.querySelector(".digits");
  const operatorElement = document.querySelector(".operators");
  createButtons(digitsElement, digits);
  createButtons(operatorElement, operators);
}

/**
 *
 * @param {Element} parentElement
 * @param {Array} arr
 */
function createButtons(parentElement, arr) {
  for (const element of arr) {
    const button = document.createElement("button");
    button.textContent = element;
    parentElement.appendChild(button);
    if (element === ".") {
      button.style.fontWeight = "900";
    }
  }
}
