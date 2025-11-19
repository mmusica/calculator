const digitsElement = document.querySelector(".digits");
const operatorElement = document.querySelector(".operators");

const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, '•', 0, '='];
const operators = ["+", "-", "*", "/"]; 

createButtons(digitsElement, digits);
createButtons(operatorElement, operators);
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
