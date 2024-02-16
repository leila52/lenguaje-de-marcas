function sumar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseFloat(num1) + parseFloat(num2);
  
    var result = document.getElementById("resultado");
    result.value = sum;
    console.log(result.value);
  }
  function resta() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resta = parseFloat(num1) - parseFloat(num2);
  
    var result = document.getElementById("resultado");
    result.value = resta;
    console.log(result.value);
  }
  function producto() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var multi = parseFloat(num1) * parseFloat(num2);
  
    var result = document.getElementById("resultado");
    result.value = multi;
  }
  function division() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var divi = (parseFloat(num1) / parseFloat(num2)).toFixed(2);
    var result = document.getElementById("resultado");
    if (num2 != 0) {
      result.value = divi;
    } else {
      result.value = "No se puede dividir por 0";
    }
  }
  function limpiar() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
  
    num1.value = "";
    num2.value = "";
  }