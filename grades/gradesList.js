var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = [];
var gradeB = [];
var gradeC = [];
var gradeD = [];
var gradeF = [];

lowestScore = 101;
highestScore = 0;

for (var i = 0; i < scores.length; i++) {
	var score = scores[i];
	if (score > 90) {
		gradeA.push(score);
	}
	else if (score > 80) {
		gradeB.push(score);
	}
	else if (score > 70) {
		gradeC.push(score);
	}
	else if (score > 60) {
		gradeD.push(score);
	}
	else {
		gradeF.push(score);
	}



	if (score < lowestScore) {
		lowestScore = score;
	}

	if (score > highestScore) {
		highestScore = score;
	}
}


console.log("Num of A: " + gradeA.length);
console.log("Num of B: " + gradeB.length);
console.log("Num of C: " + gradeC.length);
console.log("Num of D: " + gradeD.length);
console.log("Num of F: " + gradeF.length);

console.log("Highest Score: " + highestScore);
console.log("Lowest Score: " + lowestScore);





/* Loop over an array of student grades (values from 50-100) and outputs 
how many of each grades there are.

A score between 50-60 is an F
A score between 61-70 is a D
A score between 71-80 is a C
A score between 81-90 is a B
A score between 91-100 is an A

Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade? 







var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// var criteria = 2;

for (var i = 0; i < planets.length; i++) {
  var planet = planets[i]
  
  switch (planet) {
    case "mercury":
    case "venus":
    case "earth":
    case "mars":
      console.log("rocky planet");
      break;
    case "jupiter":
    case "saturn":
    case "uranus":
    case "neptune":
      console.log("gas planet");
      break;
  }
  */
