var outputEl = document.getElementById("output-target");

/*
  You can get a reference to DOM elements and
  directly attach an event handler. In this 
  example, we get every element with a class of
  "article-section" and listen for when the
  user clicks on the element. When that event
  fires, the attached "handleSectionClick"
  function gets executed.
 */
var articleEl = document.getElementsByClassName("article-section");
console.log("articleEl",articleEl);

function handleSectionClick(event) {
  var elementText = event.target.innerHTML;
  outputEl.innerHTML = "You clicked on the " + elementText + " section";
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

/*
  Get a reference to the DOM element with an id of
  "page-header", and attach an event handler for the
  mouseover, and mouseout, events.
 */
var header = document.getElementById("page-header");

function handleHeaderMouseOver(event) {
  outputEl.innerHTML ="You moved your mouse over me";
}

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = "Why u leave me?";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);



/*
  We can also write an anonymous function (lamba expression)
  in the addEventListener declaration instead of using a 
  function reference
 */
var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function (event) {
  outputEl.innerHTML = event.target.value;
});


/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */
var guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("blue");
});

document.getElementById("make-large")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("large");
});

document.getElementById("add-border")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("bordered");
});

document.getElementById("add-rounding")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("rounded");
});



/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  // Handle the click event on any li
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
  }

  // Handle the click event on any section
  //    * Notice how when you click on a section, it executes
  //      this code, but *also* the code on line 17.
  if (event.target.className === "article-section") {
    console.log("You clicked on an `article-section` element");
  }

  // Inspect the `id` property of the event target
  if (event.target.id === "page-title") {
    console.log("You clicked on the page-title element");
  }
});