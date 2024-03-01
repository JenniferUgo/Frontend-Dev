let color = 0;
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "black", "pink", "brown"];

document.getElementById('changeColorBtn').onclick = function() {
    document.body.style.backgroundColor = colors[color];
    color = (color + 1) % colors.length; 
}



 