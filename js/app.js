let btn = document.querySelectorAll("button");

let container = document.getElementById("container");
let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let box3 = document.getElementById("box-3");
let box4 = document.getElementById("box-4");
let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let display3 = document.getElementById("display3");
let display4 = document.getElementById("display4");

// 2.

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
// box-4

function cleaning4() {
  display4.value = "";
}
function cleanOne4() {
  let deleteOne = display4.value.toString().slice(0, -1);
  let type = typeof deleteOne;
  console.log("rr");

  if (type == "undefined") {
    display4.value = "";
  } else if (type == "number") {
    display4.value = deleteOne;
  } else {
    display4.value = deleteOne;
  }
}

function calculate4() {
  let massiv = display4.value.toString().split("");
  let massivIndex = massiv.length - [1];

  if (massiv == "") {
    display4.value = "";
  } else if (
    massiv[massivIndex] == "/" ||
    massiv[massivIndex] == "*" ||
    massiv[massivIndex] == "+" ||
    massiv[massivIndex] == "-" ||
    massiv[0] == 0
  ) {
    display4.value = "";
  } else {
    display4.value = eval(display4.value);
  }
}

function addDisplay4(i) {
  display4.value += i;

  if (addDisplay4 == "onclick") {
    display4.value = "";
  }
}

////////////////////////////////////////////////
