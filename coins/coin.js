/*
  ...........YOUR MISSION...........

  Write a program that will convert a dollar amount to the
  number of coins that make up the amount. Use the common
  American coins of quarters, dimes, nickels, and pennies.

  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/



// function coinCounter () {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {};

//   coinPurse.quarters = 0;

//   return coinPurse;
// }

// var coins = coinCounter()
// console.log();




var userMoney = prompt("Give me a dollar amount.");
var output = "";
var coinId = document.getElementById("coins");




coinCounter(userMoney);


function coinCounter (moneyArg) {
  var initMoney = moneyArg;
  
    var quarters = Math.floor(moneyArg / .25);
    moneyArg = moneyArg % .25;            
    console.log("Quarters: ", quarters);

    dimes = Math.floor(moneyArg / .1);
    moneyArg = moneyArg % .1;
    console.log("Dimes: ", dimes);

    nickels = Math.floor(moneyArg / .05);
    moneyArg = moneyArg % .05;
    console.log("Nickels: ", nickels);

    // pennies = userMoney / .01;            //probably don't have to do math for pennies, it will take whatever is left
    // userMoney = userMoney % .01;
    // console.log("Pennies: ", pennies);

    var pennies = (initMoney * 100) - ((quarters * 25)  + (dimes * 10)  + (nickels * 5))
    console.log("Pennies: ", pennies);

    // Initialize a JavaScript object to hold the coins
    var coinPurse = {
      Quarters: quarters,    //dont know what to put for values here
      Dimes: dimes,
      Nickels: nickels,
      Pennies: pennies
    };

    for (var key in coinPurse) {
      output = output + "<div>" + key + ": " + coinPurse[key] +"</div>";
    }                                              //the brackets says give me the value of this [key] in the object coinPurse
}

console.log(output);
coinId.innerHTML = output;












