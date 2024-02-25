function changeBgColor() {
    const body = document.body;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
}
