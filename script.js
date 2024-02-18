const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (output2.innerText == "" && output1.innerText !== "") {
      output2.innerText = operator.value;
    }
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (output2.innerText == "") {
      output1.innerText += number.value;
    } else {
      output3.innerText += number.value;
    }
  });
});

clear.addEventListener("click", () => {
  output1.innerText = "";
  output2.innerHTML = "";
  output3.innerHTML = "";
});

equal.addEventListener("click", () => {
  result();
});

const result = () => {
  if (output2.innerText === "+") {
    output1.innerText = +output1.innerText + +output3.innerText;
    output2.innerText = "";
    output3.innerText = "";
  } else if (output2.innerText === "-") {
    output1.innerText = +output1.innerText - +output3.innerText;
    output2.innerText = "";
    output3.innerText = "";
  } else if (output2.innerText === "*") {
    output1.innerText = +output1.innerText * +output3.innerText;
    output2.innerText = "";
    output3.innerText = "";
  } else if (output2.innerText === "/") {
    output1.innerText = +output1.innerText / +output3.innerText;
    output2.innerText = "";
    output3.innerText = "";
  }
};
