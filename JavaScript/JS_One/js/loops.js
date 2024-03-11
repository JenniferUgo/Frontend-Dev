//loops - they're used to execute a certain function repeatedly 
//until a certain condition has been met

//For loop
console.log("Numbers from 1 - 10")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("Countdown from 10 - 1")                
for (let i = 10; i >= 1; i--) {
    console.log(i)
}


console.log("Even numbers from 2 - 10")
for (let i = 2; i <= 10; i += 2) { 
    console.log(i);
  }


  // D0-while loop
  //Roll a virtual dice until you get a 6.

  let diceRoll;

do {
  diceRoll = Math.floor(Math.random() * 6) + 1; 
  console.log("You rolled a:", diceRoll);
} while (diceRoll !== 6);

console.log("You finally got a 6!");
