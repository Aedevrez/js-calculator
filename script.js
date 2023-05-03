function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}

function display_solution(var1, operation, var2) {
  const display = document.querySelector("#display");
  display.textContent = `${var1} ${operation} ${var2}`;
}

function button1_pressed() {
  if (switch_var) {
    var1 += 1;
  } else {
    var2 += 1;
  }
}

function button2_pressed() {
  if (switch_var) {
    var1 += 2;
  } else {
    var2 += 2;
  }
}

function button3_pressed() {
  if (switch_var) {
    var1 += 3;
  } else {
    var2 += 3;
  }
}

function button4_pressed() {
  if (switch_var) {
    var1 += 4;
  } else {
    var2 += 4;
  }
}

function button5_pressed() {
  if (switch_var) {
    var1 += 5;
  } else {
    var2 += 5;
  }
}

function button6_pressed() {
  if (switch_var) {
    var1 += 6;
  } else {
    var2 += 6;
  }
}

function button7_pressed() {
  if (switch_var) {
    var1 += 7;
  } else {
    var2 += 7;
  }
}

function button8_pressed() {
  if (switch_var) {
    var1 += 8;
  } else {
    var2 += 8;
  }
}

function button9_pressed() {
  if (switch_var) {
    var1 += 9;
  } else {
    var2 += 9;
  }
}

function add_pressed() {
  operation = "+";
  switch_var = !switch_var;
}

function subt_pressed() {
  operation = "-";
  switch_var = !switch_var;
}

function mult_pressed() {
  operation = "*";
  switch_var = !switch_var;
}

function divide_pressed() {
  operation = "/";
  switch_var = !switch_var;
}


let var1 = "";
let var2 = "";
let operation = "";
let switch_var = true;

console.log("There'll be a calculator here soon...");

const buttn1 = document.querySelector("#btn1");
buttn1.addEventListener("click", () => {
  button1_pressed();
  display_solution(var1, operation, var2);
})

const buttn2 = document.querySelector("#btn2");
buttn2.addEventListener("click", () => {
  button2_pressed();
  display_solution(var1, operation, var2);
})

const buttn3 = document.querySelector("#btn3");
buttn3.addEventListener("click", () => {
  button3_pressed();
  display_solution(var1, operation, var2);
})

const buttn4 = document.querySelector("#btn4");
buttn4.addEventListener("click", () => {
  button4_pressed();
  display_solution(var1, operation, var2);
})

const buttn5 = document.querySelector("#btn5");
buttn5.addEventListener("click", () => {
  button5_pressed();
  display_solution(var1, operation, var2);
})

const buttn6 = document.querySelector("#btn6");
buttn6.addEventListener("click", () => {
  button6_pressed();
  display_solution(var1, operation, var2);
})

const buttn7 = document.querySelector("#btn7");
buttn7.addEventListener("click", () => {
  button7_pressed();
  display_solution(var1, operation, var2);
})

const buttn8 = document.querySelector("#btn8");
buttn8.addEventListener("click", () => {
  button8_pressed();
  display_solution(var1, operation, var2);
})

const buttn9 = document.querySelector("#btn9");
buttn9.addEventListener("click", () => {
  button9_pressed();
  display_solution(var1, operation, var2);
})

const btn_add = document.querySelector("#btn-add");
btn_add.addEventListener("click", () => {
  add_pressed();
  display_solution(var1, operation, var2);
})

const btn_subt = document.querySelector("#btn-subt");
btn_subt.addEventListener("click", () => {
  subt_pressed();
  display_solution(var1, operation, var2);
})

const btn_mult = document.querySelector("#btn-mult");
btn_mult.addEventListener("click", () => {
  mult_pressed();
  display_solution(var1, operation, var2);
})

const btn_divide = document.querySelector("#btn-divide");
btn_divide.addEventListener("click", () => {
  divide_pressed();
  display_solution(var1, operation, var2);
})
