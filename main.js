const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="];
const operators = ["+", "-", "*", "/"];

createCalculator();

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display-text");
let number = "";
let operator = "";

let calculation = [];

calculator.addEventListener("click", (e) => {
  displayOnCalculator(e.target);
  handleCalculation(e.target);
});

/**
 *
 * @param {Element} e
 * @returns
 */
function handleCalculation(element) {
  if (element.tagName !== "BUTTON") {
    return;
  }

  if (element.textContent !== "=" && digits.includes(element.textContent)) {
    if (number === "" && operator === "" && element.textContent === "0") {
      return;
    }
    number += element.textContent;

    if (operator !== "") {
      calculation.push(operator);
      operator = "";
    }
  } else if (operators.includes(element.textContent)) {
    if (operator === "") {
      calculation.push(number);
      if (calculation.length === 3) {
        let result = calculate(calculation);
        display.textContent = result + element.textContent;
        calculation.push(result);
      }
      operator = element.textContent;
      number = "";
    }
  }

  if (element.textContent === "=") {
    calculation.push(number);
    let result = calculate(calculation);
    display.textContent = result;

    operator = "";
    number = result;
  }
}

/**
 *
 * @param {Array} arr
 */
function calculate(arr) {
  let firstNumber = +arr.shift();
  let operator = arr.shift();
  let secondNumber = +arr.shift();

  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber == 0) {
        alert("no!");
        return 0;
      }
      return firstNumber / secondNumber;
  }
}

/**
 *
 * @param {Element} element
 * @returns
 */
function displayOnCalculator(element) {
  const tagName = element.tagName;
  const elementText = element.textContent.toLowerCase();

  if (number === "" && operator === "" && elementText === "0") {
    return;
  }

  if (tagName !== "BUTTON") {
    return;
  }

  if (elementText === "=") {
    return;
  }

  if (elementText === "clear") {
    display.textContent = "";
    number = "";
    operator = "";
    calculation = [];
  } else if (digits.includes(elementText)) {
    display.textContent += elementText;
  } else if (operators.includes(elementText)) {
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
