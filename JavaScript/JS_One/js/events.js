// Display the value of the input as the person is typing
//onKey
// document.getElementById('searchInput').onkeyup = function (){
//     let searchInput = document.getElementById('searchInput').value
//     document.getElementById('searchOutput').innerHTML = searchInput;
// }

// //onChange

// document.getElementById('dreamCar').onchange = function (){
//     let vehicle = document.getElementById('dreamCar').value
//     document.getElementById('vehicleOutput').innerHTML = vehicle;
// }



// document.getElementById('faveContinent').onchange = function (){
//     let continent = document.getElementById('faveContinent').value
//     document.getElementById('continentOutput').innerHTML = continent;
// }


//Prime Number
document.getElementById('checkPrime').onclick = function() {
   let digit = document.getElementById("prime").value;

   for (let i = 2; i < digit; i++) {
        if (digit % i === 0) {
            document.getElementById("result").innerHTML = `${digit} is Not a Prime Number` ;
            return;
   } 
}

    document.getElementById("result").innerHTML = `${digit} is a Prime Number`;
}
