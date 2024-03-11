
// // let redCars
// // let blueCars
// // let totalCars

// // redCars = 10
// // blueCars = 5

// // totalCars = redCars + blueCars;
// // console.log(totalCars);


// let lights = "pink";

// if (lights == "red") {
//   console.log("Light is red: stop car");
// } else if (lights == "amber") {
//   console.log("Light is amber: get ready");
// } else if (lights == "green") {
//   console.log("Light is green: get going");
// } else {
//   console.log("Light is not working");
// }



// // let addition = num1 + num2
// // let subtraction = num1 - num2
// // let multiplication = num1 * num2
// // let division = num1 / num2

// // console.log('Addition:' + addition)
// // console.log('Subtraction:' + subtraction)
// // console.log('Multiplication:' + multiplication)
// // console.log('Division' + division)

// // function sub(num1, num2, num3) {
// //     sum = num1 - num2 - num3
// //     return (sum)
// //   }
  
// //   let num1 = 20;
// //   let num2 = 10;
// //   let num3 = 5

// //   result = (num1 - num2 - num3)

// //   console.log(result)


// //   function multiply(num1, num2) {
// //     return num1 * num2;
// //   }
  
// //   //let result =  multiply(20,10,5)

// //   console.log(result)

//   function divide(num1, num2) {
//     return num1 / num2;
//   }
  
//   let result =  divide(28,4)

//   console.log(result)


//   if (grade => 80) {
//     console.log(A)
//   }

//   else if (grade => 70) {
//     console.log
//   }

// let number = 1
//   if (number > 0) {
//     console.log("This is a positive number")
//   }

//   else if (number < 0) {
//     console.log("This is a negative number")
//   }

//   else{
//     console.log("Zero")



//Events

// let message = "You have clicked me"

// document.getElementById('button').onclick = function () {
//   document.getElementById('text').innerHTML = message
// }


          //Input a value and have it displayed on click
// document.getElementById('button').onclick = function () {
//   let username = document.getElementById('input').value
//   document.getElementById('text').innerHTML = username
// }





document.getElementById('response').onclick = function () {
  let lights = document.getElementById('lightColor').value; 

  if (lights === "red") {
    document.getElementById('result').innerHTML = `Light is ${lights}: stop car`
  } else if (lights === "amber") {
    document.getElementById('result').innerHTML = `Light is ${lights}: get ready`
  } else if (lights === "green") {
    document.getElementById('result').innerHTML = `Light is ${lights}: get going`
  } else {
    document.getElementById('result').innerHTML = `Light is ${lights}: it's invalid`
  }
};

