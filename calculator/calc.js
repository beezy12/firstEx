/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function mult(num1, num2) {
  return num1 * num2;

}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addUp(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subt(num1, num2) {
  return num1 - num2;

}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divv(num1, num2) {
  return num1 / num2;

}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function operation(one, two, doIt) {
  return doIt(one, two); 

}

// output = output + "<div>" +  ??? + "</div>";


var val1 = document.getElementById("userInput1");
var val2 = document.getElementById("userInput2");
var output = "";

var addIt = document.getElementById("add");
addIt.addEventListener("click", function(){
  var firstOperand = parseInt(document.getElementById("userInput1").value);
  var secondOperand = parseInt(document.getElementById("userInput2").value);
  var total = operation(firstOperand, secondOperand, addUp);
  document.getElementById("result").innerHTML = total;
})

var subtractIt = document.getElementById("subtract");
subtractIt.addEventListener("click", function() {
  var firstOperand = parseInt(document.getElementById("userInput1").value);
  var secondOperand = parseInt(document.getElementById("userInput2").value);
  var total = operation(firstOperand, secondOperand, subt);
  document.getElementById("result").innerHTML = total;
})

var multiplyIt = document.getElementById("multiply");
multiplyIt.addEventListener("click", function() {
  var firstOperand = parseInt(document.getElementById("userInput1").value);
  var secondOperand = parseInt(document.getElementById("userInput2").value);
  var total = operation(firstOperand, secondOperand, mult);
  document.getElementById("result").innerHTML = total; 
})

var divideIt = document.getElementById("divide");
divideIt.addEventListener("click", function() {
  var firstOperand = parseInt(document.getElementById("userInput1").value);
  var secondOperand = parseInt(document.getElementById("userInput2").value);
  var total = operation(firstOperand, secondOperand, divv);
  document.getElementById("result").innerHTML = total;
})




  
  
