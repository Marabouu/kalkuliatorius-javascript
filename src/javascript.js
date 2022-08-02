var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var plus = document.getElementById("plusButton");
var minus = document.getElementById("minusButton");
var multiply = document.getElementById("multiplyButton");
var divide = document.getElementById("divideButton");
var percentage = document.getElementById("percentageButton");

plus.addEventListener("click", function () {
  if (!input1.value || !input2.value) {
    alert("Iveskite skaicius");
  } else {
    var x = parseFloat(input1.value);
    var y = parseFloat(input2.value);
    alert("Rezultatas " + (x + y));

    document.getElementById("result").value = x + y;
  }
});

minus.addEventListener("click", function () {
  if (!input1.value || !input2.value) {
    alert("Iveskite skaicius");
  } else {
    var x = parseFloat(input1.value);
    var y = parseFloat(input2.value);
    alert("Rezultatas " + (x - y));
    document.getElementById("result").value = x - y;
  }
});

multiply.addEventListener("click", function () {
  if (!input1.value || !input2.value) {
    alert("Iveskite skaicius");
  } else {
    var x = parseFloat(input1.value);
    var y = parseFloat(input2.value);
    alert("Rezultatas " + x * y);
    document.getElementById("result").value = x * y;
  }
});

divide.addEventListener("click", function () {
  if (!input1.value || !input2.value) {
    alert("Iveskite skaicius");
  } else {
    var x = parseFloat(input1.value);
    var y = parseFloat(input2.value);
    alert("Rezultatas " + x / y);
    document.getElementById("result").value = x / y;
  }
});

percentage.addEventListener("click", function () {
  if (!input1.value || !input2.value) {
    alert("Iveskite skaicius");
  } else {
    var x = parseFloat(input1.value);
    var y = parseFloat(input2.value);
    alert("Skaicius " + y + " yra " + (y * 100) / x + " % skaiciaus " + x);
    document.getElementById("result").value = (y * 100) / x;
  }
});

function clearScreen() {
  document.getElementById("form").reset();
}
