var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML
var el = document.getElementById("planets");

var spacedPlanets = "";
planets.forEach(function(planet) {
	spacedPlanets += "<div>" + planet + " " + "</div>"
	console.log("planet", planet)
});


el.innerHTML = spacedPlanets;
console.log("Elements", el);

/*****************************************
******************************************/
// function reverseIt(element, index, array) {
//   return element.split("").reverse().join("");
// }

// var fruits = ["apple", "banana", "cherry"];
// var backwardFruits = fruits.map(reverseIt);






function capit(planets) {
	return planets.toUpperCase();
	console.log("Capit", capit);
}

var CapPlanets = planets.map(capit);

var el = document.getElementById("planets");

el.innerHTML = CapPlanets;


// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];