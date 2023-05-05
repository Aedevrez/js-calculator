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

function operate(string) {
  /*let [num1, operator, num2] = string.split(" ");
  num1 = Number(num1);
  num2 = Number(num2);
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
  }*/
  let arr = string.trim().split(" ");
  let base = Number(arr.shift());
  let extra_op = "";
  let len = arr.length;
  if (len % 2 == 1) {
    extra_op = arr.pop();
  }
  len /= 2;
  for (let i = 0; i < len; i++) {
    let operator = arr.shift();
    let num = Number(arr.shift());
    switch (operator) {
      case "+":
        base = add(base, num);
        break;
      case "-":
        base = subtract(base, num);
        break;
      case "*":
        base = multiply(base, num);
        break;
      case "/":
        if (num == 0) {
          base = "You can't divide by 0!";
          break;
        }
        base = divide(base, num).toFixed(2);
        break;
    }
  }
  if (extra_op == "") {
    return `${base}`
  } else {
    return `${base} ` + extra_op + " ";
  }

}

function display_solution(string) {
  const display = document.querySelector("#display");
  display.textContent = `${string}`;
}

//let var1 = "";
//let var2 = "";
//let operation = "";
//let switch_var = true;

let equation = "";

console.log("There'll be a calculator here soon...");

const buttn1 = document.querySelector("#btn1");
buttn1.addEventListener("click", () => {
  equation += "1";
  display_solution(equation);
})

const buttn2 = document.querySelector("#btn2");
buttn2.addEventListener("click", () => {
  equation += "2";
  display_solution(equation);
})

const buttn3 = document.querySelector("#btn3");
buttn3.addEventListener("click", () => {
  equation += "3";
  display_solution(equation);
})

const buttn4 = document.querySelector("#btn4");
buttn4.addEventListener("click", () => {
  equation += "4";
  display_solution(equation);
})

const buttn5 = document.querySelector("#btn5");
buttn5.addEventListener("click", () => {
  equation += "5";
  display_solution(equation);
})

const buttn6 = document.querySelector("#btn6");
buttn6.addEventListener("click", () => {
  equation += "6";
  display_solution(equation);
})

const buttn7 = document.querySelector("#btn7");
buttn7.addEventListener("click", () => {
  equation += "7";
  display_solution(equation);
})

const buttn8 = document.querySelector("#btn8");
buttn8.addEventListener("click", () => {
  equation += "8";
  display_solution(equation);
})

const buttn9 = document.querySelector("#btn9");
buttn9.addEventListener("click", () => {
  equation += "9";
  display_solution(equation);
})

const btn_add = document.querySelector("#btn-add");
btn_add.addEventListener("click", () => {
  equation += " + ";
  display_solution(equation);
})

const btn_subt = document.querySelector("#btn-subt");
btn_subt.addEventListener("click", () => {
  equation += " - ";
  display_solution(equation);
})

const btn_mult = document.querySelector("#btn-mult");
btn_mult.addEventListener("click", () => {
  equation += " * ";
  display_solution(equation);
})

const btn_divide = document.querySelector("#btn-divide");
btn_divide.addEventListener("click", () => {
  equation += " / ";
  display_solution(equation);
})

const buttn0 = document.querySelector("#btn0");
buttn0.addEventListener("click", () => {
  equation += 0;
  display_solution(equation);
})

const btn_eq = document.querySelector("#btn-eq");
btn_eq.addEventListener("click", () => {
  display_solution(operate(equation));
  equation = operate(equation);
  if (equation == "You can't divide by 0!") {
    equation = "";
  }
})

const btn_clr = document.querySelector("#btn-clr");
btn_clr.addEventListener("click", () => {
  equation = "";
  display_solution(equation);
})
