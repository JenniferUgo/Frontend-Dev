let count = 0; 

function incrementCount() {
    const counterDisplay = document.getElementById('counter');  
    count++; 
    counterDisplay.innerHTML = count; 
};  

document.querySelector('button').onclick = incrementCount; 
