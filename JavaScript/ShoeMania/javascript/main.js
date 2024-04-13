let maleShoe1 = {
    image: '/images/MS001.jpg',
    name: 'Brogues',
    price: 1242,
    code: 'MS001'
}

let femaleShoe1 = {
    image: '/images/FS001.jpg',
    name: 'Heels',
    price: 799,
    code: 'FS001'
}

document.getElementById("itemImageMale").src = maleShoe1.image
document.getElementById("itemNameMale").innerHTML = maleShoe1.name;
document.getElementById("itemPriceMale").innerHTML = maleShoe1.price;
document.getElementById("itemCodeMale").innerHTML = maleShoe1.code;

document.getElementById("itemImageFemale").src = femaleShoe1.image
document.getElementById("itemNameFemale").innerHTML = femaleShoe1.name;
document.getElementById("itemPriceFemale").innerHTML = femaleShoe1.price;
document.getElementById("itemCodeFemale").innerHTML = femaleShoe1.code;

document.getElementById("itemSelectMale").onclick = function () {
    let url = '/select.html' + '?' + maleShoe1.code
    window.open(url, '_blank')
}

document.getElementById("itemSelectFemale").onclick = function () {
    let url = '/select.html' + '?' + femaleShoe1.code
    window.open(url, '_blank')
}

