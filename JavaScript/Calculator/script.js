document.getElementById('calculateBtn').onclick = function () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = `Please enter a valid number`
    } 
    else if (num1 == '' || num2 == '') { 
        document.getElementById('result').innerHTML = `Please fill in both fields`;
    }
    else {
        const sum = parseFloat(num1) + parseFloat(num2);
        document.getElementById('result').innerHTML = `Result: ${sum}`
    }
}



  
