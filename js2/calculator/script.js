let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = ""; // To store the current input
let lastChar = ""; // To track the last character entered
 
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    // Handle "AC" (Clear All)
    if (value === "AC") {
      string = "";
      lastChar = "";
      input.value = "";
      return;
    }

    // Handle "DEL" (Delete Last Character)
    if (value === "DEL") {
      string = string.slice(0, -1);
      lastChar = string.slice(-1);
      input.value = string;
      return;
    }

    // Handle "=" (Calculate Result)
    if (value === "=") {
      if (isOperator(lastChar)) {
        input.value = "Error"; // Prevent evaluation of incomplete expressions
        string = "";
      } else {
        try {
          string = eval(string).toString(); // Evaluate the string and store the result
          input.value = string;
        } catch (err) {
          input.value = "Error"; // Display error for invalid expressions
          string = "";
        }
      }
      return;
    }

    // Prevent Consecutive Operators
    if (isOperator(value) && isOperator(lastChar)) {
      input.value = "Error";
      string = "";
      return;
    }

    // Append Value to String
    string += value;
    lastChar = value;
    input.value = string;
  });
});

// Helper Function: Check if a character is an operator
function isOperator(char) {
  return ["+", "-", "*", "/", "."].includes(char);
}
