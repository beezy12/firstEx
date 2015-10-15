/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/


var output = "";   //output just creates a string
var hohohoElement = document.getElementById("reindeer");

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

for (i = 0; i < reindeer.length; i++) {    //chose reindeer.length bc it was a shorter array
  var currentReindeer = reindeer[i];
  var currentColor = colors[i];

  output = output + "<div>" + colors[i] + " " + reindeer[i] + "</div>";
  // output = output + colors[i] + " " + reindeer[i];   <--these 2 lines are the same thing as this ^^^  
  // output = output + "</div>"
}

console.log(output);
hohohoElement.innerHTML = output;

/* var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    alert(myStringArray[i]);
    //Do something     this was taken from online at stackoverflow
}  */



