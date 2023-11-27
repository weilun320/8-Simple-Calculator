function add() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function divide() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest() {
  const principal = parseFloat(prompt("Enter the principal: "));
  const interestRate = parseFloat(prompt("Enter the interest rate: ")) / 100;
  const time = parseFloat(prompt("Enter the time (in years): "));
  const result = principal * (1 + interestRate * time);
  alert("Total amount: " + result.toFixed(2));
}

function compoundInterest() {
  const principal = parseFloat(prompt("Enter the principal: "));
  const interestRate = parseFloat(prompt("Enter the interest rate: ")) / 100;
  const time = parseFloat(prompt("Enter the time (in years): "));
  const result = principal + (principal * (Math.pow(1 + interestRate, time) - 1));
  alert("Total amount: " + result.toFixed(2));
}