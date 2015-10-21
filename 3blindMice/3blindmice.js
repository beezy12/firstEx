var userMsg = document.getElementById("userMessage");

var msgBox = document.getElementById("messageBox");

var msgString = "";

var clearAll = document.getElementById("clear");


userMsg.addEventListener("keydown", function (keypress) {   //do I need whenEnter here?
	if (keypress.keyCode === 13) {
		clearAll.removeAttribute("disabled");
		var message = userMsg.value;
		stringMessage(message);

		function stringMessage(message) {
			//msgString += "<div id='entry'>" + message + "<button class='delete'>Delete</button></div>";
			//msgBox.innerHTML = msgString;
			var newElem = document.createElement('div');  //creates new div node
			newElem.innerHTML = message + "<button class='delete'>Delete</button>";
			newElem.setAttribute("id", "entry");  //this allows us to give the div an id
			msgBox.appendChild(newElem);    //taking the new string that was created and sticking it on the bottom of our list
		}
			
			userMsg.value = "";
	}
});

// ****use document.queryselector to select items that I create in the DOM

var allThings = document.getElementById("container");

// var messBoxBorder = document.getElementById("messageBox");  //doesn't work

	document.getElementById("dark") 
		.addEventListener("click", function() {   //do we have to have this function here
		allThings.classList.toggle("darken");
		//messBoxBorder.classList.toggle("lightBorder");  //this part doesn't work
		});

	document.getElementById("bigText")
		.addEventListener("click", function() {
		allThings.classList.toggle("giant");
		});

	// document.getElementById("messageBox") 
	// 	.addEventListener("click", function() {
	// 	messBoxBorder.classList.toggle("lightBorder");  //this part doesn't work
	// });

document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.className === "delete") {
       event.target.parentNode.remove();      //this listens in the body for a click, if so it asks where exactly (target)...well it was the delete button
       // .....so remove the parentNode of that target....which is the div that we created that holds the string
    }
});

// Clear all messages on the board

clearAll.addEventListener("click", function() {
    console.log("clearing input");
    msgBox.innerHTML = "";
    document.getElementById("clear").checked = false;
    clear.setAttribute("disabled", true);
});

