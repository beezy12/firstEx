/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/
// To convert temperatures in degrees Fahrenheit to Celsius, 
// subtract 32 and multiply by .5556 (or 5/9).

function toCelsius (userTemp) {
  var F2CTemp = (userTemp - 32) * .5556;
  console.log("Fahr to Cel temp: ", F2CTemp);
  return F2CTemp;
}

// °C to °F  Multiply by 9, then divide by 5, then add 32
function toFahrenheit (userTemp) {
  var C2FTemp = userTemp * 9 / 5 + 32;
  console.log("Cel to Fahr temp: ", C2FTemp);
  return C2FTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (userInput) {
  var userInput = document.getElementById("userTemp").value;
  if (document.getElementById('r1').checked) {
    toCelsius(userInput);
    console.log(userInput);
  }
  else if (document.getElementById('r2').checked) {
    toFahrenheit(userInput);
    console.log(userInput);
  }
  // console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);






